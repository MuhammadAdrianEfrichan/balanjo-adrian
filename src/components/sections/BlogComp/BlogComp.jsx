import Header from "../../ui/Header"
import blog from "../../../assets/blog/blog.png"
import profile from "../../../assets/blog/profile.png"
import { Link } from "react-router-dom"

const carts =[
    {
        id:1,
        photo : blog,
        category : "Technology",
        ket : "The Impact of Technology on the Workplace: How Technology is Changing",
        profile : profile,
        name : "Elizabeth Slavin",
        date : "August 20, 2022",
    },
    {
        id:2,
        photo : blog,
        category : "Technology",
        ket : "The Impact of Technology on the Workplace: How Technology is Changing",
        profile : profile,
        name : "Elizabeth Slavin",
        date : "August 20, 2022",
    },
    {
        id:3,
        photo : blog,
        category : "Technology",
        ket : "The Impact of Technology on the Workplace: How Technology is Changing",
        profile : profile,
        name : "Elizabeth Slavin",
        date : "August 20, 2022",
    },
]
const BlogComp = ()=>{
    return <section className="">
        <Header
            category="Blog"
            label ="Temukan Inspirasi Karya Rangers"
            ket ="Tempat di mana ide-ide segar bertemu dengan pengetahuan mendalam
                    untuk membantu mengembangkan bisnis kamu"
            to='/blog'
        />
        
        <div className="flex gap-20 items-center justify-center">
            
        {carts.map((item)=>{
            return <Link to="/detail-blog"><div className="w-120 h-140 bg-white shadow-xl px-3 py-4 rounded-xl" key={item.id}>
            <img src={item.photo} alt="" className="mx-auto w-[90%]"/>
                <div className="w-89 h-50 px-6 grid gap-4 mt-4">
                <span className="text-md py-1 pl-2 text-button bg-amber-100 w-24.5 h-7 rounded-md">{item.category}</span>
                <p className="text-[20px] font-semibold">{item.ket}</p>
                <div className="flex flex-row gap-3.5 items-center text-abu">
                    <img src={item.profile} alt="" />
                    <span>{item.name}</span>
                    <span>{item.date}</span>
                </div>
            </div>

        </div></Link>
        })}

        </div>
            
    </section>
}

export default BlogComp