import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './admin-major/Sidebar';
import ShowMoreText from 'react-show-more-text';

export default function ListCategory() {
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
        axios.get("http://localhost:3001/category/listCategory").then((response) => {
            setValue(response.data)
        })
    }, []);

    const deleteUser = (id) => {
        axios.put("http://localhost:3001/category/deleteCategory", {
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
                    <p className="text-lg font-semibold">Category List</p>
                    <p className="text-sm font-semibold">Temporary list of future bootcamp batches</p>
                    <div className="overflow-x-auto mt-8">
                        <div className="align-middle inline-block min-w-full">
                            <div className="overflow-hidden">
                                <table className="relative min-w-full">
                                    <thead>
                                        <tr className="border-b-2">
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Tutorial / Category</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Information</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Last created</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Last Updated</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            value.map(
                                                (val) => {
                                                    return <tr className="border-b-2">
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.category}</td>
                                                        <td className="px-6 py-3">
                                                            <ShowMoreText
                                                                more='Read more'
                                                                less='Read less'
                                                                anchorClass='anchor-showmore'>
                                                                <p>{val.categoryInfo}</p>
                                                            </ShowMoreText>
                                                        </td>
                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            {
                                                                val.categoryCreateAt === "0000-00-00 00:00:00" ? <p></p>
                                                                :
                                                                <p>{formatDate(val.categoryCreateAt)} {formatTime(val.categoryCreateAt)}</p>
                                                            }
                                                        </td>
                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            {
                                                                val.categoryUpdateAt === "0000-00-00 00:00:00" ? <p></p>
                                                                :
                                                                <p>{formatDate(val.categoryUpdateAt)} {formatTime(val.categoryUpdateAt)}</p>
                                                            }
                                                        </td>                    
                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            <Link to={"/admin/edit-category-"+val.categoryId}>
                                                                <p className="px-4 py-2 inline-flex text-sm leading-5 font-semibold rounded-lg bg-blue-500 text-white">Edit</p>
                                                            </Link>
                                                        </td>
                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            <p className="px-4 py-2 inline-flex text-sm leading-5 font-semibold rounded-lg bg-red-100 text-red-500 cursor-pointer" onClick={() => { deleteUser(val.categoryId) }}>Delete</p>
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
