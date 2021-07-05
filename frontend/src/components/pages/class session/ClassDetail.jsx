/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ShowMoreText from 'react-show-more-text';
import { Link } from 'react-router-dom';

import Footer from '../../major/Footer'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'

function ClassDetail(props) {
    const urlid = props.match.params.id
    const [listClass, SetListClass] = useState([])
    const [value, setValue] = useState([])
    const [show, toggleShow] = useState(false);
    const [updateAt, setUpdateAt] = useState("")
    const [valueVal, setValueVal] = useState([])

    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setUpdateAt(dateTime)
    }, 500)

    useEffect(() => {
        axios.get("http://localhost:3001/class/classById/" + urlid).then((response) => {
            SetListClass(response.data)
            console.log(response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        axios.get("http://localhost:3001/user/userkuotaById/" + localStorage.getItem("name")).then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        axios.get("http://localhost:3001/user/userkuotaById/" + localStorage.getItem("name")).then((response) => {
            setValueVal(response.data)
            console.log(response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const reset = () => {
        axios.post("http://localhost:3001/user/minUserKuotaSession", { name:localStorage.getItem("name"), updateAt:updateAt }).then((response) => {
            console.log(response)
        })
    }

    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
    return (
        <>
            <NavbarLogin />
            <NavbarMobile />

            <div className="mx-16 xl:mx-32 mt-20">
                <div>
                    {
                        listClass.map(
                            (val) => {
                                let image = require('../../../asset/upload/' + val.image)
                                return <div className="classDetail flex flex-col md:flex-row gap-10">
                                    <div className="flex flex-col gap-5 w-full md:w-3/5">
                                        <img src={image.default}  className="rounded-lg" />
                                        <div className="flex flex-col gap-5">
                                            <div className="py-8 border-b-2 border-gray-300">
                                                <p className="text-2xl font-bold capitalize">{val.className}</p>
                                                <p className="text-gray-500 text-sm font-medium capitalize">by {val.fullname}</p>
                                            </div>
                                            <div className="flex flex-col gap-2 pt-3">
                                                <p className="text-xl font-semibold capitalize">Class Information</p>
                                                <p>{val.classInfo}</p>
                                            </div>
                                            <div className="content-class flex flex-col gap-2 leading-7">
                                                <p className="text-xl font-semibold capitalize">Description Class</p>
                                                <div dangerouslySetInnerHTML={{ __html: val.classDescription }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sticky self-start top-5 flex flex-col gap-5 w-full md:w-2/5">
                                        <p className="text-2xl font-bold capitalize">{val.className}</p>
                                        <div className="flex gap-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="transparent" stroke="rgb(156, 163, 175)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                            <div className="mt-0.5">
                                                <p className="text-gray-500 text-xs uppercase font-semibold">Date</p>
                                                <p className="font-medium mt-1">{formatDate(val.startDate)} - {formatDate(val.endDate)}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(156, 163, 175)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                            <div className="mt-0.5">
                                                <p className="text-gray-500 text-xs uppercase font-semibold">Time</p>
                                                <p className="font-medium mt-1">{val.startTime} - {val.endTime}</p>
                                            </div>
                                        </div>
                                        <div className="max-w-md">
                                            <ShowMoreText
                                                more='Read more'
                                                less='Read less'
                                                anchorClass='anchor-showmore'>
                                                <p>{val.classInfo}</p>
                                            </ShowMoreText>
                                        </div>
                                        {/* {value.map((val)=>{
                                            return 
                                        })} */}
                                        {!value.length ? (<div>
                                            <p onClick={() => toggleShow(!show)} className="bg-blue-1 text-white text-sm text-center font-semibold px-6 py-2 rounded-md">Join</p>
                                            {show && <div className="bg-white text-sm shadow rounded-lg p-4 mt-4">
                                                <p className="font-semibold">You don't have any quota for join class session, You can buy your quota in the link below</p>
                                                <div className="flex items-center gap-5 mt-4">
                                                    <p onClick={() => toggleShow(!show)} className="cursor-pointer">Cancel</p>
                                                    <Link to={"/pricing/" + localStorage.getItem("name")}>Click Here to Buy Quota</Link>
                                                </div>
                                            </div>}
                                        </div>) : (value.map((items) => {
                                            return <div>
                                                {items.classSession <= 0 ? (<div>
                                                    <p onClick={() => toggleShow(!show)} className="bg-blue-1 text-white text-sm text-center font-semibold px-6 py-2 rounded-md">Join</p>
                                                    {show && <div className="bg-white text-sm shadow rounded-lg p-4 mt-4">
                                                        <p className="font-semibold">You don't have any quota left please buy quota to join this class</p>
                                                        <div className="flex items-center gap-5 mt-4">
                                                            <p onClick={() => toggleShow(!show)} className="cursor-pointer">Cancel</p>
                                                            <Link to={"/pricing/" + localStorage.getItem("name")}>Click Here to Buy Quota</Link>
                                                        </div>
                                                    </div>}
                                                </div>) : (<div>
                                                    <p onClick={() => toggleShow(!show)} className="bg-blue-1 text-white text-sm text-center font-semibold px-6 py-2 rounded-md">Join</p>
                                                    {show && valueVal.map((v) => {
                                                        return <div className="detail-class-card flex flex-col gap-4 text-sm shadow rounded-lg p-4 mt-4">
                                                        <p className="font-semibold">Are you sure you want to take this class?</p>
                                                        <div className="flex items-center gap-5">
                                                            <p onClick={() => toggleShow(!show)} className="cursor-pointer">Cancel</p>
                                                            <a href={val.url} target="_blank" rel="noreferrer" onClick={reset} className="bg-blue-1 text-white text-center font-semibold px-6 py-2 rounded-md cursor-pointer">Join</a>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <p>Remaining class consultation quotas:</p> 
                                                            {
                                                                v.classSession <= 3 ? <p className="text-base font-semibold text-yellow-500">{v.classSession}</p> :<p className="text-base font-semibold text-green-500">{v.classSession}</p>
                                                            } 
                                                            
                                                        </div>
                                                    </div>
                                                    })}
                                                </div>)}
                                            </div>
                                        }))}
                                        {/* <div>
                                            <p onClick={() => toggleShow(!show)} className="bg-blue-1 text-white text-sm text-center font-semibold px-6 py-2 rounded-md">Join</p>
                                            {show && <div className="bg-white text-sm shadow rounded-lg p-4 mt-4">
                                                <p className="font-semibold">Are you sure you want to take this class?</p>
                                                <div className="flex items-center gap-5 mt-4">
                                                    <p onClick={() => toggleShow(!show)} className="cursor-pointer">Cancel</p>
                                                    <a href={val.url} target="_blank" rel="noreferrer" className="bg-blue-1 text-white text-center font-semibold px-10 py-2.5 w-max rounded-md cursor-pointer">Join</a>
                                                </div>
                                                </div>}
                                        </div> */}
                                    </div>
                                </div>
                            }
                        )
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}


export default ClassDetail
