import "./NavVertBar.css";

export default function NavVertBar() {
    return(
        <div className="NavVertBar-container flex flex-col mt-2 ml-20 majorthree1:ml-14 midtwo2:ml-6 midfour:w-[30%]">
           <ul className="flex flex-col gap-14 rounded-xl">
            <li className="mt-3 "><a href="/functionspage">Funções cognitivas</a></li>
            <hr />
            <li><a href="/eneagrama">Eneagrama</a></li>
            <hr />
            <li><a href="/carljung">Carl Jung</a></li>
            <hr />
            <li><a href="/4sides">Os 4 lados da personalidade</a></li>
            <hr />
           </ul>
        </div>
    );
}