import { ReactNode } from "react";
import NavComponet from "../../components/Nav/nav";
import FooterComponent from "../../components/Footer/footer";

interface Master {
    children: ReactNode,
}

const MasterLayout = ({ children }:Master) => {
    return(
        <>
        <div className="w-full text-[14px] font-primaryRegular text-gray-700">
            <NavComponet />
            <div>
                {children}
            </div>
            <FooterComponent />
        </div>
        </>
    );
};


export default MasterLayout;