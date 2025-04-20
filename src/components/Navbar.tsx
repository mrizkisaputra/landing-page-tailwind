import {FC, useEffect} from "react";
import Logo from "./Logo.tsx";
import MenuAppBar from "./MenuAppBar.tsx";
import * as React from "react";

const Navbar: FC = () => {
    const [show, setShow] = React.useState<boolean>(false)
    const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 5) {
                setIsScrolled(true);
                setShow(false)
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [isScrolled])
    

    const scroll = isScrolled ? "py-6 bg-indigo-500" : "py-4"

    return (
        <div className={`w-full fixed py-4 ${scroll}`}>
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between">
                    <Logo/>
                    <MenuAppBar showMenu={show}/>
                    <div className="social flex items-center gap-2 justify-around">
                        <a className="bg-sky-500 px-5 py-2 rounded-full font-poppins text-white hover:bg-sky-700"
                           href="#">Social Media</a>
                        <i className="ri-menu-line ri-2x lg:hidden" onClick={() => {
                            setShow(!show);
                        }}></i>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;