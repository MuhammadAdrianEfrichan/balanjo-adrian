import head from "../../assets/header/header.png"

const Head =(props)=>{
    const {children}= props;
    return (
        <div
            className="mx-auto mt-56 flex h-60 w-430 items-center justify-center rounded-lg bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${head})` }}
        >
            <h1 className="text-center text-[55px] font-bold leading-none text-white">
                { children}
            </h1>
        </div>
    )
}
 export default Head
