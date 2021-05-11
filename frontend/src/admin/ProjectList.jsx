import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Sidebar from './admin-major/Sidebar';

export default function ProjectList() {
    const [proList, setProList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/submit/submitList").then((response) => {
            setProList(response.data)
        })
    }, []);

    return (
        <>
        <div className="flex h-screen overflow-hidden">
        <Sidebar/>
        <div className="table-request-class overflow-hidden ml-80 m-5 p-8 flex flex-col gap-1 bg-white border border-gray-300 rounded-2xl" >
            <p className="text-lg font-semibold pb-8">Project List</p>
            <div className="overflow-x-auto">
                <div className="align-middle inline-block min-w-full">
                    <div className="overflow-hidden">
                        <table className="relative min-w-full">
                            <thead>
                                <tr className="border-b-2">
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Id</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">User Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Title</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Description</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Live Site Url</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Url</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Created</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    proList.map(
                                        (val) => {
                                            return <tr className="border-b-2">
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.id}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.name}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.title}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.description}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.live_site_url}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.url}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.createAt}</td>
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