import React, {useState } from 'react'
import Sidebar from './admin-major/Sidebar'
import Axios from 'axios'

function AddBatch() {

    const [batch, setBatch] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [createAt, setCreateAt] = useState("")

    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setCreateAt(dateTime)
    }, 500)

    const Batch = () => {
        Axios.post("http://localhost:3001/batch/addBatch", { createAt: createAt, batch: batch, startDate:startDate, endDate:endDate }).then((response) => {
            console.log(response)
        })
    };
    return (
        <>
            <div className="bg-white text-black flex h-screen overflow-hidden">
                <Sidebar />
                <div className="batchForm overflow-hidden ml-72 m-5 p-8 flex flex-col gap-1 bg-white rounded-lg border border-gray-300 w-full" >
                    <p className="text-lg font-semibold pb-8">Add new batch</p>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <p className="Batch text-sm font-semibold">Batch name</p>
                            <input
                                type="text"
                                placeholder="Input Batch"
                                onChange={(event) => {
                                    setBatch(event.target.value)
                                }} />
                        </div>
                        <div className="flex justify-between items-center gap-10 w-full">
                            <div className="flex flex-col gap-2 w-1/2">
                                <p className="Batch text-sm font-semibold">Start date</p>
                                <input
                                    type="date"
                                    placeholder="Input Start Date"
                                    onChange={(event) => {
                                        setStartDate(event.target.value)
                                    }} />
                            </div>
                            <div className="flex flex-col gap-2 w-1/2">
                                <p className="Batch text-sm font-semibold">End date</p>
                                <input
                                    type="date"
                                    placeholder="Input End Date"
                                    onChange={(event) => {
                                        setEndDate(event.target.value)
                                    }} />
                            </div>
                        </div>
                    </div>
                    <button onClick={Batch} className="text-white bg-blue-1 text-center px-4 py-2 my-10 rounded-lg cursor-pointer">Submit batch</button>
                </div>
            </div>
        </>
    )
}

export default AddBatch
