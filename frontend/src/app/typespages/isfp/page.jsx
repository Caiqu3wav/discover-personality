import React from "react";
import IsfpPic from "../../../../public/assets/mbti-char-imgs/isfp.png"
import Image from "next/image";
import "../mbtipages.css"
import MainDivContainer from "../../components/MainDiv/MainDivContainer";
import MainDiv from "../../components/MainDiv/MainDiv";

export default function IsfpPage() {

    return(
        <MainDivContainer>
      <MainDiv>

      <Image src={IsfpPic} className="a w-[160px] self-center mt-4" alt="" />
<h1 className="title-type text-3xl font-bold self-center text-yellow-500">ISFP</h1>
<p className="flex text-green-600 font-semibold gap-2 self-center">
  <span>FI</span> <span>SE</span> <span>NI</span> <span>TE</span>
</p>
<p className="flex flex-col gap-3">
  <span>
    ISFP é um dos 16 tipos de personalidade identificados pelo Indicador de Tipo de Personalidade Myers-Briggs (MBTI).
    Se você se identifica como ISFP, significa que seu tipo de personalidade é melhor descrito como Introvertido,
    Observador, Sentimental e Prospectivo. Às vezes, referidos como o "Aventureiro" ou o "Compositor", as pessoas com este
    tipo de personalidade geralmente são espontâneas, artísticas e centradas em experiências.
  </span>
  <span className="text-green-800 font-semibold">Principais Características do ISFP:</span>

  <span className="text-slate-500">Autêntico:</span>

  <span>
    Com sua natureza introvertida e observadora, ISFPs são autênticos e vivem de acordo com seus valores pessoais.
  </span>
  <span className="text-slate-500">Artístico:</span>
  <span>
    ISFPs têm uma inclinação natural para a expressão artística. Eles apreciam a beleza e se dedicam à criatividade.
  </span>
  <span className="text-slate-500">Sensível:</span>
  <span>
    ISFPs são sensíveis às emoções, tanto suas quanto dos outros. Eles valorizam conexões emocionais profundas.
  </span>
  <span className="text-slate-500">Adaptação:</span>
  <span>
    ISFPs são flexíveis e gostam de se adaptar a novas situações. Eles apreciam a liberdade e a espontaneidade.
  </span>
  <span className="flex flex-row gap-2">
    <span className="flex flex-col gap-2 border-solid border-r-2 border-slate-700">
      <span className="text-blue-400 font-semibold">Pontos Fortes:</span>
      <span>Autênticos e leais.</span>
      <span>Artísticos e criativos.</span>
      <span>Sensíveis e compassivos.</span>
      <span>Adaptáveis e flexíveis.</span>
      <span>Valorizam a liberdade.</span>
    </span>

    <span className="flex flex-col gap-2">
      <span className="text-blue-400 font-semibold">Pontos Fracos:</span>

      <span>Podem ser reservados em situações sociais.</span>
      <span>Tendência a evitar confrontos.</span>
      <span>Podem ser sensíveis demais às críticas.</span>
      <span>Propensos a procrastinação.</span>
    </span>
  </span>

  <span>
    <span className="text-green-700">Funções Cognitivas do ISFP:</span>
    <br />
    <span className="text-orange-400">Dominante: Sentimento Introvertido (Fi):</span>
    <br />
    <span>Tomam decisões baseadas em valores internos.</span>
    <span>Buscam autenticidade e integridade.</span>
    <br /> <br />
    <span className="text-blue-400">Auxiliar: Sensação Extravertida (Se):</span>
    <br />
    <span>Vivem no momento presente e apreciam experiências sensoriais.</span>
    <span>São práticos e observadores.</span>
    <br /> <br />
    <span className="text-red-600">Terciária: Intuição Introvertida (Ni):</span>
    <br />
    <span>Têm uma visão interiorizada e prospectiva.</span>
    <span>Focam em possibilidades futuras.</span>
    <br /> <br />
    <span className="text-yellow-400">Inferior: Pensamento Extravertido (Te):</span>
    <br />

    <span>Em situações de estresse, podem recorrer à lógica e eficiência.</span>
    <span>Procuram soluções práticas.</span>
    <br /> <br />
  </span>

  <span>
    <span className="font-semibold">Relações Pessoais com ISFPs:</span>
    <br />
    <span>
      ISFPs valorizam relações autênticas e emocionalmente ricas. São leais e dedicados, embora possam ser reservados em
      situações sociais. Expressam carinho por meio de gestos e ações.
    </span>
  </span>
  <span className="font-semibold">Compatibilidade ISFP:</span>
  <br />
  <span>
    Boa compatibilidade com tipos de personalidade como <span className="text-green-300">ESFJ</span>,{" "}
    <span className="text-yellow-300">ESTP</span>. Menos compatíveis com <span className="text-red-600">INTJ</span>,{" "}
    <span className="text-blue-200">INFJ.</span>
  </span>
  <span>
    Essa descrição destaca os traços essenciais do tipo de personalidade{" "}
    <span className="text-purple-600">ISFP</span>, oferecendo insights sobre como eles se relacionam, pensam e enfrentam
    desafios na vida cotidiana.
  </span>
</p>
      </MainDiv>
    </MainDivContainer>
    )
}