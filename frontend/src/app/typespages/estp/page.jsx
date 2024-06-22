import React from "react";
import EstpPic from "../../../../public/assets/mbti-char-imgs/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9fUVAtYy9NQUZ1ZXJfUVAtYy8xL3AucG5n.png"
import Image from "next/image";
import "../mbtipages.css"
import MainDivContainer from "../../components/MainDiv/MainDivContainer";
import MainDiv from "../../components/MainDiv/MainDiv";

export default function EstpPage() {

    return(
        <MainDivContainer>
      <MainDiv>

      <Image src={EstpPic} className="a w-[160px] self-center mt-4" alt="" />
<h1 className="title-type text-3xl font-bold self-center text-yellow-500">ESTP</h1>
<p className="flex text-green-600 font-semibold gap-2 self-center">
  <span>SE</span> <span>TI</span> <span>FE</span> <span>NI</span>
  </p>
<p className="flex flex-col gap-3">
  <span>
    ESTP é um dos 16 tipos de personalidade identificados pelo Indicador de Tipo de Personalidade Myers-Briggs (MBTI).
    Se você se identifica como ESTP, significa que seu tipo de personalidade é melhor descrito como Extrovertido,
    Observador, Sentimental e Prospectivo. Às vezes, referidos como o "Empreendedor" ou o "Realizador", as pessoas com este
    tipo de personalidade geralmente são práticas, adaptáveis e centradas no presente.
  </span>
<span className="text-green-800 font-semibold">Principais Características do ESTP:</span>

<span className="text-slate-500">Adaptável:</span>

  <span>
    Com sua natureza extrovertida e observadora, ESTPs são adaptáveis e vivem o momento. Eles são hábeis em lidar com
    situações imediatas.
  </span>
  <span className="text-slate-500">Prático:</span>
  <span>
    ESTPs valorizam a ação e preferem lidar com problemas de forma prática. Eles se concentram nas soluções do presente.
  </span>
  <span className="text-slate-500">Espontâneo:</span>
  <span>
    ESTPs abordam situações de maneira flexível e espontânea. Eles estão abertos a novas experiências e desafios.
  </span>
  <span className="text-slate-500">Corajoso:</span>
  <span>
    ESTPs são corajosos e gostam de assumir riscos. Eles enfrentam desafios de forma destemida e confiante.
  </span>
  <span className="flex flex-row gap-2">
    <span className="flex flex-col gap-2 border-solid border-r-2 border-slate-700">
      <span className="text-blue-400 font-semibold">Pontos Fortes:</span>
      <span>Adaptáveis e vivem o momento.</span>
  <span>Práticos e centrados no presente.</span>
  <span>Espontâneos e abertos a desafios.</span>
  <span>Corajosos e destemidos.</span>
  <span>Ágeis em lidar com situações imediatas.</span>
</span>

<span className="flex flex-col gap-2">
  <span className="text-blue-400 font-semibold">Pontos Fracos:</span>

  <span>Podem ser impulsivos e arriscados demais.</span>
  <span>Tendência a evitar planejamento a longo prazo.</span>
  <span>Podem ser insensíveis aos sentimentos alheios.</span>
  <span>Buscam gratificação instantânea.</span>
</span>
</span>
  <span>
    <span className="text-green-700">Funções Cognitivas do ESTP:</span>
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
    <span className="font-semibold">Relações Pessoais com ESTPs:</span>
    <br />
    <span>
      ESTPs valorizam relações dinâmicas e imediatas. São sociáveis, mas podem parecer insensíveis em certas situações.
      Comprometem-se com a ação e preferem gratificação instantânea.
    </span>
  </span>
  <span className="font-semibold">Compatibilidade ESTP:</span>
  <br />
  <span>
    Boa compatibilidade com tipos de personalidade como <span className="text-green-300">ISTJ</span>,{" "}
    <span className="text-yellow-300">ISFJ</span>. Menos compatíveis com <span className="text-red-600">ENFJ</span>,{" "}
    <span className="text-blue-200">INFJ.</span>
  </span>
  <span>Essa descrição destaca os traços essenciais do tipo de personalidade <span className="text-purple-600">ESTP</span>,
  oferecendo insights sobre como eles se relacionam, pensam e enfrentam desafios na vida cotidiana.</span>
</p>
      </MainDiv>
    </MainDivContainer>
    )
}