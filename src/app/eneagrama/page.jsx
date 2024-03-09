import MainDivContainer from "../components/MainDiv/MainDivContainer"
import MainDiv from "../components/MainDiv/MainDiv"
import Image from "next/image"
import EnneagramLogo from "../../../public/assets/img/enneagramlogo.png";
import "./eneagrama.css"
import EnneXMbti from "../../../public/assets/img/mbtixenne.png"

export default function Eneagrama() {
    
    
    return(
        <MainDivContainer>
            <MainDiv>
                <Image className="w-[300px] self-center" src={EnneagramLogo}/>
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-semibold text-green-600">O que são os eneagramas</h1>
                    <p className="text-xl">O Eneagrama é um sistema de personalidade que tem suas raízes em tradições espirituais antigas,
                         mas que foi popularizado no século XX como uma ferramenta psicológica. Ele descreve nove 
                         tipos principais de personalidade, cada um com características distintas e padrões de comportamento.
                          A palavra "eneagrama" vem do grego "ennea" (nove) e "gramma" (ponto ou figura), referindo-se à 
                          forma geométrica de um círculo com nove pontos.</p>
                          <p className="text-xl">Cada tipo de personalidade é associado a um número de 1 a 9 e possui características específicas, 
                            motivações e pontos fortes ou desafios. Aqui estão breves descrições dos nove tipos:</p>
                            <ol className="mt-2">
                                <li>O Perfeccionista <span className="text-blue-500">(Tipo 1):</span> Pessoas orientadas para a ética, responsáveis e autoexigentes. Buscam a 
                                    perfeição e têm uma forte consciência do que é certo ou errado.</li> <br />
                                    <li>O Prestativo <span className="text-blue-500">(Tipo 2):</span> Indivíduos atenciosos, calorosos e altruístas. Tendem a se concentrar nas 
                                        necessidades dos outros e buscam ser amados e aceitos.</li><br />
                            <li>
                            O Bem-Sucedido <span className="text-blue-500">(Tipo 3):</span> Pessoas motivadas pelo sucesso, eficiência e realização. São ambiciosas, orientadas
                             para objetivos e preocupadas com a imagem.
                            </li><br />
                            <li>O Romântico <span className="text-blue-500">(Tipo 4):</span> Indivíduos criativos, sensíveis e intensos. Buscam a singularidade e podem experimentar 
                                emoções profundas e complexas.</li><br />
                            <li>
                            O Observador <span className="text-blue-500">(Tipo 5):</span> Pessoas intelectuais, observadoras e reservadas. Valorizam o conhecimento, a privacidade e a
                             compreensão profunda.
                            </li><br />
                            <li>O Leal (Tipo 6): Indivíduos leais, confiáveis e ansiosos. Tendem a se preocupar com a segurança e buscar apoio
                                 em relacionamentos e instituições.</li><br />
                            <li>O Entusiasta <span className="text-blue-500">(Tipo 7)</span>: Pessoas extrovertidas, otimistas e espontâneas. Procuram experiências novas e são motivadas
                                 pela busca da felicidade.</li><br />
                             <li>O Desafiador <span className="text-blue-500">(Tipo 8):</span> Indivíduos poderosos, assertivos e protetores. Valorizam a autossuficiência e buscam
                                 controle sobre o ambiente.</li> <br />
                            <li>O Pacificador <span className="text-blue-500">(Tipo 9):</span> Pessoas calmas, pacíficas e complacentes. Buscam a harmonia e podem evitar conflitos.</li>   
                            </ol>
                    <p className="text-xl">O Eneagrama não apenas categoriza as personalidades, mas também explora as dinâmicas de relacionamento entre os tipos, bem como as motivações subjacentes e os caminhos de
                         crescimento pessoal. É importante notar que o Eneagrama é uma ferramenta descritiva e não de diagnóstico, e cada indivíduo é único, podendo apresentar características 
                         de vários tipos. Ele é frequentemente utilizado em psicologia, desenvolvimento pessoal e dinâmicas de grupo para promover a compreensão e a comunicação eficaz.</p>

                         <h1 className="text-green-500 text-2xl">MBTI e Eneagrama <span className="text-blue-500">(correlação)</span></h1>
                         <Image src={EnneXMbti} className="w-[360px] self-center"/>
                         <p>Os eneagramas e o MBTI (Indicador de Tipo Myers-Briggs) são sistemas diferentes que buscam entender a personalidade, mas eles têm abordagens distintas. Enquanto o MBTI se baseia
                             em quatro dicotomias (Energia, Percepção, Tomada de Decisão e Estilo de Vida) que geram 16 tipos de personalidade, o eneagrama se concentra em nove tipos principais, cada um 
                             representando uma configuração específica de características e motivações.

Vamos analisar a relação entre os tipos de eneagrama e os tipos MBTI com base nos dados fornecidos:</p>
<p>Enneagrama 1:

Correlação com MBTI: Forte correlação com aqueles que preferem Sensação Introvertida (Si) na posição dominante ou auxiliar, além de uma correlação com a Introversão.
Tipos MBTI associados: ISTJ, ESTJ, ISFJ e ESFJ (82% - 84% dos Enneagrama 1). <br />
Enneagrama 2:

Correlação com MBTI: Entre 93% e 98% dos Enneagrama 2 têm uma preferência por Sentimento sobre Pensamento, com uma correlação específica com Sentimento Extravertido.
Tipos MBTI associados: ISFJ, ESFJ, ENFJ e INFJ (63% - 79% dos Enneagrama 2). <br />
Enneagrama 3:

Correlação com MBTI: Entre 82% e 91% dos Enneagrama 3 são Extravertidos, com uma forte correlação com essa dimensão.
Tipos MBTI associados: ESTJ, ESFJ, ESTP e ESFP (62% - 74% dos Enneagrama 3), com ENTJ, ENTP e ENFJ sendo os tipos intuitivos mais propensos a serem um Enneagrama 3. <br />
Enneagrama 4:

Correlação com MBTI: Fortemente correlacionado com preferência por Intuição e Sentimento, e mais provável de ser associado à Introversão.
Tipos MBTI associados: INFP, INFJ, ISFP e ENFP (42% - 57% dos Enneagrama 4).<br />
Enneagrama 5:

Correlação com MBTI: Geralmente associado a Introvertidos Pensadores, com INTP, ISTJ, INTJ e ISTP sendo os mais comuns (59% - 75% dos Enneagrama 5).<br />
Enneagrama 6:

Correlação com MBTI: Presente em números significativos em todos os tipos MBTI, mas mais fortemente correlacionado com tipos Sensoriais.
Tipos MBTI associados: ISTJ e ISFJ (46% - 57% dos Enneagrama 6), com uma forte correlação com a Temperamento SJ.<br />
Enneagrama 7:

Correlação com MBTI: Correlaciona-se fortemente com tipos EP - dominante Extraverted Intuition (ENFP, ENTP) e dominante Extraverted Sensing (ESFP, ESTP).<br />
Enneagrama 8:

Correlação com MBTI: Mais comum para ENTJs, representando 32% - 46% dos casos. Tipos MBTI associados: ESTJ, ESTP e ENTJ (58% - 71% dos Enneagrama 8).<br />
Enneagrama 9:

Correlação com MBTI: Correlaciona-se com uma preferência por Sentimento, Introversão e ligeiramente com Sensação.
Tipos MBTI associados: Predominantemente Introvertidos com preferência por Sentimento (79% - 83% dos Enneagrama 9).</p>
                </div>
            </MainDiv>
        </MainDivContainer>
    )
}