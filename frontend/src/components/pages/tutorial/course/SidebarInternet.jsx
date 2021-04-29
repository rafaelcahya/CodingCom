import React from 'react'

import { Link } from 'react-router-dom'

export const SidebarInternet = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
        return (
            <>
                <div className="hidden lg:block sticky self-start top-0 pl-0 pt-6 w-1/5">
                    <p className="text-lg font-semibold">Internet Tutorial</p>
                    <div className="sidebar-tutorial flex flex-col gap-2 my-5"> 
                        <div onClick={scrollToTop} className="flex justify-between items-center">
                            <Link to="/internet">Introduction</Link>
                            <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">1 min</p>
                        </div>
                        <div onClick={scrollToTop} className="flex justify-between items-center">
                            <Link to="/what-is-internet">What is internet</Link>
                            <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">5 min</p>
                        </div>
                        <div onClick={scrollToTop} className="flex justify-between items-center">
                            <Link to="/how-does-internet-work">How the internet works</Link>
                            <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">8 min</p>
                        </div>
                        <div onClick={scrollToTop} className="flex justify-between items-center">
                            <Link to="/what-is-http">What is HTTP & HTTPS</Link>
                            <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">12 min</p>
                        </div>
                        <div onClick={scrollToTop} className="flex justify-between items-center">
                            <Link to="/browser">Browser</Link>
                            <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">10 min</p>
                        </div>
                        <div onClick={scrollToTop} className="flex justify-between items-center">
                            <Link to="/DNS">DNS Server</Link>
                            <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">10 min</p>
                        </div>
                        <div onClick={scrollToTop} className="flex justify-between items-center">
                            <Link to="/domain">Domain</Link>
                            <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">5 min</p>
                        </div>
                        <div onClick={scrollToTop} className="flex justify-between items-center">
                            <Link to="/hosting">Hosting</Link>
                            <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">5 min</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

export default SidebarInternet

