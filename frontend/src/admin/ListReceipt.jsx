import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import Sidebar from './admin-major/Sidebar';

export default function ListReceipt() {
    const [value,setValue] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/receipt/receiptList").then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    }, []);

    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });

    return (
        <>
            <div className="flex h-screen overflow-hidden text-black bg-white">
                <Sidebar />
                <div className="table-request-class overflow-hidden ml-72 m-5 p-8 flex flex-col gap-1 bg-white border border-gray-300 rounded-lg w-full" >
                    <p className="text-lg font-semibold">Receipt</p>
                    <p className="text-sm font-semibold">List of receipt that have been sended to Mentor.</p>
                    <div className="overflow-x-auto mt-8">
                        <div className="align-middle inline-block min-w-full">
                            <div className="overflow-hidden">
                                <table className="relative min-w-full">
                                    <thead>
                                        <tr className="border-b-2">
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Mentor Name</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Payment For</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Nominal</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Ammount</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Last created</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            value.map(
                                                (val) => {
                                                    return <tr className="border-b-2">
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.fullname}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.pembayaran}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">Rp.{val.nominal}</td> 
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.jumlah}</td>  
                                                        <td className="px-6 py-3 whitespace-nowrap">{formatDate(val.createAt)}</td> 
                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            <Link to={"/admin/receipt-detail-"+val.receiptId}>
                                                            Detail
                                                            </Link>
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
