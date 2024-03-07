import React from "react";

interface QuestionProps {
    question: string;
    answer1: string;
  answer2: string;
  onChange?: (value: any) => void;
}

export default function QuestionOne({ question, answer1, answer2, onChange }: QuestionProps) {
    return(
        <div>
            <p>{question}</p>
            <label className="lbl-test">
                <input type="radio" name={`${question}-answer`} value="answer1" />
                {answer1}
            </label>
            <label>
                <input type="radio" name={`${question}-answer`} value="answer2" />
                {answer2}
            </label>
        </div>
    )
}