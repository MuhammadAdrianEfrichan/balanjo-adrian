import kacamata from "../../../assets/ECommerce/kacamata.png"
import lilin from "../../../assets/ECommerce/lilin.png"
import Button from "../../ui/Button"
import { useNavigate } from "react-router-dom"
import Header from "../../ui/Header"

const cart=[
    {
        id :1,
        photo : kacamata,
        category : "Fashion",
        label : "Kacamata Korea Hitam",
        quantity : "Rp59.000",
    },
    {
        id :2,
        photo : lilin,
        category : "Fashion",
        label : "Lilin Aromaterapi Varian Anggur",
        quantity : "Rp59.000",
    },
    {
        id :3,
        photo : kacamata,
        category : "Fashion",
        label : "Kacamata Korea Hitam",
        quantity : "Rp59.000",
    },
    {
        id :4,
        photo : lilin,
        category : "Fashion",
        label : "Lilin Aromaterapi Varian Anggur",
        quantity : "Rp59.000",
    },
    {
        id :5,
        photo : kacamata,
        category : "Fashion",
        label : "Kacamata Korea Hitam",
        quantity : "Rp59.000",
    },
    {
        id :6,
        photo : lilin,
        category : "Fashion",
        label : "Lilin Aromaterapi Varian Anggur",
        quantity : "Rp59.000",
    },
    {
        id :7,
        photo : kacamata,
        category : "Fashion",
        label : "Kacamata Korea Hitam",
        quantity : "Rp59.000",
    },
    {
        id :8,
        photo : lilin,
        category : "Fashion",
        label : "Lilin Aromaterapi Varian Anggur",
        quantity : "Rp59.000",
    },
]

const ECommerceComp = ({ limit })=>{
    const navigate = useNavigate()
    const products = [...cart, ...cart.slice(0, 4)]
    const visibleProducts = limit ? products.slice(0, limit) : products

    return <> <Header
            category="E-Commerce"
            label ="Jelajahi UMKM Pilihan Rangers"
            ket ="Temukan inovasi dan keunikan terbaru dari bisnis-bisnis mahasiswa
            Universitas Andalas pada banyak kategori"
            to='/E-Commerce'
        />
    <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {visibleProducts.map((item, index) => (
            <article className="overflow-hidden rounded-lg bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]" key={`${item.id}-${index}`}>
                <img src={item.photo} alt={item.label} className="aspect-281/223 w-full object-cover" />
                <div className="flex min-h-36 flex-col items-center px-2 py-3 text-center sm:min-h-45 sm:px-4 sm:py-4">
                    <h2 className="text-xs font-normal text-abu sm:text-[16px]">{item.category}</h2>
                    <h3 className="min-h-8 text-sm font-normal leading-tight sm:min-h-10.5 sm:text-[18px]">{item.label}</h3>
                    <span className="mt-2 text-base font-semibold sm:mt-4 sm:text-[20px]">{item.quantity}</span>
                    <Button onClick={() => navigate("/detail-product")} className="mt-2 h-9 w-full max-w-37.5 rounded-md text-[11px] sm:mt-4 sm:h-11 sm:text-[14px]">+ Keranjang</Button>
                </div>
            </article>
        ))}
    </section>
    </>
}

export default ECommerceComp