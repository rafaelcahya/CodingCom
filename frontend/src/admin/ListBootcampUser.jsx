import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Sidebar from './admin-major/Sidebar';

export default function UserList() {
    const [userList, setUserList] = useState([])
    //const [newRole, setNewRole] = useState("")
    const [updateAt, setUpdateAt] = useState("")

    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setUpdateAt(dateTime)
    }, 500)

    useEffect(() => {
        axios.get("http://localhost:3001/bootcampuser/BootcampList").then((response) => {
            setUserList(response.data)
        })
    }, []);

    // const updateUser = (id) => {
    //     axios.put("http://localhost:3001/user/updateUser", {
    //         id: id,
    //         role: newRole,
    //         updateAt : updateAt
    //     })
    //     setNewRole("")
    // }
    const deleteUser = (id) => {
        axios.put("http://localhost:3001/bootcampuser/deleteBootcamp", {
            id: id,
            updateAt: updateAt
        })
    }

    return (
        <>
            <div className="bg-white text-black flex h-screen overflow-hidden">
                <Sidebar />
                <div className="overflow-hidden ml-72 m-5 p-8 flex flex-col gap-1 border border-gray-300 rounded-lg w-full" >
                    <p className="text-xl font-semibold pb-8">List of Registered User</p>
                    <div className="overflow-x-auto">
                        <div className="align-middle inline-block min-w-full">
                            <div className="overflow-hidden">
                                <table className="relative min-w-full">
                                    <thead>
                                        <tr className="border-b-2">
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">FullName</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Gender</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Birth of Date</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone Number</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Emergency Number</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Address</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">City</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Postal Code</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Education</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Program</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Motivation</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Batch</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Busy</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Registered Bootcamp</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Last Updated</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            userList.map(
                                                (val) => {
                                                    return <tr className="border-b-2">
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.fullname}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.email}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.gender}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.BoD}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.phoneNumber}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.emergencyNumber}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.address}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.city}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.postalCode}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.education}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.program}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.motivation}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.batch}:{val.startDate}-{val.endDate}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.busy}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.status}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.bootcampCreateAt}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.bootcampUpdateAt}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            <p className="px-4 py-2 inline-flex text-sm leading-5 font-semibold rounded-lg bg-red-100 text-red-500 cursor-pointer" onClick={() => { deleteUser(val.id) }}>Delete</p>
                                                        </td>
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