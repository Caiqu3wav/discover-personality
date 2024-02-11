import NavVertBar from "../NavVertBar/NavVertBar"
import PersonalitiesHome from "../PersonalitiesHome/PersonalitiesHome"
import Image from "next/image"
import NiLogo from "../../../../public/assets/img/NiLogo.png"
import NeLogo from "../../../../public/assets/img/NeLogo.png"
import SiLogo from "../../../../public/assets/img/SiLogo.png"
import SeLogo from "../../../../public/assets/img/png-transparent-sense-sensory-nervous-system-education-sensory-receptor-sensation-five-sense-text-logo-color-removebg-preview.png"
import TeLogo from "../../../../public/assets/img/statistics-creative-icon-simple-element-illustration-statistics-concept-symbol-design-from-online-marketing-collection-for-using-in-web-de-removebg-preview.png"
import TiLogo from "../../../../public/assets/img/images-removebg-preview (1).png"
import FeLogo from "../../../../public/assets/img/FeLogo.png"
import FiLogo from "../../../../public/assets/img/FiLogo.png"
import Functionstypesrp from "../../../../public/assets/img/functions--types.png"

import "./heroFP.css"

export default function HeroFP() {

    return (
        <main className="flex flex-col">
            <div className="flex">
                <div className="hero-container-one w-[750px] flex flex-col gap-3 ml-20 pb-4 rounded-xl mt-2 text-bold">
                    <h1 className="text-green-500 text-[40px]">Funções Cognitivas</h1>
                   <p>As funções cognitivas estão intrinsecamente ligadas à maneira como os seres humanos pensam, 
                    cada um apresentando uma função dominante que exerce a maior influência naturalmente. Além disso,
                     há uma função auxiliar, que atua como uma espécie de co-piloto, complementando a dominante. Essas 
                     duas funções estão interconectadas, embora a dominante tenha mais destaque.</p> 

                     <p>A terciária, por sua vez, desempenha um papel de controle sobre algumas fraquezas ou excessos da 
                    função auxiliar. Apesar de sua presença menor na pilha, ela é utilizada muitas vezes inconscientemente,
                     podendo resultar em comportamentos infantis ou imaturos.</p> 

                     <p>Por fim, temos a função inferior, oposta à dominante, frequentemente associada a lutas internas e 
                    inseguranças. No entanto, quando desenvolvida em conjunto com a função auxiliar, ela pode impulsionar
                     o crescimento pessoal. Compreender a função inferior, juntamente com as outras, é fundamental para uma 
                     jornada de autodescoberta e desenvolvimento pessoal.</p> 

                     <h1 className="text-green-500 text-[40px]">Quais são as Funções Cognitivas e seu significado?</h1>
                     <p>As funções tem sua versão introvertida e extrovertida, significa que elas são quase iguais pela
                        sua natureza porém com muitas diferenças por uma ser ligada ao mundo interno e a outra pro externo.
                     </p>

                     <h1 className="text-orange-400 text-[40px]">Intuição</h1>

                     <div className="flex">
                        <div className="flex flex-col w-[20%]">
                              <Image className="w-[100px] relative left-5" src={NiLogo} alt="Function logo"/>
                              <h2 className="font-bold">Intuição Introvertida</h2>        
                              </div>       
                              <div className="w-[80%]"><p className="text-[17px] font-semibold">A função de intuição introvertida, predominante nos tipos de personalidade INTJ e INFJ, é 
                                caracterizada por pensamentos abstratos, visão mental, simbolismo, sonhos, metáforas, insights, 
                                profundidade e busca de significado. Essa intuição se manifesta frequentemente por meio de símbolos, 
                                imagens e padrões. Os indivíduos com essa função, conhecida como Ni, são descritos como sonhadores, 
                                artistas ou videntes, pensando de forma visual. Termos relacionados à visão, como previsão, insight, 
                                visionário, são comumente usados para descrever INJs. <br/>

A natureza visual da Ni explica a sensibilidade dos INJs à beleza, seja ela visual, metafórica ou de outra forma. Filósofos INTJ, 
como Jean Paul Sartre e Frederich Nietzsche, expressaram a importância da estética em suas vidas. Essa valorização aparente da estética 
é irônica, pois superficialmente parece ser semelhante aos tipos opostos, ESFPs/ESTPs, que também usam a função sensorial Se, embora 
de maneira mais consciente.</p></div>   
                     </div>
<div className="flex mt-5">
   <div className="flex flex-col w-[20%] text-center">
         <Image className="w-[100px] relative left-5" src={NeLogo} alt="Function logo"/>
         <h2 className="font-bold">Intuição Extrovertida</h2>        
         </div>       
         <div className="w-[80%]"><p className="text-[17px] font-semibold">A função de intuição extrovertida, dominante 
         nos tipos de personalidade ENFP e ENTP, é caracterizada por um pensamento aberto, criativo e voltado para o futuro.
          Essa função está associada a conceitos como possibilidades, conexões, ideias inovadoras, improvisação e exploração
           de novos caminhos. A intuição extrovertida, ou Ne, se manifesta frequentemente por meio de associações de ideias, 
           brainstorming e busca por múltiplas perspectivas. <br/>

Indivíduos com essa função tendem a ser ágeis mentalmente, capazes de adaptar-se rapidamente a novas informações e encontrar 
soluções criativas para problemas. São exploradores de ideias, sempre em busca de novas possibilidades e experiências. A natureza
 extrovertida da Ne também os torna comunicativos e interessados em trocar ideias com os outros. <br/>

É comum usar termos como brainstorming, exploração de possibilidades, conexões e inovação ao descrever a Ne. A função 
contribui para uma abordagem expansiva e adaptável ao lidar com desafios e projetos. A valorização da diversidade de ideias e
 a disposição para experimentar são traços marcantes dos indivíduos que têm a intuição extrovertida como predominante em sua 
 personalidade.</p></div>   
</div>
<h1 className="text-blue-400 text-[40px]">Sensação</h1>
<div className="flex mt-5">
   <div className="flex flex-col w-[20%] text-center">
         <Image className="w-[100px] relative left-5" src={SiLogo} alt="si Function logo"/>
         <h2 className="font-bold">Sensação Introvertida</h2>        
         </div>       
         <div className="w-[80%]"><p className="text-[17px] font-semibold">A função de sensação introvertida, 
         predominante nos tipos de personalidade ISFJ e ISTJ, destaca-se pela atenção cuidadosa aos detalhes, 
         foco no presente e apreciação de experiências concretas. Essa função, conhecida como Si, está associada 
         a uma consciência aguçada do ambiente, memórias detalhadas e uma abordagem prática da vida. <br />

Indivíduos com a sensação introvertida costumam ser observadores minuciosos, atentos aos elementos sensoriais do 
momento presente. Valorizam a tradição, a consistência e têm uma preferência por métodos comprovados. A Si se manifesta
 por meio da recordação de informações específicas, criando uma conexão profunda com o passado e uma apreciação por 
 experiências familiares. <br/> <br />

Termos como memória detalhada, consciência sensorial, tradição e consistência são frequentemente associados à sensação 
introvertida. A abordagem pragmática, a atenção aos detalhes e a preferência por rotinas confiáveis são características
 distintivas dos indivíduos que têm a Si como função principal em sua personalidade.</p></div>   
</div>
<div className="flex mt-5">
   <div className="flex flex-col w-[20%] text-center">
         <Image className="w-[100px] relative left-5" src={SeLogo} alt="se Function logo"/>
         <h2 className="font-bold">Sensação Extrovertida</h2>        
         </div>       
         <div className="w-[80%]"><p className="text-[17px] font-semibold">A função de sensação extrovertida, 
         dominante nos tipos de personalidade ESFP e ESTP, é caracterizada por uma atenção aguçada aos estímulos 
         sensoriais do ambiente. Essa função está associada a uma apreciação do momento presente, uma busca por 
         experiências sensoriais intensas, e uma abordagem prática e hands-on da vida. <br /> A sensação extrovertida, ou 
         Se, manifesta-se frequentemente através da observação detalhada, ação imediata, e uma conexão intensa com o mundo ao redor.
        <br />
Indivíduos com essa função tendem a ser muito práticos, orientados para a ação e hábeis em lidar com situações concretas.
 São exploradores do ambiente físico, respondendo rapidamente aos estímulos sensoriais e procurando experiências sensoriais ricas.
  A natureza extrovertida da Se também os torna espontâneos e interessados em atividades físicas, aventuras e desafios do mundo real.
<br /> <br />
Termos como presença no momento, ação imediata, experiências sensoriais e pragmatismo são frequentemente utilizados para descrever
 a sensação extrovertida. A função contribui para uma abordagem prática e realista da vida, enfocando o que está acontecendo no 
 presente e respondendo de maneira eficaz às demandas do ambiente físico. A busca por experiências sensoriais e a prontidão para 
 agir são características distintivas dos indivíduos que têm a sensação extrovertida como predominante em sua personalidade.</p></div>   
</div>
<h1 className="text-green-700 text-[40px]">Pensamento</h1>
<div className="flex mt-5">
   <div className="flex flex-col w-[20%] text-center">
         <Image className="w-[100px] relative left-5" src={TiLogo} alt="ti Function logo"/>
         <h2 className="font-bold">Pensamento Introvertido</h2>        
         </div>       
         <div className="w-[80%]"><p className="text-[17px] font-semibold">A função de pensamento introvertido, 
         predominante nos tipos de personalidade INTP e ISTP, é caracterizada por uma abordagem analítica, reflexiva 
         e voltada para a visão de longo prazo. Essa função está associada a conceitos como planejamento estratégico,
          análise profunda, formulação de ideias complexas e tomada de decisões baseada em princípios internos. 
          O pensamento introvertido, ou Ti, se manifesta por meio da busca por consistência lógica, estruturas internas 
          e entendimento aprofundado.
<br /> <br />
Indivíduos com essa função tendem a ser reflexivos, analíticos e focados na compreensão profunda dos assuntos.
 São orientados para a formulação de ideias complexas e a aplicação de lógica rigorosa em suas análises. A natureza
  introvertida da Ti os leva a preferir processar informações internamente antes de compartilhá-las com os outros.
<br /> <br />
Termos como análise crítica, formulação de teorias, planejamento estratégico a longo prazo e tomada de decisões 
fundamentadas em princípios são frequentemente associados à função de pensamento introvertido. Essa função contribui para 
uma abordagem cuidadosa e detalhada na resolução de problemas e na implementação de estratégias. A valorização da consistência lógica,
 compreensão profunda e fundamentação interna são características distintivas dos indivíduos com o pensamento introvertido predominante
  em sua personalidade.
</p></div>   
</div>
<div className="flex mt-5">
   <div className="flex flex-col w-[20%] text-center">
         <Image className="w-[100px] relative left-5" src={TeLogo} alt=" te Function logo"/>
         <h2 className="font-bold">Pensamento Extrovertido</h2>        
         </div>       
         <div className="w-[80%]"><p className="text-[17px] font-semibold">A função de pensamento extrovertido, 
         predominante nos tipos de personalidade ENTJ e ESTJ, é caracterizada por uma abordagem prática, lógica e
          orientada para resultados. Essa função está associada a conceitos como organização, eficiência, ação decisiva,
           foco em objetivos e liderança assertiva. O pensamento extrovertido, ou Te, se manifesta por meio da busca por
            estruturas lógicas, planejamento eficiente e tomada de decisões baseada em dados tangíveis.
<br />
Indivíduos com essa função tendem a ser pragmáticos, enfocados em resultados e capazes de liderar de forma eficaz.
 São orientados para a ação, buscando atingir metas de maneira eficiente e lógica. A natureza extrovertida da Te também 
 os torna comunicativos em termos de apresentação de ideias e tomada de decisões assertivas.
<br />
Termos como planejamento estratégico, eficiência operacional, liderança assertiva e foco em metas são frequentemente 
associados à função de pensamento extrovertido. Essa função contribui para uma abordagem sistemática e eficaz na resolução
 de problemas e na execução de projetos. A valorização da organização, eficiência e resultados tangíveis são características
  distintivas dos indivíduos com o pensamento extrovertido predominante em sua personalidade.</p></div>   
</div>
<h1 className="text-red-600 text-[40px]">Sentimento</h1>
<div className="flex mt-5">
   <div className="flex flex-col w-[20%] text-center">
         <Image className="w-[100px] relative left-5" src={FiLogo} alt="Function logo"/>
         <h2 className="font-bold">Sentimento Introvertido</h2>        
         </div>       
         <div className="w-[80%]"><p className="text-[17px] font-semibold">A função de sentimento introvertido,
          predominante nos tipos de personalidade INFP e ISFP, é caracterizada por uma abordagem subjetiva, voltada
           para valores pessoais e expressão emocional individual. Essa função está associada a conceitos como empatia,
            sensibilidade, valores pessoais profundos e tomada de decisões baseada em considerações internas. O sentimento introvertido,
             ou Fi, se manifesta por meio da busca por autenticidade emocional, conexões significativas
              e compreensão íntima de sentimentos internos.
<br /> <br />
Indivíduos com essa função tendem a ser sensíveis, compassivos e focados em compreender e viver de acordo com seus próprios 
valores pessoais. São orientados para a expressão autêntica de emoções e buscam compreender profundamente o significado subjetivo
 das experiências. A natureza introvertida da Fi os leva a valorizar a autenticidade emocional em suas interações.
<br /> <br />
Termos como empatia profunda, expressão autêntica de emoções, valores pessoais significativos e tomada de decisões alinhada aos 
princípios internos são frequentemente associados à função de sentimento introvertido. Essa função contribui para uma abordagem
 compassiva e individualizada nas relações interpessoais, bem como na tomada de decisões éticas e significativas. A valorização da 
 autenticidade, empatia e conexões emocionais profundas são características distintivas dos indivíduos com o sentimento introvertido 
 predominante em sua personalidade.
</p></div>   
</div>
<div className="flex mt-5">
   <div className="flex flex-col w-[20%] text-center">
         <Image className="w-[100px] relative left-5" src={FeLogo} alt="Function logo"/>
         <h2 className="font-bold">Sentimento Extrovertido</h2>        
         </div>       
         <div className="w-[80%]"><p className="text-[17px] font-semibold">A função de sentimento extrovertido,
          predominante nos tipos de personalidade ESFJ e ENFJ, é caracterizada por uma abordagem voltada para as 
          relações interpessoais, considerações sociais e empatia expressa de maneira externa. Essa função está associada
           a conceitos como harmonia, cuidado com os outros, valores sociais compartilhados e tomada de decisões baseada
            em considerações externas. O sentimento extrovertido, ou Fe, se manifesta por meio da busca por relações positivas,
             apoio emocional e manutenção de um ambiente social harmonioso.
<br /> <br />
Indivíduos com essa função tendem a ser calorosos, empáticos e focados em atender às necessidades emocionais dos outros. 
São orientados para criar um ambiente social positivo, buscando compreender e atender às expectativas sociais. A natureza 
extrovertida da Fe os leva a expressar abertamente suas emoções e a buscar consenso nas interações sociais.
<br /> <br />
Termos como empatia externa, criação de harmonia social, apoio emocional a outros e tomada de decisões alinhada às normas
 sociais são frequentemente associados à função de sentimento extrovertido. Essa função contribui para uma abordagem colaborativa
  e socialmente conectada nas relações interpessoais, bem como na tomada de decisões que considera o impacto nos outros. A valorização
   da harmonia social, empatia expressa e cuidado coletivo são características distintivas dos indivíduos com o sentimento 
   extrovertido predominante em sua personalidade.</p></div>   
</div>

<div className="flex flex-col items-center justify-center mt-20">
    <h1 className="text-[34px] font-bold">Pensamento, Sentimento, Sensação & Intuição</h1>
<Image src={Functionstypesrp} className="w-[400px]"/>
</div>

                </div>
                <NavVertBar />
            </div>
            <div className="flex items-center justify-center">
                <PersonalitiesHome />
            </div>
        </main>
    );
}