import MasterLayout from "../layouts/master";
import HeroHomeComponent from "./Hero";
import ProductComponent from "./Product";

const ViewHome = () => {
    return(
        <MasterLayout>
            <HeroHomeComponent />
            <ProductComponent />
        </MasterLayout>
    );
};

export default ViewHome;