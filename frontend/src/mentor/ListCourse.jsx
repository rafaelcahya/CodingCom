import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './major/Sidebar'

export default function ListCourse(props) {
    const urlname = props.match.params.name
    const [value,setValue] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/course/listCourseMentor/"+urlname).then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    }, []);

    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <div className="table-request-class overflow-hidden ml-80 m-5 p-8 flex flex-col gap-1 bg-white border border-gray-300 rounded-2xl w-full" >
                    <p className="text-lg font-semibold pb-8">Course List</p>
                    <div className="overflow-x-auto">
                        <div className="align-middle inline-block min-w-full">
                            <div className="overflow-hidden">
                                <table className="relative min-w-full">
                                    <thead>
                                        <tr className="border-b-2">
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">No</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Judul</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Description</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Time</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">CreateAt</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">UpdateAt</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            value.map(
                                                (val) => {
                                                    return <tr className="border-b-2">
                                                    <td className="px-6 py-3 whitespace-nowrap">{val.number}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.fullname}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.judul}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.description}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.time} min</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            <p className="px-4 py-2 inline-flex text-sm leading-5 font-semibold rounded-lg bg-green-100 text-green-500">{val.status}</p>
                                                        </td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.createAt}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.updateAt}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            <Link to={"/mentor/course/"+val.id}>
                                                            <p>Look Data</p>
                                                            </Link>
                                                        </td>
                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            <Link to={"/mentor/edit-course/"+val.id}>
                                                            <p>Edit</p>
                                                            </Link>
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