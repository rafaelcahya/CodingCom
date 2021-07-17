import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './admin-major/Sidebar';

export default function Class() {
    const [reqList, setReqList] = useState([])
    const [updateAt, setUpdateAt] = useState("")

    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setUpdateAt(dateTime)
    }, 500)

    useEffect(() => {
        axios.get("http://localhost:3001/class/classList").then((response) => {
            setReqList(response.data)
        })
    }, []);

    const deleteUser = (id) => {
        axios.put("http://localhost:3001/class/deleteClass", {
            id: id,
            updateAt: updateAt
        })
        window.location.reload()
    }

    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });

    return (
        <>
        <div className="bg-white text-black flex h-screen overflow-hidden">
            <Sidebar/>
            <div className="overflow-hidden ml-72 m-5 p-8 flex flex-col gap-1 bg-white border border-gray-300 rounded-lg" >
            <p className="text-lg font-semibold">Class Requisition</p>
            <p className="text-sm font-semibold">A list of class requests that the mentor has created</p>
            <div className="overflow-x-auto mt-8">
                <div className="align-middle inline-block min-w-full">
                    <div className="overflow-hidden">
                        <table className="relative min-w-full">
                            <thead>
                                <tr className="border-b-2">
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Mentor name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Class Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Start Date</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">End Date</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Start Time</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">End Time</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">URL</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Last Created</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Last updated</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>``
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reqList.map(
                                        (val) => {
                                            return <tr className="border-b-2">
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.fullname}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.email}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.className}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{formatDate(val.startDate)}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{formatDate(val.endDate)}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.startTime}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.endTime}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.classUrl}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            {
                                                                val.classCreateAt === "0000-00-00 00:00:00" ? <p></p>
                                                                :
                                                                <p>{formatDate(val.classCreateAt)}</p>
                                                            }
                                                        </td>
                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            {
                                                                val.classUpdateAt === "0000-00-00 00:00:00" ? <p></p>
                                                                :
                                                                <p>{formatDate(val.classUpdateAt)}</p>
                                                            }
                                                        </td>
                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            {
                                                                val.status === "Approve" ? (<p className="px-4 py-2 inline-flex text-sm leading-5 font-semibold rounded-lg bg-green-100 text-green-500">{val.status}</p>)
                                                                :
                                                                val.status === "Pending" ? (<p className="px-4 py-2 inline-flex text-sm leading-5 font-semibold rounded-lg bg-yellow-100 text-yellow-500">{val.status}</p>) : (<p className="px-4 py-2 inline-flex text-sm leading-5 font-semibold rounded-lg bg-red-100 text-red-500">{val.status}</p>)
                                                            }
                                                        </td>
                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            {
                                                                val.status === "Pending" ?(
                                                                    <Link to={"/edit-request-class-" + val.id}>
                                                                    <p className="px-4 py-2 inline-flex text-sm leading-5 font-medium rounded-lg bg-blue-1 text-white">Request</p>
                                                                    </Link>)
                                                                    :
                                                                    val.status === "Approve" ? (<p className="px-4 py-2 inline-flex text-sm leading-5 font-semibold rounded-lg bg-green-100 text-green-500">{val.status}</p>)
                                                                    :
                                                                    (<p className="px-4 py-2 inline-flex text-sm leading-5 font-semibold rounded-lg bg-red-100 text-red-500">{val.status}</p>)
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
