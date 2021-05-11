import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            <div className="sidebar fixed w-64 m-5 p-8 flex flex-col gap-2 bg-white rounded-2xl border border-gray-300" style={{height: "750px"}}>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2">Dashboard</p>
                <div className="flex flex-col" style={{fontSize: "16px"}}>
                    <Link to="/admin/user-list">
                        <div className="flex items-center gap-4 hover:bg-gray-100 hover:text-blue-500 px-2 py-2 rounded-lg cursor-pointer">
                            <p>User registration</p>
                        </div>
                    </Link>
                    <Link to="/admin/user-list-active">
                        <div className="flex items-center gap-4 hover:bg-gray-100 hover:text-blue-500 px-2 py-2 rounded-lg cursor-pointer">
                            <p>User Actived</p>
                        </div>
                    </Link>
                    <Link to="/admin/class-requisition">
                        <div className="flex items-center gap-4 hover:bg-gray-100 hover:text-blue-500 px-2 py-2 rounded-lg cursor-pointer">
                            <p>Class requisition</p>
                        </div>
                    </Link>
                    <Link to="/admin/payment-requisition">
                        <div className="flex items-center gap-4 hover:bg-gray-100 hover:text-blue-500 px-2 py-2 rounded-lg cursor-pointer">
                            <p>Verification Payment</p>
                        </div>
                    </Link>
                    <Link to="/admin/project-list">
                        <div className="flex items-center gap-4 hover:bg-gray-100 hover:text-blue-500 px-2 py-2 rounded-lg cursor-pointer">
                            <p>Projectlist</p>
                        </div>
                    </Link>
                    <div className="flex items-center gap-4 hover:bg-gray-100 hover:text-blue-500 px-2 py-2 rounded-lg cursor-pointer">
                        <p>Transaction</p>
                    </div>
                    <Link to="/admin/input-jobs">
                        <div className="flex items-center gap-4 hover:bg-gray-100 hover:text-blue-500 px-2 py-2 rounded-lg cursor-pointer">
                            <p>Input jobs</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
