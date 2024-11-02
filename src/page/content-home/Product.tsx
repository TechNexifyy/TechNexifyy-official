import { FaArrowRight } from "react-icons/fa6";

const ProductComponent = () => {
    return(
        <div className="bg-white py-[150px] lg:pt-10">
            <div className="max-w-7xl 2xl:max-w-6xl xl:px-[40px] lg:px-[10px] mx-auto lg:block">
                <div className="flex justify-between items-center lg:block">
                    <div>
                        <h1 className="text-purple-600 text-4xl font-primaryMedium">Service</h1>
                    </div>
                    <div>
                        <p>We are Software Developers</p>
                    </div>
                </div>
            </div>
            <div className="my-5 max-w-7xl 2xl:max-w-6xl xl:px-[40px] lg:px-[10px] mx-auto lg:block">
                <div className="flex md:block justify-between gap-x-2">
                    <div className="w-3/5 transition md:my-1 md:w-full hover:-translate-y-1 hover:scale-100 h-[350px] relative rounded-xl bg-mobile-app bg-cover bg-center hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] duration-100 ease-in-out">
                        <div className="flex items-end static h-full bottom-0 w-full bg-gradient-to-t from-black opacity-50 rounded-xl">
                            <div className="px-5 py-2 w-full flex justify-between items-center absolute">
                                <div>
                                    <span className="text-white font-primaryMedium text-[30px]">Mobile App</span>
                                    <span className="text-white font-primaryMedium text-[30px] block">Development</span>
                                </div>
                                <div className="flex justify-center items-center h-[50px] w-[50px] bg-white rounded-full text-purple-600">
                                <FaArrowRight />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/5 transition md:my-1 md:w-full hover:-translate-y-1 hover:scale-100 h-[350px] relative rounded-xl bg-ux bg-cover bg-center hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] duration-100 ease-in-out">
                        <div className="flex items-end static h-full bottom-0 w-full bg-gradient-to-t from-black opacity-50 rounded-xl">
                            <div className="px-5 py-2 w-full flex justify-between items-center absolute">
                                <div>
                                    <span className="text-white font-primaryMedium text-[30px]">UX/UI</span>
                                    <span className="text-white font-primaryMedium text-[30px] block">Design</span>
                                </div>
                                <div className="flex justify-center items-center h-[50px] w-[50px] bg-white rounded-full text-purple-600">
                                <FaArrowRight />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex md:block justify-between mt-2 gap-x-2">
                    <div className="w-2/5 transition md:my-1 md:w-full hover:-translate-y-1 hover:scale-100 h-[350px] relative rounded-xl bg-devops bg-cover bg-center hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] duration-100 ease-in-out">
                        <div className="flex items-end static h-full bottom-0 w-full bg-gradient-to-t from-black opacity-50 rounded-xl">
                            <div className="px-5 py-2 w-full flex justify-between items-center absolute">
                                <div>
                                    <span className="text-white font-primaryMedium text-[30px]">Development</span>
                                    <span className="text-white font-primaryMedium text-[30px] block">And Operations</span>
                                </div>
                                <div className="flex justify-center items-center h-[50px] w-[50px] bg-white rounded-full text-purple-600">
                                <FaArrowRight />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/5 transition md:my-1 md:w-full hover:-translate-y-1 hover:scale-100 h-[350px] relative rounded-xl bg-web bg-cover bg-center hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] duration-100 ease-in-out">
                        <div className="flex items-end static h-full bottom-0 w-full bg-gradient-to-t from-black opacity-50 rounded-xl">
                            <div className="px-5 py-2 w-full flex justify-between items-center absolute">
                                <div>
                                    <span className="text-white font-primaryMedium text-[30px]">Web</span>
                                    <span className="text-white font-primaryMedium text-[30px] block">Development</span>
                                </div>
                                <div className="flex justify-center items-center h-[50px] w-[50px] bg-white rounded-full text-purple-600">
                                <FaArrowRight />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductComponent;