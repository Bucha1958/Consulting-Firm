import React from "react";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <div className="min-w-full min-h-screen">
            <Navbar/>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;

