import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../major/Footer'
import Axios from "axios"

export default function Profile(props) {
    const urlname = props.match.params.name
    const [valueList, setValueList] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:3001/user/userById/" + urlname).then((response) => {
            setValueList(response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="profile-form pt-5 w-4/5 md:w-1/2">
                    <div className="-ml-2 mt-5 mb-10 py-5 border-b">
                        <Link to="/" className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            <p>Back</p>
                        </Link>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold">Your profile</p>
                        <p className="font-medium text-sm">This is your profile.</p>
                    </div>
                    {
                        valueList.map((val) => {
                            if (val.image.length > 0) {
                                let image = require('../../asset/upload/' + val.image)
                                return <div>
                                    <img src={image.default} className="w-72 h-36 sm:w-96 sm:h-52 rounded-lg" alt="Not Found" />
                                    <div>
                                        <p>Fullname : {val.fullname}</p>
                                        <p>Username : {val.name}</p>
                                        <p>Email : {val.email}</p>
                                        {val.gender > 0 ? (<p>Gender : {val.gender}</p>) : (<p>Gender : Secret/Don't wanna tell</p>)}
                                        {val.BoD === "0000-00-00" ? (<p>Birth of Date : Secret/Don't wanna tell</p>) : (<p>Birth of Date : {val.BoD}</p>)}
                                        <p>Phone Number : {val.phoneNumber}</p>
                                        <p>Emergency Number : {val.emergencyNumber}</p>
                                        <p>Address : {val.address}</p>
                                        <p>City : {val.city}</p>
                                        <p>Postal Code : {val.postalCode}</p>
                                        <p>Education : {val.education}</p>
                                        <p>Status : {val.status}</p>
                                    </div>
                                    <div>
                                        <Link to={"/edit-profile/" + val.name}>
                                            <p className="text-sm">Edit Profile</p>
                                        </Link>
                                    </div>
                                </div>
                            } else {
                                return <div>
                                    {/*Nanti ini buat isi default image kalo kosong, srcnya di ubah aj jdi path default image
                             <img src={image.default} className="w-72 h-36 sm:w-96 sm:h-52 rounded-lg" alt="Not Found" /> 
                             */}
                                    <div>
                                        <p>Fullname : {val.fullname}</p>
                                        <p>Username : {val.name}</p>
                                        <p>Email : {val.email}</p>
                                        {val.gender > 0 ? (<p>Gender : {val.gender}</p>) : (<p>Gender : Secret/Don't wanna tell</p>)}
                                        {val.BoD === "0000-00-00" ? (<p>Birth of Date : Secret/Don't wanna tell</p>) : (<p>Birth of Date : {val.BoD}</p>)}
                                        <p>Phone Number : {val.phoneNumber}</p>
                                        <p>Emergency Number : {val.emergencyNumber}</p>
                                        <p>Address : {val.address}</p>
                                        <p>City : {val.city}</p>
                                        <p>Postal Code : {val.postalCode}</p>
                                        <p>Education : {val.education}</p>
                                        <p>Status : {val.status}</p>
                                    </div>
                                    <div>
                                        <Link to={"/edit-profile/" + val.name}>
                                            <p className="text-sm">Edit Profile</p>
                                        </Link>
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
