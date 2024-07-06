'use client';
import { questions1 } from "../components/test/questions.js";
import "./test.css";
import QuestionCard from "../components/QuestionCard/QuestionCard"
import Header from "../components/Header/header.jsx";
import PersonalitiesHome from "../components/PersonalitiesHome/PersonalitiesHome";
import useStore from "../Store/MbtiStore";
import { useRouter } from "next/navigation.js";
import { Answer } from "../interfaces/index.js";
import { useState } from "react";

export default function TestPage() {
  const {
    currentQuestionIndex,
    selectedAnswers,
    updateCurrentQuestionIndex,
    updateSelectedAnswers,
    updateFunctionScores,
    finalizeTest,
    mbtiTypeLink,
    mbtiType
  } = useStore();
  const [isGeneratedResult, setIsGeneratedResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
 
   const handleAnswerSelection = (index: number, answer: Answer) => {
    updateSelectedAnswers(index, answer);
    updateFunctionScores(answer);
  };

  const handleNextQuestion = () => {
    if (!selectedAnswers[currentQuestionIndex]) {
      alert("Responda antes de avançar!");
      return;
    }
      nextQuestion();
    };

   function nextQuestion() {
    if (currentQuestionIndex < questions1.length - 1) {
      updateCurrentQuestionIndex(currentQuestionIndex + 1);
    }
   }


  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      updateCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleCompleteTest = () => {
    finalizeTest(router, mbtiTypeLink);
    };

  const handleGenerateResult = () => {
    finalizeTest(router, mbtiTypeLink);
    setIsGeneratedResult(true)
    setIsLoading(true)
    setTimeout(() => {
        setIsLoading(false)
    }, 3000)
  }

  const totalQuestions = questions1.length;
  
  return (
    <div className="flex flex-col gap-3 pb-3">
      <Header/>
    <div id="div-test" className="div-test flex flex-col rounded-lg px-2 py-2 bg-slate-300">
      <h1 id="h1-test-title" className="text-3xl text-green-600">Analise a si mesmo e responda o mais claramente que puder</h1>
      <div className="div-test mt-2 flex flex-col">
        {currentQuestionIndex < questions1.length && (
                    <QuestionCard
                    id={questions1[currentQuestionIndex].id}
                    question={questions1[currentQuestionIndex]}
                    selectedAnswer={selectedAnswers[currentQuestionIndex]}
                    setSelectedAnswer={(answer: Answer) => updateSelectedAnswers(currentQuestionIndex, answer)}
                    handleAnswerSelection={handleAnswerSelection}
                    prevQuestion={handlePreviousQuestion}
                    handleNextQuestion={handleNextQuestion}
                    totalQuestions={totalQuestions}
                    currentQuestion={currentQuestionIndex}
                    nextQuestion={nextQuestion}
                  />
                )}
            </div>
            {currentQuestionIndex === totalQuestions - 1 && (
   !isGeneratedResult ? (
    <button
    className="py-2 px-2 rounded-xl bg-green-500 text-white hover:bg-slate-500 hover:text-blue-900 transition-all duration-500
    font-bold self-center mt-3"
   onClick={handleGenerateResult}>
    Gerar resultado
  </button>
   ) : isLoading ? (
    <div className="lds-ring self-center mt-3"><div></div><div></div><div></div><div></div></div>
   ) : (
  <button
    className="py-2 px-2 rounded-xl bg-green-500 text-white hover:bg-slate-500 hover:text-blue-900 transition-all duration-500
    font-bold self-center mt-3"
   onClick={handleCompleteTest}>
    Descubra seu tipo
  </button>
   )
  )}
      </div>
      <PersonalitiesHome/>
      </div>
  );
}