import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";


const MainLayOut = () => {
    return (
        <div className="w-11/12 mx-auto " style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;