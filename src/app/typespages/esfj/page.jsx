import React from "react";
import EsfjPic from "../../../../public/assets/mbti-char-imgs/esfj.png"
import Image from "next/image";
import "../mbtipages.css"
import MainDivContainer from "../../components/MainDiv/MainDivContainer";
import MainDiv from "../../components/MainDiv/MainDiv";

export default function EsfjPage() {

    return(
        <MainDivContainer>
      <MainDiv>

      <Image src={EsfjPic} className="a w-[160px] self-center mt-4" alt="" />
<h1 className="title-type text-3xl font-bold self-center text-blue-500">ESFJ</h1>
<p className="flex text-green-600 font-semibold gap-2 self-center">
  <span>ES</span> <span>FE</span> <span>FI</span> <span>NE</span>
</p>
<p className="flex flex-col gap-3">
  <span>
    ESFJ é um dos 16 tipos de personalidade identificados pelo Indicador de Tipo de Personalidade Myers-Briggs (MBTI).
    Se você se identifica como ESFJ, significa que seu tipo de personalidade é melhor descrito como Extrovertido,
    Observador, Sentimental e Julgador. Às vezes, referidos como o "Provedor" ou o "Guardião", as pessoas com este
    tipo de personalidade geralmente são sociáveis, altruístas e confiáveis.
  </span>
  <span className="text-green-800 font-semibold">Principais Características do ESFJ:</span>

  <span className="text-slate-500">Compassivo:</span>

  <span>
    Com sua natureza extrovertida e observadora, ESFJs são compassivos e dedicados. Eles se preocupam com o bem-estar
    dos outros e são dedicados a ajudar.
  </span>
  <span className="text-slate-500">Sociável:</span>
  <span>
    ESFJs valorizam as interações sociais e constroem relacionamentos significativos. São extrovertidos e gostam de
    estar com outras pessoas.
  </span>
  <span className="text-slate-500">Altruístico:</span>
  <span>
    ESFJs têm uma natureza altruística, buscando oportunidades para ajudar e contribuir para o bem dos outros.
  </span>
  <span className="text-slate-500">Organizado:</span>
  <span>
    ESFJs valorizam a ordem e a estrutura em suas vidas. Planejam e organizam para garantir eficiência.
  </span>
  <span className="flex flex-row gap-2">
    <span className="flex flex-col gap-2 border-solid border-r-2 border-slate-700">
      <span className="text-blue-400 font-semibold">Pontos Fortes:</span>
      <span>Compassivos e dedicados.</span>
      <span>Sociáveis e extrovertidos.</span>
      <span>Altruísticos e dispostos a ajudar.</span>
      <span>Organizados e planejadores.</span>
      <span>Confiáveis e responsáveis.</span>
    </span>

    <span className="flex flex-col gap-2">
      <span className="text-blue-400 font-semibold">Pontos Fracos:</span>
      <span>Podem se sobrecarregar ao priorizar os outros.</span>
      <span>Tendem a evitar conflitos para manter a harmonia.</span>
      <span>Podem ser sensíveis a críticas.</span>
      <span>Às vezes, colocam as necessidades dos outros antes das suas.</span>
    </span>
  </span>
  <span>
    <span className="text-green-700">Funções Cognitivas do ESFJ:</span>
    <br />
    <span className="text-orange-400">Dominante: Extroversão de Sentimento (Fe):</span>
    <br />
    <span>Preocupados com o bem-estar dos outros.</span>
    <span>Buscam a harmonia e evitam conflitos sempre que possível.</span>
    <br /> <br />
    <span className="text-blue-400">Auxiliar: Sensação Introvertida (Si):</span>
    <br />
    <span>Valorizam experiências passadas e buscam estabilidade.</span>
    <span>Atentos aos detalhes e à realidade presente.</span>
    <br /> <br />
    <span className="text-red-600">Terciária: Pensamento Extrovertido (Te):</span>
    <br />
    <span>Tomam decisões lógicas e eficientes.</span>
    <span>Focam em objetivos práticos e tangíveis.</span>
    <br /> <br />
    <span className="text-yellow-400">Inferior: Intuição Introvertida (Ni):</span>
    <br />
    <span>Exploram possibilidades futuras de maneira menos desenvolvida.</span>
    <span>Preferem se ater ao concreto e ao comprovado.</span>
    <br /> <br />
  </span>
  <span>
    <span className="font-semibold">Relações Pessoais com ESFJs:</span>
    <br />
    <span>
      ESFJs valorizam relações sociais e se dedicam a construir laços significativos. São extrovertidos, comunicativos e
      dedicados às necessidades dos outros.
    </span>
  </span>
  <span className="font-semibold">Compatibilidade ESFJ:</span>
  <br />
  <span>
    Boa compatibilidade com tipos de personalidade como <span className="text-green-300">ISFP</span>,{" "}
    <span className="text-yellow-300">INFP</span>. Menos compatíveis com <span className="text-red-600">ESTP</span>,{" "}
    <span className="text-blue-200">ISTP.</span>
  </span>
  <span>Essa descrição destaca os traços essenciais do tipo de personalidade <span className="text-purple-600">ESFJ</span>,
    oferecendo insights sobre como eles se relacionam, pensam e enfrentam desafios na vida cotidiana.</span>
</p>
      </MainDiv>
    </MainDivContainer>
    )
}