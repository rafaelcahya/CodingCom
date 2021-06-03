/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Footer from '../../major/Footer'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import { Link } from 'react-router-dom';

function ChellengeList(props) {
    const urlid = props.match.params.id
    const [value, setValue] = useState([])
    const [type, setType] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/project/projectListByTypeId/" + urlid).then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    }, []);

    useEffect(() => {
        axios.get("http://localhost:3001/project/projectTypeListById/" + urlid).then((response) => {
            setType(response.data)
            console.log(response.data)
        })
    }, []);
    return (
        <>
            <NavbarLogin />
            <NavbarMobile />

            <div className="flex flex-col gap-20 mx-8 sm:mx-24 md:mx-40 lg:mx-52 mt-32 lg:mt-20">
                {
                    type.map((val) => {
                        return <div>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">For {val.type}</p>
                    </div>
                    })
                }
                {
                    value.map((val) => {
                        let image = require('../../../asset/upload/'+ val.image)
                        return <div className="flex flex-wrap justify-center gap-10 my-10">
                            <Link to={"/project-detail/"+val.projectId}>
                                <div className="challenge-box p-5 rounded-lg shadow transform hover:scale-105 hover:shadow-lg transition duration-200">
                                <img src={image.default} style={{width:"400px", height:"250px"}} className="rounded-lg" />
                                    <p className="color-blue-1 font-semibold">{val.projectTitle}</p>
                                    <p className="text-sm mt-5">{val.projectInfo}</p>
                                </div>
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
