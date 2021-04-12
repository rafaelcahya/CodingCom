import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class SidebarInternet extends Component {
    render() {
        return (
            <>
                <div className="w-1/5 flex flex-col border-r-2 border-black p-5">
                    <p className="text-lg font-semibold">Internet Tutorial</p>
                    <div className="flex flex-col gap-2 my-5">
                        <Link to="/internet">Introduction</Link>
                        <Link to="/what-is-internet">What is internet</Link>
                        <Link to="/how-does-internet-work">How does internet work</Link>
                        <Link to="/what-is-http">What is HTTP & HTTPS</Link>
                    </div>
                </div>
            </>
        )
    }
}

export default SidebarInternet
