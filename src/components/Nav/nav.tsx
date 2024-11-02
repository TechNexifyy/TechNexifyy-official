// import Headroom from "react-headroom";
import { Link } from "react-router-dom";
import LogoComponent from "../Logo";
import "./nav.css";
import { useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

const NavComponet = () => {

    const progressBarInnav = useRef<HTMLParagraphElement>(null);
    const [showMenu, setShowMenu] = useState(false);

    const updateProgressBar = () => {
        const {scrollTop, scrollHeight} = document.documentElement;
        const scrollPercent = `${((scrollTop / (scrollHeight - window.innerHeight)) * 100)}` + '%';
        progressBarInnav.current?.style.setProperty('--progress', scrollPercent);   
    }
  
    document.addEventListener('scroll', updateProgressBar);

    return(
        <> 
             {/* // <Headroom> */}
        <nav className="relative w-full progressBarOnTop">
            <div className="fixed w-full">
                <div className="w-full bg-white">
                    <div className="flex items-center justify-between max-w-7xl 2xl:max-w-6xl xl:px-[10px] mx-auto">
                        <div className="z-auto">
                            <LogoComponent />
                        </div>
                        <div className="flex items-center gap-x-3 lg:hidden">
                            <Link to="/" className="text-purple-600 hover:text-purple-400 duration-100 ease-in-out">HOME</Link>
                            <Link to="/" className="text-purple-600 hover:text-purple-400 duration-100 ease-in-out">SUCCESS STORY</Link>
                            <Link to="/" className="bg-purple-600 text-nowrap text-white px-10 py-2 rounded-full hover:bg-purple-400 ease-in-out duration-150">JOIN WITH US</Link>
                        </div>
                        <div className="hidden lg:block text-purple-600 text-[20px]">
                            <button onClick={() => setShowMenu(!showMenu)}><IoMenu /></button>
                        </div>
                    </div>
                </div>
                <div ref={progressBarInnav} className="progressBarInnav"></div>
            </div>
        </nav>
        <div className={`${ showMenu ? 'munu' : 'hidden' } duration-100 ease-in-out`}>
            <div className="close w-full flex justify-end py-[10px]">
                <button className="text-white text-[50px]" onClick={() => setShowMenu(!showMenu)}><IoIosClose /></button>
            </div>
            <div className="grid grid-cols-1 justify-center">
                <Link to="/" className="bg-purple-600 text-nowrap text-white px-10 py-2 rounded-full hover:bg-purple-400 ease-in-out duration-150 my-1">HOME</Link>
                <Link to="/" className="bg-purple-600 text-nowrap text-white px-10 py-2 rounded-full hover:bg-purple-400 ease-in-out duration-150 my-1">SUCCESS STORY</Link>
                <Link to="/" className="bg-purple-600 text-nowrap text-white px-10 py-2 rounded-full hover:bg-purple-400 ease-in-out duration-150 my-1">JOIN WITH US</Link>
            </div>
        </div>
        {/* // </Headroom> */}
        </>
    );
};


export default NavComponet;