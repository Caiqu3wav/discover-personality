'use client';
import { questions1 } from "../components/test/questions.js";
import { questions2 } from "../components/test/questions.js";
import "./test.css";
import QuestionCard from "../components/QuestionCard/QuestionCard.jsx"
import { useState } from "react";
import Link from "next/link";

export default function TestPage() {
  const [mbtiType, setMbtiType] = useState("");
  const [rangePoints, setRangePoints] = useState(Array(questions2.length).fill(50));
  const [selectedRange, setSelectedRange] = useState(50);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions1.length).fill(""));
  let [functionScores, setFunctionsScore] = useState({
    Fe: 0,
    Te: 0,
    Ne: 0,
    Se: 0,
    Fi: 0,
    Ti: 0,
    Si: 0,
    Ni: 0,
  });
  const [functionsData] = useState([
    { name: "Fe", label: "Extraverted Feeling" },
    { name: "Te", label: "Extraverted Thinking" },
    { name: "Ne", label: "Extraverted Intuition" },
    { name: "Se", label: "Extraverted Sensing" },
    { name: "Fi", label: "Introverted Feeling" },
    { name: "Ti", label: "Introverted Thinking" },
    { name: "Si", label: "Introverted Sensing" },
    { name: "Ni", label: "Introverted Intuition" }
  ]);

  const handleAnswerSelection = (selectedAnswer, index) => {
    updateScores(functionScores, selectedAnswer, index)
  }

   const updateScores = (functionScores, selectedAnswer, index) => {
    const updateScore = (prevScores, selectedFunction, otherFunction) => {
      const scoreChange = selectedAnswer === "answer1" ? 1 : -1;
      const selectedScore = prevScores[selectedFunction] + scoreChange;
      const otherScore = prevScores[otherFunction] - scoreChange;
      
      return {
        ...prevScores,
        [selectedFunction]: selectedScore >= 0 ? selectedScore : 0,
        [otherFunction]: otherScore >= 0 ? otherScore : 0,
      };
    };
    
    setFunctionsScore((prevScores) => {
      if (index < 6) {
        return updateScore({ ...prevScores }, "Ni", "Ne");
      } else if (index < 12) {
        return updateScore({ ...prevScores }, "Fi", "Fe");
      } else if (index < 18) {
        return updateScore({ ...prevScores }, "Ti", "Te");
      } else if (index < 24) {
        return updateScore({ ...prevScores }, "Si", "Se");
      }
  });
};

 const updateRangeScores = (selectedRange, index) => {
  const getScoreChange = (newValue, oldValue) => {
    if (newValue > oldValue) {
      return newValue > 83 ? 1 : newValue > 67 ? 0.7 : newValue > 51 ? 0.5 : 0;
    } else {
      return oldValue > 83 ? -1 : oldValue > 67 ? -0.7 : oldValue > 51 ? -0.5 : 0;
    }
  };

  const updateFunctionScore = (functionName, oldValue) => {
    setFunctionsScore((prevScores) => ({
      ...prevScores,
      [functionName]: prevScores[functionName] + getScoreChange(selectedRange, oldValue),
    }));
  };

  switch (true) {
    case index < 3:
      updateFunctionScore("Ne", rangePoints[index]);
      break;
    case index < 6:
      updateFunctionScore("Ni", rangePoints[index]);
      break;
    case index < 9:
      updateFunctionScore("Se", rangePoints[index]);
      break;
    case index < 12:
      updateFunctionScore("Si", rangePoints[index]);
      break;
    case index < 15:
      updateFunctionScore("Te", rangePoints[index]);
      break;
    case index < 18:
      updateFunctionScore("Ti", rangePoints[index]);
      break;
    case index < 21:
      updateFunctionScore("Fe", rangePoints[index]);
      break;
    case index < 24:
      updateFunctionScore("Fi", rangePoints[index]);
      break;
    default:
      break;
  }

  setRangePoints((prevPoints) => {
    const newPoints = [...prevPoints];
    newPoints[index] = selectedRange;
    return newPoints;
  });
  };

   const determineMbtiType = () => {
    let currentType = "";

    if (functionScores.Te > functionScores.Fe && functionScores.Te > functionScores.Ne && functionScores.Te > functionScores.Se) {
      if (functionScores.Si > functionScores.Te && functionScores.Si > functionScores.Ni) {
        currentType = "ISTJ";
    } else if (functionScores.Ni > functionScores.Te && functionScores.Ni > functionScores.Si) {
      currentType = "INTJ";
    } else if (functionScores.Si > functionScores.Ni) {
      currentType = "ESTJ";
    } else if (functionScores.Ni > functionScores.Si) {
      currentType = "ENTJ";
      }
    } else if (functionScores.Fe > functionScores.Te && functionScores.Fe > functionScores.Se && functionScores.Fe > functionScores.Ne) {
      if (functionScores.Si > functionScores.Fe && functionScores.Si > functionScores.Ni) {
        currentType = "ISFJ";
      } else if (functionScores.Ni > functionScores.Fe && functionScores.Ni > functionScores.Si) {
        currentType = "INFJ";
      } else if (functionScores.Si > functionScores.Ni) {
        currentType = "ESFJ";
      } else if (functionScores.Ni > functionScores.Si) {
        currentType = "ENFJ";
      }
    } else if (functionScores.Ne > functionScores.Te && functionScores.Ne > functionScores.Se && functionScores.Ne > functionScores.Fe) {
      if (functionScores.Ti > functionScores.Ne && functionScores.Ti > functionScores.Fi) {
        currentType = "INTP";
      } else if (functionScores.Fi > functionScores.Ne && functionScores.Fi > functionScores.Ti) {
        currentType = "INFP";
      } else if (functionScores.Ti > functionScores.Fi) {
        currentType = "ENTP";
      } else if (functionScores.Fi > functionScores.Ti) {
        currentType = "ENFP";
      }
    } else if (functionScores.Se > functionScores.Te && functionScores.Se > functionScores.Fe && functionScores.Se > functionScores.Ne) {
      if (functionScores.Ti > functionScores.Se && functionScores.Ti > functionScores.Fi) {
        currentType = "ISTP";
      } else if (functionScores.Fi > functionScores.Se && functionScores.Fi > functionScores.Ti) {
        currentType = "ISFP";
      } else if (functionScores.Fi > functionScores.Ti) {
        currentType = "ESFP";
      } else if (functionScores.Ti > functionScores.Fi) {
        currentType = "ESTP";
      }
    }
    setMbtiType(currentType);
  };

  const handleCompleteTest = () => {
    determineMbtiType();
    const divTest = document.getElementById("div-test");

    if (divTest) {
      divTest.style.display = "none";
    }
  
    const divHidden = document.getElementById("result-div");
  if (divHidden) {
    divHidden.style.display = "flex";}
  };

  const handleNextQuestion = () => {
  
    const currentSelectedAnswer = selectedAnswers[currentQuestionIndex];
    if (currentSelectedAnswer !== "") {
      if (currentQuestionIndex === totalQuestions - 1) {
        return null;
      } else {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }
    } else {
      alert("Responda antes de avançar!");
    }
    };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex == 0) {
      return null;
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const totalQuestions = questions1.length
  
  return (
    <div>
    <div id="div-test" className="div-test flex flex-col rounded-lg px-2 py-2 bg-slate-300">
      <h1 id="h1-test-title" className="text-3xl text-green-600">Analise a si mesmo e responda o mais claramente que puder</h1>
            <h2 className=" font-semibold">(Teste em progressão e melhorias)</h2>   
      <div className="div-test flex flex-col">
        <h2>Perguntas Tipo 1</h2>
        {currentQuestionIndex < questions1.length && (
                    <QuestionCard
                    id={questions1[currentQuestionIndex].id}
                    title={questions1[currentQuestionIndex].questionTitle}
                    answer1={questions1[currentQuestionIndex].answer1}
                    answer2={questions1[currentQuestionIndex].answer2}
                    selectedAnswer={selectedAnswers[currentQuestionIndex]}
                    setSelectedAnswer={(answer: any) =>
                      setSelectedAnswers((prevAnswers) =>
                        prevAnswers.map((prevAnswer, index) =>
                          index === currentQuestionIndex ? answer : prevAnswer
                        )
                      )
                    }
                    handleAnswerSelection={handleAnswerSelection}
                    prevQuestion={handlePreviousQuestion}
                    nextQuestion={handleNextQuestion}
                    index={currentQuestionIndex}
          totalQuestions={totalQuestions}
                  />
                )}
      </div>
  <button
    className="py-2 px-2 rounded-xl bg-slate-500 self-center mt-3"
   onClick={() => {
    handleCompleteTest();
  }}>
    Descubra seu tipo
  </button>

      </div>
  <div id="result-div" className="hidden w-full flex-col items-center justify-center">
  <h1 className="text-2xl">Seu tipo mais provável é:</h1>
      <div className="flex flex-col w-[70%] rounded-xl bg-slate-500 items-center justify-center">
        <h1>{mbtiType}</h1>
      </div>
      </div>
      </div>
  );
}