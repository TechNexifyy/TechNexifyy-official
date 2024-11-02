import { FaArrowRight } from "react-icons/fa6";

interface Prop {
    lable: string;
    otherStyle?: string;
    func?: () => void;
}

const ButtonRoudedFull = ({ lable, otherStyle, func }:Prop) => {
    return(
        <button className={`border-purple-600 text-purple-600 font-primaryMedium border flex gap-x-1 items-center px-10 py-2 rounded-full hover:bg-purple-600 hover:text-white duration-100 ease-in-out ${otherStyle}`} onClick={func}>
            <span>{lable}</span>
            <FaArrowRight className="animate-pulse animate-infinite animate-duration-1000 animate-delay-1000 animate-ease-in-out" />
        </button>
    );
};

export default ButtonRoudedFull;