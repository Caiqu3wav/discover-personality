import React from "react";
import { questions2 } from "../test/questions";
interface QuestionTwoProps {
    question: string;
    onChange?: (value:any) => void;
}

export default function QuestionTwo({ question }: QuestionTwoProps) {
    return(
      <div className="div-test">
      <h2>Perguntas Tipo 2</h2>
      {questions2.map((question, index) => (
        <div key={index}>
          <p>{question.pergunta}</p>
          <label className="lbl-test">
            <input
              type="radio"
              name={`${question.pergunta}-answer`}
              value="discordo-muito"
            />
            Discordo Muito
          </label>
          <label className="lbl-test">
            <input
              type="radio"
              name={`${question.pergunta}-answer`}
              value="discordo-pouco"
            />
            Discordo Um Pouco
          </label>
          <label className="lbl-test">
            <input
              type="radio"
              name={`${question.pergunta}-answer`}
              value="neutro"
            />
            Neutro
          </label>
          <label className="lbl-test">
            <input
              type="radio"
              name={`${question.pergunta}-answer`}
              value="concordo-pouco"
            />
            Concordo Um Pouco
          </label>
          <label className="lbl-test">
            <input
              type="radio"
              name={`${question.pergunta}-answer`}
              value="concordo-muito"
            />
            Concordo Muito
          </label>
        </div>
      ))}
    </div>
    )
}