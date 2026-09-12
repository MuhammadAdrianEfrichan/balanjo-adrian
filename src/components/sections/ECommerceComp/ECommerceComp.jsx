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
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {visibleProducts.map((item, index) => (
            <article className="overflow-hidden rounded-lg bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]" key={`${item.id}-${index}`}>
                <img src={item.photo} alt={item.label} className="aspect-281/223 w-full object-cover" />
                <div className="flex min-h-45 flex-col items-center px-4 py-4 text-center">
                    <h2 className="text-[16px] font-normal text-abu">{item.category}</h2>
                    <h3 className="min-h-10.5 text-[18px] font-normal leading-tight">{item.label}</h3>
                    <span className="mt-4 text-[20px] font-semibold">{item.quantity}</span>
                    <Button onClick={() => navigate("/detail-product")} className="mt-4 h-11 w-full max-w-37.5 rounded-md text-[14px]">+ Keranjang</Button>
                </div>
            </article>
        ))}
    </section>
    </>
}

export default ECommerceComp