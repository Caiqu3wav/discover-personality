'use client';
import { questions1 } from "../components/test/questions.js";
import { questions2 } from "../components/test/questions.js";
import "./test.css";
import QuestionCard from "../components/QuestionCard/QuestionCard.jsx"
import { useState } from "react";
import Header from "../components/Header/header.jsx";
import Link from "next/link";
import PersonalitiesHome from "../components/PersonalitiesHome/PersonalitiesHome";
import { determineMbtiType } from "../utils/index";
import useStore from "../Store/MbtiStore.js";
import { useRouter } from "next/navigation.js";

export default function TestPage() {
  const {
    currentQuestionIndex,
    selectedAnswers,
    updateCurrentQuestionIndex,
    updateSelectedAnswers,
    finalizeTest,
    mbtiTypeLink
  } = useStore();
  const router = useRouter();
 
  const handleAnswerSelection = (selectedAnswer, index) => {
    updateSelectedAnswers(index, selectedAnswer);
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions1.length - 1) {
      updateCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    };

    const handleNext = () => {
      if (selectedAnswers[currentQuestionIndex] === "") {
        alert("Responda antes de avançar!");
        return;
      }
    
      if (currentQuestionIndex < questions1.length - 1) {
        updateCurrentQuestionIndex(currentQuestionIndex + 1);
      }
      };


  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      updateCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleCompleteTest = () => {
    finalizeTest(router);
  };

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
                    title={questions1[currentQuestionIndex].questionTitle}
                    answer1={questions1[currentQuestionIndex].answer1}
                    answer2={questions1[currentQuestionIndex].answer2}
                    selectedAnswer={selectedAnswers[currentQuestionIndex]}
                    setSelectedAnswer={(answer: any) => updateSelectedAnswers(currentQuestionIndex, answer)}
                    handleAnswerSelection={handleAnswerSelection}
                    prevQuestion={handlePreviousQuestion}
                    nextQuestion={handleNextQuestion}
                    index={currentQuestionIndex}
          totalQuestions={totalQuestions}
          handleNext={handleNext}
                  />
                )}
      </div>
  <button
    className="py-2 px-2 rounded-xl bg-green-500 text-white hover:bg-slate-500 hover:text-blue-900 transition-all duration-500
    font-bold self-center mt-3"
   onClick={handleCompleteTest}>
    Descubra seu tipo
  </button>

      </div>
      <PersonalitiesHome/>
      </div>
  );
}