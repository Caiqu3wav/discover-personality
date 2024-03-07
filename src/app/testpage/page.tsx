'use client';
import { questions1 } from "../components/test/questions.js";
import { questions2 } from "../components/test/questions.js";
import "./test.css";
import { useState } from "react";
import Link from "next/link";

export default function TestPage() {
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
    if (index < 4) {
      setFunctionsScore((prevScores) => updateScore({ ...prevScores }, "Ni", "Ne")
      );
    } else if (index < 8) {
      setFunctionsScore((prevScores) => updateScore(prevScores, "Fi", "Fe"));
    } else if (index < 12) {
      setFunctionsScore((prevScores) => updateScore(prevScores, "Ti", "Te"));
    } else if (index < 16) {
      setFunctionsScore((prevScores) => updateScore(prevScores, "Si", "Se"));
    }
  };

   const determineMbtiType = () => {
    let [mbtiType, setMbtiType] = useState("");

    if (functionScores.Te > functionScores.Fe && functionScores.Te > functionScores.Ne && functionScores.Te > functionScores.Se) {
      if (functionScores.Si > functionScores.Te && functionScores.Si > functionScores.Ni) {
        setMbtiType("ISTJ");
    } else if (functionScores.Ni > functionScores.Te && functionScores.Ni > functionScores.Si) {
      setMbtiType("INTJ");
    } else if (functionScores.Si > functionScores.Ni) {
      setMbtiType("ESTJ");
    } else if (functionScores.Ni > functionScores.Si) {
      setMbtiType("ENTJ");
      }
    } else if (functionScores.Fe > functionScores.Te && functionScores.Fe > functionScores.Se && functionScores.Fe > functionScores.Ne) {
      if (functionScores.Si > functionScores.Fe && functionScores.Si > functionScores.Ni) {
        setMbtiType("ISFJ");
      } else if (functionScores.Ni > functionScores.Fe && functionScores.Ni > functionScores.Si) {
        setMbtiType("INFJ");
      } else if (functionScores.Si > functionScores.Ni) {
        setMbtiType("ESFJ");
      } else if (functionScores.Ni > functionScores.Si) {
        setMbtiType("ENFJ");
      }
    } else if (functionScores.Ne > functionScores.Te && functionScores.Ne > functionScores.Se && functionScores.Ne > functionScores.Fe) {
      if (functionScores.Ti > functionScores.Ne && functionScores.Ti > functionScores.Fi) {
        setMbtiType("INTP");
      } else if (functionScores.Fi > functionScores.Ne && functionScores.Fi > functionScores.Ti) {
        setMbtiType("INFP");
      } else if (functionScores.Ti > functionScores.Fi) {
        setMbtiType("ENTP");
      } else if (functionScores.Fi > functionScores.Ti) {
        setMbtiType("ENFP");
      }
    } else if (functionScores.Se > functionScores.Te && functionScores.Se > functionScores.Fe && functionScores.Se > functionScores.Ne) {
      if (functionScores.Ti > functionScores.Se && functionScores.Ti > functionScores.Fi) {
        setMbtiType("ISTP");
      } else if (functionScores.Fi > functionScores.Se && functionScores.Fi > functionScores.Ti) {
        setMbtiType("ISFP");
      } else if (functionScores.Fi > functionScores.Ti) {
        setMbtiType("ESFP");
      } else if (functionScores.Ti > functionScores.Fi) {
        setMbtiType("ESTP");
      }
    }
      return mbtiType;
  };
  
  return (
    <div className="div-test">
      <h1 id="h1-test-title">Analise a si mesmo e responda o mais claramente que puder</h1>
      <div className="div-test">
        <h2>Perguntas Tipo 1</h2>
        {questions1.map((question, index) => (
          <div key={index}>
            <p>{question.question1}</p>
            <label className="lbl-test">
              <input
                type="radio"
                name={`${question.question1}-answer`}
                value="answer1"
                onChange={() => handleAnswerSelection("answer1",
                index)}
              />
              {question.answer1}
            </label>
            <label>
              <input
                type="radio"
                name={`${question.question1}-answer`}
                value="answer2"
                onChange={() => handleAnswerSelection("answer2", index)}
              />
              {question.answer2}
            </label>
          </div>
        ))}
      </div>

      <div className="div-test flex items-center justify-center gap-5 pb-4">
      <Link href="/resultpage">
  <button
    className="py-2 px-2 rounded-xl bg-slate-500"
  >
    Descubra seu tipo
  </button>
</Link>
      </div>
      <div className="flex flex-col">{functionsData.map((func) => (
    <div key={func.name}>
      <p>{func.label}: {functionScores[func.name]}</p>
    </div>
  ))}</div>
      <div className="hidden">
        <h1>Seu tipo mais provável é:</h1>
        <h2>tipo</h2>
      </div>
    </div>
  );
}