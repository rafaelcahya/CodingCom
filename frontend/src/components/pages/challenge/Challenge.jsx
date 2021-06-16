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

            <p className="text-3xl font-semibold text-center my-20">Choose project</p>
            <div className="challenge-box bg-blue-100 flex flex-col md:flex-row justify-center mx-16 xl:mx-32 rounded-lg">
                {
                    value.map((val) => {
                        return <div className="w-full">
                            <Link to={"/list-challenges/" + val.typeId}>
                                <div className="flex flex-col justify-center items-center text-center gap-5 h-80 px-5 md:px-40 hover:bg-blue-500 hover:text-white rounded-lg">
                                    <p className="text-2xl font-semibold">{val.type}</p>
                                    <p className="text-sm md:text-base">{val.typeDescription}</p>
                                </div>
                            </Link>
                        </div>
                    })
                }
            </div>
            <Footer />
        </>
    )
}


export default ChellengeList
