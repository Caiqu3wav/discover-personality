"use client";
import Header from "../components/Header/header";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Question from "../components/testsmbti/Question";
import TestOne from "../components/testsmbti/testCompOne";
import TestTwo from "../components/testsmbti/testCompTwo";

export default function Test() {
const router = useRouter();
  const [savingCogFunc, setSavingCogFunc] = useState(new Map());
  const [part, setPart] = useState(1);
  let cogFunctions = new Map();    

  cogFunctions.set("Ne", 0);
  cogFunctions.set("Ni", 0);
  cogFunctions.set("Se", 0);
  cogFunctions.set("Si", 0);
  cogFunctions.set("Te", 0);
  cogFunctions.set("Ti", 0);
  cogFunctions.set("Fe", 0);
  cogFunctions.set("Fi", 0);

  let questionChecked = [];
  let questionChoosen = [];
  let pontosChoice = [-1.0, -0.6, 0, 0.6, 1.0];

  useEffect(() => {
    setSavingCogFunc(cogFunctions);
  }, [])

  const onClickRadio = (choice, questionNumber, cogFunction) => {

    cogFunctions = savingCogFunc;

    if (questionChecked[questionNumber]) {
      if (questionChoosen[questionNumber] == choice) return;
      let preChoice = questionChoosen[questionNumber];
      // refazer
      deleteChange(cogFunction, questionNumber, preChoice, choice);
      return;
    }
    addChange(choice, questionNumber, cogFunction);
  }
  const addChange = (choice, questionNumber, cogFunction) => {
    questionChecked[questionNumber] = true;
    questionChoosen[questionNumber] = choice;
    let current = cogFunctions.get(cogFunction);

    cogFunctions.set(cogFunction, current + pontosChoice[choice - 1]);

  }

    const deleteChange = (cogFunction, questionNumber, preChoice, choice) => {
        let current = cogFunctions.get(cogFunction);
        cogFunctions.set(cogFunction, current - pontosChoice[preChoice - 1]);
        addChange(choice, questionNumber, cogFunction);
      }
    
      // shuffle the array
      // Defacto Fisher-Yates shuffle
      const ShuffleArray = (array) => {
        let currentIndex = array.length, randomIndex;
    
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
      
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
              array[randomIndex], array[currentIndex]];
          }
      
          return array;
        }

        let resParameter = "";
  function createUrl() {

    let url = "/resultpage/"
    let funcUrl =
      "Ne=" + Math.floor(savingCogFunc.get("Ne") * 10) / 10 +
      "&Ni=" + Math.floor(savingCogFunc.get("Ni") * 10) / 10 +
      "&Se=" + Math.floor(savingCogFunc.get("Se") * 10) / 10 +
      "&Si=" + Math.floor(savingCogFunc.get("Si") * 10) / 10 +
      "&Te=" + Math.floor(savingCogFunc.get("Te") * 10) / 10 +
      "&Ti=" + Math.floor(savingCogFunc.get("Ti") * 10) / 10 +
      "&Fe=" + Math.floor(savingCogFunc.get("Fe") * 10) / 10 +
      "&Fi=" + Math.floor(savingCogFunc.get("Fi") * 10) / 10;
    window.localStorage.setItem('previousTest', url + funcUrl);
    router.push(url + funcUrl)

  }

  function changePart(item) {

    let currentPage = part;
    if (item == "next") {
      setPart(currentPage + 1);
    }
    else {
      cogFunctions = savingCogFunc;
      setPart(currentPage - 1);
    }
    window.scrollTo(0, 0)
  }
  return (
    <main>
        <Header/>
        <div className={"container mx-auto py-6"}>
        <div>

        </div>
        
        {/* Part 2 */}

        <TestTwo part={part} cogFunctions={savingCogFunc} />
        <TestOne part={part} cogFunctions={savingCogFunc} />

        <div className={"flex justify-around"}>
          <button style={part == 1 ? { display: "none" } : { display: "block" }} className={"bg-[#6028ac] text-white px-6 py-2 rounded-full"} onClick={() => changePart("previous")}>
            <a>Anterior</a>
          </button>
          <button style={part == 3 ? { display: "none" } : { display: "block" }} className={"bg-[#6028ac] text-white px-6 py-2 rounded-full"} onClick={() => changePart("next")}>
            <a>Próxima</a>
          </button>
          <button style={part == 3 ? { display: "block" } : { display: "none" }} className={"bg-[#649821] text-white px-6 py-2 rounded-full"} onClick={() => createUrl()}>
            <a>Terminar</a>
          </button>
        </div>
        </div>
    </main>
  )
       
  }
