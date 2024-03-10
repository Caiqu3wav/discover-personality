import Header from "../Header/header"
import NavVertBar from "../NavVertBar/NavVertBar"
import PersonalitiesHome from "../PersonalitiesHome/PersonalitiesHome"
export default function MainDivContainer(props) {
    return(
        <div>
            <Header/>
        <main className="flex flex-col">
            <div className="flex">
                {props.children}
                <NavVertBar/>
            </div>
            <PersonalitiesHome/>
        </main>
        </div>
    )
}