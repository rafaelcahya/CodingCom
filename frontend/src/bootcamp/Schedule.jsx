import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BootcampNavbar from './BootcampNavbar'
import axios from 'axios';

export default function Schedule() {
    const [value, setValue] = useState([])

    window.onload = setTimeout(function () {
        var x = localStorage.getItem("name");
        document.getElementById("name").innerHTML = x;
    }, 250)


    useEffect(() => {
        axios.get("http://localhost:3001/schedule/ScheduleList").then((response) => {
            setValue(response.data)
        })
    }, []);

    const items = [{
        title: "Preparation Day",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quaerat officiis libero doloremque qui ratione ullam vero est? Natus itaque voluptatum, dolore nihil ratione fugit pariatur ad in odio enim. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quaerat officiis libero doloremque qui ratione ullam vero est? Natus itaque voluptatum, dolore nihil ratione fugit pariatur ad in odio enim.",
        date: "25 januari 2021",
        time: "09:00pm",
        location: "Jakarta",
        status: "Online"
    }];
    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
    return (
        <>
            <div className="hidden fixed w-full bg-white lg:block gap-10 px-16 xl:px-32 py-5">
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
                {
                    value.map((val) => {
                        return <div className="flex flex-col lg:flex-row justify-center gap-8">
                            <div className="bg-white p-4 rounded-lg w-full lg:w-3/5">
                                <p className="bg-blue-500 h-1.5 w-full rounded-lg"></p>
                                <div className=" flex flex-col gap-4">
                                    <div className="flex flex-col gap-2 mt-4">
                                        <p className="text-lg font-semibold">{val.title}</p>
                                        <p className="">{val.description}</p>
                                        <p>{formatDate(val.date)}</p>
                                        <p>{val.time}</p>
                                        <p>{val.location}</p>
                                        <p>{val.status}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}
