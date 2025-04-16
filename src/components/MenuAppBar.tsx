import {FC} from "react";
import {NavLink} from "react-router";
import MenuAppBarProps from "../props/MenuAppBarProps.tsx";

const MenuAppBar: FC<MenuAppBarProps> = (props) => {

    const menuActive: string = props.showMenu ? "left-0 right-1/2" : "-left-full"

    return (
        <ul className={`fixed bg-sky-500 top-0 bottom-0 ${menuActive}  flex flex-col items-center justify-center-safe gap-8 px-8 py-4 rounded shadow-lg shadow-slate-300 text-white font-bold transition-all lg:static lg:bg-transparent lg:top-0 lg:bottom-0 lg:flex-row lg:gap-12 lg:shadow-none lg:px-0 lg:py-0 lg:rounded-none lg:text-[#1a2947] lg:transition-none`}>
            <li className="opacity-75 font-medium flex gap-2">
                <i className="ri-home-2-line lg:hidden"></i>
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="opacity-75 font-medium flex items-center gap-2">
                <i className="ri-information-line lg:hidden"></i>
                <NavLink to="/about">About Me</NavLink>
            </li>
            <li className="opacity-75 font-medium flex items-center gap-2">
                <i className="ri-settings-3-line lg:hidden"></i>
                <NavLink to="/services">Services</NavLink>
            </li>
            <li className="opacity-75 font-medium flex items-center gap-2">
                <i className="ri-information-line lg:hidden"></i>
                <NavLink to="/projects">Projects</NavLink>
            </li>
        </ul>
    )
}

export default MenuAppBar;