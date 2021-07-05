/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import axios from 'axios';

import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import { Link } from 'react-router-dom';

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

            <div className="challenge-box flex flex-col md:flex-row justify-center">
                {
                    value.map((val) => {
                        return <div className="w-full">
                            <Link to={"/list-challenges/" + val.typeId + "-" + GenerateID(15,10)}>
                                <div className="flex flex-col justify-center items-center text-center gap-5">
                                    {
                                        val.type === "Challenge" ? <div className="flex flex-col justify-center items-center gap-5 h-screen px-5 md:px-40 hover:bg-blue-500 hover:text-white duration-100">
                                            <p className="text-2xl font-semibold">{val.type}</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-32" viewBox="0 0 96 96" x="0px" y="0px" fill="currentColor"><title>Artboard 8</title><g><path d="M48,36a2,2,0,0,0,0-4A16,16,0,1,0,64,48a2,2,0,0,0-4,0A12,12,0,1,1,48,36Z"/><path d="M86.16,36.1211a2.0015,2.0015,0,0,0-3.82,1.1953A36.1354,36.1354,0,1,1,58.6836,13.6582a2,2,0,1,0,1.1953-3.8164A40.1308,40.1308,0,1,0,86.16,36.1211Z"/><path d="M51.8086,22.2773a2.1632,2.1632,0,0,0-2-2.1757C49.2109,20.0488,48.6133,20,48,20A28,28,0,1,0,76,48a17.71,17.71,0,0,0-.1328-2.1641,2.0149,2.0149,0,1,0-3.9531.7012C71.957,47.0215,72,47.5039,72,48A24,24,0,1,1,48,24c.4961,0,.9766.0449,1.4609.0859l.375.0332A1.891,1.891,0,0,0,51.8086,22.2773Z"/><path d="M60,26v7.1719L46.5859,46.5859a2,2,0,1,0,2.8282,2.8282L62.8281,36H70a1.9985,1.9985,0,0,0,1.4141-.5859l12-12A2,2,0,0,0,82,20H76V14a2,2,0,0,0-3.4141-1.4141l-12,12A1.9987,1.9987,0,0,0,60,26Zm4,.8281,8-8V22a1.9988,1.9988,0,0,0,2,2h3.1719l-8,8H64Z"/></g></svg>
                                            <p className="text-sm md:text-base">{val.typeDescription}</p>
                                        </div> : <div className="flex flex-col justify-center items-center h-screen px-5 md:px-40 hover:bg-blue-500 hover:text-white duration-100">
                                            <p className="text-2xl font-semibold">{val.type}</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-32" viewBox="0 0 25 30" x="0px" y="0px" fill="currentColor" strokeLinejoin="round"><title>Charter Horizontal</title><g><path d="M18.5,16A4.5,4.5,0,1,1,23,11.5,4.5049,4.5049,0,0,1,18.5,16Zm0-8A3.5,3.5,0,1,0,22,11.5,3.5042,3.5042,0,0,0,18.5,8Z"/><path d="M21.5,22a.495.495,0,0,1-.1582-.0258L18.5,21.0268l-2.8418.9473A.5.5,0,0,1,15,21.5V14h1v6.8062l2.3418-.78a.5007.5007,0,0,1,.3164,0l2.3418.78V14h1v7.5a.5.5,0,0,1-.5.5Z"/><path d="M13,19H2.5a.5.5,0,0,1-.5-.5V3.5A.5.5,0,0,1,2.5,3h18a.5.5,0,0,1,.5.5V6H20V4H3V18H13Z"/><rect x="5" y="8.9999" width="8" height="1"/><rect x="5" y="11.9999" width="6" height="1"/><rect x="5" y="14.9999" width="4" height="1"/></g></svg>
                                            <p className="text-sm md:text-base">{val.typeDescription}</p>
                                        </div>
                                    }
                                </div>
                            </Link>
                        </div>
                    })
                }
            </div>
        </>
    )
}


export default ChellengeList
