/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Footer from '../../major/Footer'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import { Link } from 'react-router-dom';

function ChellengeList() {
    const [value, setValue] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/project/projectTypeList").then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    }, []);
    return (
        <>
            <NavbarLogin />
            <NavbarMobile />

            <div className="mx-16 xl:mx-32 mt-20">
                <div className="flex flex-col gap-2">
                    <p className="text-4xl font-bold">Chellenges</p>
                    <p className="text-xl text-gray-500 font-medium">Choose chellenges to test you skill!</p>
                </div>
                {
                    value.map((val) => {
                       return <div className="flex justify-center gap-5 mt-20 h-full">
                            <Link to={"/list-challenges/" + val.typeId}>
                                <p style={{ backgroundColor: "black", color:"white"}}>{val.type}</p>
                            </Link>
                        </div>
                    })
                }

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


export default ChellengeList
