import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../major/Footer'
import Axios from "axios"

import DefaultImageProfile from "../../asset/photo/default-user-image.png"

export default function Profile(props) {
    const urlname = props.match.params.name
    const [valueList, setValueList] = useState([])
    
    useEffect(() => {
        Axios.get("http://localhost:3001/user/userById/" + localStorage.getItem("name")).then((response) => {
            setValueList(response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });

    document.addEventListener("DOMContentLoaded", () => {
        const containerElm = document.querySelector("#container");
        
        const getRandomIntInclusive = (min, max) => {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        
        const getRandomRGB = () => {
            const r = getRandomIntInclusive(0, 255);
            const g = getRandomIntInclusive(0, 255);
            const b = getRandomIntInclusive(0, 255);
            return `rgb(${r}, ${g}, ${b})`;
        };
        
        const handleOnClick = () => {
            containerElm.style.backgroundColor = getRandomRGB();
        }
        
        containerElm.addEventListener("click", handleOnClick);
    });

    return (
        <>
            <div className="flex justify-between bg-blue-600 w-full px-16 py-10 pb-48" id="container" >
                <Link to="/">
                    <div className="flex gap-1 bg-white text-black py-2 pl-1 pr-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        <p>back</p>
                    </div>
                </Link>
                {
                    valueList.map((val) => {
                        return <Link to={"/edit-profile/" + val.name}>
                            <p className="bg-white text-black text-sm text-center rounded-md px-8 py-2 cursor-pointer outline-none">Edit Profile</p>
                        </Link>
                    })
                }
            </div>
            <div className="flex flex-col items-center -mt-20">
                <div className="w-full md:w-3/5">
                    {
                        valueList.map((val) => {
                            if (val.image.length > 0){
                                let image = require('../../asset/upload/' + val.image)
                                return <div>
                                    <div className="flex flex-col items-center gap-3">
                                        <img src={image.default} className="img-image-profile ring-4 ring-white rounded-full transform transition duration-150 hover:scale-110 mb-3" alt="Not Found" onClick={window.onload = function() {
                                            if(!window.location.hash) {
                                                window.location = window.location + '#';
                                                window.location.reload();
                                            }
                                        }}/>
                                        <p className="text-xs font-medium text-gray-400">{val.name}</p>
                                        <p className="text-4xl text-center font-semibold">{val.fullname}</p>
                                        <p className="tracking-wide text-gray-400">{val.email}</p>
                                    </div>
                                    <div className="flex flex-col items-start md:items-stretch gap-32 mt-20 text-gray-500 mx-20">
                                        <div className="flex flex-col md:flex-row justify-between gap-5">
                                            <p className="text-xl font-medium w-full md:w-3/5">Personal Information</p>
                                            <div className="flex flex-col gap-3 w-full md:w-2/5">
                                                <p>{val.gender}</p>
                                                <p>{formatDate(val.BoD)}</p>
                                                <p>{val.phoneNumber}</p>
                                                <p>{val.emergencyNumber}*</p>
                                                <p>{val.education}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row justify-between gap-5">
                                            <p className="text-xl font-medium w-full md:w-3/5">Address</p>
                                            <div className="flex flex-col gap-3 w-full md:w-2/5">
                                                <p className="whitespace-normal" style={{width: "300px"}}>{val.address}</p>
                                                <p>{val.city}</p>
                                                <p>{val.postalCode}</p>
                                                <p>{val.email}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row justify-between gap-5">
                                            <p className="text-xl font-medium w-full md:w-3/5">Premium Plan</p>
                                            <div className="flex flex-col gap-3 w-full md:w-2/5">
                                                <p>Your premium plan is {val.status}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }else{
                                return <div>
                                    <div className="flex flex-col items-center gap-3">
                                        <img src={DefaultImageProfile} className="ring-4 ring-white rounded-full transform transition duration-150 hover:scale-110" alt="Not Found" width="100" />
                                        <p className="text-xs font-medium text-gray-400">{val.name}</p>
                                        <p className="text-4xl text-center font-semibold">{val.fullname}</p>
                                        <p className="tracking-wide text-gray-400">{val.email}</p>
                                    </div>
                                    <div className="flex flex-col items-start md:items-stretch gap-32 mt-20 text-gray-500 mx-20">
                                        <div className="flex flex-col md:flex-row justify-between gap-5">
                                            <p className="text-xl font-medium w-full md:w-3/5">Personal Information</p>
                                            <div className="flex flex-col gap-3 w-full md:w-2/5">
                                                {val.gender.length<=0 ?(<p>Gender has not selected</p>):(<p>{val.gender}</p>)}
                                                <p>{formatDate(val.BoD)}</p>
                                                <p>{val.phoneNumber}</p>
                                                <p>{val.emergencyNumber}*</p>
                                                <p>{val.education}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row justify-between gap-5">
                                            <p className="text-xl font-medium w-full md:w-3/5">Address</p>
                                            <div className="flex flex-col gap-3 w-full md:w-2/5">
                                                <p className="whitespace-normal" style={{width: "300px"}}>{val.address}</p>
                                                <p>{val.city}</p>
                                                <p>{val.postalCode}</p>
                                                <p>{val.email}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row justify-between gap-5">
                                            <p className="text-xl font-medium w-full md:w-3/5">Premium Plan</p>
                                            <div className="flex flex-col gap-3 w-full md:w-2/5">
                                                <p>Your premium plan is {val.status}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        })
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}
