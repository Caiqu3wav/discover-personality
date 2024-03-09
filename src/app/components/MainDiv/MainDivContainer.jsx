import Header from "../Header/header"
import NavVertBar from "../NavVertBar/NavVertBar"
export default function MainDivContainer(props) {
    return(
        <div>
            <Header/>
        <main className="flex flex-col">
            <div className="flex">
                {props.children}
                <NavVertBar/>
            </div>
        </main>
        </div>
    )
}