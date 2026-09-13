import head from "../../assets/header/header.png"

const Head =(props)=>{
    const {children}= props;
    return (
        <div
            className="mx-4 mt-28 flex h-40 items-center justify-center rounded-lg bg-cover bg-center bg-no-repeat sm:mx-8 sm:mt-40 sm:h-52 lg:mx-auto lg:mt-56 lg:h-60 lg:w-430"
            style={{ backgroundImage: `url(${head})` }}
        >
            <h1 className="text-center text-4xl font-bold leading-none text-white sm:text-5xl lg:text-[55px]">
                { children}
            </h1>
        </div>
    )
}
 export default Head
