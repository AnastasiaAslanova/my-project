import { Outlet } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AboutUs from "../AboutUs/AboutUs";

function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <AboutUs/>
            <Footer />
        </>
    )
}

export default Layout;