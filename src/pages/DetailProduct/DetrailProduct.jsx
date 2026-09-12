import { useState } from "react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/sections/Footer"
import ECommerceComp from "../../components/sections/ECommerceComp"
import Button from "../../components/ui/Button"
import Search from "../../components/ui/Search"
import kacamata from "../../assets/ECommerce/kacamata.png"

const DetailProduct = () => {
    const [quantity, setQuantity] = useState(1)

    return <>
        <Navbar />
        <main className="mx-auto w-full max-w-[1720px] px-5 pb-20 pt-[196.17px] sm:px-8 lg:px-[6.5vw]">
            <Search
                className="h-10 w-full rounded-md px-4 text-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.08)] placeholder:text-[#aaa]"
                placeholder="Search for products..."
            />

            <section className="mt-10 grid gap-6 rounded-lg bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.03)] sm:p-6 lg:grid-cols-[1.2fr_0.85fr] lg:gap-8">
                <div className="overflow-hidden rounded-md bg-[#f3eef0]">
                    <img src={kacamata} alt="Kacamata Photocromic" className="aspect-square h-full w-full object-cover" />
                </div>

                <div className="flex flex-col justify-center py-2 lg:py-6">
                    <h1 className="text-3xl font-semibold leading-tight text-[#2d2d2d] sm:text-4xl">Kacamata Photocromic</h1>
                    <p className="mt-3 max-w-xl text-xs leading-relaxed text-abu">
                        Kacamata ini dapat melindungi mata kita dari berbagai jenis radiasi. Mulai dari radiasi sinar ultraviolet sampai radiasi nuklir. Selain itu, kacamata ini juga memiliki bentuk yang keren dan kece.
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                        <span className="text-xl font-medium">Rp90.000</span>
                        <del className="text-sm text-abu">Rp145.000</del>
                    </div>

                    <div className="mt-6 border-t border-[#eeeeee] pt-5">
                        <label className="text-xs text-[#666]" htmlFor="size">Variasi</label>
                        <select id="size" className="mt-2 h-10 w-full rounded-md border border-[#d7d7d7] bg-white px-3 text-xs text-abu outline-none">
                            <option>Select Size</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                    </div>

                    <div className="mt-7 flex h-11 items-center justify-between rounded-md bg-text px-4 text-sm text-abu">
                        <button type="button" aria-label="Kurangi jumlah" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>−</button>
                        <span className="font-medium text-[#555]">{quantity}</span>
                        <button type="button" aria-label="Tambah jumlah" onClick={() => setQuantity((value) => value + 1)}>+</button>
                    </div>

                    <Button className="mt-3 h-11 w-full rounded-md text-sm">Tambah ke Keranjang</Button>
                </div>
            </section>

            <section className="mt-10 sm:mt-12">
                <div className="mb-6 flex items-center gap-3 text-button">
                    <span className="h-0.75 w-16 bg-button" />
                    <h2 className="text-xl font-semibold sm:text-2xl">Rekomendasi lainnya</h2>
                </div>
                <ECommerceComp limit={4} />
            </section>
        </main>
        <Footer />
    </>
}

export default DetailProduct