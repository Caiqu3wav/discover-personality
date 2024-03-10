import React from "react";
import EsfpPic from "../../../../public/assets/mbti-char-imgs/esfp.png"
import Image from "next/image";
import "../mbtipages.css"
import MainDivContainer from "../../components/MainDiv/MainDivContainer";
import MainDiv from "../../components/MainDiv/MainDiv";

export default function EsfpPage() {

    return(
        <MainDivContainer>
      <MainDiv>

      <Image src={EsfpPic} className="a w-[160px] self-center mt-4" alt="" />
<h1 className="title-type text-3xl font-bold self-center text-yellow-500">ESFP</h1>
<p className="flex text-green-600 font-semibold gap-2 self-center">
  <span>SE</span> <span>FI</span> <span>TE</span> <span>NI</span>
</p>
<p className="flex flex-col gap-3">
  <span>
    ESFP é um dos 16 tipos de personalidade identificados pelo Indicador de Tipo de Personalidade Myers-Briggs (MBTI).
    Se você se identifica como ESFP, significa que seu tipo de personalidade é melhor descrito como Extrovertido,
    Observador, Sentimental e Prospetivo. Às vezes, referidos como o "Animador" ou o "Realizador", as pessoas com este
    tipo de personalidade geralmente são espontâneas, sociais e adaptáveis.
  </span>
  <span className="text-green-800 font-semibold">Principais Características do ESFP:</span>
  <span className="text-slate-500">Espontâneo:</span>
  <span>
    Com sua natureza extrovertida e observadora, ESFPs são espontâneos e vivem o momento. Eles estão abertos a
    experiências novas.
  </span>
  <span className="text-slate-500">Sociável:</span>
  <span>
    ESFPs valorizam a interação social e são frequentemente o centro das atenções. Eles têm uma habilidade natural para
    se conectar com os outros.
  </span>
  <span className="text-slate-500">Adaptável:</span>
  <span>
    ESFPs lidam bem com mudanças e são flexíveis em diversas situações. Eles preferem se adaptar do que seguir planos
    rígidos.
  </span>
  <span className="text-slate-500">Sensível:</span>
  <span>
    ESFPs são sensíveis aos sentimentos dos outros e expressam suas emoções de maneira calorosa e afetuosa.
  </span>
  <span className="flex flex-row gap-2">
    <span className="flex flex-col gap-2 border-solid border-r-2 border-slate-700">
      <span className="text-blue-400 font-semibold">Pontos Fortes:</span>
      <span>Espontâneos e vivem o momento.</span>
      <span>Sociáveis e conectados.</span>
      <span>Adaptáveis e flexíveis.</span>
      <span>Expressivos e afetuosos.</span>
      <span>Capazes de lidar com o estresse.</span>
    </span>
    <span className="flex flex-col gap-2">
      <span className="text-blue-400 font-semibold">Pontos Fracos:</span>
      <span>Tendência a evitar compromissos de longo prazo.</span>
      <span>Podem ser impulsivos em decisões.</span>
      <span>Podem se entediar facilmente.</span>
      <span>Dificuldade em lidar com detalhes complexos.</span>
    </span>
  </span>
  <span>
    <span className="text-green-700">Funções Cognitivas do ESFP:</span>
    <br />
    <span className="text-orange-400">Dominante: Sensação Extravertida (Se):</span>
    <br />
    <span>Vivem no presente, atentos aos detalhes sensoriais.</span>
    <span>Buscam experiências sensoriais e novas aventuras.</span>
    <br /> <br />
    <span className="text-blue-400">Auxiliar: Sentimento Introvertido (Fi):</span>
    <br />
    <span>Baseiam decisões em valores pessoais e autenticidade.</span>
    <span>Preocupam-se com o bem-estar dos outros.</span>
    <br /> <br />
    <span className="text-red-600">Terciária: Pensamento Extravertido (Te):</span>
    <br />
    <span>Tomam decisões práticas para atingir objetivos tangíveis.</span>
    <span>São eficazes ao lidar com situações do dia a dia.</span>
    <br /> <br />
    <span className="text-yellow-400">Inferior: Intuição Introvertida (Ni):</span>
    <br />
    <span>Exploram possibilidades futuras, mesmo que menos desenvolvidas.</span>
    <span>Têm visões idealistas de futuro.</span>
    <br /> <br />
  </span>
  <span>
    <span className="font-semibold">Relações Pessoais com ESFPs:</span>
    <br />
    <span>
      ESFPs apreciam relacionamentos sociais e são carismáticos. São expressivos e fazem amigos facilmente. Podem ter
      dificuldade em se comprometer a longo prazo.
    </span>
  </span>
  <span className="font-semibold">Compatibilidade ESFP:</span>
  <br />
  <span>
    Boa compatibilidade com tipos de personalidade como{" "}
    <span className="text-green-300">ISFP</span>, <span className="text-yellow-300">ISTP</span>. Menos compatíveis com{" "}
    <span className="text-red-600">INFJ</span>, <span className="text-blue-200">INTJ.</span>
  </span>
  <span>
    Essa descrição destaca os traços essenciais do tipo de personalidade{" "}
    <span className="text-purple-600">ESFP</span>, oferecendo insights sobre como eles se relacionam, pensam e enfrentam
    desafios na vida cotidiana.
  </span>
</p>
      </MainDiv>
    </MainDivContainer>
    )
}