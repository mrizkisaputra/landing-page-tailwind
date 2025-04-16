import {FC} from "react";
import TailwindLogo from "../assets/images/Tailwind_CSS_Logo.svg.png";

const Logo: FC = () => {
    return (
        <div className="logo flex items-center gap-1">
            <img src={TailwindLogo} alt="tailwindcss" className="max-w-8"/>
            <h1 className="text-2xl font-bold font-poppins">tailwindcss</h1>
        </div>
    )
}

export default Logo;