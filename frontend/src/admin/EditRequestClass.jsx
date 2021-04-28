import React, { useState } from 'react'
import Sidebar from './admin-major/Sidebar'
import Axios from 'axios'

function EditRequestClass() {
    const [id, setId] = useState("")
    const [mentorName, setMentorName] = useState("")
    const [className, setClassName] = useState("")
    const [time, setTime] = useState("")
    const [month, setMonth] = useState("")
    const [date, setDate] = useState("")
    const [email, setEmail] = useState("")
    const [url, setUrl] = useState("")
    const [createAt, setCreateAt] = useState("")
    const [status, setStatus] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    window.onload = setTimeout(function () {
        var url1 = window.location.pathname;
        var idurl = url1.substring(url1.lastIndexOf('/') + 1);
        setId(idurl)
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = time + ' ' + date;
        setCreateAt(dateTime)
    }, 500)

    const updateClass = () => {
        Axios.post("http://localhost:3001/class/updateClass", { id: id, mentorName: mentorName, className: className, email: email, time: time, date: date, month: month, url: url, createAt: createAt, status: status }).then((response) => {
            console.log(response)
            setErrorMessage(response.data.message)

        })
    }

    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <div className="table-request-class overflow-hidden ml-80 m-5 p-8 flex flex-col gap-1 bg-white rounded-2xl w-full" >
                    <p className="text-lg font-semibold pb-8">Class Request</p>
                    <div className="overflow-x-auto">
                        <div className="align-middle inline-block min-w-full">
                            <div className="request-class-container flex flex-col gap-10">
                                <div className="flex justify-between gap-10">
                                    <div className="flex flex-col gap-2 w-1/2">
                                        <p className="MentorName text-sm font-semibold">Mentor Name</p>
                                        <input
                                            type="text"
                                            placeholder="Input Mentor name"
                                            onChange={(event) => {
                                                setMentorName(event.target.value)
                                            }} />
                                    </div>
                                    <div className="flex flex-col gap-2 w-1/2">
                                        <p className="Email text-sm font-semibold">Email</p>
                                        <input
                                            type="text"
                                            placeholder="Input Email"
                                            onChange={(event) => {
                                                setEmail(event.target.value)
                                            }} />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="ClassName text-sm font-semibold">Class Name</p>
                                    <input
                                        type="text"
                                        placeholder="Input Classname"
                                        onChange={(event) => {
                                            setClassName(event.target.value)
                                        }} />
                                </div>
                                <div className="flex gap-10">
                                    <div className="flex flex-col gap-2">
                                        <p className="Month text-sm font-semibold">Month</p>
                                        <input
                                            type="text"
                                            placeholder="Input Month"
                                            onChange={(event) => {
                                                setMonth(event.target.value)
                                            }} />
                                    </div>
                                    <div className="flex flex-col gap-2 w-32">
                                        <p className="Date text-sm font-semibold">Date</p>
                                        <input
                                            type="text"
                                            placeholder="Input Date"
                                            onChange={(event) => {
                                                setDate(event.target.value)
                                            }} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="Waktu text-sm font-semibold">Time</p>
                                        <select id="dropdown" onChange={(event) => {
                                            setTime(event.target.value)
                                        }}>
                                            <option value="" selected>Choose time</option>
                                            <option value="00:00">00:00</option>
                                            <option value="01:00">01:00</option>
                                            <option value="02:00">02:00</option>
                                            <option value="03:00">03:00</option>
                                            <option value="04:00">04:00</option>
                                            <option value="05:00">05:00</option>
                                            <option value="06:00">06:00</option>
                                            <option value="07:00">07:00</option>
                                            <option value="08:00">08:00</option>
                                            <option value="09:00">09:00</option>
                                            <option value="10:00">10:00</option>
                                            <option value="11:00">11:00</option>
                                            <option value="12:00">12:00</option>
                                            <option value="13:00">13:00</option>
                                            <option value="14:00">14:00</option>
                                            <option value="15:00">15:00</option>
                                            <option value="16:00">16:00</option>
                                            <option value="17:00">17:00</option>
                                            <option value="18:00">18:00</option>
                                            <option value="19:00">19:00</option>
                                            <option value="20:00">20:00</option>
                                            <option value="21:00">21:00</option>
                                            <option value="22:00">22:00</option>
                                            <option value="23:00">23:00</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="url flex items-center gap-1 text-sm font-semibold">
                                        <p>Meeting URL</p>
                                        <p className="text-xs color-black-2 font-medium">(Optional)</p>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Input Url"
                                        onChange={(event) => {
                                            setUrl(event.target.value)
                                        }} />
                                </div>
                                <div>
                                    <p className="Waktu text-xs mb-1">Do you want to approve or reject</p>
                                    <select id="dropdown" onChange={(event) => {
                                        setStatus(event.target.value)
                                    }}>
                                        <option value="">Choose Status</option>
                                        <option value="Approve">Approve</option>
                                        <option value="Reject">Reject</option>
                                    </select>
                                </div>
                                <p className="color-red-1 text-center font-medium">{errorMessage}</p>
                                <p onClick={updateClass} className="bg-blue-1 text-white text-center px-7 py-2 rounded-lg cursor-pointer">Submit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditRequestClass