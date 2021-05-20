import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Sidebar from './major/Sidebar'

function Course(props) {
    const urlid = props.match.params.id
    const [value, setValue] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/course/courseById/" + urlid).then((response) => {
            setValue(response.data)
        })
    }, []);

    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <div className="overflow-hidden ml-80 m-5 p-8 flex flex-col gap-1 bg-white rounded-2xl border border-gray-300 w-full" >
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
