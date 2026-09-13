import ForumComp from "../../components/sections/ForumComp"
import Navbar from "../../components/Navbar"
import BlogComp from "../../components/sections/BlogComp"
import ECommerceComp from "../../components/sections/ECommerceComp"
import Footer from "../../components/sections/Footer"
import Slider from "../../components/Slider"

const GetStarted = ()=>{
    return <>
    
    <Navbar />
    <div className="px-5 sm:px-8 lg:px-[97.32px]">
    <Slider />
    <ECommerceComp />
    <BlogComp />
    <ForumComp />
    <Footer />
    </div>
    </>
}

export default GetStarted