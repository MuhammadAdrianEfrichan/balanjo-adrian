import { useNavigate } from "react-router-dom"
import Head from "../../components/Head"
import Navbar from "../../components/Navbar"
import BlogComp from "../../components/sections/BlogComp"
import Footer from "../../components/sections/Footer"
import Button from "../../components/ui/Button"
import Search from "../../components/ui/Search"

const Blog =()=>{
        const navigate = useNavigate();
    return (
        <>
    <Navbar />
    <Head children="Blog" />
    <div className="mt-[64.17px]"></div>
    <div className="flex w-430 gap-10 px-[97.32px] justify-between items-center py-15 mx-auto">
        <Search className="w-250" placeholder="search for products..." />
        <select className="w-73 px-2 h-14 shadow rounded-md bg-white">
            <option value="">Filter Kategori</option>
        </select>
        <Button className="w-73 h-14" onClick={() => navigate("/upload-artikel")}>Buat artikel baru</Button>
    </div>
    <BlogComp />
    <Footer />
        </>
    )
}

export default Blog