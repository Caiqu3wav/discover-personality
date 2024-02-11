import React from "react";
import { useEffect, useState } from "react";
import questions from "../test/questionsOneFunction.json";
import Question from "./Question";

export default function TestTwo({ part, cogFunctions }) {
    const [duoQuestions, setDuoQuestions] = useState([]);
        let questionChecked = [];
        let questionChoosen = [];
        let pontosChoice = [-1.0, -0.6, 0, 0.6, 1.0];

        const onClickRadio = (choice, questionNumber, cogFunction1, cogFunction2) => {
            if (questionChecked[questionNumber]) {
                if (questionChoosen[questionNumber] == choice) return;
                let preChoice = questionChoosen[questionNumber];
                // refazer
                deleteChange(cogFunction1, cogFunction2, questionNumber, preChoice, choice);
                return;
            }
            addChange(choice, questionNumber, cogFunction1, cogFunction2);
        }
        const addChange = (choice, questionNumber, cogFunction1, cogFunction2) => {
            questionChecked[questionNumber] = true;
            questionChoosen[questionNumber] = choice;
            let atual1 = cogFunctions.get(cogFunction1);
            let atual2 = cogFunctions.get(cogFunction2);
            cogFunctions.set(cogFunction1, atual1 + (pontosChoice[choice - 1]));
            cogFunctions.set(cogFunction2, atual2 + (pontosChoice[choice - 1] / (10/7)));
          
        }
        const deleteChange = (cogFunction1, cogFunction2, questionNumber, preChoice, choice) => {
            let atual1 = cogFunctions.get(cogFunction1);
            let atual2 = cogFunctions.get(cogFunction2);
            cogFunctions.set(cogFunction1, atual1 - (pontosChoice[preChoice - 1]));
            cogFunctions.set(cogFunction2, atual2 - (pontosChoice[preChoice - 1] / (10/7)));
            addChange(choice, questionNumber, cogFunction1, cogFunction2);
        }
        useEffect(() => {
            setDuoQuestions(ShuffleArray(questions));
        }, [])

        const ShuffleArray = (array) => {
            let atualIndex = array.length, randomIndex;

            while(atualIndex != 0) {

                randomIndex = Math.floor(Math.random() * atualIndex);
                atualIndex--;

                [array[atualIndex], array[randomIndex]] = [
                    array[randomIndex], array[atualIndex]
                ];
            }
            return array;
        }

        return (
            <div style={part == 2 ? { display: 'block' } : { display: "none" }}>
            {duoQuestions.map((item, index) => {

                return (<Question key={index} index={index + 25} question={item.question} cogFunction1={item.func1} cogFunction2={item.func2}
                    onClickRadio={(choice, questionNumber, cogFunction1, cogFunction2) => onClickRadio(choice, questionNumber, cogFunction1, cogFunction2)} />)
            })}
        </div>
        );
} 