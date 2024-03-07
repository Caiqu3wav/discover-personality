import "./Hero.css"
import NavVertBar from "../NavVertBar/NavVertBar";
import PersonalitiesHome from "../PersonalitiesHome/PersonalitiesHome";
import Link from "next/link";


export default function Hero() {

    return(
        <main className="flex flex-col">
        <div className="flex justify-around">
        <div className="hero-container-one w-[750px] flex flex-col gap-3 ml-20 rounded-xl mt-2 pb-4 text-bold majorthree0.5:ml-10 midtw:ml-4">
            <h1 className="text-green-500 font-bold text-[40px] midtwo2:text-[32px]">O que é o MBTI</h1>
            <p>O MBTI, abreviação para "Indicador de Tipo Myers-Briggs", constitui um estudo 
                psicológico que postula a existência de 16 tipos distintos de personalidades na sociedade. 
                Cada tipo tem a combinação de quatro letras: E para extroversão,
                 I para introversão, S para sensorial, N para intuição, T para pensamento e F para sentimento. 
                 Esta metodologia visa mapear as diversas maneiras como indivíduos pensam e percebem o mundo ao seu redor.</p>

                 <p>Desenvolvido com base nos princípios da teoria psicológica de Carl Gustav Jung, o MBTI propõe que a compreensão das 
preferências psicológicas inatas de uma pessoa pode oferecer insights valiosos sobre sua tomada de decisões, interações 
sociais e estratégias de resolução de problemas. Carl Jung, renomado psiquiatra suíço, contribuiu significativamente para 
a compreensão dos padrões comportamentais e psicológicos subjacentes à teoria.</p>

<p>Os tipos de personalidade, como exemplificado pelos extremos "ESFP" e "INTJ", representam distintos modos de interação com
 o mundo. Enquanto o primeiro é associado à energia extrovertida, entusiasmo e foco no presente, o último é caracterizado 
 por uma abordagem mais introvertida, uma visão orientada para o futuro e uma ênfase em interesses pessoais.</p>

<p>Apesar de carecer de robustas evidências científicas, a teoria MBTI encontra aplicação prática em diversos setores, 
sendo frequentemente empregada por empresas na gestão de equipes e processos de seleção. Esta ferramenta proporciona uma 
compreensão mais profunda das nuances individuais, desde pontos fortes até medos e inseguranças, servindo como uma valiosa 
fonte de autoconhecimento.</p>

<p>Criado por Katharine Cook Briggs e sua filha Isabel Briggs Myers, o MBTI consolidou-se como um instrumento de análise 
psicológica amplamente utilizado. Sua popularidade, embora questionada em termos de validação científica, destaca-se pela
 capacidade de oferecer insights práticos e intuitivos sobre as complexidades da natureza humana.</p>

 <p>Em síntese, o MBTI, inspirado nas ideias de Carl Jung e moldado por Briggs e Myers, propõe uma abordagem distintiva para
 compreender as nuances da personalidade humana. Apesar das críticas científicas, sua aplicação prática persiste, fornecendo 
 uma valiosa lente para a autoexploração e compreensão das dinâmicas interpessoais.</p>

 <p>Para entender mais sobre como o tipo mbti é relacionado com o modo de pensar e agir no mundo veja mais sobre as <Link href="/functionspage">Funções cognitivas</Link></p>
        </div>
        <NavVertBar/>
        </div>
        <div className="flex items-center justify-center">
        <PersonalitiesHome/>
        </div>
        </main>
    );
}