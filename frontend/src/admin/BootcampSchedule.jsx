import React, { useEffect, useState } from 'react'
import Sidebar from './admin-major/Sidebar'
import Axios from 'axios'

const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });

export default function BootcampSchedule() {
    const [title, setTitle] = useState("")
    const [des, setDes] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [location, setLocation] = useState("")
    const [status, setStatus] = useState("")
    const [createAt, setCreateAt] = useState("")
    const [batch, setBatch] = useState("")
    const [value, setValue] = useState([])
    const [errorMessage, setErrorMessage] = useState("")

    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setCreateAt(dateTime)
    }, 500)

    useEffect(() => {
        Axios.get("http://localhost:3001/batch/listBatch").then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    }, []);

    const submit = () => {
        Axios.post("http://localhost:3001/schedule/addschedule", { createAt: createAt, batch: batch, title: title, des: des, date:date, time:time, location:location, status:status }).then((response) => {
            console.log(response)
            setErrorMessage(response.data.message)
        })
    };

    return (
        <div className="flex bg-white text-black">
            <Sidebar />
            <div className="ml-72 m-5 p-8 flex flex-col gap-1 bg-white rounded-lg border border-gray-300 w-full">
                <section>
                    <div className="job-box flex flex-col gap-10">
                        <div className="flex flex-col gap-3">
                            <p className="text-lg font-semibold">Add a bootcamp schedule</p>
                        </div>
                        <div className="flex flex-col gap-2">
                                    <p className="text-sm font-semibold">Select the Batch You Want to Join</p>
                                    <select name="" id="" onChange={(event) => {
                                        setBatch(event.target.value)
                                    }} >
                                        <option>Choose Batch</option>
                                        {
                                            value.map(
                                                (val) => {
                                                    return <option value={val.batchId}>{val.batch} : {formatDate(val.startDate)} - {formatDate(val.endDate)}</option>
                                                }
                                            )
                                        }
                                    </select>
                                </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Title</p>
                            <input type="text" placeholder="Input title" onChange={(event) => {
                                    setTitle(event.target.value)
                                }} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Description</p>
                            <input type="text" placeholder="Input description" onChange={(event) => {
                                    setDes(event.target.value)
                                }} />
                        </div>
                        <div className="flex justify-between items-center gap-10 w-full">
                            <div className="flex flex-col gap-2 w-1/2">
                                <p className="text-sm font-semibold">Date</p>
                                <input type="date" onChange={(event) => {
                                    setDate(event.target.value)
                                }} />
                            </div>
                            <div className="flex flex-col gap-2 w-1/2">
                                <p className="text-sm font-semibold">Time</p>
                                <input type="time" min="00:00" max="24:00" onChange={(event) => {
                                    setTime(event.target.value)
                                }} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Location</p>
                            <input type="text" placeholder="Input location" onChange={(event) => {
                                    setLocation(event.target.value)
                                }} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="gender text-sm font-semibold">Status</p>
                            <select name="" id="" onChange={(event) => {
                                    setStatus(event.target.value)
                                }}>
                                <option value="">Choose status</option>
                                <option value="Offline">Offline</option>
                                <option value="Online">Online</option>
                            </select>
                        </div>
                        {
                            errorMessage === "Schedule have been successfully submited" ? <p className="text-green-500 text-center font-medium">{errorMessage}</p> : <p className="color-red-1 text-center font-medium">{errorMessage}</p>
                        }
                        
                        <p onClick={submit} className="text-white bg-blue-1 text-center px-4 py-2 rounded-lg cursor-pointer">Submit schedule</p>
                    </div>
                </section>
            </div>
        </div>
    )
}
