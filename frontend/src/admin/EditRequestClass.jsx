/* eslint-disable no-redeclare */
/* eslint-disable no-useless-concat */
import React, { useEffect, useRef, useState } from 'react'
import Sidebar from './admin-major/Sidebar'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { Editor } from '@tinymce/tinymce-react';

function EditRequestClass(props) {
    const urlid = props.match.params.id
    const editorRef = useRef(null);
    const [id, setId] = useState("")
    const [className, setClassName] = useState("")
    const [info, setInfo] = useState("")
    const [starttime, setStartTime] = useState("")
    const [endtime, setEndTime] = useState("")
    const [startdate, setStartDate] = useState("")
    const [enddate, setEndDate] = useState("")
    const [url, setUrl] = useState("")
    const [updateAt, setUpdateAt] = useState("")
    const [status, setStatus] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [valueList,setValueList] = useState([])
    window.onload = setTimeout(function () {
        var url1 = window.location.pathname;
        var idurl = url1.substring(url1.lastIndexOf('/') + 1);
        setId(idurl)
        var today = new Date();
        var date = today.getFullYear() + '-' +(today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setUpdateAt(dateTime)
        
    }, 500)

    useEffect(() => {
        Axios.get("http://localhost:3001/class/classById/"+urlid).then((response) => {
            setValueList(response.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const updateClass = () => {
        Axios.post("http://localhost:3001/class/updateClass", { id: urlid, className: className, info:info, starttime: starttime, endtime:endtime, startdate: startdate, enddate:enddate, des:editorRef.current.getContent(), url: url, updateAt: updateAt, status: status }).then((response) => {
            console.log(response)
            setErrorMessage(response.data.message)

        })
    }

    return (
        <>
            <div className="bg-white text-black flex h-screen overflow-hidden">
                <Sidebar />
                <div className="request-class-form ml-72 m-5 p-8 flex flex-col gap-1 border border-gray-300 rounded-lg w-full" >
                    <div className="flex flex-col gap-1 pb-8">
                        <p className="text-lg font-semibold">Class Request</p>
                        <p className="text-xs font-medium text-gray-400 w-3/4">For Class name, Date, and Time are only added if there are certain changes. If not added, the data will be adjusted to the data that was filled in previously.</p>
                    </div>
                    {
                valueList.map(
                    (val) => {
                        return <div className="overflow-x-auto">
                        <div className="align-middle inline-block min-w-full">
                            <div className="request-class-container flex flex-col gap-10">
                                <div className="flex flex-col gap-2">
                                    <p className="ClassName text-sm font-semibold">Class name</p>
                                    <input
                                        type="text"
                                        placeholder="Input Classname"
                                        defaultValue = {val.className}
                                        onChange={(event) => {
                                            setClassName(event.target.value)
                                        }} />
                                </div>
                                <div className="flex justify-between items-center gap-10">
                                    <div className="flex flex-col gap-2 w-1/2">
                                        <p className="Date text-sm font-semibold">Date</p>
                                        <input
                                            type="date"
                                            placeholder="Input Date"
                                            defaultValue = {val.startDate}
                                            onChange={(event) => {
                                                setStartDate(event.target.value)
                                            }} />
                                    </div>
                                    <div className="flex flex-col gap-2 w-1/2">
                                        <p className="Date text-sm font-semibold">Date</p>
                                        <input
                                            type="date"
                                            placeholder="Input Date"
                                            defaultValue = {val.endDate}
                                            onChange={(event) => {
                                                setEndDate(event.target.value)
                                            }} />
                                    </div>
                                </div>
                                <div className="flex justify-between items-center gap-10">
                                <div className="flex flex-col gap-2 w-1/2">
                                        <p className="Waktu text-sm font-semibold">Time</p>
                                        <input
                                            type="time"
                                            defaultValue = {val.startTime}
                                            onChange={(event) => {
                                                setStartTime(event.target.value)
                                            }} />
                                    </div>
                                    <div className="flex flex-col gap-2 w-1/2">
                                        <p className="Waktu text-sm font-semibold">Time</p>
                                        <input
                                            type="time"
                                            defaultValue = {val.endTime}
                                            onChange={(event) => {
                                                setEndTime(event.target.value)
                                            }} />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Class Information</p>
                            <textarea placeholder="add info class here(255 char)" className="textarea resize-none cursor-text" defaultValue = {val.classInfo} onChange={(event) => {
                                setInfo(event.target.value)
                            }} ></textarea>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="Time text-sm font-semibold">Class Description</p>
                            <Editor
                                apiKey="t49ii0efod7e9c06izeuljkk12vhazn02qx773vac1yq51yt"
                                onInit={(evt, editor) => editorRef.current = editor}
                                initialValue={val.classDescription}
                                init={{
                                    height: 300,
                                    menubar: false,
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
                                    <p className="url flex items-center gap-1 text-sm font-semibold">Meeting URL</p>
                                    <input
                                        type="text"
                                        defaultValue = {val.classUrl}
                                        placeholder="Input Url"
                                        required
                                        onChange={(event) => {
                                            setUrl(event.target.value)
                                        }} />
                                </div>
                                <div className="flex flex-col gap-2 w-56">
                                    <p className="Waktu text-sm font-semibold">Change status*</p>
                                    <select id="dropdown" onChange={(event) => {
                                        setStatus(event.target.value)
                                    }}>
                                        <option value={val.status}>{val.status}</option>
                                        <option value="Approve">Approve</option>
                                        <option value="Reject">Reject</option>
                                    </select>
                                </div>
                                <p className="color-red-1 text-center font-medium">{errorMessage}</p>
                                <div className="flex gap-10">
                                    <p className="bg-gray-200 hover:bg-gray-300 w-1/5 text-center px-7 py-2 rounded-lg cursor-pointer">
                                        <Link to="/admin/class-requisition">Back</Link>
                                    </p>
                                    <p onClick={updateClass} className="bg-blue-1 w-4/5  text-white text-center px-7 py-2 rounded-lg cursor-pointer">Submit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                )
            }
                    
                </div>
            </div>
        </>
    )
}

export default EditRequestClass