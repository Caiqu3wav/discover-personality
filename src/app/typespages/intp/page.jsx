import React from "react";
import IntpPic from "../../../../public/assets/mbti-char-imgs/intp.png"
import Image from "next/image";
import "../mbtipages.css"
import MainDivContainer from "../../components/MainDiv/MainDivContainer";
import MainDiv from "../../components/MainDiv/MainDiv";

export default function IntpPage() {

    return(
        <MainDivContainer>
      <MainDiv>
      <Image src={IntpPic} className="a w-[160px] self-center mt-4" alt="" />
<h1 className="title-type text-3xl font-bold self-center text-purple-500">INTP</h1>
<p className="flex text-green-600 font-semibold gap-2 self-center">
  <span>TI</span> <span>NE</span> <span>SI</span> <span>FE</span>
</p>
<p className="flex flex-col gap-3">
  <span>
    INTP é um dos 16 tipos de personalidade identificados pelo Indicador de Tipo de Personalidade Myers-Briggs (MBTI).
    Se você se identifica como INTP, significa que seu tipo de personalidade é melhor descrito como Introvertido,
    Intuitivo, Pensativo e Prospectivo. Às vezes, referidos como o "Arquiteto" ou o "Lógico", as pessoas com este
    tipo de personalidade geralmente são analíticas, criativas e objetivas.
  </span>
<span className="text-green-800 font-semibold">Principais Características do INTP:</span>

<span className="text-slate-500">Analítico:</span>

  <span>
    Com sua natureza introvertida e intuitiva, INTPs são analíticos e estão sempre em busca de compreensão.
    Eles desfrutam explorando ideias e teorias complexas.
  </span>
  <span className="text-slate-500">Criativo:</span>
  <span>
    INTPs são criativos e inovadores, muitas vezes pensando fora da caixa e propondo soluções originais.
    Eles apreciam a liberdade de explorar conceitos abstratos.
  </span>
  <span className="text-slate-500">Objetivo:</span>
  <span>
    INTPs abordam a vida de maneira lógica e objetiva. Preferem entender a verdade dos fatos antes de tomar decisões.
  </span>
  <span className="text-slate-500">Prospectivo:</span>
  <span>
    INTPs são prospectivos, gostam de manter suas opções em aberto e resistem a compromissos prematuros.
  </span>
  <span className="flex flex-row gap-2">
    <span className="flex flex-col gap-2 border-solid border-r-2 border-slate-700">
      <span className="text-blue-400 font-semibold">Pontos Fortes:</span>
      <span>Analíticos e em busca de compreensão.</span>
  <span>Criativos e inovadores.</span>
  <span>Objetivos e lógicos.</span>
  <span>Prospectivos e adaptáveis.</span>
  <span>Abertos a explorar ideias complexas.</span>
</span>

<span className="flex flex-col gap-2">
  <span className="text-blue-400 font-semibold">Pontos Fracos:</span>

  <span>Podem ser vistos como distantes ou desinteressados.</span>
  <span>Dificuldade em lidar com emoções intensas.</span>
  <span>Tendência a procrastinar decisões.</span>
  <span>Podem ser perfeccionistas.</span>
</span>
</span>
  <span>
    <span className="text-green-700">Funções Cognitivas do INTP:</span>
    <br />
    <span className="text-orange-400">Dominante: Pensamento Introvertido (Ti):</span>
    <br />
    <span>Analisam informações de forma lógica e objetiva.</span>
    <span>Buscam compreender a verdade dos fatos.</span>
    <br /> <br />
    <span className="text-blue-400">Auxiliar: Intuição Extrovertida (Ne):</span>
    <br />
    <span>Gostam de explorar possibilidades e conexões.</span>
    <span>São criativos e pensam fora da caixa.</span>
    <br /> <br />
    <span className="text-red-600">Terciária: Sensação Introvertida (Si):</span>
    <br />
    <span>Valorizam experiências passadas ao tomar decisões.</span>
<span>Podem resistir a mudanças sem uma boa razão.</span>
<br /> <br />
<span className="text-yellow-400">Inferior: Sentimento Extrovertido (Fe):</span>
<br />

<span>Consideram sentimentos alheios, mas de maneira menos desenvolvida.</span>
<span>Podem parecer distantes em situações emocionais intensas.</span>
<br /> <br />
</span>
  <span>
    <span className="font-semibold">Relações Pessoais com INTPs:</span>
    <br />
    <span>
      INTPs valorizam relações intelectuais e apreciam a independência pessoal. Podem parecer reservados,
      mas são leais aos amigos próximos e à família.
    </span>
  </span>
  <span className="font-semibold">Compatibilidade INTP:</span>
  <br />
  <span>
    Boa compatibilidade com tipos de personalidade como <span className="text-green-300">ENTJ</span>,{" "}
    <span className="text-yellow-300">ENFJ</span>. Menos compatíveis com <span className="text-red-600">ESFJ</span>,{" "}
    <span className="text-blue-200">ESTJ.</span>
  </span>
  <span>Essa descrição destaca os traços essenciais do tipo de personalidade <span className="text-purple-600">INTP</span>,
  oferecendo insights sobre como eles se relacionam, pensam e enfrentam desafios na vida cotidiana.</span>
</p>
      </MainDiv>
    </MainDivContainer>
    )
}