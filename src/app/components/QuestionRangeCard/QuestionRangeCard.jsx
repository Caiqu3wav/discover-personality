import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";


export default function QuestionCard({ title, answer1, answer2 }) {
    return(
        <div className="w-[500px] flex flex-col items-center justify-around bg-orange-300 h-[400px] self-center rounded-xl">
            <h1>{title}</h1>
            <label><h2>{answer1}</h2>
            <input type="radio" value="answer1" /></label>
            <label><h2>{answer2}</h2>
            <input type="radio" value="answer2" /></label>
            <div className="flex gap-3">
            <button className="rounded-full py-2 px-2 bg-green-300"><GrFormPrevious /></button>
            <button className="py-3 px-6 bg-green-300 text-white rounded-lg">Responder</button>
            <button className="rounded-full py-2 px-2 bg-green-300"><MdNavigateNext /></button>
            </div>
        </div>
    )
}