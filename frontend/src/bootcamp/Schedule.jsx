import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ShowMoreText from 'react-show-more-text';
import BootcampNavbar from './BootcampNavbar'

export default function Schedule() {
    const [value, setValue] = useState([])
    const [list, setList] = useState([])

    window.onload = setTimeout(function () {
        var x = localStorage.getItem("name");
        document.getElementById("name").innerHTML = x;
    }, 50)


    useEffect(() => {
        axios.get("http://localhost:3001/schedule/ScheduleList/"+localStorage.getItem("name")).then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    }, []);

    useEffect(() => {
        axios.get("http://localhost:3001/bootcampuser/BootcampListUser/"+localStorage.getItem("name")).then((response) => {
            setList(response.data)
            console.log(response.data)
        })
    }, []);
    
    var options  = { year: 'numeric', month: 'long', day: 'numeric' };
    const formatDate = s => new Date(s).toLocaleDateString('en-GB', options );

    return (
        <>
            <BootcampNavbar/>
            <div className="flex justify-center py-32">
                <div className="schedule flex flex-col justify-center border p-5 rounded-lg px-16 lg:px-32">
                    <div className="pt-5 pb-10">
                        <span className="flex gap-1 text-xl font-semibold">Hi <p id="name"></p></span>
                        <p className="text-sm font-medium text-gray-400">Here all your planned classes and events. You will find information for each day.</p>
                    </div>
                    <div className="flex justify-center">
                        <p className="bg-blue-500 w-0.5 h-auto mr-5"></p>
                        <div className="flex flex-col">
                            {
                                !list.length ? (<p className="text-red-500 font-semibold">You are not registered in any bootcamp</p>) : !value.length ? (<p>Your schedule is not created, please wait for a few days</p>):(value.map((val) => {
                                    return <div className="schedule-card flex items-center border-b py-5 hover:bg-blue-50 transition duration-100">
                                            <div className="w-3/5 md:w-1/5 border-r-0 md:border-r-2 pl-5">
                                                <p className="color-blue-1 tracking-wide font-semibold">{formatDate(val.date)}</p>
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
                                }))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
