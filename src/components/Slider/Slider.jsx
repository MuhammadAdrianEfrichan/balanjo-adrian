import { useEffect, useState } from 'react'
import banner from '../../assets/started/banner.png'
import bannerDua from '../../assets/started/bannerDua.png'
import bannerTiga from '../../assets/started/bannerTiga.png'
import kanan from '../../assets/started/kanan.svg'
import kiri from '../../assets/started/kiri.svg'

const slides = [
    { id: 1, image: banner },
    { id: 2, image: bannerDua},
    { id: 3, image: bannerTiga },
]
const Slider = ()=>{
     const [currentIndex, setCurrentIndex] = useState(0);
      const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }

        const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    }
        const goToSlide = (index) => {
        setCurrentIndex(index)
    }

      useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000)

        return () => clearInterval(interval) // cleanup biar tidak dobel interval
    }, [currentIndex])

    

        return(
            <>
        <div className="relative w-430 h-150 overflow-hidden rounded-2xl mt-55.75 mx-auto">
            <img 
                src={slides[currentIndex].image} 
                alt={`slide-${currentIndex}`}
                className="w-full h-full object-cover transition-all duration-500"
            />

            <button 
                onClick={prevSlide}
                className="absolute top-1/2 left-15 -translate-y-1/2 cursor-pointer"
            >
                <img src={kiri} alt="" />
            </button>

            {/* tombol panah kanan */}
            <button 
                onClick={nextSlide}
                className="absolute top-1/2 right-15 -translate-y-1/2 cursor-pointer"
            >
                <img src={kanan} alt="" />
            </button>

            {/* dots indikator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex ? "bg-white" : "bg-white/50"
                        }`}
                    />
                ))}
            </div>
        </div>
        <div className="flex gap-10 justify-center mt-10 mb-10">
            <img src={bannerDua} alt="" className="w-210" />
            <img src={bannerTiga} alt="" className="w-210"/>
        </div>
        </>
    )

}

export default Slider