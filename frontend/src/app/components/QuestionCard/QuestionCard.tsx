'use client'
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { Answer, Question } from "../../interfaces";

interface QuestionCardProps {
    id: number,
    question: Question,
    totalQuestions: number,
    handleNextQuestion: () => void,
    prevQuestion: () => void,
    handleAnswerSelection: (index: number, answer: Answer) => void,
    selectedAnswer: Answer | null,
    currentQuestion: number,
    setSelectedAnswer: (answer: Answer | null) => void,
    nextQuestion: () => void,
}


export default function QuestionCard({ id, question, handleNextQuestion, prevQuestion,
     totalQuestions, handleAnswerSelection, selectedAnswer, currentQuestion,
     nextQuestion, setSelectedAnswer }: QuestionCardProps) {

        const handleAnswerClick = (id, answer: Answer) => {
            setSelectedAnswer(answer);
            handleAnswerSelection(id, answer);
            nextQuestion();
        };

    return(
        <div className="w-[500px] px-2 flex flex-col items-center justify-around bg-orange-300 h-[400px] self-center rounded-xl
        midtwo2:w-[400px] midfour:w-[350px] lowone:w-[300px]">
            <h1 className="text-center text-blue-500 font-semibold text-xl">{question.questionTitle}</h1>
            <input
                className={`button cursor-pointer w-[70%] rounded-md transition-all duration-700 hover:text-white text-center font-semibold py-2 hover:bg-blue-500 flex flex-wrap text-wrap ${selectedAnswer?.title === question.answer1.title ? 'bg-blue-500 text-white' : 'bg-green-500 text-black'}`}
                type="button" 
                value={question.answer1.title} 
                onClick={() => handleAnswerClick(currentQuestion, question.answer1)}
            />
                <input
                className={`button cursor-pointer w-[70%] rounded-md transition-all duration-700 hover:text-white  text-center font-semibold py-2 hover:bg-blue-500 flex flex-wrap text-wrap ${selectedAnswer?.title === question.answer2.title ? 'bg-blue-500 text-white' : 'bg-green-500 text-black'}`}
                type="button" 
                value={question.answer2.title} 
                onClick={() => handleAnswerClick(currentQuestion, question.answer2)}
            />
            <div className="flex gap-5">
            <button onClick={prevQuestion} className="rounded-full py-2 px-2 bg-green-300"><GrFormPrevious /></button>
            <button onClick={handleNextQuestion} className="rounded-full py-2 px-2 bg-green-300"><MdNavigateNext /></button>
            </div>
            <p>
        {id} de {totalQuestions}
      </p>
        </div>
    )
}