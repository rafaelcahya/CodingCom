import React from 'react'

import { Link } from 'react-router-dom'

export const SidebarInternet = () => {
        return (
            <>
                <div className="sticky w-1/5 hidden lg:flex flex-col border-r-2 border-gray-300 p-5">
                    <p className="text-lg font-semibold">Internet Tutorial</p>
                    <div className="flex flex-col gap-2 my-5">
                        <Link to="/internet">Introduction</Link>
                        <Link to="/what-is-internet">What is internet</Link>
                        <Link to="/how-does-internet-work">How does internet work</Link>
                        <Link to="/what-is-http">What is HTTP & HTTPS</Link>
                        <Link to="/browser">Browser</Link>
                        <Link to="/DNS">DNS Server</Link>
                        <Link to="/domain">Domain</Link>
                        <Link to="/hosting">Hosting</Link>
                        <Link to="/closing">Closing</Link>
                    </div>
                </div>
            </>
        )
    }

export default SidebarInternet

