import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import ShowMoreText from 'react-show-more-text';

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
    
    var options  = { year: 'numeric', month: 'long', day: 'numeric' };
    const formatDate = s => new Date(s).toLocaleDateString('en-GB', options );

    return (
        <>
            <div className="flex flex-col items-center px-16 lg:px-32 pt-14 w-full">
                <div className="schedule-card fixed gap-10 py-2 bg-white shadow rounded-lg border hover:bg-blue-50">
                    <Link to="/bootcamp">
                        <div className="flex items-center justify-between px-5">
                            <div className="flex items-center gap-1 -ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                <p>Back</p>
                            </div>
                            <p className="font-semibold">Bootcamp Schedule</p>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col justify-center bg-white border p-5 rounded-lg mt-20">
                    <div className="pt-5 pb-10">
                        <span className="flex gap-1 text-xl font-semibold">Hi <p id="name"></p></span>
                        <p className="text-sm font-medium text-gray-400">Here all your planned classes and events. You will find information for each day.</p>
                    </div>
                    <div className="flex justify-center">
                        <p className="bg-blue-500 w-0.5 h-auto mr-5"></p>
                        <div className="flex flex-col">
                            {
                                value.map((val) => {
                                    return <div className="schedule-card flex items-center border-b py-5 hover:bg-blue-50 transition duration-100">
                                            <div className="w-full md:w-1/5 border-r-0 md:border-r-2 pl-5">
                                                <p className="tracking-wide font-semibold">{formatDate(val.date)}</p>
                                                <p className="text-sm font-medium">{val.time}</p>
                                            </div>
                                            <div className="w-full md:w-4/5 flex flex-col md:flex-row md:justify-between md:items-center gap-5 mx-0 md:mx-10">
                                                <div className="w-full md:w-2/5">
                                                    <p className="font-semibold">{val.title}</p>
                                                    <ShowMoreText
                                                        more='Read more'
                                                        less='Read less'
                                                        anchorClass='anchor-showmore' 
                                                        className="text-sm">
                                                        <p>{val.description}</p>
                                                    </ShowMoreText>
                                                </div>
                                                <ShowMoreText
                                                    lines={2}
                                                    more='Read more'
                                                    less='Read less'
                                                    anchorClass='anchor-showmore'
                                                    className="text-sm w-full md:w-2/5">
                                                    <p>{val.location}</p>
                                                </ShowMoreText>
                                                <div className="w-max">
                                                    {
                                                        val.status === "Offline" ? (<p className="text-xs font-semibold rounded-md tracking-wider p-1 text-gray-500 bg-gray-200">{val.status}</p>):(<p className="text-xs font-semibold rounded-md tracking-wider p-1 text-green-500 bg-green-100">{val.status}</p>)
                                                    }
                                                </div>
                                            </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
