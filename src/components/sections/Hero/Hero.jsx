import heroBg from "../../../assets/Hero/heroBg.png"
import linearT from "../../../assets/Hero/linearT.png"
import linearB from "../../../assets/Hero/linearB.png"
import Button from "../../ui/Button"
import { useNavigate } from "react-router-dom"

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section 
            className="flex justify-center w-full h-213.5 bg-no-repeat"
            style={{
                backgroundImage: `url(${linearT}), url(${linearB}), url(${heroBg})`,
                backgroundSize: "100% 100%, 100% 100%, cover",
                backgroundPosition: "top, bottom, center",
            }}
        >
            <div className="text-text flex flex-col justify-center items-center gap-5">
                <h1 className="text-[84px] font-semibold">Inovasi untuk Rangers.</h1>
                <h3 className="text-[20px] font-normal tracking-normal">Bersatu dalam Pengetahuan, Inspirasi, dan Karya</h3>
                <Button className="w-42.25 h-13 mt-10"  onClick={() => navigate("/get-started")}>Get Started</Button>
            </div>
        </section>
    )
}

export default Hero