import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Sidebar from './admin-major/Sidebar';

export default function PaymentAPPROVED() {
    const [payList, setPayList] = useState([])
    const [sum, setSum] = useState([])
    const [updateAt, setUpdateAt] = useState("")

    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setUpdateAt(dateTime)
    }, 500)

    useEffect(() => {
        axios.get("http://localhost:3001/transaction/TransactionListAPPROVED").then((response) => {
            setPayList(response.data)
            console.log(response.data)
        })
    }, []);

    useEffect(() => {
        axios.get("http://localhost:3001/transaction/TransactionSUM").then((response) => {
            setSum(response.data)
            console.log(response.data)
        })
    }, []);

    const deleteUser = (id) => {
        axios.put("http://localhost:3001/transaction/deleteTransaction", {
            id: id,
            updateAt: updateAt
        })
        window.location.reload()
    }

    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
    const formatTime = s => new Date(s).toLocaleTimeString();

    return (
        <>
            <div className="bg-white text-black flex h-screen overflow-hidden">
                <Sidebar />
                <div className="overflow-hidden ml-72 m-5 p-8 flex flex-col gap-1 bg-white border border-gray-300 rounded-lg w-full" >
                    <p className="text-lg font-semibold">Payment Approved</p>
                    <p className="text-sm font-semibold">A list of users who have approved the payment</p>
                    <div className="overflow-x-auto mt-8">
                        <div className="align-middle inline-block min-w-full">
                            <div className="overflow-hidden">
                                <table className="relative min-w-full">
                                    <thead>
                                        <tr className="border-b-2">
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">FullName</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Username</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Package Type</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Last created</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">last updated</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            payList.map(
                                                (val) => {
                                                    return <tr className="border-b-2">
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.fullname}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.name}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.email}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.tipe_paket}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">IDR {val.price}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            <p className="px-4 py-2 inline-flex text-sm leading-5 font-semibold rounded-lg bg-green-100 text-green-500">{val.status}</p>
                                                        </td>
                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            {
                                                                val.transactionCreateAt === "0000-00-00 00:00:00" ? <p></p>
                                                                :
                                                                <p>{formatDate(val.transactionCreateAt)} {formatTime(val.transactionCreateAt)}</p>
                                                            }
                                                        </td>
                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            {
                                                                val.transactionUpdateAt === "0000-00-00 00:00:00" ? <p></p>
                                                                :
                                                                <p>{formatDate(val.transactionUpdateAt)} {formatTime(val.transactionUpdateAt)}</p>
                                                            }
                                                        </td>
                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            <p className="px-4 py-2 inline-flex text-sm leading-5 font-semibold rounded-lg bg-red-100 text-red-500 cursor-pointer" onClick={() => { deleteUser(val.transactionId) }}>Delete</p>
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
                    {sum.map((total) => {
                        return <div>
                            Total : {total.Total}
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}
