import React from "react";
import IntjPic from "../../../../public/assets/mbti-char-imgs/png-transparent-architect-intj-myers-briggs-type-indicator-personality-career-rationality-purple-violet-architect.png"
import Image from "next/image";
import "../mbtipages.css"
import MainDivContainer from "../../components/MainDiv/MainDivContainer";
import MainDiv from "../../components/MainDiv/MainDiv";

export default function IntjPage() {

    return(
        <MainDivContainer>
      <MainDiv>
        <Image src={IntjPic} className="a w-[160px] self-center mt-4" alt=""/>
        <h1 className="title-type text-3xl font-bold self-center text-purple-600">INTJ</h1>
        <p className="flex text-green-600 font-semibold gap-2 self-center"><span>NI</span> <span>TE</span> <span>FI</span> <span>SE</span></p>
        <p className="flex flex-col gap-3"><span>O tipo de personalidade INTJ, que significa Introvertido, Intuitivo, Pensativo e Julgador, é uma das 16 categorias
             identificadas pelo indicador de tipo de personalidade Myers-Briggs (MBTI). Também conhecido como "Arquiteto" ou "Estrategista", 
             indivíduos com personalidade INTJ são altamente analíticos, criativos e lógicos. No entanto, é importante lembrar que o MBTI
              é uma ferramenta popular, mas alguns críticos questionam sua validade e confiabilidade.</span>

              <span className="text-green-800 font-semibold">Características Chave do INTJ:</span>

              <span className="text-slate-500">Introversão e Independência:</span>

              <span>Tendem a ser introvertidos e preferem trabalhar sozinhos.
Demonstram autoconfiança e são trabalhadores, mas essa característica pode ser interpretada como insensibilidade.</span>
<span className="text-slate-500">Visão Ampliada:</span>

<span>Focam na visão global e preferem informações abstratas a detalhes concretos.
São perfeccionistas.</span>
<span className="text-slate-500">Enfase na Lógica:</span>

<span>Valorizam a lógica e informações objetivas, sendo desconfortáveis ao falar sobre emoções.
Preferem um mundo controlado e organizado, fazendo planos com antecedência.</span>
<span className="flex flex-row gap-2">
<span className="flex flex-col gap-2 border-solid border-r-2 border-slate-700">
<span className="text-blue-400 font-semibold">Pontos Fortes:</span>

<span>Gostam de conceitos teóricos e abstratos.</span>
<span>Têm expectativas elevadas.</span>
<span>São bons ouvintes.</span>
<span>Aceitam críticas bem.</span>
<span>Autoconfiantes e trabalhadores.</span>

</span>
<span className="flex flex-col gap-2">
<span className="text-blue-400 font-semibold">Pontos Fracos:</span>

<span>Podem ser excessivamente analíticos e críticos.</span>
<span>Perfeccionistas.</span>
<span>Não gostam de falar sobre emoções.</span>
<span>Às vezes parecem frios ou insensíveis.</span>
</span>
</span>
<span>
<span className=" text-green-700">Funções Cognitivas do INTJ:</span>
<br />
<span className="text-orange-400">Dominante: Intuição Introvertida (Ni):</span>
<br />
<span>Buscam padrões, significados e possibilidades.
Interessam-se mais pelo que esses fatos significam do que pelos fatos em si.</span> <br /> <br />
<span className="text-blue-400">Auxiliar: Pensamento Extravertido (Te):</span>
<br />
<span>Procuram ordem, controle e estrutura.
Abordam problemas de maneira deliberada e metódica, tomando decisões com base na lógica.</span> <br /> <br />
<span className="text-red-600">Terciária: Sentimento Introvertido (Fi):</span> <br />

<span>Utilizam o sentimento introvertido em menor grau.
Dão mais atenção a valores e sentimentos ao tomar decisões.</span> <br /> <br />
<span className="text-yellow-400">Inferior: Sensação Extravertida (Se):</span> <br />

<span>Menos desenvolvida, mas ainda exerce alguma influência.
Permite processar informações através dos sentidos.
</span> <br /> <br />
</span>

<span>
<span className="font-semibold">Relações Pessoais com INTJs:</span>
<br />
<span>São introvertidos, reservados e passam muito tempo em seus próprios pensamentos.
Funcionam melhor quando estão sozinhos e preferem atividades solitárias.
Apesar de não demonstrarem grande interesse nos pensamentos e sentimentos dos outros, se importam com as emoções das pessoas próximas.
Podem parecer frios e distantes, tornando desafiador estabelecer novas amizades.</span></span>
<span className="font-semibold">Compatibilidade INTJ:</span>
<br />
<span>Boa compatibilidade com tipos de personalidade como <span className=" text-green-300">ENFP</span>, <span className=" text-yellow-300">ENTP</span> e <span className="text-blue-600">ESTP</span>.
Menos compatíveis com <span className="text-red-600">ISFP</span>, <span className=" text-blue-200">ISFJ</span> e  <span className=" text-gray-400">ESFJ</span>.
Essa descrição destaca os traços essenciais do tipo de personalidade <span className="text-purple-600">INTJ</span>, oferecendo insights sobre como eles se relacionam, pensam e enfrentam desafios na vida cotidiana.</span></p>
      </MainDiv>
    </MainDivContainer>
    )
}