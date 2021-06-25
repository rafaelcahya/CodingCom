import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export const SidebarInternet = () => {
    const [value, setValue] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/course/listCourseUser").then((response) => {
            setValue(response.data)
        })
    },[]);

    function refreshPage() {
        window.location.reload(false);
    }
    return (
        <>
            <div className="hidden lg:block sticky self-start top-0 pt-6">
                <p className="text-lg font-semibold">Internet Tutorial</p>
                    {
                        value.map(
                            (val) => {
                                return <div className="sidebar-tutorial flex flex-col gap-2 my-5">
                                <div className="flex justify-between items-center">
                                    <Link to={"/topic-detail/" + val.topik_id}>Getting Started</Link>
                                    <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">1 min</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <Link to={"/"+ val.judul +"/" + val.number + "/" + val.topik_id}>{val.number}.{val.judul}</Link>
                                    <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">{val.time} min</p>
                                </div>
                                </div>
                            }
                        )
                    }
            </div>
        </>
    )
}

export default SidebarInternet

