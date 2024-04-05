import React from "react";
import logo from "../assets/nav-logo/logo.png";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-[#143561] top-0 sticky z-50">
            <div className="container flex justify-between items-center h-16">
                <div className="flex items-center gap-16">
                    <Link to="/"><img src={logo} className="cursor-pointer" alt=""/></Link>
                    <ul className="flex items-center gap-10 text-[#FFFFFF]">
                        <li className="lg:block hidden cursor-pointer"><Link to="about">About us</Link></li>
                        <li className="lg:block hidden cursor-pointer"><Link to="contact">Contact Us</Link></li>
                        <li className="lg:block hidden cursor-pointer"><Link to="features">Features</Link></li>
                        <li className="lg:block hidden cursor-pointer"><Link to="services">Services</Link></li>
                    </ul>
                </div>

                <div className="right">
                    <button
                        className="lg:block hidden border border-[#D7AC70] text-[#D7AC70] px-3 py-2 rounded-md text-sm">
                        Get started
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Navbar;
