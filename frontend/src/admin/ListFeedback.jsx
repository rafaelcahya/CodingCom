import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Sidebar from './admin-major/Sidebar';

export default function ListFeedback() {
    const [value,setValue] = useState([])
    const [updateAt, setUpdateAt] = useState("")

    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setUpdateAt(dateTime)
    }, 500)

    useEffect(() => {
        axios.get("http://localhost:3001/feedback/feedbackList").then((response) => {
            setValue(response.data)
        })
    }, []);

    const deleteUser = (id) => {
        axios.put("http://localhost:3001/feedback/deleteFeedback", {
            id: id,
            updateAt: updateAt
        })
        window.location.reload()
    }

    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });

    return (
        <>
            <div className="bg-white text-black flex h-screen overflow-hidden">
                <Sidebar />
                <div className="overflow-hidden ml-72 m-5 p-8 flex flex-col gap-1 bg-white border border-gray-300 rounded-lg w-full" >
                    <p className="text-lg font-semibold">Feedback List</p>
                    <p className="text-sm font-semibold">List of Feedback from User</p>
                    <div className="overflow-x-auto mt-8">
                        <div className="align-middle inline-block min-w-full">
                            <div className="overflow-hidden">
                                <table className="relative min-w-full">
                                    <thead>
                                        <tr className="border-b-2">
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Username</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">About</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">description</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Last created</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            value.map(
                                                (val) => {
                                                    return <tr className="border-b-2">
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.name}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.about}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.description}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{formatDate(val.feedbackCreateAt)}</td>          
                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            <p className="px-4 py-2 inline-flex text-sm leading-5 font-semibold rounded-lg bg-red-100 text-red-500 cursor-pointer" onClick={() => { deleteUser(val.id) }}>Delete</p>
                                                        </td>
                                                        {/* <td className="flex items-center gap-4 px-6 py-3 whitespace-nowrap">
                                                            <div className="flex flex-col gap-2 w-40">
                                                                <select className="py-2 border border-black rounded-lg" id="dropdown" onChange={(event) => {
                                                                    setNewStatus(event.target.value)
                                                                }}>
                                                                    <option value="">Change Status</option>
                                                                    <option value="ACTIVED">Approve</option>
                                                                    <option value="REJECTED">Reject</option>
                                                                </select>
                                                            </div>
                                                            <p className="px-4 py-2 inline-flex text-sm leading-5 font-semibold rounded-lg bg-yellow-100 text-yellow-500 cursor-pointer"  onClick={() => { updatePayment(val.id,val.paket_id) }}>Update</p>
                                                        </td> */}
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
