import MainDiv from "../components/MainDiv/MainDiv";
import MainDivContainer from "../components/MainDiv/MainDivContainer";
import FourSidesPic from "../../../public/assets/img/4sidesofmind.png";
import Image from "next/image";

export default function FourSides() {
    return(
        <MainDivContainer>
            <MainDiv>
                <Image src={FourSidesPic} className="w-[300px] self-center mt-2"/>
                <h1 className="text-3xl text-green-600 font-semibold">Os Quatro Lados da Personalidade:
                 Uma Jornada de Autoconhecimento e Desenvolvimento</h1>
                 <p className="text-lg font-medium flex flex-col gap-2"><span>A teoria dos "Quatro Lados da Mente" proposta por Dr. John Beebe, baseada nas contribuições
                     de Carl Jung, oferece uma perspectiva fascinante sobre a complexidade da personalidade humana.
                      Ao invés de limitar-se a um único tipo, essa abordagem reconhece que cada indivíduo possui 
                      quatro lados distintos da mente, cada um associado a diferentes aspectos de suas funções cognitivas.</span>
                      <span>O primeiro lado, conhecido como Ego, abriga as quatro principais funções cognitivas que uma pessoa utiliza predominantemente. Por exemplo,
                         um <span className="text-yellow-600">ENTJ</span> tem como funções principais Te-Ni-Se-Fi, refletindo sua liderança através dessas capacidades.</span>
                         
                         <span>O lado Aspiracional, ou Subconsciente, corresponde à inversão das quatro principais funções do Ego. Se um <span className="text-yellow-600">ENTJ</span> é Ego com Te-Ni-Se-Fi, 
                            seu Subconsciente seria <span className="text-red-600">ISFP</span> com Fi-Se-Ni-Te. Explorar essas funções menos desenvolvidas pode levar a um amadurecimento pessoal, uma vez que a atenção 
                            é direcionada para superar inseguranças representadas pelas funções da Criança e Inferior.</span>
                            <span>O terceiro lado, conhecido como o Inconsciente ou Sombra, compreende quatro funções opostas às do Ego. Estas são a Nêmesis (preocupação), o Crítico (crítica e sabedoria), 
                                o Trapaceiro (inconsciência) e o Demônio (corrupção). Ao explorar essas funções, uma pessoa ganha uma perspectiva mais ampla e se torna mais consciente, abrindo espaço para o 
                                desenvolvimento e a compreensão.</span>
                                <span>A Superego, o quarto lado, representa uma fase avançada de desenvolvimento, onde as funções da Sombra se tornam as principais do indivíduo. Isso implica uma profunda integração das 
                                    características antes consideradas opostas ou desafiadoras, levando a uma expansão da consciência.</span>
                                    <span>Desenvolver o Subconsciente é uma jornada para a maturidade, explorando as funções menos dominantes no Ego e trabalhando nas inseguranças representadas pelas funções da Criança 
                                        e Inferior. Por outro lado, mergulhar no Inconsciente é uma busca pela felicidade, proporcionando uma visão mais profunda através das funções da Nêmesis, Crítico, Trapaceiro e 
                                        Demônio. É um caminho que amplia perspectivas e fomenta a abertura de mente.</span>
                                        <span>Em resumo, entender que somos mais do que um único tipo é crucial. Nossas mentes têm quatro lados, e ao explorar cada um deles, abrimos portas para um crescimento profundo,
                                             autodescoberta e compreensão de nossas sombras. Ao enfrentar as áreas menos desenvolvidas e os desafios internos, podemos evoluir para uma versão mais completa e integrada 
                                             de nós mesmos. É através da jornada pelos Quatro Lados da Mente que a riqueza da personalidade humana se revela, proporcionando uma trilha única para a autenticidade e o 
                                             florescimento pessoal.</span></p>
                
            </MainDiv>
        </MainDivContainer>
    )
}