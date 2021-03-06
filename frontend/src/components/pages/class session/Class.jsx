/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Footer from '../../major/Footer'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'

const GenerateID = (len, k)=>{
    const s = (k) =>{
        var text = ""
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        for(let i = 0 ; i<k ; i++){
            text += chars.charAt(Math.floor(Math.random()*chars.length));
        }
        return text
    }
    var id = s(k);
    for(let n = 0;n<len;n++){
        id += '-'+s(k)
    }
    return id
}

function Class() {
    const [listClass,SetListClass] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/class/classListUser").then((response) => {
        SetListClass(response.data)
        })
    }, []);

    var day = { day: 'numeric'};
    var month = { month: 'short' };

    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
    const formatDateDay = s => new Date(s).toLocaleDateString('en-gb', day);
    const formatDateMonth= s => new Date(s).toLocaleDateString('en-gb', month);
    return (
        <>
            <NavbarLogin />
            <NavbarMobile />

            <div className="bg-custom darken-overlay">
                <div className="text-white flex flex-col items-center gap-2 px-5 xl:px-32 py-36">
                    <p className="text-4xl font-bold">Coding class</p>
                    <p className="text-xl font-medium">Find and choose your favorite class here!</p>
                </div>
            </div>
            <div className="flex md:block flex-col items-center">
                <div className="flex justify-center">
                    <p className="text-3xl font-semibold border-b-2 px-2 pb-2 border-black mb-20 mt-32 lg:mt-20 w-max">Latest Class</p>
                </div>
                <div className="flex flex-wrap justify-center gap-5 gap-y-12">
                    {
                        listClass.map(
                            (val)=> {
                                let image = require('../../../asset/upload/'+ val.image)
                                return <a href={"/detail-class/"+val.id +"-" + GenerateID(15,10)} className="class-card bg-white p-2 -my-2 rounded-lg shadow-lg hover:shadow-lg transform hover:scale-105 duration-200" style={{width: "425px"}}>
                                    <img src={image.default} className="rounded-lg"/>
                                    <div className="flex gap-6 px-2 py-4">
                                        <div>
                                            <p className="color-blue-1 text-right font-semibold">{formatDateDay(val.startDate)}</p>
                                            <p className="font-medium uppercase tracking-tight">{formatDateMonth(val.startDate)}</p>
                                        </div>
                                        <div className="flex flex-col gap-4 w-72">
                                            <p className="text-xl font-bold capitalize break-words">{val.className}</p>
                                            <div className="max-w-xs">
                                                <p className="truncate3 text-sm">{val.classInfo}</p>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <div className="flex items-center gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="transparent" stroke="rgb(156, 163, 175)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                    <p className="text-sm font-medium capitalize">{val.fullname}</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="transparent" stroke="rgb(156, 163, 175)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                                    <p className="text-sm font-medium mt-0.5">{formatDate(val.startDate)} - {formatDate(val.endDate)}</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(156, 163, 175)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                                    <p className="text-sm font-medium mt-0.5">{val.startTime} - {val.endTime}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            }
                        )
                    }
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


export default Class
