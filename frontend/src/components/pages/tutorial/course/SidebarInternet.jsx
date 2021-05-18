import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export const SidebarInternet = () => {
    const [value,setValue] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/course/listCourse").then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    }, []);

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
        return (
            <>
                <div className="hidden lg:block sticky self-start top-0 pt-6">
                    <p className="text-lg font-semibold">Internet Tutorial</p>
                    <div className="sidebar-tutorial flex flex-col gap-2 my-5">
                        {
                                            value.map(
                                                (val) => {
                                                    return <div onClick={scrollToTop} className="flex justify-between items-center">
                                                    <Link to={"/user-course/"+val.id}>{val.judul}</Link>
                                                    <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">{val.time}</p>
                                                </div>
                                                }
                                            )
                                        }
                        <div onClick={scrollToTop} className="flex justify-between items-center">
                            <Link to="/internet">Introduction</Link>
                            <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">1 min</p>
                        </div>
                        <div onClick={scrollToTop} className="flex justify-between items-center">
                            <Link to="/what-is-internet">What is internet</Link>
                            <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">5 min</p>
                        </div>
                        <div onClick={scrollToTop} className="flex justify-between items-center">
                            <Link to="/how-internet-work">How internet works</Link>
                            <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">8 min</p>
                        </div>
                        <div onClick={scrollToTop} className="flex justify-between items-center">
                            <Link to="/what-is-http">HTTP & HTTPS</Link>
                            <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">12 min</p>
                        </div>
                        <div onClick={scrollToTop} className="flex justify-between items-center">
                            <Link to="/browser">Browser</Link>
                            <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">10 min</p>
                        </div>
                        <div onClick={scrollToTop} className="flex justify-between items-center">
                            <Link to="/DNS">DNS Server</Link>
                            <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">10 min</p>
                        </div>
                        <div onClick={scrollToTop} className="flex justify-between items-center">
                            <Link to="/domain">Domain</Link>
                            <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">5 min</p>
                        </div>
                        <div onClick={scrollToTop} className="flex justify-between items-center">
                            <Link to="/hosting">Hosting</Link>
                            <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">5 min</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

export default SidebarInternet

