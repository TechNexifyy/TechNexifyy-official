import LogoComponent from "../Logo";

const FooterComponent = () => {
    return(
        <footer className="w-full">
            <div className="w-full py-1 bg-purple-600 flex justify-center text-[20px] md:text-nowrap md:text-[16px] font-primaryRegular text-white items-center">
                <span>Tech Nexify. Powered by People</span>
            </div>
            <div className="w-full bg-gray-100">
                <div className="max-w-7xl 2xl:max-w-6xl lg:px-[10px] py-[70px] mx-auto lg:block text-purple-600 flex justify-between items-center md:justify-center">
                    <div className="w-1/2">
                        <LogoComponent />
                        <div className="grid grid-cols-1 gap-1">
                            <p>Address: 672 M.2, Ao Nang, Maung, Krabi 81000</p>
                            <a href="">Email: Technexify@outlook.com</a>
                            <a href="">Phone: 064-752-6359</a>
                        </div>
                    </div>
                    <div className="w-1/2 md:mt-5 flex justify-end md:justify-center items-start">
                        <div className="w-full grid grid-cols-3 md:grid-cols-1 gap-3 justify-between items-start">
                            <div>
                                <span className="text-[20px] font-primaryMedium">Company</span>
                                <ul className="text-purple-500">
                                    <li>Teams</li>
                                    <li>Carees</li>
                                    <li>Success Story</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div>
                                <span className="text-[20px] font-primaryMedium">Company</span>
                                <ul className="text-purple-500">
                                    <li>Teams</li>
                                    <li>Carees</li>
                                    <li>Success Story</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div>
                                <span className="text-[20px] font-primaryMedium">Socials</span>
                                <ul className="text-purple-500">
                                    <li><a href="">Facebook</a></li>
                                    <li><a href="">Line</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white">
                <div className="max-w-7xl 2xl:max-w-6xl lg:px-[10px] mx-auto lg:block w-full py-1 flex justify-start text-[16px] md:text-[12px] font-primaryRegular text-purple-600 items-center">
                    <span>Copyright © TechNexify Co.,Ltd All right reserved.</span>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;