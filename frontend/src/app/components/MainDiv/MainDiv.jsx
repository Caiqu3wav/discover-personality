export default function MainDiv(props) {
    return(
        <div className="hero-container-one w-[750px] flex flex-col gap-3 ml-20 rounded-xl 
        mt-2 pb-4 text-bold majorthree0.5:ml-10 midtw:ml-4 bg-[#f5f5dc]">
            {props.children}
        </div>
    )
}