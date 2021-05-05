import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            <div className="sidebar fixed w-64 m-5 p-8 flex flex-col gap-2 bg-white rounded-2xl " style={{height: "750px"}}>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2">Dashboard</p>
                <div className="flex flex-col" style={{fontSize: "16px"}}>
                    <Link to="/mentor/class-request">
                        <div className="flex items-center gap-4 hover:bg-gray-100 hover:text-blue-500 px-2 py-2 rounded-lg cursor-pointer">
                            <p>Class Request</p>
                        </div>
                    </Link>
                    <Link to="/mentor/project-submission">
                        <div className="flex items-center gap-4 hover:bg-gray-100 hover:text-blue-500 px-2 py-2 rounded-lg cursor-pointer">
                            <p>Project submission</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
