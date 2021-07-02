import React, { useEffect, useState }  from 'react'
import axios from 'axios';
import Sidebar from './admin-major/Sidebar'
import { Link } from 'react-router-dom';

function ProjectSub() {
    const [proList, setProList] = useState([])
    const [updateAt, setUpdateAt] = useState("")

    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setUpdateAt(dateTime)
    }, 500)

    useEffect(() => {
        axios.get("http://localhost:3001/submit/submitList").then((response) => {
            setProList(response.data)
            console.log(response.data)
        })
    }, []);

    const deleteUser = (id) => {
        axios.put("http://localhost:3001/user/deleteProjectSub", {
            id: id,
            updateAt: updateAt
        })
    }

    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
    const formatTime = s => new Date(s).toLocaleTimeString();

    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar/>
                <div className="projectsub-form overflow-hidden ml-72 m-5 p-8 flex flex-col gap-1 bg-white border border-gray-300 rounded-lg w-full">
                    <p className="text-lg font-semibold pb-8">Project Submission</p>
                    <div className="overflow-x-auto">
                        <div className="align-middle inline-block min-w-full">
                            <div className="overflow-hidden">
                            <table className="relative min-w-full">
                            <thead>
                                <tr className="border-b-2">
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">User Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Title</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Type Project</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Description</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Repo Url</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Live Site Url</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Submission time</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    proList.map(
                                        (val) => {
                                            let file = require('../asset/upload/'+ val.fileName)
                                            return <tr className="border-b-2">
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.name}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.projectTitle}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.type}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.description}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.url}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{val.live_site_url}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">{formatDate(val.projectsubCreateAt)} {formatTime(val.projectsubCreateAt)}</td>
                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            <a href={file.default} className="text-white bg-blue-1 w-max my-5 px-4 py-2 rounded-lg" download>Download</a>
                                                        </td>
                                                        <td className="flex items-center gap-2 px-6 py-3 whitespace-nowrap">
                                                            
                                                            <a href={"/mentor/edit-project-submission/"+val.id} className="px-4 py-2 inline-flex text-sm leading-5 font-semibold rounded-lg bg-blue-500 text-white">Score</a>
                                                          
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

export default ProjectSub