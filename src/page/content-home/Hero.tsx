import Marquee from "react-fast-marquee";
import { RxDotFilled } from "react-icons/rx";
import HeroPng from "../../assets/images/img/hero.png";
import ButtonRoudedFull from "../../components/cotent-button/button-roudedfull";

const HeroHomeComponent = () => {


    const Animation = [
        {
            name: "Front-End Developers"
        },
        {
            name: "Back-End Developers"
        },
        {
            name: "FullStack Developers"
        },
        {
            name: "Mobile Developers"
        },
        {
            name: "UX/UI Designs"
        },
        {
            name: "DevOps"
        },
        {
            name: "Front-End Developers"
        },
        {
            name: "Back-End Developers"
        },
        {
            name: "FullStack Developers"
        },
        {
            name: "Mobile Developers"
        },
        {
            name: "UX/UI Designs"
        },
        {
            name: "DevOps"
        },
    ];

    return(
        <div className=" bg-white">
            <div className="flex items-center justify-around max-w-7xl 2xl:max-w-6xl xl:px-[40px] lg:px-[10px] lg:py-[70px] md:py-[20px] mx-auto lg:block">
                <div className="w-1/2 flex justify-center items-center my-[250px] lg:my-0 lg:w-full">
                    <div>
                        <div>
                            <h1 className="text-5xl font-primaryMedium text-purple-600">Grow your business</h1>
                            <h1 className="text-5xl font-primaryMedium text-blue-500">with technology</h1>
                            <h1 className="text-5xl font-primaryMedium text-pink-500">with us</h1>
                            <p className="text-[16px] mt-[5px] font-primaryRegular text-gray-700">We carefully match client job opportunities with the right tech people</p>
                            <p className="text-[16px] mt-[5px] font-primaryRegular text-gray-700">And We ready development your campany with technology.</p>
                        </div>
                        <div className="mt-[40px]">
                            <ButtonRoudedFull lable="Make your systems with us" />
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center items-center lg:my-0 lg:w-full">
                    <img src={HeroPng} className="lg:w-[250px] lg:mt-[50px]" alt="" />
                </div>
            </div>
            <div className="w-full bg-purple-600 py-1 text-white">
                <Marquee speed={70}>
                    <div className="flex items-center gap-x-3">
                        {
                            Animation.map((item, key) => (
                                <div key={key} className="flex gap-x-1 text-[20px] items-center font-primaryMedium">
                                    <RxDotFilled />
                                    <span>{item.name}</span>
                                </div>
                            ))
                        }
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default HeroHomeComponent;