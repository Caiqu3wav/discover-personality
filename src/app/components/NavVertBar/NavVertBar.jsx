import "./NavVertBar.css";

export default function NavVertBar() {
    return(
        <div className="NavVertBar-container flex flex-col mt-2 ml-20">
           <ul className="flex flex-col gap-14 rounded-xl">
            <a href=""></a><li className="mt-3"><a href="/functionspage">Funções cognitivas</a></li>
            <hr />
            <li><a href="">Eneagrama</a></li>
            <hr />
            <li><a href="">Tritipos</a></li>
            <hr />
            <li><a href="">Carl Jung</a></li>
            <hr />
            <li><a href="">Os 4 lados da personalidade</a></li>
            <hr />
           </ul>
        </div>
    );
}