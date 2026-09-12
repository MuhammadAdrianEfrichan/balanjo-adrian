import logoFooter from "../../../assets/footer/logoFooter.svg";
import { Link } from "react-router-dom";

const navItems = [
    ["Home", "/"],
    ["Forum", "/forum"],
    ["Blog", "/blog"],
    ["E-Commerce", "/E-Commerce"],
];

const Footer = () => {
  return (
        <footer className="w-full py-6 text-[#3d3d3d] px-[97.32px] pb-20">
        <div className="mx-auto px-3 sm:px-6 lg:px-10">
            <div className="flex flex-col gap-5 border-b border-[#cfcfcf] pb-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
                <img src={logoFooter} alt="Balanjo logo"/>
                <p className="text-[16px] font-normal tracking-[-0.02em] text-[#4a4a4a]">
                © 2024 Balanjo. All rights reserved.
                </p>
            </div>

            <nav aria-label="Footer navigation">
                <ul className="flex flex-wrap items-center justify-end gap-x-8 gap-y-2 text-[15px] font-normal tracking-[-0.02em] text-[#4a4a4a]">
                {navItems.map(([label, path]) => (
                    <li key={label} className="transition-colors hover:text-[#1b1b1b]">
                    <Link to={path}>{label}</Link>
                    </li>
                ))}
                </ul>
            </nav>
            </div>

            <div className="pt-6">
            <p className="text-[17px] text-[#8a8a8a] opacity-60">
                Inovasi untuk Rangers.
            </p>
            </div>
        </div>
          </footer>
    );
};

export default Footer;