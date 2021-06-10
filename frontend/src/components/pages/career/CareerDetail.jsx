/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Footer from '../../major/Footer'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import { Link } from 'react-router-dom';

function CareerDetail(props) {
    const urlid = props.match.params.id
    const urlname = props.match.params.name
    const [name, setName] = useState("")
    const [createAt, setCreateAt] = useState("")
    const [lockDate, setLockDate] = useState("")
    const [id, setId] = useState("")
    const [value, setValue] = useState([])
    const [valueList, setValueList] = useState([])
    let x

    useEffect(() => {
        axios.get("http://localhost:3001/jobs/jobById/" + urlid).then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        axios.get("http://localhost:3001/jobs/applicationById/" + urlid + "/" + urlname).then((response) => {
            setValueList(response.data)
            console.log(response.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    window.onload = setTimeout(function () {
        x = localStorage.getItem("name");
        setName(x)
        var url1 = window.location.pathname;
        var idurl = url1.substring(url1.lastIndexOf('/') + 1);
        setId(idurl)
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        //var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date;
        setCreateAt(dateTime)
        var date1 = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 7);
        setLockDate(date1)
    }, 500)

    const submit = () => {
        axios.post("http://localhost:3001/jobs/apply", { createAt: createAt, name: name, id:id, lockDate:lockDate}).then((response) => {
            console.log(response)
        })
    };
    
    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'short' });
    return (
        <>
            <div className="bg-white flex justify-between items-center px-16 xl:px-32 py-5">
                <Link to="/">
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        <p>Back</p>
                    </div>
                </Link>
                <p>Find job</p>
                <p id="demo"></p>
            </div>

            <div className="mx-16 xl:mx-32 mt-20">
                <div className="flex flex-wrap justify-center gap-10 mt-20 h-full">
                    {
                        value.map((val) => {
                            let image = require('../../../asset/upload/'+ val.companyLogo)
                            // var today = new Date();
                            // var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                            // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                            // var dateTime = date + ' ' + time;
                            // console.log(dateTime)
                            return <div className="challenge-card bg-white p-2 rounded-lg w-max shadow hover:shadow-lg transform hover:scale-105 duration-200">
                                        <img src={image.default} className="w-72 h-36 sm:w-96 sm:h-52 rounded-lg" />
                                        <div className="flex flex-col gap-4 px-2 pt-2">
                                            <p className="text-xl font-bold capitalize">{val.companyName}</p>
                                            <p className="text-xl font-bold capitalize">{val.companyEmail}</p>
                                            <div className="max-w-sm">
                                                <p className="classInfo text-sm">Overview : </p>
                                                <p className="classInfo text-sm">{val.overview}</p>
                                                <p className="classInfo text-sm">Job Title : </p>
                                                <p className="classInfo text-sm">{val.jobTitle}</p>
                                                <p className="classInfo text-sm">Job Description : </p>
                                                <p className="classInfo text-sm">{val.jobDescription}</p>
                                                <p className="classInfo text-sm">Job Type : </p>
                                                <p className="classInfo text-sm">{val.jobType}</p>
                                                <p className="classInfo text-sm">Job Location : </p>
                                                <p className="classInfo text-sm">{val.jobLocation}</p>
                                            </div>
                                        </div>
                                            <p className="text-xs tracking-wide text-gray-400">{formatDate(val.jobCreateAt)}</p>
                                    </div>
                        })
                    }
                    {/* {
                        valueList.map((val) => {
                            var today = new Date();
                            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                            var dateTime = date + ' ' + time;
                            return <div>
                            {formatDate(dateTime) < formatDate(val.applicationLocked) ?(<p>You already applied</p>):
                            (<p onClick={submit} style={{backgroundColor:"royalblue"}} className="classInfo text-sm">Apply</p>)}
                            </div>
                        })
                    } */}
                    {!valueList.length ? (<p onClick={submit} style={{backgroundColor:"royalblue"}} className="classInfo text-sm">Apply</p>):
                    (valueList.map((val) => {
                        var today = new Date();
                        var date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
                        //var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                        var dateTime = date;
                        console.log(formatDate(dateTime))
                        console.log(formatDate(val.applicationLocked))
                        return <div>
                        {formatDate(dateTime) > formatDate(val.applicationLocked) ? (<p style={{backgroundColor:"royalblue"}} className="classInfo text-sm">Haram</p>):
                        (<p style={{backgroundColor:"royalblue"}} className="classInfo text-sm">apply</p>)}
                        </div>
                    }))}
                </div>
            </div>

            <section className="discord flex flex-col items-center gap-10 text-center text-white mx-10 lg:mx-20 px-10 lg:px-20 py-20 mt-32 rounded-xl" >
                <img src="https://cdn.discordapp.com/attachments/414258067870449665/445736475158380544/discord.gif" alt="discord" width={100} />
                <div className="flex flex-col gap-5">
                    <p className="text-xl font-semibold">Join us in our community.</p>
                    <p>We talk about challenge and project, help each other with code, chat about all things web development.</p>
                </div>
                <a href="https://discord.gg/rvdAvXYt" className="font-medium px-8 py-3 rounded-xl" style={{ backgroundColor: "#2c2f33" }}>Join us</a>
            </section>
            <Footer />
        </>
    )
}


export default CareerDetail
