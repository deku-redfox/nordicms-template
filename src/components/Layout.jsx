// UI de base que possede la plupart des pages du site web

import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import TopBtn from "./TopBtn";

export default function Layout() {

    return (
        <>
            <Header />

            <div className="pt-[80px] lg:pt-[87px] xl:pt-[106px]">
                <Outlet />
            </div>

            <TopBtn />
            
            <Footer />
        </>
    )
}