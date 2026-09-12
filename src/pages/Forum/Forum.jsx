import Head from "../../components/Head"
import Navbar from "../../components/Navbar"
import ForumComp from "../../components/sections/ForumComp"
import Footer from "../../components/sections/Footer"

const Forum = ()=>{
    return <>
    <Navbar />
    <Head children="Forum" />
    <div className="mt-[64.17px]"></div>
    <ForumComp />
    <Footer />
    </>
}

export default Forum