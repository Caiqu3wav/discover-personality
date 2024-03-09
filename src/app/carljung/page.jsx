import Header from "../components/Header/header";
import MainDiv from "../components/MainDiv/MainDiv";
import MainDivContainer from "../components/MainDiv/MainDivContainer";
import Image from "next/image";
import CarlJungPic from "../../../public/assets/img/carljung.jpg"

export default function CarlJung() {
    return(
        <MainDivContainer>
            <MainDiv>
                <Image src={CarlJungPic} className="self-center w-[400px] rounded-xl mt-2 border-solid border-2 border-l-green-500
                 border-t-green-500" alt="carl jung"/>
                <h1 className="text-green-600 text-3xl font-semibold">Carl Jung e sua importância na psicologia</h1>
                <p className="text-lg font-medium">Um fato importante citar é que a teoria geral do MBTI quando desenvolvida em si por 
                 Katharine Cook Briggs e sua filha Isabel Briggs Myers na Segunda Guerra Mundial foram 
                 baseadas nos "tipos psicológicos" desenvolvidos por Carl Jung.</p>
                 <p className="text-lg font-medium">
Carl Gustav Jung foi um renomado psiquiatra e psicólogo suíço que desempenhou um papel fundamental no desenvolvimento
 da psicologia analítica. Nascido em 26 de julho de 1875, em Kesswil, Suíça, Jung é conhecido por suas contribuições
  significativas para a compreensão da mente humana, a teoria dos tipos psicológicos e a exploração do inconsciente coletivo.

Aqui estão alguns pontos-chave sobre Carl Jung, seus estudos e contribuições:</p>
<p className="text-lg flex flex-col gap-1"><span className="font-semibold text-blue-400">Teoria dos Tipos Psicológicos:</span>

Jung introduziu a ideia de que as pessoas têm diferentes preferências cognitivas inatas, que ele chamou de "Tipos Psicológicos". Essa teoria 
serviu como base para o desenvolvimento posterior do Indicador de Tipo Myers-Briggs (MBTI).
<span className="font-semibold text-blue-400">Inconsciente Coletivo:</span>

Jung propôs a existência do "inconsciente coletivo", uma camada do inconsciente compartilhada por toda a humanidade. Nesse nível, estão 
os "arquétipos", padrões universais de pensamento, símbolos e mitos que transcendem culturas.
<span className="font-semibold text-blue-400">Arquétipos:</span>

Jung identificou vários arquétipos, como o Herói, a Sombra, o Anima e o Animus. Esses padrões inatos influenciam o comportamento humano, 
afetando a maneira como percebemos e interagimos com o mundo.
<span className="font-semibold text-blue-400">Processos de Individuação:</span>

Jung desenvolveu o conceito de "individuação", um processo de desenvolvimento pessoal que visa à integração de diferentes aspectos da 
psique, incluindo elementos conscientes e inconscientes, para alcançar um estado de totalidade e autoconhecimento.
<span className="font-semibold text-blue-400">Complexos:</span>

Jung cunhou o termo "complexo" para descrever padrões emocionais e experiências carregadas de energia emocional que influenciam o 
comportamento. Os complexos podem surgir de experiências passadas e afetar o modo como respondemos a situações semelhantes no presente.
<span className="font-semibold text-blue-400">Sonhos e Imaginação Ativa:</span>

Jung enfatizou a importância dos sonhos como expressões do inconsciente. Ele desenvolveu a técnica da "imaginação ativa", encorajando os 
pacientes a explorar ativamente os conteúdos do inconsciente durante o estado de vigília.
<span className="font-semibold text-blue-400">Tipos de Energia:</span>

Jung introduziu os conceitos de "energia psíquica" e "libido", que não se limitavam apenas a impulsos sexuais, mas incluíam uma energia 
mais ampla, vital para o funcionamento psicológico.
<span className="font-semibold text-blue-400">Simbologia e Mitologia:</span>

Jung estudou extensivamente mitologias de várias culturas para entender a expressão dos arquétipos na cultura humana. Ele argumentou que
 os mitos refletem padrões universais da psique.
 <span className="font-semibold text-blue-400">Estudo da Religião:</span>

Jung explorou a psicologia da religião, propondo que a experiência religiosa é uma manifestação natural da psique humana, relacionada
 à busca de significado e transcendência.
 <span className="font-semibold text-blue-400">Psicologia Analítica:</span>

A Psicologia Analítica de Jung é uma abordagem terapêutica que destaca a importância do autoconhecimento, do equilíbrio entre opostos e da integração das partes inconscientes da psique.
As ideias de Jung continuam a influenciar várias áreas da psicologia, terapia e estudos culturais. Seu legado perdura através da aplicação prática de suas teorias na compreensão da mente humana e no desenvolvimento pessoal.





</p>
            </MainDiv>
        </MainDivContainer>
    )
}