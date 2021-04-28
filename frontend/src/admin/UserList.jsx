import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Sidebar from './admin-major/Sidebar';

export default function UserList() {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/user/userList").then((response) => {
            setUserList(response.data)
        })
    }, []);

    return (
        <>
        <div className="flex h-screen overflow-hidden">
        <Sidebar/>
        <div className="table-request-class overflow-hidden ml-80 m-5 p-8 flex flex-col gap-1 bg-white rounded-2xl w-full" >
            <p className="text-lg font-semibold pb-8">User List</p>
            <div className="overflow-x-auto">
                <div className="align-middle inline-block min-w-full">
                    <div className="overflow-hidden">
                        <table className="relative min-w-full">
                            <thead>
                                <tr className="border-b-2">
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Id</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Full Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userList.map(
                                        (val) => {
                                            return <tr className="border-b-2">
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.id}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.fullname}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.name}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.email}</td>
                                                    </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}