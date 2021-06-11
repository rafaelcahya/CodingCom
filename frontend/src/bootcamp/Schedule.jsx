import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Schedule() {
    const [value, setValue] = useState([])

    window.onload = setTimeout(function () {
        var x = localStorage.getItem("name");
        document.getElementById("name").innerHTML = x;
    }, 50)


    useEffect(() => {
        axios.get("http://localhost:3001/schedule/ScheduleList").then((response) => {
            setValue(response.data)
        })
    }, []);
    
    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
    return (
        <>
            <div className="fixed w-full bg-white lg:block gap-10 px-16 xl:px-32 py-5">
                <Link to="/bootcamp" className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    <p>Back to home</p>
                </Link>
            </div>
            <div className="flex flex-col items-center gap-10 px-16 lg:px-32 pt-32 w-full">
                <div className="flex flex-col items-center">
                    <span className="flex gap-1 text-2xl font-semibold">Hello <p id="name"></p></span>
                    <p className="font-medium text-gray-400">Check your bootcamp schedule here</p>
                </div>
                <div className="flex flex-col gap-5">
                    {
                        value.map((val) => {
                            return <div className="schedule-card flex justify-between items-center bg-white p-2.5 rounded-lg shadow-md">
                                    <div className="flex">
                                        <p className="bg-blue-500 h-auto w-1 rounded-lg"></p>
                                        <div className="flex gap-4 pl-2.5">
                                            <div className="flex flex-col gap-6">
                                                <div>
                                                    <p className="text-lg font-semibold">{val.title}</p>
                                                    <p className="text-sm">{val.description}</p>
                                                </div>
                                                <div className="flex text-xs font-medium text-gray-500 gap-10">
                                                    <p>{formatDate(val.date)}</p>
                                                    <p>{val.time}</p>
                                                    <p>{val.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-xs bg-green-100 text-green-500 font-semibold rounded-md tracking-wide p-1">{val.status}</p>
                                </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}
