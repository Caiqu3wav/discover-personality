import React from "react";
import EstjPic from "../../../../public/assets/mbti-char-imgs/estj.webp";
import Image from "next/image";
import "../mbtipages.css"
import MainDivContainer from "../../components/MainDiv/MainDivContainer";
import MainDiv from "../../components/MainDiv/MainDiv";

export default function EstjPage() {

    return(
        <MainDivContainer>
      <MainDiv>
      <Image src={EstjPic} className="a w-[160px] self-center mt-4" alt="" />
<h1 className="title-type text-3xl font-bold self-center text-blue-500">ESTJ</h1>
<p className="flex text-green-600 font-semibold gap-2 self-center">
  <span>SE</span> <span>TI</span> <span>FE</span> <span>NI</span>
</p>
<p className="flex flex-col gap-3">
  <span>
    ESTJ é um dos 16 tipos de personalidade identificados pelo Indicador de Tipo de Personalidade Myers-Briggs (MBTI).
    Se você se identifica como ESTJ, significa que seu tipo de personalidade é melhor descrito como Extrovertido,
    Observador, Sentimental e Julgador. Às vezes, referidos como o "Supervisor" ou o "Guardião", as pessoas com este
    tipo de personalidade geralmente são práticas, organizadas e focadas em seguir regras.
  </span>
  <span className="text-green-800 font-semibold">Principais Características do ESTJ:</span>

  <span className="text-slate-500">Organizado:</span>

  <span>
    Com sua natureza extrovertida e observadora, ESTJs são organizados e apreciam estrutura. Eles são adeptos de seguir
    regras e procedimentos.
  </span>
  <span className="text-slate-500">Prático:</span>
  <span>
    ESTJs valorizam a praticidade e preferem abordagens diretas para lidar com desafios. Eles se concentram nas soluções
    concretas do presente.
  </span>
  <span className="text-slate-500">Focado em Dever:</span>
  <span>
    ESTJs são responsáveis e comprometidos com suas responsabilidades. Eles acreditam em cumprir deveres e obrigações.
  </span>
  <span className="text-slate-500">Justo:</span>
  <span>
    ESTJs são justos e buscam a equidade. Eles acreditam em seguir princípios éticos e agem com integridade.
  </span>
  <span className="flex flex-row gap-2">
    <span className="flex flex-col gap-2 border-solid border-r-2 border-slate-700">
      <span className="text-blue-400 font-semibold">Pontos Fortes:</span>
      <span>Organizados e apreciam estrutura.</span>
      <span>Práticos e focados em soluções concretas.</span>
      <span>Responsáveis e comprometidos.</span>
      <span>Justos e éticos.</span>
      <span>Seguem regras e procedimentos.</span>
    </span>

    <span className="flex flex-col gap-2">
      <span className="text-blue-400 font-semibold">Pontos Fracos:</span>

      <span>Podem ser inflexíveis em certas situações.</span>
      <span>Às vezes, têm dificuldade em lidar com mudanças.</span>
      <span>Tendem a ser críticos em relação aos outros.</span>
      <span>Podem ser relutantes em considerar novas perspectivas.</span>
    </span>
</span>
<span>
  <span className="text-green-700">Funções Cognitivas do ESTJ:</span>
  <br />
  <span className="text-blue-400">Dominante: Pensamento Extravertido (Te):</span>
  <br />
  <span>Buscam ordem e eficiência no ambiente.</span>
  <span>Tomam decisões objetivas e lógicas.</span>
  <br /> <br />
  <span className="text-orange-400">Auxiliar: Sensação Introvertida (Si):</span>
  <br />
  <span>Baseiam-se em experiências passadas e detalhes concretos.</span>
  <span>Valorizam a tradição e a estabilidade.</span>
  <br /> <br />
  <span className="text-red-600">Terciária: Intuição Extravertida (Ne):</span>
  <br />
  <span>Exploram novas possibilidades e conexões.</span>
  <span>Pensam de forma inovadora e imaginativa.</span>
  <br /> <br />
  <span className="text-yellow-400">Inferior: Sentimento Introvertido (Fi):</span>
  <br />

  <span>Consideram os valores pessoais e emocionais.</span>
  <span>Podem ter dificuldade em expressar emoções abertamente.</span>
  <br /> <br />
</span>
<span>
  <span className="font-semibold">Relações Pessoais com ESTJs:</span>
  <br />
  <span>
    ESTJs valorizam relações estruturadas e compromissos sólidos. São leais e esperam que os outros cumpram suas
    responsabilidades. Comprometem-se com a tradição e a estabilidade.
  </span>
</span>
<span className="font-semibold">Compatibilidade ESTJ:</span>
<br />
<span>
  Boa compatibilidade com tipos de personalidade como <span className="text-green-300">ISTP</span>,{" "}
  <span className="text-yellow-300">ISFP</span>. Menos compatíveis com <span className="text-red-600">ENFP</span>,{" "}
  <span className="text-blue-200">INFP.</span>
</span>
<span>
  Essa descrição destaca os traços essenciais do tipo de personalidade{" "}
  <span className="text-purple-600">ESTJ</span>, oferecendo insights sobre como eles se relacionam, pensam e enfrentam
  desafios na vida cotidiana.
</span>
</p>
      </MainDiv>
    </MainDivContainer>
    )
}