import logoWhite from "../../assets/navbar/logoWhite.svg"
import logoCoklat from "../../assets/navbar/logoCoklat.svg"
import belanjaWhite from "../../assets/navbar/belanjaWhite.svg"
import belanjaBlack from "../../assets/navbar/belanjaBlack.svg"
import Button from "../ui/Button"
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation()
    const navigate = useNavigate()

    const alwaysTransparentPages = ["/"]
    const isHomeLike = alwaysTransparentPages.includes(location.pathname)

    // transparan HANYA kalau di halaman home DAN belum discroll
    const isTransparent = isHomeLike && !isScrolled

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-40 transition-colors duration-300
                ${isTransparent ? 'bg-transparent' : 'bg-white shadow-md'}`}
        >
            <nav className="w-full h-33 px-14.75 flex items-center justify-between">
                <div className="flex gap-30">
                    <Link to="/">
                        <img src={isTransparent ? logoWhite : logoCoklat} alt="logo" />
                    </Link>
                    <ul
                        className={`flex justify-between items-center w-91.25 font-medium text-[18px] transition-colors duration-300
                            ${isTransparent ? 'text-white' : 'text-black'}`}
                    >
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/forum">Forum</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/E-commerce">E-Commerce</Link></li>
                    </ul>
                </div>
                <div className="flex gap-20">
                    <Link to="/E-Commerce" aria-label="Buka E-Commerce">
                        <img src={isTransparent ? belanjaWhite : belanjaBlack} alt="" />
                    </Link>
                    <div className="flex justify-center items-center gap-5">
                        <Link to="/login"
                            className={`text-[18px] font-normal transition-colors duration-300
                                ${isTransparent ? 'text-white' : 'text-button'}`}
                        >
                            Log in
                        </Link>
                        <Button onClick={() => navigate("/register")} className="w-29.75 h-12.25">Sign up</Button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar