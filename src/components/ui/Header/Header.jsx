import { Link, useLocation } from "react-router-dom";

const Header = (props)=>{
    const {category,label, ket, to }= props;
     const location = useLocation()

    const alwaysHeaderPages = ["/get-started"]
    const isHeaderLike = alwaysHeaderPages.includes(location.pathname)

    // transparan HANYA kalau di halaman home DAN belum discroll
    const isHeader = isHeaderLike 
    return (
        <div className={` ${isHeader ? "flex  h-36.5 flex-col gap-3 my-22.5" : "hidden"}`}>
        <h2 className="text-[16px] font-medium mb-3">{category}</h2>
        <h1 className="text-[35px] font-bold text-button">{label}</h1>
        <div className="flex justify-between">
            <p className="w-143.5 text-abu">{ket}
            </p>
            <Link to={to} className="w-34.25 h-[45] flex justify-around items-center bg-black rounded-xl text-white px-3 py-2 hover:text-abu">Lainnya <div className="text-[20px]">{'->'}</div></Link>
        </div>
    </div>
    )
}

export default Header