/* eslint-disable no-redeclare */
/* eslint-disable no-useless-concat */
import React, { useState } from 'react'
import Axios from 'axios'

import Sidebar from './major/Sidebar'

function ClassReq() {
    const [name, setName] = useState("")
    const [className, setClassName] = useState("")
    const [time, setTime] = useState("")
    const [date, setDate] = useState("")
    const [url, setUrl] = useState("")
    const [createAt, setCreateAt] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [file, setFile] = useState("")
    let x
    window.onload = setTimeout(function () {
        x = localStorage.getItem("name");
        setName(x)
        var today = new Date();
        if(today.getMonth()+1<=10){
        var date = today.getFullYear() + '-' + "0" +(today.getMonth() + 1) + '-' +today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        }else {
        var date = today.getFullYear() + '-' +(today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        }
        var dateTime = time + ' ' + date;
        setCreateAt(dateTime)
    }, 500)

    const createClass = () => {
        const fd = new FormData();
        fd.append('fileUpload', file)
        fd.append('name', name)
        fd.append('className', className)
        fd.append('time', time)
        fd.append('date', date)
        fd.append('url', url)
        fd.append('createAt', createAt)
        Axios.post("http://localhost:3001/class/createClass", fd).then((response) => {
            console.log(response)
            setErrorMessage(response.data.message)
        })
    }

    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar/>
                <div className="overflow-hidden ml-72 m-5 p-8 flex flex-col gap-1 bg-white border border-gray-300 rounded-lg w-full">
                    <p className="text-lg font-semibold pb-8">Request Class for Mentor</p>
                    <div className="request-class-container flex flex-col gap-10">
                        <div className="flex justify-between items-center gap-10">
                            <div className="flex flex-col gap-2 w-1/2">
                                <p className="ClassName text-sm font-semibold">Class Name</p>
                                <input
                                    type="text"
                                    placeholder="Input Classname"
                                    onChange={(event) => {
                                        setClassName(event.target.value)
                                    }} />
                            </div>
                            <div className="flex flex-col gap-2 w-1/2">
                                <p className="text-sm font-semibold">Image</p>
                                <input className="w-full"
                                    type="file"
                                    accept=".svg,.png,.jpg,.jpeg,.psd,.tiff,.bmp,.hdr,.webp"
                                    name="fileUpload"
                                    onChange={(event) => {
                                        setFile(event.target.files[0])
                                    }} />
                            </div>
                        </div>
                        <div className="flex justify-between items-center gap-10">
                            <div className="flex flex-col gap-2 w-1/2">
                                <p className="Date text-sm font-semibold">Date</p>
                                <input
                                    type="date"
                                    placeholder="Input Date"
                                    onChange={(event) => {
                                        setDate(event.target.value)
                                    }} />
                            </div>
                            <div className="flex flex-col gap-2 w-1/2">
                                <p className="Waktu text-sm font-semibold">Time</p>
                                <input
                                    type="time"
                                    onChange={(event) => {
                                        setTime(event.target.value)
                                    }} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Meeting URL</p>
                            <input
                                type="text"
                                placeholder="Input Url"
                                onChange={(event) => {
                                    setUrl(event.target.value)
                                }} />
                        </div>
                        <p className="color-red-1 text-center font-medium">{errorMessage}</p>
                        <p onClick={createClass} className="bg-blue-1 text-white text-center px-7 py-2 rounded-lg cursor-pointer">Submit</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClassReq