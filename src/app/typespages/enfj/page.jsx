import React from "react";
import EnfjPic from "../../../../public/assets/mbti-char-imgs/enfj.png"
import Image from "next/image";
import "../mbtipages.css"
import MainDivContainer from "../../components/MainDiv/MainDivContainer";
import MainDiv from "../../components/MainDiv/MainDiv";

export default function EnfjPage() {

    return(
        <MainDivContainer>
      <MainDiv>
        <Image src={EnfjPic} className="a w-[160px] self-center mt-4" alt=""/>
        <h1 className="title-type text-3xl font-bold self-center text-green-300">ENFJ</h1>
        <p className="flex text-green-600 font-semibold gap-2 self-center"><span>FE</span> <span>NI</span> <span>SE</span> <span>TI</span></p>
        <p className="flex flex-col gap-3"><span>ENFJ é um dos 16 tipos de personalidade identificados pelo Indicador de Tipo de Personalidade 
            Myers-Briggs (MBTI). Se você se identifica como ENFJ, significa que seu tipo de personalidade é melhor descrito como Extrovertido,
             Intuitivo, Sentimental e Julgador. Às vezes, referidos como o "Professor" ou o "Protagonista", as pessoas com este tipo de 
             personalidade geralmente são sociáveis e têm uma habilidade natural para liderar e inspirar os outros.</span>

              <span className="text-green-800 font-semibold">Principais Características do ENFJ:</span>

              <span className="text-slate-500">Empático:</span>

              <span>Com sua natureza extrovertida e habilidade de entender as emoções dos outros, ENFJs são empáticos e calorosos. Eles se 
                conectam facilmente com os sentimentos alheios e estão dispostos a ajudar.</span>
<span className="text-slate-500">Líder Natural:</span>

<span>ENFJs frequentemente encontram-se em papéis de liderança devido à sua habilidade de inspirar e motivar os outros. Eles têm uma visão
     clara e estão determinados a alcançar objetivos significativos.</span>
<span className="text-slate-500">Entusiasta:</span>

<span>Animados e entusiasmados, ENFJs têm uma energia contagiante que atrai os outros. Eles acreditam no potencial humano e inspiram aqueles
     ao seu redor a alcançar o melhor de si mesmos.</span>
<span className="text-slate-500">Organizado e Decidido:</span>
<span>ENFJs gostam de estrutura e organização. Eles tomam decisões de forma rápida e eficiente, focando no que é melhor para o grupo.</span>

<span className="text-slate-500">Altruístas:</span>

<span>Motivados pelo desejo de fazer o bem, ENFJs se dedicam a causas humanitárias e muitas vezes se envolvem em atividades de serviço 
    social.</span>
<span className="flex flex-row gap-2">
<span className="flex flex-col gap-2 border-solid border-r-2 border-slate-700">
<span className="text-blue-400 font-semibold">Pontos Fortes:</span>

<span>Carismáticos e inspiradores.</span>
<span>Compassivos e compreensivos.</span>
<span>Bons comunicadores.</span>
<span>Organizados e decisivos.</span>
<span>Motivados por valores e ética.</span>
<span>Bons líderes.</span>
</span>

<span className="flex flex-col gap-2">
<span className="text-blue-400 font-semibold">Pontos Fracos:</span>

<span>Propensos a se sobrecarregarem devido ao excesso de compromissos.</span>
<span>Dificuldade em lidar com críticas.</span>
<span>Tendência a evitar conflitos, buscando harmonia e o melhor para todos.</span>
</span>
</span>
<span>
<span className=" text-green-700">Funções Cognitivas do ENFJ:</span>
<br />
<span className="text-orange-400">Dominante: Extroversão de Sentimento (Fe):</span>
<br />
<span>Preocupados com o bem-estar dos outros.</span>
<span>Buscam a harmonia e evitam conflitos sempre que possível.</span> <br /> <br />
<span className="text-blue-400">Auxiliar: Intuição Introvertida (Ni):</span>
<br />
<span>Possuem uma visão clara do futuro e das possibilidades.</span>

<span>Focados em objetivos de longo prazo.</span>
 <br /> <br />
<span className="text-red-600">Terciária: Sensação Extrovertida (Se):</span> <br />

<span>Observam e interagem com o ambiente imediato.</span>
<span>Apreciadores de experiências sensoriais e atividades físicas.</span> <br /> <br />
<span className="text-yellow-400">Inferior: Pensamento Introvertido (Ti):</span> <br />

<span>Menos desenvolvida, mas influencia o ENFJ.</span>
<span>Buscam lógica interna e estrutura em situações complexas.
</span> <br /> <br />
</span>

<span>
<span className="font-semibold">Relações Pessoais com INFJs:</span>
<br />
<span>ENFJs valorizam relacionamentos profundos e significativos. São comunicativos e estão sempre dispostos a ouvir os outros. Embora busquem harmonia, podem evitar conflitos para manter a paz. São leais e dedicados 
    a seus entes queridos, buscando o bem-estar do grupo.</span></span>
<span className="font-semibold">Compatibilidade ENFJ:</span>
<br />
<span>Boa compatibilidade com tipos de personalidade como <span className=" text-green-300">INFP</span>, <span className=" text-yellow-300">INTP</span>.
Menos compatíveis com <span className="text-red-600">ISTJ</span>, <span className=" text-blue-200">ISFJ.</span>
Essa descrição destaca os traços essenciais do tipo de personalidade <span className="text-purple-600">ENFJ</span>, oferecendo insights sobre como eles se relacionam, pensam e enfrentam desafios na vida cotidiana.</span></p>
      </MainDiv>
    </MainDivContainer>
    )
}