/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './major/Sidebar'

const GenerateID = (len, k)=>{
    const s = (k) =>{
        var text = ""
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        for(let i = 0 ; i<k ; i++){
            text += chars.charAt(Math.floor(Math.random()*chars.length));
        }
        return text
    }
    var id = s(k);
    for(let n = 0;n<len;n++){
        id += '-'+s(k)
    }
    return id
}
export default function ListCourse() {
    const [value,setValue] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/course/listCourseMentor/"+localStorage.getItem("name")).then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    }, []);

    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
    const formatTime = s => new Date(s).toLocaleTimeString();
    
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <div className="table-request-class overflow-hidden ml-72 m-5 p-8 flex flex-col gap-1 bg-white border border-gray-300 rounded-lg w-full" >
                    <p className="text-lg font-semibold pb-8">Course List</p>
                    <div className="overflow-x-auto">
                        <div className="align-middle inline-block min-w-full">
                            <div className="overflow-hidden">
                                <table className="relative min-w-full">
                                    <thead>
                                        <tr className="border-b-2">
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">No</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">mentor Name</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">tutorial title</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">estimated Time</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">last created</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">last updated</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            value.map(
                                                (val) => {
                                                    return <tr className="border-b-2">
                                                    <td className="px-6 py-3 text-center whitespace-nowrap">{val.number}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.fullname}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.judul}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.time} min</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            <p className="px-4 py-2 inline-flex text-sm leading-5 font-semibold rounded-lg bg-green-100 text-green-500">{val.status}</p>
                                                        </td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{formatDate(val.courseCreateAt)} {formatTime(val.courseCreateAt)}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{formatDate(val.courseUpdateAt)} {formatTime(val.courseUpdateAt)}</td>
                                                        <td className="flex items-center gap-2 px-6 py-3 whitespace-nowrap">
                                                            <Link to={"/mentor/mentor-show-course-"+val.id + "-" + GenerateID(3,5)}>
                                                                <p className="px-4 py-2 inline-flex text-sm leading-5 font-semibold rounded-lg bg-blue-500 text-white">View</p>
                                                            </Link>
                                                            <Link to={"/mentor/mentor-edit-course-"+val.id + "-" + GenerateID(3,5)}>
                                                            <p className="px-4 py-2 inline-flex text-sm leading-5 font-semibold rounded-lg bg-blue-500 text-white">Edit</p>
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