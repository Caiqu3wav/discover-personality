import React from "react";
import IstjPic from "../../../../public/assets/mbti-char-imgs/istj.png"
import Image from "next/image";
import "../mbtipages.css"
import MainDivContainer from "../../components/MainDiv/MainDivContainer";
import MainDiv from "../../components/MainDiv/MainDiv";

export default function IstjPage() {

    return(
        <MainDivContainer>
      <MainDiv>

      <Image src={IstjPic} className="a w-[160px] self-center mt-4" alt="" />
<h1 className="title-type text-3xl font-bold self-center text-blue-500">ISTJ</h1>
<p className="flex text-green-600 font-semibold gap-2 self-center">
  <span>SI</span> <span>TE</span> <span>FI</span> <span>NE</span>
</p>
<p className="flex flex-col gap-3">
  <span>
    ISTJ é um dos 16 tipos de personalidade identificados pelo Indicador de Tipo de Personalidade Myers-Briggs (MBTI).
    Se você se identifica como ISTJ, significa que seu tipo de personalidade é melhor descrito como Introvertido,
    Observador, Sentimental e Julgador. Às vezes, referidos como o "Inspetor" ou o "Guardião", as pessoas com este
    tipo de personalidade geralmente são práticas, lógicas e confiáveis.
  </span>
<span className="text-green-800 font-semibold">Principais Características do ISTJ:</span>

<span className="text-slate-500">Confiável:</span>

  <span>
    Com sua natureza introvertida e observadora, ISTJs são confiáveis e dedicados. Eles cumprem suas responsabilidades
    com integridade.
  </span>
  <span className="text-slate-500">Organizado:</span>
  <span>
    ISTJs valorizam a ordem e a estrutura. Eles planejam com antecedência e preferem ambientes organizados.
  </span>
  <span className="text-slate-500">Analítico:</span>
  <span>
    ISTJs abordam situações de maneira lógica e analítica. Eles se concentram nos fatos e tomam decisões baseadas em
    evidências.
  </span>
  <span className="text-slate-500">Leal:</span>
  <span>
    ISTJs são leais aos seus compromissos e relacionamentos. Eles valorizam a confiança mútua e a responsabilidade.
  </span>
  <span className="flex flex-row gap-2">
    <span className="flex flex-col gap-2 border-solid border-r-2 border-slate-700">
      <span className="text-blue-400 font-semibold">Pontos Fortes:</span>
      <span>Confiáveis e dedicados.</span>
  <span>Organizados e planejadores.</span>
  <span>Analíticos e lógicos.</span>
  <span>Leais e responsáveis.</span>
  <span>Eficientes e cumpridores de prazos.</span>
</span>

<span className="flex flex-col gap-2">
  <span className="text-blue-400 font-semibold">Pontos Fracos:</span>

  <span>Podem ser inflexíveis diante de mudanças.</span>
  <span>Tendência a serem reservados.</span>
  <span>Podem ser críticos em excesso.</span>
  <span>Evitam expressar emoções abertamente.</span>
</span>
</span>
  <span>
    <span className="text-green-700">Funções Cognitivas do ISTJ:</span>
    <br />
    <span className="text-orange-400">Dominante: Sensação Introvertida (Si):</span>
    <br />
    <span>Valorizam experiências passadas e buscam estabilidade.</span>
    <span>Atentos aos detalhes e à realidade presente.</span>
    <br /> <br />
    <span className="text-blue-400">Auxiliar: Pensamento Extrovertido (Te):</span>
    <br />
    <span>Tomam decisões lógicas e eficientes.</span>
    <span>Focam em objetivos práticos e tangíveis.</span>
    <br /> <br />
    <span className="text-red-600">Terciária: Sentimento Introvertido (Fi):</span>
    <br />
    <span>Baseiam decisões em valores internos.</span>
<span>Privilegiam a autenticidade e a integridade.</span>
<br /> <br />
<span className="text-yellow-400">Inferior: Intuição Extravertida (Ne):</span>
<br />

<span>Exploram novas possibilidades de maneira menos desenvolvida.</span>
<span>Preferem se ater ao concreto e ao comprovado.</span>
<br /> <br />
</span>
  <span>
    <span className="font-semibold">Relações Pessoais com ISTJs:</span>
    <br />
    <span>
      ISTJs valorizam relações baseadas na confiança e no comprometimento. São reservados, mas leais e dedicados aos
      amigos e familiares. Podem ter dificuldade em expressar emoções abertamente.
    </span>
  </span>
  <span className="font-semibold">Compatibilidade ISTJ:</span>
  <br />
  <span>
    Boa compatibilidade com tipos de personalidade como <span className="text-green-300">ESTP</span>,{" "}
    <span className="text-yellow-300">ESFP</span>. Menos compatíveis com <span className="text-red-600">INFP</span>,{" "}
    <span className="text-blue-200">ENFP.</span>
  </span>
  <span>Essa descrição destaca os traços essenciais do tipo de personalidade <span className="text-purple-600">ISTJ</span>,
  oferecendo insights sobre como eles se relacionam, pensam e enfrentam desafios na vida cotidiana.</span>
</p>
      </MainDiv>
    </MainDivContainer>
    )
}