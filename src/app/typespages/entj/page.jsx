import React from "react";
import EntjPic from "../../../../public/assets/mbti-char-imgs/entj.png"
import Image from "next/image";
import "../mbtipages.css"
import MainDivContainer from "../../components/MainDiv/MainDivContainer";
import MainDiv from "../../components/MainDiv/MainDiv";

export default function IntjPage() {

    return(
        <MainDivContainer>
      <MainDiv>
      <Image src={EntjPic} className="a w-[160px] self-center mt-4" alt="" />
<h1 className="title-type text-3xl font-bold self-center text-purple-500">ENTJ</h1>
<p className="flex text-green-600 font-semibold gap-2 self-center">
  <span>SE</span> <span>TI</span> <span>FE</span> <span>NI</span>
</p>
<p className="flex flex-col gap-3">
  <span>
    ENTJ é um dos 16 tipos de personalidade identificados pelo Indicador de Tipo de Personalidade Myers-Briggs (MBTI).
    Se você se identifica como ENTJ, significa que seu tipo de personalidade é melhor descrito como Extrovertido,
    Observador, Sentimental e Prospectivo. Às vezes, referidos como o "Comandante" ou o "Líder", as pessoas com este
    tipo de personalidade geralmente são assertivas, pragmáticas e orientadas para objetivos.
  </span>
  <span className="text-green-800 font-semibold">Principais Características do ENTJ:</span>

  <span className="text-slate-500">Assertivo:</span>

  <span>
    Com sua natureza extrovertida e orientada para objetivos, ENTJs são assertivos e eficientes na busca de seus objetivos.
  </span>
  <span className="text-slate-500">Pragmático:</span>
  <span>
    ENTJs valorizam a eficiência e preferem lidar com problemas de forma prática. Eles se concentram nas soluções para o futuro.
  </span>
  <span className="text-slate-500">Decisivo:</span>
  <span>
    ENTJs tomam decisões rapidamente e são conhecidos por sua capacidade de liderança. Eles são orientados para a ação e resultados.
  </span>
  <span className="text-slate-500">Ambicioso:</span>
  <span>
    ENTJs têm ambições claras e estão dispostos a assumir desafios para alcançar o sucesso. São visionários e estrategistas.
  </span>
  <span className="flex flex-row gap-2">
    <span className="flex flex-col gap-2 border-solid border-r-2 border-slate-700">
      <span className="text-blue-400 font-semibold">Pontos Fortes:</span>
      <span>Assertivos e eficientes.</span>
      <span>Pragmáticos e orientados para objetivos.</span>
      <span>Decisivos e líderes naturais.</span>
      <span>Ambiciosos e visionários.</span>
      <span>Eficientes na busca de objetivos.</span>
    </span>

    <span className="flex flex-col gap-2">
      <span className="text-blue-400 font-semibold">Pontos Fracos:</span>

      <span>Podem ser percebidos como autoritários.</span>
      <span>Tendência a impor suas ideias.</span>
      <span>Pouca paciência para ineficiências.</span>
      <span>Podem negligenciar considerações emocionais.</span>
    </span>
  </span>
  <span>
    <span className="text-green-700">Funções Cognitivas do ENTJ:</span>
    <br />
    <span className="text-orange-400">Dominante: Sensação Extravertida (Se):</span>
    <br />
    <span>Vivem o momento e absorvem detalhes sensoriais.</span>
    <span>Ágeis em reagir a situações imediatas.</span>
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
    <span className="text-yellow-400">Inferior: Intuição Introvertida (Ni):</span>
    <br />

    <span>Exploram possibilidades futuras de maneira menos desenvolvida.</span>
    <span>Tendem a se concentrar no presente e no concreto.</span>
    <br /> <br />
  </span>
  <span>
    <span className="font-semibold">Relações Pessoais com ENTJs:</span>
    <br />
    <span>
      ENTJs valorizam relações dinâmicas e desafiantes. São comunicativos, assertivos e comprometem-se com objetivos comuns.
    </span>
  </span>
  <span className="font-semibold">Compatibilidade ENTJ:</span>
  <br />
  <span>
    Boa compatibilidade com tipos de personalidade como <span className="text-green-300">INTJ</span>,{" "}
    <span className="text-yellow-300">INFJ</span>. Menos compatíveis com <span className="text-red-600">ESFP</span>,{" "}
    <span className="text-blue-200">ISFP.</span>
  </span>
  <span>
    Essa descrição destaca os traços essenciais do tipo de personalidade <span className="text-purple-600">ENTJ</span>,
    oferecendo insights sobre como eles se relacionam, pensam e enfrentam desafios na vida cotidiana.
  </span>
</p>
      </MainDiv>
    </MainDivContainer>
    )
}