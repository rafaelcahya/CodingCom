/* eslint-disable no-redeclare */
/* eslint-disable no-useless-concat */
import React, { useEffect, useState } from 'react'
import Sidebar from './admin-major/Sidebar'
import Axios from 'axios'
import { Link } from 'react-router-dom'

function EditRequestClass(props) {
    const urlid = props.match.params.id
    const [id, setId] = useState("")
    const [className, setClassName] = useState("")
    const [time, setTime] = useState("")
    const [date, setDate] = useState("")
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
        if(today.getMonth()+1<=10){
            var date = today.getFullYear() + '-' + "0" +(today.getMonth() + 1) + '-' + "0" +today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        }else {
            var date = today.getFullYear() + '-' +(today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        }
        var dateTime = time + ' ' + date;
        setUpdateAt(dateTime)
        
    }, 500)

    useEffect(() => {
       const test = Axios.get("http://localhost:3001/class/classById/"+urlid).then((response) => {
            setValueList(response.data)

            {
                valueList.map(
                    (val) => {
                        return 
                    }
                )
            }
        })
    }, []);

    const updateClass = () => {
        Axios.post("http://localhost:3001/class/updateClass", { id: id, className: className, time: time, date: date, url: url, updateAt: updateAt, status: status }).then((response) => {
            console.log(response)
            setErrorMessage(response.data.message)

        })
    }

    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <div className="table-request-class overflow-hidden ml-80 m-5 p-8 flex flex-col gap-1 bg-white border border-gray-300 rounded-2xl w-full" >
                    <div className="flex flex-col gap-1 pb-8">
                        <p className="text-lg font-semibold">Class Request</p>
                        <p className="text-xs font-medium text-gray-400 w-3/4">For Class name, Date, and Time are only added if there are certain changes. If not added, the data will be adjusted to the data that was filled in previously.</p>
                    </div>
                    
                    <div className="overflow-x-auto">
                        <div className="align-middle inline-block min-w-full">
                            <div className="request-class-container flex flex-col gap-10">
                                <div className="flex flex-col gap-2">
                                    <p className="ClassName text-sm font-semibold">Class name</p>
                                    <input
                                        type="text"
                                        placeholder="Input Classname"
                                        onChange={(event) => {
                                            setClassName(event.target.value)
                                        }} />
                                </div>
                                <div className="flex gap-10">
                                    <div className="flex flex-col gap-2 w-32">
                                        <p className="Date text-sm font-semibold">Date</p>
                                        <input
                                            type="date"
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
                                    <p className="url flex items-center gap-1 text-sm font-semibold">Meeting URL</p>
                                    <input
                                        type="text"
                                        placeholder="Input Url"
                                        onChange={(event) => {
                                            setUrl(event.target.value)
                                        }} />
                                </div>
                                <div className="flex flex-col gap-2 w-56">
                                    <p className="Waktu text-sm font-semibold">Change status*</p>
                                    <select id="dropdown" onChange={(event) => {
                                        setStatus(event.target.value)
                                    }}>
                                        <option value="">Choose Status</option>
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
                </div>
            </div>
        </>
    )
}

export default EditRequestClass