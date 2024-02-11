import React from "react";
import Header from "../Header/header"
import { useState, useEffect } from "react";
import questions from "../test/questions.json";
import "./styles.css";
import styles from "../../../styles/styles.modules.css";

export default function TestOne({ part, cogFunctions }) {
    const [blockQuestions, setBlockQuestions] = useState([]);
    let questionChecked = [];
    let questionChoosen = [];

    let pontosChoice = [-1.0, -0.5, 0, 0.5, 1.0];
    
    const onClickRadio = (choice, questionNumber, cogFunction1, cogFunction2) => {
    if(questionChecked[questionNumber]) {
      if(questionChoosen[questionNumber] === choice) return;
      let preChoice = questionChoosen[questionNumber]
    
      deleteChange(cogFunction1, cogFunction2, questionNumber, preChoice, choice);
      return;
    }
    addChange(choice, questionNumber, cogFunction1, cogFunction2);
  }
  const deleteChange = (cogFunction1, cogFunction2, questionNumber, preChoice, choice) => {
    let atual1 = cogFunctions(cogFunction1);
    let atual2 = cogFunctions(cogFunction2);
    cogFunctions.set(cogFunction1, atual1 - (pontosChoice[preChoice - 1]));
    cogFunctions.set(cogFunction1, atual2 + (pontosChoice[preChoice - 1]));
    addChange(choice, questionNumber, cogFunction1, cogFunction2);
    }

    const addChange = (choice, questionNumber, cogFunction1, cogFunction2) => {
      questionChecked[questionNumber] = true;
      questionChoosen[questionNumber] = choice;
      let atual1 = cogFunctions.get(cogFunction1);
      let atual2 = cogFunctions.get(cogFunction2);
      cogFunctions.set(cogFunction1, atual1 + (pontosChoice[choice - 1]));
      cogFunctions.set(cogFunction2, atual2 + (pontosChoice[choice - 1]));
    }

    useEffect(() => {
      setBlockQuestions(ShuffleArray(questions));
    }, [])

    const ShuffleArray = (array) => {
      let atualIndex = array.length, randomIndex;

      while (atualIndex != 0) {

        randomIndex = Math.floor(Math.random() * atualIndex);
        atualIndex--;

        [array[atualIndex], array[randomIndex]] = [
          array[randomIndex], array[atualIndex]
        ];
        return array;
      }
    }

    let base = 57;

   
    return (
      <>
        <div style={part == 3 ? { display: 'block' } : { display: 'none' }}>
          {blockQuestions.map((item, index) => {
          return(  <div key={index} className="question-card-container flex flex-col"> <h1 className={"text-center text-1xl md:text-2xl font-semibold mb-6 px-2"}>{index}. {item.question1}</h1>
          <div className={"flex flex-row mt-4 items-center"}>
              <div className={"flex flex-row items-center "}>
                  <p className={"mr-4 hidden md:block text-left w-60"}>{item.answer1}</p>
                  <input type="radio" onClick={() => onClickRadio(1, index + base, item.cogFunction2, item.cogFunction1)} className={styles.input1} id={`choice${index + base}-1`} name={`question-${index + base}`} />
              </div>
              <div style={{ borderBottomColor: "#8b4766" }} className={"border-b-2 w-4 middle-line"}></div>
              <input type="radio" onClick={() => onClickRadio(2, index + base, item.cogFunction2, item.cogFunction1)} className={styles.input2} id={`choice${index + base}-1`} name={`question-${index + base}`} />
              <div style={{ borderBottomColor: "#8b4766" }} className={"border-b-2 w-4 middle-line"}></div>
              <input type="radio" onClick={() => onClickRadio(3, index + base, item.cogFunction2, item.cogFunction1)} className={styles.input3} id={`choice${index + base}-1`} name={`question-${index + base}`} />
              <div style={{ borderBottomColor: "#649821" }} className={"border-b-2 w-4 middle-line"}></div>
              <input type="radio" onClick={() => onClickRadio(4, index + base, item.cogFunction2, item.cogFunction1)} className={styles.input4} id={`choice${index + base}-1`} name={`question-${index + base}`} />
              <div style={{ borderBottomColor: "#649821" }} className={"border-b-2 w-4 middle-line"}></div>
              <div className={"flex flex-row items-center "}>
                  <input type="radio" onClick={() => onClickRadio(5, index + base, item.cogFunction2, item.cogFunction1)} className={styles.input5} id={`choice${index + base}-2`} name={`question-${index + base}`} />
                  <p className={"ml-4 hidden md:block text-right w-60"}>{item.answer2}</p>
              </div>

          </div>
          <div className={"block md:hidden flex flex-row justify-between w-max"}>
              <p className={"text-left w-40"}>{item.answer1}</p>
              <p className={"text-right w-40"}>{item.answer2}</p>
          </div>
          <div className={"border-b-2 m-10"} style={{ width: "100%" }}></div>
      </div>
            )})}
          </div>
      </>
    );
  }