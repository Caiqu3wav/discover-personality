import React from "react";
import InfpPic from "../../../../public/assets/mbti-char-imgs/infp.png";
import Image from "next/image";
import "../mbtipages.css";
import MainDivContainer from "../../components/MainDiv/MainDivContainer";
import MainDiv from "../../components/MainDiv/MainDiv";

export default function InfpPage() {

    return(
        <MainDivContainer>
      <MainDiv>
      <Image src={InfpPic} className="a w-[160px] self-center mt-4" alt="" />
<h1 className="title-type text-3xl font-bold self-center text-green-500">INFP</h1>
<p className="flex text-green-600 font-semibold gap-2 self-center">
  <span>FI</span> <span>NE</span> <span>SI</span> <span>TE</span>
</p>
<p className="flex flex-col gap-3">
  <span>
    INFP é um dos 16 tipos de personalidade identificados pelo Indicador de Tipo de Personalidade Myers-Briggs (MBTI).
    Se você se identifica como INFP, significa que seu tipo de personalidade é melhor descrito como Introvertido,
    Intuitivo, Sentimental e Prospectivo. Às vezes, referidos como o "Mediador" ou o "Sonhador", as pessoas com este
    tipo de personalidade geralmente são idealistas, criativas e orientadas para valores.
  </span>
  <span className="text-green-800 font-semibold">Principais Características do INFP:</span>
  <span className="text-slate-500">Idealistas:</span>
  <span>
    INFPs são orientados para valores e têm uma forte conexão com seus ideais. Eles buscam significado e autenticidade em tudo o que fazem.
  </span>
  <span className="text-slate-500">Criativos e Artísticos:</span>
  <span>
    Com uma mente imaginativa, INFPs expressam sua criatividade por meio de diversas formas artísticas. Valorizam a originalidade.
  </span>
  <span className="text-slate-500">Empáticos e Compassivos:</span>
  <span>
    INFPs são altamente sensíveis às emoções dos outros. Eles se esforçam para entender e apoiar as necessidades emocionais de quem está ao seu redor.
  </span>
  <span className="text-slate-500">Adaptáveis:</span>
  <span>
    INFPs preferem manter sua liberdade e flexibilidade. Eles se adaptam bem a diferentes situações, buscando experiências significativas.
  </span>
  <span className="flex flex-row gap-2">
    <span className="flex flex-col gap-2 border-solid border-r-2 border-slate-700">
      <span className="text-blue-400 font-semibold">Pontos Fortes:</span>
      <span>Valorizam ideais e autenticidade.</span>
      <span>Criativos e expressivos artisticamente.</span>
      <span>Empáticos e compassivos.</span>
      <span>Adaptáveis e flexíveis.</span>
      <span>Bons ouvintes e comunicadores.</span>
    </span>
    <span className="flex flex-col gap-2">
      <span className="text-blue-400 font-semibold">Pontos Fracos:</span>
      <span>Tendência a serem demasiadamente idealistas.</span>
      <span>Podem ser sensíveis em excesso.</span>
      <span>Dificuldade em lidar com conflitos.</span>
      <span>Podem procrastinar devido à busca pela perfeição.</span>
    </span>
  </span>
  <span>
    <span className="text-green-700">Funções Cognitivas do INFP:</span>
    <br />
    <span className="text-orange-400">Dominante: Sentimento Introvertido (Fi):</span>
    <br />
    <span>Tomam decisões baseadas em valores pessoais.</span>
    <span>Buscam autenticidade e significado.</span>
    <br /> <br />
    <span className="text-blue-400">Auxiliar: Intuição Extravertida (Ne):</span>
    <br />
    <span>Exploram possibilidades e conexões criativas.</span>
    <span>Tendem a ser visionários e imaginativos.</span>
    <br /> <br />
    <span className="text-red-600">Terciária: Sensação Introvertida (Si):</span>
    <br />
    <span>Valorizam experiências passadas e lembranças.</span>
    <span>Podem ter uma conexão profunda com a nostalgia.</span>
    <br /> <br />
    <span className="text-yellow-400">Inferior: Pensamento Extravertido (Te):</span>
    <br />
    <span>Menos desenvolvido, influencia o INFP em situações de estresse.</span>
    <span>Tendência a buscar lógica e estrutura sob pressão.</span>
    <br /> <br />
  </span>
  <span>
    <span className="font-semibold">Relações Pessoais com INFPs:</span>
    <br />
    <span>
      INFPs valorizam conexões profundas e significativas. São comunicativos, mas podem ser reservados. Procuram compreensão mútua.
    </span>
  </span>
  <span className="font-semibold">Compatibilidade INFP:</span>
  <br />
  <span>
    Boa compatibilidade com tipos de personalidade como <span className="text-green-300">ENFJ</span>,{" "}
    <span className="text-yellow-300">ENTJ</span>. Menos compatíveis com <span className="text-red-600">ISTP</span>,{" "}
    <span className="text-blue-200">ISFP.</span>
  </span>
  <span>
    Essa descrição destaca os traços essenciais do tipo de personalidade <span className="text-purple-600">INFP</span>,
    oferecendo insights sobre como eles se relacionam, pensam e enfrentam desafios na vida cotidiana.
  </span>
</p>
      </MainDiv>
    </MainDivContainer>
    )
}