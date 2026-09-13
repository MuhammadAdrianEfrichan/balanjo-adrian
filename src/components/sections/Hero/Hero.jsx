import heroBg from "../../../assets/Hero/heroBg.png"
import linearT from "../../../assets/Hero/linearT.png"
import linearB from "../../../assets/Hero/linearB.png"
import Button from "../../ui/Button"
import { useNavigate } from "react-router-dom"

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section 
            className="flex min-h-[620px] w-full justify-center bg-no-repeat px-5 sm:min-h-[700px] lg:h-213.5 lg:px-0"
            style={{
                backgroundImage: `url(${linearT}), url(${linearB}), url(${heroBg})`,
                backgroundSize: "100% 100%, 100% 100%, cover",
                backgroundPosition: "top, bottom, center",
            }}
        >
            <div className="flex flex-col items-center justify-center gap-5 text-center text-text">
                <h1 className="text-4xl font-semibold sm:text-6xl lg:text-[84px]">Inovasi untuk Rangers.</h1>
                <h3 className="text-base font-normal tracking-normal sm:text-[20px]">Bersatu dalam Pengetahuan, Inspirasi, dan Karya</h3>
                <Button className="mt-10 h-13 w-42.25" onClick={() => navigate("/get-started")}>Get Started</Button>
            </div>
        </section>
    )
}

export default Hero