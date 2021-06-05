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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        axios.get("http://localhost:3001/project/projectTypeListById/" + urlid).then((response) => {
            setType(response.data)
            console.log(response.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
    return (
        <>
            <NavbarLogin />
            <NavbarMobile />

            <div className="mx-16 xl:mx-32 mt-20">
                {
                    type.map((val) => {
                        return <div>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">{val.type}</p>
                    </div>
                    })
                }
                <div className="grid grid-cols-3 justify-center gap-10 mt-20 h-full">
                    {
                        value.map((val) => {
                            let image = require('../../../asset/upload/'+ val.image)
                            return <Link to={"/project-detail/"+val.projectId}>
                                    <div className="challenge-card bg-white p-2 rounded-lg w-max shadow hover:shadow-lg transform hover:scale-105 duration-200">
                                        <img src={image.default} style={{width:"400px", height:"200px"}} className="rounded-lg" />
                                        <div className="flex flex-col gap-4 px-2 pt-2">
                                            <p className="text-xl font-bold capitalize">{val.projectTitle}</p>
                                            <div className="max-w-sm">
                                                <p className="classInfo text-sm">{val.projectInfo}</p>
                                            </div>
                                            <p className="text-xs tracking-wide text-gray-400">{formatDate(val.projectCreateAt)}</p>
                                        </div>
                                    </div>
                            </Link>
                        })
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


export default ChellengeList
