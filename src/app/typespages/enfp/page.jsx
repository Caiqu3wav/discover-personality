import React from "react";
import EnfpPic from "../../../../public/assets/mbti-char-imgs/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS8wY290QS9NQUZ1aUIwY290QS8xL3AucG5n.png"
import Image from "next/image";
import "../mbtipages.css"
import MainDivContainer from "../../components/MainDiv/MainDivContainer";
import MainDiv from "../../components/MainDiv/MainDiv";

export default function EnfpPage() {

    return(
        <MainDivContainer>
      <MainDiv>
<Image src={EnfpPic} className="a w-[160px] self-center mt-4" alt="" />
<h1 className="title-type text-3xl font-bold self-center text-green-300">ENFP</h1>
<p className="flex text-green-600 font-semibold gap-2 self-center">
  <span>NE</span> <span>FI</span> <span>TE</span> <span>SI</span>
</p>
<p className="flex flex-col gap-3">
  <span>
    ENFP é um dos 16 tipos de personalidade identificados pelo Indicador de Tipo de Personalidade Myers-Briggs (MBTI).
    Se você se identifica como ENFP, significa que seu tipo de personalidade é melhor descrito como Extrovertido,
    Intuitivo, Sentimental e Perceptivo. Às vezes, referidos como o "Inspirador" ou o "Visionário", as pessoas com
    este tipo de personalidade geralmente são entusiásticas, criativas e têm uma paixão por explorar novas
    possibilidades.
  </span>

  <span className="text-green-800 font-semibold">Principais Características do ENFP:</span>

  <span className="text-slate-500">Empático:</span>

  <span>
    Com sua natureza extrovertida e habilidade de entender as emoções dos outros, ENFPs são empáticos e calorosos. Eles
    se conectam facilmente com os sentimentos alheios e estão dispostos a ajudar.
  </span>
  <span className="text-slate-500">Aventureiro:</span>

  <span>
    ENFPs são espontâneos e adoram explorar novas ideias e experiências. Eles buscam constantemente o novo e o
    estimulante.
  </span>
  <span className="text-slate-500">Entusiasta:</span>

  <span>
    Animados e entusiasmados, ENFPs têm uma energia contagiante que atrai os outros. Eles acreditam no potencial
    humano e inspiram aqueles ao seu redor a alcançar o melhor de si mesmos.
  </span>
  <span className="text-slate-500">Curioso:</span>
  <span>
    ENFPs têm uma mente aberta e estão sempre em busca de novas possibilidades. Eles se interessam por uma variedade
    de assuntos.
  </span>

  <span className="flex flex-row gap-2">
    <span className="flex flex-col gap-2 border-solid border-r-2 border-slate-700">
      <span className="text-blue-400 font-semibold">Pontos Fortes:</span>

      <span>Carismáticos e inspiradores.</span>
      <span>Compassivos e compreensivos.</span>
      <span>Criativos e inovadores.</span>
      <span>Adaptáveis e flexíveis.</span>
      <span>Entusiasmados e motivados.</span>
    </span>

    <span className="flex flex-col gap-2">
      <span className="text-blue-400 font-semibold">Pontos Fracos:</span>

      <span>Propensos a se distrair facilmente.</span>
      <span>Tendência a procrastinar tarefas tediosas.</span>
      <span>Sensíveis a críticas.</span>
      <span>Às vezes evitam confrontos.</span>
    </span>
  </span>

  <span>
    <span className="text-green-700">Funções Cognitivas do ENFP:</span>
    <br />
    <span className="text-orange-400">Dominante: Extroversão de Intuição (Ne):</span>
    <br />
    <span>Constantemente busca novas possibilidades e conexões.</span>
    <span>Estimula a criatividade e o pensamento inovador.</span>
    <br /> <br />
    <span className="text-blue-400">Auxiliar: Sentimento Introvertido (Fi):</span>
    <br />
    <span>Baseia decisões em seus valores e crenças internas.</span>
    <span>Valoriza a autenticidade e a individualidade.</span>
    <br /> <br />
    <span className="text-red-600">Terciária: Pensamento Extrovertido (Te):</span>
    <br />

    <span>Procura lógica e eficiência ao tomar decisões.</span>
    <span>Foca em objetivos práticos e ações tangíveis.</span>
    <br /> <br />
    <span className="text-yellow-400">Inferior: Sensação Introvertida (Si):</span>
    <br />

    <span>Reflete sobre experiências passadas e busca estabilidade.</span>
    <span>Aprecia momentos sensoriais e detalhes do presente.</span>
    <br /> <br />
  </span>

  <span>
    <span className="font-semibold">Relações Pessoais com ENFPs:</span>
    <br />
    <span>
      ENFPs valorizam a autenticidade nas relações e buscam conexões significativas. São comunicativos e entusiasmados,
      mas podem se sentir sufocados por restrições excessivas. Tendem a ser leais e solidários com seus entes queridos.
    </span>
  </span>
  <span className="font-semibold">Compatibilidade ENFP:</span>
  <br />
  <span>
    Boa compatibilidade com tipos de personalidade como <span className="text-green-300">INTJ</span>,{" "}
    <span className="text-yellow-300">INFJ</span>. Menos compatíveis com <span className="text-red-600">ESTJ</span>,{" "}
    <span className="text-blue-200">ESFJ.</span>
  </span>
  <span>Essa descrição destaca os traços essenciais do tipo de personalidade <span className="text-purple-600">ENFP</span>,
  oferecendo insights sobre como eles se relacionam, pensam e enfrentam desafios na vida cotidiana.</span>
</p>
      </MainDiv>
    </MainDivContainer>
    )
}