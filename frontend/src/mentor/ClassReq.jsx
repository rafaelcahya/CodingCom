/* eslint-disable no-redeclare */
/* eslint-disable no-useless-concat */
import React, { useRef, useState } from 'react'
import Axios from 'axios'
import { Editor } from '@tinymce/tinymce-react';

import Sidebar from './major/Sidebar'

function ClassReq() {
    const editorRef = useRef(null);
    const [name, setName] = useState("")
    const [className, setClassName] = useState("")
    const [time, setTime] = useState("")
    const [date, setDate] = useState("")
    const [endtime, setEndTime] = useState("")
    const [enddate, setEndDate] = useState("")
    const [info, setInfo] = useState("")
    const [url, setUrl] = useState("")
    const [createAt, setCreateAt] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [file, setFile] = useState("")
    let x
    window.onload = setTimeout(function () {
        x = localStorage.getItem("name");
        setName(x)
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setCreateAt(dateTime)
    }, 500)

    const createClass = () => {
        if (editorRef.current) {
            const fd = new FormData();
            fd.append('fileUpload', file)
            fd.append('name', name)
            fd.append('className', className)
            fd.append('time', time)
            fd.append('date', date)
            fd.append('endtime', endtime)
            fd.append('enddate', enddate)
            fd.append('info', info)
            fd.append('des', editorRef.current.getContent())
            fd.append('url', url)
            fd.append('createAt', createAt)
            console.log(editorRef.current.getContent());
            console.log(enddate)
            console.log(endtime)
            console.log(info)
            Axios.post("http://localhost:3001/class/createClass", fd).then((response) => {
                console.log(response)
                setErrorMessage(response.data.message)
            })
        }
    }

    const resetForm = () => { 
        document.getElementById("reset-form").reset();
    }

    return (
        <>
            <div className="flex text-black bg-white">
                <Sidebar />
                <div className="request-class-form ml-72 m-5 p-8 flex flex-col gap-1 bg-white border border-gray-300 rounded-lg w-full">
                    <p className="text-lg font-semibold pb-8">Request Class Session for Mentor</p>
                    <form className="flex flex-col gap-10" id="reset-form">
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
                                <p className="Date text-sm font-semibold">Start Date</p>
                                <input
                                    type="date"
                                    placeholder="Input Date"
                                    onChange={(event) => {
                                        setDate(event.target.value)
                                    }} />
                            </div>
                            <div className="flex flex-col gap-2 w-1/2">
                                <p className="Date text-sm font-semibold">End Date</p>
                                <input
                                    type="date"
                                    placeholder="Input Date"
                                    onChange={(event) => {
                                        setEndDate(event.target.value)
                                    }} />
                            </div>

                        </div>
                        <div className="flex justify-between items-center gap-10">
                            <div className="flex flex-col gap-2 w-1/2">
                                <p className="Waktu text-sm font-semibold">Start Time</p>
                                <input
                                    type="time"
                                    onChange={(event) => {
                                        setTime(event.target.value)
                                    }} />
                            </div>
                            <div className="flex flex-col gap-2 w-1/2">
                                <p className="Waktu text-sm font-semibold">End Time</p>
                                <input
                                    type="time"
                                    onChange={(event) => {
                                        setEndTime(event.target.value)
                                    }} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Class Information</p>
                            <textarea placeholder="Class information" className="h-32 resize-none cursor-text" onChange={(event) => {
                                setInfo(event.target.value)
                            }} ></textarea>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="Time text-sm font-semibold">Class Description</p>
                            <Editor
                                apiKey="t49ii0efod7e9c06izeuljkk12vhazn02qx773vac1yq51yt"
                                onInit={(evt, editor) => editorRef.current = editor}
                                init={{
                                    height: 300,
                                    menubar: false,
                                    placeholder: "Enter complete class details by entering a class description (class background and class objectives), what will be covered, to whom this class is recommended and general terms and conditions.",
                                    skin: "fabric",
                                    icons: "thin",
                                    toolbar_sticky: true,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount export'
                                    ],
                                    toolbar: 'export | undo redo code | fontsizeselect formatselect print preview | link image media full page bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                }}
                            />
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
                        <div className="flex justify-between gap-10 w-full">
                            <p onClick={resetForm} className="bg-gray-100 hover:bg-gray-200 px-7 py-2 text-center rounded-lg cursor-pointer w-1/2">Clear</p>
                            <p onClick={createClass} className="bg-blue-1 text-white text-center px-7 py-2 rounded-lg cursor-pointer w-1/2">Submit</p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ClassReq