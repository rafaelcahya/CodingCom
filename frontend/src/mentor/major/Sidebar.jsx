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
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            <p>Class Request</p>
                        </div>
                    </Link>
                    <Link to="/mentor/project-submission">
                        <div className="flex items-center gap-4 hover:bg-gray-100 hover:text-blue-500 px-2 py-2 rounded-lg cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            <p>Project submission</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}