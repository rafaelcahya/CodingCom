import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export const SidebarInternet = () => {
    const [value, setValue] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/course/listCourseUser").then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    }, []);

    // function refreshPage() {
    //     window.location.reload(false);
    // }
    return (
        <>
            <div className="hidden lg:block sticky self-start top-0 pt-6">
                <p className="text-lg font-semibold">Internet Tutorial</p>
                <div className="sidebar-tutorial flex flex-col gap-2 my-5">
                    <div className="flex justify-between items-center">
                        <Link to="/internet">Getting Started</Link>
                        <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">1 min</p>
                    </div>
                    {
                        value.map(
                            (val) => {
                                return <div className="flex justify-between items-center">
                                    <Link to={"/user-course/" + val.id}>{val.number}.{val.judul}</Link>
                                    <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">{val.time} min</p>
                                </div>
                            }
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default SidebarInternet

