import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Main = () => {
    const location = useLocation();
    const path = location.pathname.includes('login')
    return (
        <div>
            {path || <Navbar></Navbar>}
            <Outlet></Outlet>
            {path || <Footer></Footer>}
        </div>
    );
};

export default Main;