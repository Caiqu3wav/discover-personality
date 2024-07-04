'use client'
import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";


export default function QuestionCard({ id, title, answer1, answer2, nextQuestion, prevQuestion, selectedAnswer, setSelectedAnswer,
index, totalQuestions, handleAnswerSelection, handleNext }) {

    const handleAnswerClick = (value) => {
        setSelectedAnswer(value);
        handleAnswerSelection(value, index);
        nextQuestion();
    };


    return(
        <div className="w-[500px] px-2 flex flex-col items-center justify-around bg-orange-300 h-[400px] self-center rounded-xl
        midtwo2:w-[400px] midfour:w-[350px] lowone:w-[300px]">
            <h1 className="text-center text-blue-500 font-semibold text-xl">{title}</h1>
            <input
                className={`button cursor-pointer w-[70%] rounded-md transition-all duration-700 hover:text-white text-center font-semibold py-2 hover:bg-blue-500 flex flex-wrap text-wrap ${selectedAnswer === 'answer1' ? 'bg-blue-500 text-white' : 'bg-green-500 text-black'}`}
                type="button" 
                value={answer1} 
                onClick={() => handleAnswerClick('answer1')}
            />
                <input
                className={`button cursor-pointer w-[70%] rounded-md transition-all duration-700 hover:text-white  text-center font-semibold py-2 hover:bg-blue-500 flex flex-wrap text-wrap ${selectedAnswer === 'answer2' ? 'bg-blue-500 text-white' : 'bg-green-500 text-black'}`}
                type="button" 
                value={answer2} 
                onClick={() => handleAnswerClick('answer2')}
            />
            <div className="flex gap-5">
            <button onClick={prevQuestion} className="rounded-full py-2 px-2 bg-green-300"><GrFormPrevious /></button>
            <button onClick={() => handleNext()} className="rounded-full py-2 px-2 bg-green-300"><MdNavigateNext /></button>
            </div>
            <p>
        {index + 1} de {totalQuestions}
      </p>
        </div>
    )
}