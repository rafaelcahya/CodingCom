import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Sidebar from './admin-major/Sidebar';

const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
const formatTime = s => new Date(s).toLocaleTimeString();

export default function UserList() {
    const [userList, setUserList] = useState([])
    const [updateAt, setUpdateAt] = useState("")

    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setUpdateAt(dateTime)
    }, 500)

    useEffect(() => {
        axios.get("http://localhost:3001/user/userListActive").then((response) => {
            setUserList(response.data)
        })
    }, []);

    const deleteUser = (id) => {
        axios.put("http://localhost:3001/user/deleteUser", {
            id: id,
            updateAt: updateAt
        })
        window.location.reload();
    }

    return (
        <>
            <div className="bg-white text-black flex h-screen overflow-hidden">
                <Sidebar />
                <div className="overflow-hidden ml-72 m-5 p-8 flex flex-col gap-1 bg-white border border-gray-300 rounded-lg w-full" >
                    <p className="text-xl font-semibold pb-8">List of Actived User</p>
                    <div className="overflow-x-auto">
                        <div className="align-middle inline-block min-w-full">
                            <div className="overflow-hidden">
                                <table className="relative min-w-full">
                                    <thead>
                                        <tr className="border-b-2">
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">FullName</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Username</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Role</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Registered time</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Last updated</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            userList.map(
                                                (val) => {
                                                    return <tr className="border-b-2">
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.fullname}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.name}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.email}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            <p className="px-4 py-2 inline-flex text-sm leading-5 font-semibold rounded-lg bg-green-100 text-green-500">{val.status}</p>
                                                        </td>
                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            {
                                                                val.role === "Admin" ? <p className="px-4 py-2 inline-flex text-sm leading-5 font-semibold rounded-lg bg-red-100 text-red-500">{val.role}</p>
                                                                :
                                                                <p className="px-4 py-2 inline-flex text-sm leading-5 font-semibold rounded-lg bg-blue-100 text-blue-500">{val.role}</p>
                                                            }
                                                        </td>
                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            {
                                                                val.userUpdateAt === "0000-00-00 00:00:00" ? <p></p>
                                                                :
                                                                <p>{formatDate(val.userCreateAt)} {formatTime(val.userCreateAt)}</p>
                                                            }
                                                        </td>
                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            {
                                                                val.userUpdateAt === "0000-00-00 00:00:00" ? <p></p>
                                                                :
                                                                <p>{formatDate(val.userUpdateAt)} {formatTime(val.userUpdateAt)}</p>
                                                            }
                                                        </td>
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