import React from "react";
import EntpPic from "../../../../public/assets/mbti-char-imgs/entp.png"
import Image from "next/image";
import "../mbtipages.css"
import MainDivContainer from "../../components/MainDiv/MainDivContainer";
import MainDiv from "../../components/MainDiv/MainDiv";

export default function EntpPage() {

    return(
        <MainDivContainer>
      <MainDiv>
      <Image src={EntpPic} className="a w-[160px] self-center mt-4" alt="" />
<h1 className="title-type text-3xl font-bold self-center text-purple-500">ENTP</h1>
<p className="flex text-green-600 font-semibold gap-2 self-center">
  <span>NE</span> <span>TI</span> <span>FE</span> <span>SI</span>
</p>
<p className="flex flex-col gap-3">
  <span>
    ENTP é um dos 16 tipos de personalidade identificados pelo Indicador de Tipo de Personalidade Myers-Briggs (MBTI).
    Se você se identifica como ENTP, significa que seu tipo de personalidade é melhor descrito como Extrovertido,
    Intuitivo, Pensativo e Prospectivo. Às vezes, referidos como o "Visionário" ou o "Debatedor", as pessoas com este
    tipo de personalidade geralmente são inovadoras, questionadoras e ágeis mentalmente.
  </span>
  <span className="text-green-800 font-semibold">Principais Características do ENTP:</span>

  <span className="text-slate-500">Inovador:</span>
  <span>
    ENTPs são inovadores e têm uma mente ágil. Eles são rápidos em encontrar soluções criativas para desafios complexos.
  </span>
  <span className="text-slate-500">Questionador:</span>
  <span>
    ENTPs questionam o status quo e buscam constantemente novas ideias. Eles gostam de explorar possibilidades e teorias.
  </span>
  <span className="text-slate-500">Lógico:</span>
  <span>
    ENTPs baseiam suas decisões na lógica e na análise objetiva. Eles apreciam debates intelectuais e desafios mentais.
  </span>
  <span className="text-slate-500">Versátil:</span>
  <span>
    ENTPs são versáteis e adaptáveis, prontos para explorar uma variedade de interesses e perspectivas.
  </span>
  <span className="flex flex-row gap-2">
    <span className="flex flex-col gap-2 border-solid border-r-2 border-slate-700">
      <span className="text-blue-400 font-semibold">Pontos Fortes:</span>
      <span>Inovadores e ágeis mentalmente.</span>
      <span>Questionadores e curiosos.</span>
      <span>Lógicos e analíticos.</span>
      <span>Versáteis e adaptáveis.</span>
      <span>Bons em debates intelectuais.</span>
    </span>

    <span className="flex flex-col gap-2">
      <span className="text-blue-400 font-semibold">Pontos Fracos:</span>
      <span>Podem parecer insensíveis em debates.</span>
      <span>Tendência a procrastinar.</span>
      <span>Às vezes, excessivamente críticos.</span>
      <span>Podem perder o interesse rapidamente.</span>
    </span>
</span>

  <span>
    <span className="text-green-700">Funções Cognitivas do ENTP:</span>
    <br />
    <span className="text-orange-400">Dominante: Intuição Extravertida (Ne):</span>
    <br />
    <span>Exploram constantemente novas possibilidades e ideias.</span>
    <span>Rápidos em fazer conexões mentais.</span>
    <br /> <br />
    <span className="text-blue-400">Auxiliar: Pensamento Introvertido (Ti):</span>
    <br />
    <span>Analisam problemas de forma lógica e objetiva.</span>
    <span>Valorizam a eficiência e a solução prática.</span>
    <br /> <br />
    <span className="text-red-600">Terciária: Sentimento Extravertido (Fe):</span>
    <br />
    <span>Consideram os sentimentos alheios, mas de maneira menos desenvolvida.</span>
    <span>Podem parecer insensíveis em algumas situações.</span>
    <br /> <br />
    <span className="text-yellow-400">Inferior: Sensação Introvertida (Si):</span>
    <br />
    <span>Valorizam experiências passadas e buscam estabilidade.</span>
    <span>Tendem a se concentrar no presente e no concreto.</span>
    <br /> <br />
  </span>

  <span>
    <span className="font-semibold">Relações Pessoais com ENTPs:</span>
    <br />
    <span>
      ENTPs valorizam relações dinâmicas e intelectuais. São comunicativos, mas podem parecer insensíveis em certas situações.
      Comprometem-se com debates estimulantes e buscam constante crescimento intelectual.
    </span>
  </span>
  <span className="font-semibold">Compatibilidade ENTP:</span>
  <br />
  <span>
    Boa compatibilidade com tipos de personalidade como <span className="text-green-300">INTJ</span>,{" "}
    <span className="text-yellow-300">INFJ</span>. Menos compatíveis com <span className="text-red-600">ESFJ</span>,{" "}
    <span className="text-blue-200">ISFJ.</span>
  </span>
  <span>Essa descrição destaca os traços essenciais do tipo de personalidade <span className="text-purple-600">ENTP</span>,
    oferecendo insights sobre como eles se relacionam, pensam e enfrentam desafios na vida cotidiana.</span>
</p>
      </MainDiv>
    </MainDivContainer>
    )
}