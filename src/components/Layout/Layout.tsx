import {FC} from "react";
import HeaderSection from "../HeaderSection/HeaderSection.tsx";
import {Outlet} from "react-router-dom";

const Layout: FC = () => {
    return (
        <>
            <HeaderSection/>
            <Outlet/>
        </>
    );
};

export default Layout;