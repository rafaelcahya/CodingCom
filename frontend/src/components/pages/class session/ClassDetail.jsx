/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Footer from '../../major/Footer'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'

function ClassDetail(props) {
    const urlid = props.match.params.id
    const [listClass,SetListClass] = useState([])
    const [show, toggleShow] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:3001/class/classById/"+urlid).then((response) => {
            SetListClass(response.data)
            console.log(response.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

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
                                let image = require('../../../asset/upload/'+ val.image)
                                return <div className="classDetail flex flex-col md:flex-row gap-10">
                                    <div className="flex flex-col gap-5">
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
                                            <div className="flex flex-col gap-2">
                                                <p className="text-xl font-semibold capitalize">Description Class</p>
                                                <div dangerouslySetInnerHTML={{ __html: val.classDescription }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sticky self-start top-5 flex flex-col gap-5">
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
                                            <p className="classInfo">{val.classInfo}</p>
                                        </div>
                                        <div>
                                            <p onClick={() => toggleShow(!show)} className="bg-blue-1 text-white text-sm text-center font-semibold px-6 py-2 rounded-md">Join</p>
                                            {show && <div className="bg-white text-sm shadow rounded-lg p-4 mt-4">
                                                <p className="font-semibold">Are you sure you want to take this class?</p>
                                                <div className="flex items-center gap-5 mt-4">
                                                    <p onClick={() => toggleShow(!show)} className="cursor-pointer">Cancel</p>
                                                    <a href={val.url} target="_blank" rel="noreferrer" className="bg-blue-1 text-white text-center font-semibold px-6 py-2 rounded-md cursor-pointer">Join</a>
                                                </div>
                                                </div>}
                                        </div>
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
