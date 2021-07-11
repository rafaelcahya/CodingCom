import React, { useEffect, useState } from 'react'
import Sidebar from './admin-major/Sidebar'
import Axios from 'axios'

export default function EditSchedule(props) {
    const urlid = props.match.params.id
    const [title, setTitle] = useState("")
    const [des, setDes] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [location, setLocation] = useState("")
    const [status, setStatus] = useState("")
    const [updateAt, setUpdateAt] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [value,setValue] = useState([])

    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setUpdateAt(dateTime)
    }, 500)

    useEffect(() => {
        Axios.get("http://localhost:3001/schedule/ScheduleById/"+ urlid).then((response) => {
            setValue(response.data)
        })
    }, []);

    const submit = () => {
        Axios.post("http://localhost:3001/schedule/updateSchedule", { updateAt: updateAt, title: title, des: des, date:date, time:time, location:location, status:status }).then((response) => {
            console.log(response)
            setErrorMessage(response.data.message)
        })
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="bootcamp-schedule-form ml-72 m-5 p-8 flex flex-col gap-1 bg-white rounded-lg border border-gray-300 w-full">
                <section>
                    {
                        value.map((val)=>{
                            return <div className="job-box flex flex-col gap-10">
                            <div className="flex flex-col gap-3">
                                <p className="text-xl font-semibold">Edit a schedule</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Title</p>
                                <input type="text" defaultValue={val.title} placeholder="Input title" onChange={(event) => {
                                        setTitle(event.target.value)
                                    }} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Description</p>
                                <input type="text" defaultValue={val.description} placeholder="Input description" onChange={(event) => {
                                        setDes(event.target.value)
                                    }} />
                            </div>
                            <div className="flex justify-between items-center gap-10 w-full">
                                <div className="flex flex-col gap-2 w-1/2">
                                    <p className="text-sm font-semibold">Date</p>
                                    <input type="date" defaultValue={val.date} onChange={(event) => {
                                        setDate(event.target.value)
                                    }} />
                                </div>
                                <div className="flex flex-col gap-2 w-1/2">
                                    <p className="text-sm font-semibold">Time</p>
                                    <input type="time" defaultValue={val.time} min="00:00" max="24:00" onChange={(event) => {
                                        setTime(event.target.value)
                                    }} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Location</p>
                                <input type="text" defaultValue={val.location} placeholder="Input location" onChange={(event) => {
                                        setLocation(event.target.value)
                                    }} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="gender text-sm font-semibold">Status</p>
                                <select name="" id="" value={status} onChange={(event) => {
                                        setStatus(event.target.value)
                                    }}>
                                    <option value="">Choose status</option>
                                    <option value="Offline">Offline</option>
                                    <option value="Online">Online</option>
                                </select>
                            </div>
                            <p className="color-red-1 text-center font-medium">{errorMessage}</p>
                            <p onClick={submit} className="text-white bg-blue-1 text-center px-4 py-2 rounded-lg cursor-pointer">Submit schedule</p>
                        </div>
                        })
                    }
                </section>
            </div>
        </div>
    )
}
