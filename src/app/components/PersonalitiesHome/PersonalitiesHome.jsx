import Image from "next/image"
import "./PersonalitiesHome.css"
import ESFJlg from "../../../../public/assets/mbti-char-imgs/esfj.png"
import INTJlg from "../../../../public/assets/mbti-char-imgs/png-transparent-architect-intj-myers-briggs-type-indicator-personality-career-rationality-purple-violet-architect.png"
import ENTJlg from "../../../../public/assets/mbti-char-imgs/entj.png"
import ENTPlg from "../../../../public/assets/mbti-char-imgs/entp.png"
import INTPlg from "../../../../public/assets/mbti-char-imgs/intp.png"
import INFJlg from "../../../../public/assets/mbti-char-imgs/infj.png"
import ENFJlg from "../../../../public/assets/mbti-char-imgs/enfj.png"
import ENFPlg from "../../../../public/assets/mbti-char-imgs/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS8wY290QS9NQUZ1aUIwY290QS8xL3AucG5n.png"
import INFPlg from "../../../../public/assets/mbti-char-imgs/infp.png"
import ISTPlg from "../../../../public/assets/mbti-char-imgs/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS82V2JJdy9NQUZ1ZXM2V2JJdy8xL3AucG5n.png"
import ESTPlg from "../../../../public/assets/mbti-char-imgs/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9fUVAtYy9NQUZ1ZXJfUVAtYy8xL3AucG5n.png"
import ESFPlg from "../../../../public/assets/mbti-char-imgs/esfp.png"
import ISFPlg from "../../../../public/assets/mbti-char-imgs/isfp.png"
import ISTJlg from "../../../../public/assets/mbti-char-imgs/istj.png"
import ESTJlg from "../../../../public/assets/mbti-char-imgs/estj.webp"
import ISFJlg from "../../../../public/assets/mbti-char-imgs/isfj.png"

