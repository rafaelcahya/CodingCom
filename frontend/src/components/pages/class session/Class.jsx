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
                <div className="mt-20 h-full">
                    {
                        listClass.map(
                            (val)=> {
                                return <div className="bg-white p-4 my-5 rounded-xl">
                                            <b><p>{val.fullname}</p></b>
                                            <p>{val.className}</p>
                                            <p>Date: {val.date} || Time: {val.time}</p>
                                            <a href={val.url} target="_blank" rel="noreferrer">Join Room</a>
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
