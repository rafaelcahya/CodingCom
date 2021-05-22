import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Sidebar from './admin-major/Sidebar'
import { Link } from 'react-router-dom';

function Course(props) {
    const urlid = props.match.params.id
    const [value, setValue] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/course/courseById/" + urlid).then((response) => {
            setValue(response.data)
        })
    });

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="ml-72 m-5 p-8 flex flex-col gap-1 bg-white rounded-lg border border-gray-300 w-full" >
                    <div className="sticky self-start top-5 flex items-center justify-between text-sm font-semibold bg-white p-2 mb-8 rounded-md border border-gray-300 shadow-xl w-full">
                        <Link to="/admin/list-course">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                <p>Back</p>
                            </div>
                        </Link>
                        <div className="flex items-center gap-5 font-semibold">
                            <p className="text-red-500">Reject</p>
                            <p className="px-4 py-2 bg-green-100 text-green-500 rounded-lg">Approve</p>
                        </div>
                    </div>
                    {
                        value.map(
                            (val) => {
                                return <div dangerouslySetInnerHTML={{ __html: val.content }} />
                            }
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Course
