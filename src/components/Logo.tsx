import Logo from "../assets/images/img/logo.png";
import { Link } from "react-router-dom";

const LogoComponent = () => {
    return(
        <Link to="/">
            <div className="flex items-center">
                <img src={Logo} className="w-[80px] lg:w-[60px]" alt="" />
                <span className="font-primaryMedium md:hidden text-purple-600 text-[22px] lg:text-[20px]">Tech Nexify</span>
            </div>
        </Link>
    );
};

export default LogoComponent;