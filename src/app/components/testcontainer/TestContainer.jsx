"use client";
import { useState, useEffect } from "react";
import options from "../test/options";

export default function TestContainer(props) {
    const [isAchosen, setIsAChosen] = useState(false);
    const [isBchosen, setIsBChosen] = useState(false);

    useEffect(() => {
        setIsAChosen(false);
        setIsBChosen(false);
    }, [props.questionNumber]);

    function handleClick(chosenOption) {
        if (chosenOption === "optionA") {
            setIsAChosen(true);
            setIsBChosen(false);
            props.onAnswer("isA", props.questionNumber - 1);
         } else if (chosenOption === "optionB") {
            setIsAChosen(false);
            setIsBChosen(true)
            props.onAnswer("isB", props.questionNumber - 1);
         }
    }

    return (
        <div className="flex flex-col items-center justify-center w-[400px] h-fit pb-5 bg-lime-200">
            <h1>Question {props.questionNumber}</h1>
            <h2>{props.question}</h2>
            <button name="optionA"
            className={isAchosen ? "optionChosen" : "option"}
            onClick={() => handleClick("optionA")}>
                        {props.optionA}
            </button>
            <br />
            <button
        name="optionB"
        className={isBchosen ? "optionChosen" : "option"}
        onClick={() => handleClick("optionB")}
      >
        {props.optionB}
      </button>
        </div>
    );
}
