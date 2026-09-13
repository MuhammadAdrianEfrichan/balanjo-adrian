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
    <div className="mx-auto flex w-full flex-col items-stretch gap-4 px-5 py-10 sm:px-8 lg:w-430 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-[97.32px] lg:py-15">
        <Search className="w-full lg:w-250" placeholder="search for products..." />
        <select className="h-14 w-full rounded bg-white px-2 shadow lg:w-73">
            <option value="">Filter Kategori</option>
        </select>
        <Button className="h-14 w-full lg:w-73" onClick={() => navigate("/upload-artikel")}>Buat artikel baru</Button>
    </div>
    <div className="pb-24 lg:pb-32">
        <BlogComp />
    </div>
    <Footer />
        </>
    )
}

export default Blog