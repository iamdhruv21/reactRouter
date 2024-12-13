import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <>
            <Header/>
            <Outlet />
            <Footer/>
        </>
    );
}

export default Layout;