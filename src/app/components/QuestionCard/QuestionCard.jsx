'use client'
import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";


export default function QuestionCard({ id, title, answer1, answer2, nextQuestion, prevQuestion, selectedAnswer, setSelectedAnswer,
index, totalQuestions, handleAnswerSelection }) {

    const handleRadioChange = (e) => {
        setSelectedAnswer(e.target.value);
        handleAnswerSelection(e.target.value, index);
    };

    return(
        <div className="w-[500px] px-2 flex flex-col items-center justify-around bg-orange-300 h-[400px] self-center rounded-xl
        midtwo2:w-[400px] midfour:w-[350px] lowone:w-[300px]">
            <h1 className="text-center text-blue-400 font-semibold text-xl">{title}</h1>
            <label><h2>{answer1}</h2>
            <input className=" w-[20px] h-[20px]" 
                    type="radio" 
                    value="answer1" 
                    checked={selectedAnswer === "answer1"} 
                    onChange={handleRadioChange} 
                    id={`question-${id}-answer1`}
                />
            </label>
            <label>
                <h2>{answer2}</h2>
                <input 
                className="w-[20px] h-[20px]" 
                    type="radio" 
                    value="answer2" 
                    checked={selectedAnswer === "answer2"} 
                    onChange={handleRadioChange} 
                    id={`question-${id}-answer2`}
                />
            </label>
            <div className="flex gap-5">
            <button onClick={prevQuestion} className="rounded-full py-2 px-2 bg-green-300"><GrFormPrevious /></button>
            <button onClick={nextQuestion} className="rounded-full py-2 px-2 bg-green-300"><MdNavigateNext /></button>
            </div>
            <p>
        {index + 1} de {totalQuestions}
      </p>
        </div>
    )
}