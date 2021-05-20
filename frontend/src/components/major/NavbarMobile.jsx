import React from "react";
import { Link } from "react-router-dom";

export default function NavbarMobile() {
    return (
        <>
            <nav className="navbar-mobile block lg:hidden fixed top-0 pt-4 pb-3 px-10 shadow-md w-full z-10">
                <ul>
                    <li>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                            <p className="uppercase font-semibold text-xs tracking-wider">Menu</p>
                        </div>
                        <Submenu />
                    </li>
                </ul>
            </nav> 
        </>
    )
}


function Submenu() {
    return (
        <>
            <div className="navbar-mobile-dropdown rounded-lg px-4">
                <p>
                    <Link to="/">
                        <p className="px-6 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Home</p>
                    </Link>
                </p>
                <p>
                    <Link to="/pricing">
                        <p className="px-6 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Pricing</p>
                    </Link>
                </p>
                <p>
                    <Link to="/roadmap">
                        <p className="px-6 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Roadmap</p>
                    </Link>
                </p>
                <p>
                    <Link to="/tutorial">
                        <p className="px-6 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Tutorial</p>
                    </Link>
                </p>
                <p>
                    <Link to="/">
                        <p className="px-6 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Deployment</p>
                    </Link>
                </p>
                <p>
                    <Link to="/challenge">
                        <p className="px-6 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Challenge</p>
                    </Link>
                </p>
                <p>
                    <Link to="/class-session">
                        <p className="px-6 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Coding Class</p>
                    </Link>
                </p>
                <p>
                    <Link to="/news">
                        <p className="px-6 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">News</p>
                    </Link>
                </p>
                <p>
                    <Link to="/career">
                        <p className="px-6 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Career</p>
                    </Link>
                </p>    
            </div>
        </>
    )
}

