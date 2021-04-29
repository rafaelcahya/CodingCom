import React from 'react'

import { Link } from 'react-router-dom'

export const SidebarInternet = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
        return (
            <>
                <div className="hidden lg:block sticky self-start top-0 pl-5 pt-6 w-1/5">
                    <p className="text-lg font-semibold">Internet Tutorial</p>
                    <div className="flex flex-col gap-2 my-5"> 
                        <p onClick={scrollToTop}><Link to="/internet">Introduction</Link></p>
                        <p onClick={scrollToTop}><Link to="/what-is-internet">What is internet</Link></p>
                        <p onClick={scrollToTop}><Link to="/how-does-internet-work">How does internet work</Link></p>
                        <p onClick={scrollToTop}><Link to="/what-is-http">What is HTTP & HTTPS</Link></p>
                        <p onClick={scrollToTop}><Link to="/browser">Browser</Link></p>
                        <p onClick={scrollToTop}><Link to="/DNS">DNS Server</Link></p>
                        <p onClick={scrollToTop}><Link to="/domain">Domain</Link></p>
                        <p onClick={scrollToTop}><Link to="/hosting">Hosting</Link></p>
                    </div>
                </div>
            </>
        )
    }

export default SidebarInternet

