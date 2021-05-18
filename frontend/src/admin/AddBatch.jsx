import React, {useState } from 'react'
import Sidebar from './admin-major/Sidebar'
import Axios from 'axios'

function AddCourse() {

    const [batch, setBatch] = useState("")
    const [createAt, setCreateAt] = useState("")


    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        setCreateAt(date)
    }, 500)

    const Batch = () => {
        Axios.post("http://localhost:3001/batch/addBatch", { createAt: createAt, batch: batch }).then((response) => {
            console.log(response)
        })
    };
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <div className="overflow-hidden ml-80 m-5 p-8 flex flex-col gap-1 bg-white rounded-2xl border border-gray-300 w-full" >
                    <div className="flex flex-col gap-2">
                        <p className="Batch text-sm font-semibold">Batch name</p>
                        <input
                            type="text"
                            placeholder="Input Batch"
                            onChange={(event) => {
                                setBatch(event.target.value)
                            }} />
                    </div>

                    <button onClick={Batch}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default AddCourse
