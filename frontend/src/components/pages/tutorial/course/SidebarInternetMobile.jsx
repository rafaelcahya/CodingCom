import React from "react";
import { Link } from "react-router-dom";

export default function SidebarInternetMobile() {
    return (
        <>
            <nav className="sidebar-mobile block lg:hidden fixed top-16 right-2 z-10">
                <ul>
                    <li>
                        <div className="flex items-center px-8 py-4 gap-2 shadow rounded-lg">
                            <p className="uppercase font-semibold text-xs tracking-wider">Internet Tutorial</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
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
            <div className="sidebar-mobile-dropdown bg-red-100 absolute right-0 text-right shadow rounded-lg px-4">
                <p onClick={window.scrollTo(0, 0)}>
                    <Link to="/internet">
                        <p className="px-6 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Introduction</p>
                    </Link>
                </p>
                <p onClick={window.scrollTo(0, 0)}>
                    <Link to="/what-is-internet">
                        <p className="px-6 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">What is internet</p>
                    </Link>
                </p>
                <p onClick={window.scrollTo(0, 0)}>
                    <Link to="/how-internet-work">
                        <p className="px-6 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">How internet works</p>
                    </Link>
                </p>
                <p onClick={window.scrollTo(0, 0)}>
                    <Link to="/what-is-http">
                        <p className="px-6 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">HTTP & HTTPS</p>
                    </Link>
                </p>
                <p onClick={window.scrollTo(0, 0)}>
                    <Link to="/browser">
                        <p className="px-6 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Browser</p>
                    </Link>
                </p>
                <p onClick={window.scrollTo(0, 0)}>
                    <Link to="/dns">
                        <p className="px-6 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">DNS Server</p>
                    </Link>
                </p>
                <p onClick={window.scrollTo(0, 0)}>
                    <Link to="/domain">
                        <p className="px-6 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Domain</p>
                    </Link>
                </p>
                <p onClick={window.scrollTo(0, 0)}>
                    <Link to="/hosting">
                        <p className="px-6 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Hosting</p>
                    </Link>
                </p>
            </div>
        </>
    )
}
