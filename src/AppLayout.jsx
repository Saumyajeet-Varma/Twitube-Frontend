import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function AppLayout() {
    return (
        <>
            <Navbar />
            <div className="sm:flex flex-none">
                <div>
                    <Sidebar />
                </div>
                <div className="sm:flex-1">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default AppLayout
