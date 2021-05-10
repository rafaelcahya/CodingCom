import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Sidebar from './admin-major/Sidebar'

function InputJobs() {
    const [value,setValue] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/user/test1").then((response) => {
            setValue(response.data)
        })
    }, []);

        const content = document.getElementsByClassName(".content").innerHTML;

    
    
    

    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar/>
                <div className="overflow-hidden ml-80 m-5 p-8 flex flex-col gap-1 bg-white rounded-2xl w-full" >
                {
                                    value.map(
                                        (val) => {
                                            return <div className="content">{val.content}</div>
                                        }
                                    )
                                }
                    <div><p>{content}</p></div>
                </div>
            </div>
        </>
    )
}

export default InputJobs