export default function PersonalitiesHome() {
    return(
        <div className="personalities-container grid grid-cols-4 majorthree0.5:grid-cols-2 bg-gray-400 w-[88%] majorthree2:w-[95%] rounded-lg mt-4">
            <div className="personalities-home-content flex flex-col text-center items-center justify-center"><Image className="w-[150px]" src={INTJlg} />
            <h1>INTJ</h1>
            <h2>NI TE FI SE</h2> 
            <p>"Navegando pelo labirinto da vida com um <br/> plano meticuloso em mente."</p>
            <button className="bg-green-500 rounded-md w-[100px] h-10 text-white">Detalhes</button>
            </div>
            <div className="personalities-home-content flex flex-col text-center items-center justify-center"><Image className="w-[150px]" src={ENTJlg}/>
            <h1>ENTJ</h1>
            <h2>TE NI SE FI</h2> 
            <p>"Comandante destemido na jornada da vida, enfrentando adversidades com coragem e convicção."</p>
            <button className="bg-green-500 rounded-md w-[100px] h-10 text-white">Detalhes</button>
            </div>
            <div className="personalities-home-content flex flex-col text-center items-center justify-center"><Image className="w-[150px]" src={ENTPlg}/>
            <h1>ENTP</h1>
            <h2>NE TI FE SI</h2> 
            <p>"Sem medo de questionar, desafiar e redefinir as normas."</p>
            <button className="bg-green-500 rounded-md w-[100px] h-10 text-white">Detalhes</button>
            </div>
            <div className="personalities-home-content flex flex-col text-center items-center justify-center"><Image className="w-[150px]" src={INTPlg} />
            <h1>INTP</h1>
            <h2>TI NE SI FE</h2> 
            <p>"Sem medo de questionar, desafiar e redefinir as normas."</p>            
            <button className="bg-green-500 rounded-md w-[100px] h-10 text-white">Detalhes</button>
            </div>
            <div className="personalities-home-content flex flex-col text-center items-center justify-center"><Image className="w-[150px]" src={INFJlg} />
            <h1>INFJ</h1>
            <h2>NI FE TI SE</h2> 
            <p>"Em um constante diálogo com a intuição, buscando a harmonia no caos do mundo."</p>
            <button className="bg-green-500 rounded-md w-[100px] h-10 text-white">Detalhes</button>
            </div>
            <div className="personalities-home-content flex flex-col text-center items-center justify-center"><Image className="w-[150px]" src={ENFJlg} />
            <h1>ENFJ</h1>
            <h2>FE NI SE TI</h2> 
            <p>"A luz da compreensão brilha mais forte quando compartilhada com os outros."</p>
            <button className="bg-green-500 rounded-md w-[100px] h-10 text-white">Detalhes</button>
            </div>
            <div className="personalities-home-content flex flex-col text-center items-center justify-center"><Image className="w-[150px]" src={ENFPlg} />
            <h1>ENFP</h1>
            <h2>NE FI TE SI</h2> 
            <p>"Catalisador de inspiração, onde cada encontro é uma oportunidade para florescer."</p>
            <button className="bg-green-500 rounded-md w-[100px] h-10 text-white">Detalhes</button>
            </div>
            <div className="personalities-home-content flex flex-col text-center items-center justify-center"><Image className="w-[150px]" src={INFPlg} />
            <h1>INFP</h1>
            <h2>FI NE SI TE</h2> 
            <p>"Apaixonado por ideias e individualidade, transformando pensamentos em obras-primas de criatividade."</p>
            <button className="bg-green-500 rounded-md w-[100px] h-10 text-white">Detalhes</button>
            </div>
            <div className="personalities-home-content flex flex-col text-center items-center justify-center"><Image className="w-[150px]" src={ISTPlg} />
            <h1>ISTP</h1>
            <h2>TI SE NI FE</h2> 
            <p>"A força está na habilidade, transformando o mundo com ações práticas e resultados concretos."</p>
            <button className="bg-green-500 rounded-md w-[100px] h-10 text-white">Detalhes</button>
            </div>
            <div className="personalities-home-content flex flex-col text-center items-center justify-center"><Image className="w-[150px]" src={ESTPlg} />
            <h1>ESTP</h1>
            <h2>SE TI FE NI</h2> 
            <p>"Ousado apreciador de riscos, onde a coragem é a chave para desbloquear novas possibilidades."</p>
            <button className="bg-green-500 rounded-md w-[100px] h-10 text-white">Detalhes</button>
            </div>
            <div className="personalities-home-content flex flex-col text-center items-center justify-center"><Image className="w-[210px]" src={ESFPlg} />
            <h1>ESFP</h1>
            <h2>SE FI TE NI</h2> 
            <p>"Navegando pelos mares da vida com entusiasmo, onde cada onda é uma nova oportunidade de brilhar."</p>
            <button className="bg-green-500 rounded-md w-[100px] h-10 text-white">Detalhes</button>
            </div>
            <div className="personalities-home-content flex flex-col text-center items-center justify-center"><Image className="w-[150px]" src={ISFPlg} />
            <h1>ISFP</h1>
            <h2>FI SE NI TE</h2> 
            <p>"Inspirado pela beleza intrínseca, buscando harmonia em todas as formas de expressão."</p>
            <button className="bg-green-500 rounded-md w-[100px] h-10 text-white">Detalhes</button>
            </div>
            <div className="personalities-home-content flex flex-col text-center items-center justify-center"><Image className="w-[150px]" src={ISTJlg} />
            <h1>ISTJ</h1>
            <h2>SI TE FI NE</h2> 
            <p>"Inspirado pela confiança na ordem, buscando criar um ambiente previsível e eficiente."</p>
            <button className="bg-green-500 rounded-md w-[100px] h-10 text-white">Detalhes</button>
            </div>
            <div className="personalities-home-content flex flex-col text-center items-center justify-center"><Image className="w-[150px]" src={ESTJlg} />
            <h1>ESTJ</h1>
            <h2>TE SI NE FI</h2> 
            <p>"Inspirado pela busca da excelência, buscando a eficiência em cada aspecto da vida."</p>
            <button className="bg-green-500 rounded-md w-[100px] h-10 text-white">Detalhes</button>
            </div>
            <div className="personalities-home-content flex flex-col text-center items-center justify-center"><Image className="w-[150px]" src={ESFJlg}/>
            <h1>ESFJ</h1>
            <h2>FE SI NE TI</h2> 
            <p>"Apreciador da comunidade, onde cada indivíduo é uma peça valiosa do quebra-cabeça da vida."</p>
            <button className="bg-green-500 rounded-md w-[100px] h-10 text-white">Detalhes</button>
            </div> 
            <div className="personalities-home-content flex flex-col text-center items-center justify-center"><Image className="w-[150px]" src={ISFJlg} />
            <h1>ISFJ</h1>
            <h2>SI FE TI NE</h2> 
            <p>"Inspirado pela necessidade de ajudar, buscando fazer a diferença na vida dos outros."</p>
            <button className="bg-green-500 rounded-md w-[100px] h-10 text-white">Detalhes</button>
            </div>
        </div>
    )
}