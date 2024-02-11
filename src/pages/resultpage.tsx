import Header from "../app/components/Header/header";
import { calculeResult } from "../app/components/test/result";
import "./stylesresultspg.css"

export default function ResultPage({ userAnswers }) {
    const mbtiResult = calculeResult(userAnswers);

    return (
        <>
        <Header/>
        <div className="hero-container-one w-[750px] flex flex-col gap-3 ml-20 rounded-xl mt-2 pb-4 text-bold">
        <h1>E o seu tipo é:</h1>
        <p>{mbtiResult}</p>
        </div>
        </>
    );
}

export async function getServerSideProps({ query }) {

    const userAnswers = JSON.parse(query.userAnswers || "[]");

    return {
        props: {
            userAnswers,
        },
    };
}