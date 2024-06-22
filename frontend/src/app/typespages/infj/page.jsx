import React from "react";
import InfjPic from "../../../../public/assets/mbti-char-imgs/infj.png"
import Image from "next/image";
import "../mbtipages.css"
import MainDivContainer from "../../components/MainDiv/MainDivContainer";
import MainDiv from "../../components/MainDiv/MainDiv";

export default function InfjPage() {

    return(
        <MainDivContainer>
      <MainDiv>
        <Image src={InfjPic} className="a w-[160px] self-center mt-4" alt=""/>
        <h1 className="title-type text-3xl font-bold self-center text-green-300">INFJ</h1>
        <p className="flex text-green-600 font-semibold gap-2 self-center"><span>NI</span> <span>FE</span> <span>TI</span> <span>SE</span></p>
        <p className="flex flex-col gap-3"><span>INFJ é um dos 16 tipos de personalidade identificados pelo Indicador de Tipo de 
            Personalidade Myers-Briggs (MBTI). Se você se identifica como INFJ, significa que seu tipo de personalidade é melhor descrito 
            como Introvertido, Intuitivo, Sentimental e Julgador. Às vezes, referidos como o "Advogado" ou o "Idealista", as pessoas com 
            este tipo de personalidade frequentemente se sentem incompreendidas.</span>

              <span className="text-green-800 font-semibold">Principais Características do INFJ:</span>

              <span className="text-slate-500">Compaixão:</span>

              <span>Com sua forte intuição e compreensão emocional, INFJs podem ser de fala mansa e empáticos. Isso não significa que sejam
                 facilmente influenciáveis; os INFJs têm crenças profundas e a capacidade de agir decisivamente para conseguir o que desejam.</span>
<span className="text-slate-500">Auxiliador:</span>

<span>Apesar de serem naturalmente introvertidos, pessoas com personalidade INFJ podem estabelecer conexões fortes e significativas com outras 
    pessoas. Gostam de ajudar, mas também precisam de tempo e espaço para recarregar suas energias.</span>
<span className="text-slate-500">Idealista:</span>

<span>O que diferencia o INFJ é a habilidade de traduzir seu idealismo em ação. Eles não apenas sonham em mudar o mundo, mas fazem com que isso aconteça.</span>
<span className="text-slate-500">Emocional e Lógico:</span>
<span>Ao tomar decisões, os INFJs dão maior ênfase às emoções do que aos fatos objetivos. Isso não significa que veem o mundo através de lentes cor-de-rosa;
     os INFJs entendem o mundo, tanto o bom quanto o ruim, e esperam torná-lo melhor.</span>
<span className="flex flex-row gap-2">
<span className="flex flex-col gap-2 border-solid border-r-2 border-slate-700">
<span className="text-blue-400 font-semibold">Pontos Fortes:</span>

<span>Sensíveis às necessidades dos outros.</span>
<span>Reservados.</span>
<span>Altamente criativos e artísticos.</span>
<span>Focados no futuro.</span>
<span>Valorizam relacionamentos próximos e profundos.</span>
<span>Gostam de refletir sobre o significado da vida.</span>
<span>Idealistas.</span>

</span>
<span className="flex flex-col gap-2">
<span className="text-blue-400 font-semibold">Pontos Fracos:</span>

<span>Podem ser excessivamente sensíveis.</span>
<span>Às vezes, difíceis de conhecer.</span>
<span>Podem ter expectativas excessivamente altas.</span>
<span>Teimosos.</span>
<span>Não gostam de confrontos.</span>
</span>
</span>
<span>
<span className=" text-green-700">Funções Cognitivas do INFJ:</span>
<br />
<span className="text-orange-400">Dominante: Intuição Introvertida (Ni):</span>
<br />
<span>Altamente focados em suas percepções internas.
Interessam-se mais pelo que esses fatos significam do que pelos fatos em si.</span> <br /> <br />
<span className="text-blue-400">Auxiliar: Sentimento Extravertido (Fe):</span>
<br />
<span>Conscientes dos sentimentos dos outros, mas às vezes menos conscientes de suas próprias emoções.

Podem ter dificuldade em dizer não aos pedidos dos outros.
</span> <br /> <br />
<span className="text-red-600">Terciária: Pensamento Introvertido (Ti):</span> <br />

<span>Utilizam o sentimento introvertido em menor grau.
Dão mais atenção a valores e sentimentos ao tomar decisões.</span> <br /> <br />
<span className="text-yellow-400">Inferior: Sensação Extravertida (Se):</span> <br />

<span>Menos desenvolvida, mas ainda exerce alguma influência.
Permite processar informações através dos sentidos e Ajuda os INFJs a ficarem atentos ao mundo ao seu
 redor e apreciarem atividades físicas..
</span> <br /> <br />
</span>

<span>
<span className="font-semibold">Relações Pessoais com INFJs:</span>
<br />
<span>INFJs têm talento para a linguagem e são bons em se expressar. Apesar de serem reservados e sensíveis, 
    podem ser bons líderes e influenciadores nos bastidores. Impulsionados por valores fortes, buscam significado em 
    todas as áreas de suas vidas, incluindo relacionamentos e trabalho. Apesar de sua natureza introvertida, INFJs são ótimos ouvintes e se 
    destacam em interações emocionais profundas.</span></span>
<span className="font-semibold">Compatibilidade INFJ:</span>
<br />
<span>Boa compatibilidade com tipos de personalidade como <span className=" text-green-300">ENTP</span>, <span className=" text-yellow-300">ENFP</span>.
Menos compatíveis com <span className="text-red-600">ISTP</span>, <span className=" text-blue-200">ESTP.</span>
Essa descrição destaca os traços essenciais do tipo de personalidade <span className="text-purple-600">INFJ</span>, oferecendo insights sobre como eles se relacionam, pensam e enfrentam desafios na vida cotidiana.</span></p>
      </MainDiv>
    </MainDivContainer>
    )
}