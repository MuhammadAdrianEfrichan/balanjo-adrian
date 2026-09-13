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
        
        <div className="mx-auto grid w-full max-w-[1720px] grid-cols-1 justify-center gap-6 px-5 sm:grid-cols-2 sm:px-8 lg:flex lg:gap-20 lg:px-0">
            
        {carts.map((item)=>{
            return <Link to="/detail-blog" key={item.id}><div className="h-auto min-h-96 w-full rounded-xl bg-white px-3 py-4 shadow-xl lg:h-140 lg:w-120">
            <img src={item.photo} alt="" className="mx-auto w-[90%]"/>
                <div className="mt-4 grid gap-4 px-4 sm:px-6 lg:h-50 lg:w-89">
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