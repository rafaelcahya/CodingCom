import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Footer from '../../major/Footer'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'

function Class() {
    const [listClass,SetListClass] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/class/classListUser").then((response) => {
        SetListClass(response.data)
        //console.log(response.data)
        })
    }, []);
    return (
        <>
            <NavbarLogin />
            <NavbarMobile />

            <div className="mx-8 sm:mx-24 md:mx-40 lg:mx-52 xl:mx-72 mt-20">
                <div className="flex flex-col gap-2">
                    <p className="text-4xl font-bold">Coding class</p>
                    <p className="text-gray-500 font-medium">Join classes that will support your personal and professional development here!</p>
                </div>
                <div className="mt-20 h-full">
                    {
                        listClass.map(
                            (val)=> {
                                let image = require('../../../asset/upload/'+ val.image)
                                return <div className="bg-white p-4 my-5 rounded-xl">
                                            <img src={image.default}></img>
                                            <p className="text-xl font-bold">{val.className}</p>
                                            <div className="flex flex-col gap-1 mt-2 mb-10">
                                                <div className="flex items-center gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="transparent" stroke="rgb(156, 163, 175)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                    <p className="text-gray-600 text-sm font-medium">{val.fullname}</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="transparent" stroke="rgb(156, 163, 175)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                                    <p className="text-gray-600 text-sm font-medium mt-0.5">{val.date}, {val.time}</p>
                                                </div>
                                            </div>
                                            <a href={val.url} target="_blank" rel="noreferrer" className="bg-blue-1 text-white text-sm font-semibold px-6 py-2 rounded-lg">Join Room</a>
                                        </div>
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
