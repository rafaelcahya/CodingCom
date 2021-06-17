import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../major/Footer'
import Axios from "axios"

import DefaultImageProfile from "../../asset/photo/default-user-image.png"

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
                <div className="w-4/5 md:w-1/2 sticky self-start container mx-auto z-10 top-10 gap-10 py-2 bg-white shadow rounded-lg border hover:bg-blue-50">
                    <Link to="/">
                        <div className="flex items-center justify-between px-5">
                            <div className="flex items-center gap-1 -ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                <p>Back</p>
                            </div>
                            <p className="font-semibold">Personal Information</p>
                        </div>
                    </Link>
                </div>
                <div className="profile-form pt-5 w-4/5 md:w-1/2">
                    <div className="bg-white rounded-lg border border-gray-200 py-10 mt-20">
                        {
                            valueList.map((val) => {
                                if (val.image.length > 0) {
                                    let image = require('../../asset/upload/' + val.image)
                                    return <div>
                                        <div className="transform transition duration-500 hover:scale-110">
                                            <img src={image.default} className="w-72 h-36 sm:w-96 sm:h-52 rounded-lg" alt="Not Found" />
                                        </div>
                                        <table className="table-profile">
                                            <tr>
                                                <td><p>Fullname</p></td>
                                                <td><p>{val.fullname}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p>Username</p></td>
                                                <td><p>{val.name}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p>Email</p></td>
                                                <td><p>{val.email}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p>Gender</p></td>
                                                <td><p>{val.gender}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p>Date of birth</p></td>
                                                <td><p>{val.BoD}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p>Phonenumber</p></td>
                                                <td><p>{val.phoneNumber}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p>Emergency Number</p></td>
                                                <td><p>{val.emergencyNumber}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p>Address</p></td>
                                                <td><p>{val.address}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p>City</p></td>
                                                <td><p>{val.city}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p>Postal Code</p></td>
                                                <td><p>{val.postalCode}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p>Education</p></td>
                                                <td><p>{val.education}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p>Status</p></td>
                                                <td><p>{val.status}</p></td>
                                            </tr>
                                        </table>
                                        <div>
                                            <Link to={"/edit-profile/" + val.name}>
                                                <p className="text-sm">Edit Profile</p>
                                            </Link>
                                        </div>
                                    </div>
                                } else {
                                    return <div className="flex flex-col items-center justify-center gap-16">
                                        <div className="transform transition duration-150 hover:scale-125">
                                            <img src={DefaultImageProfile} className="rounded-full" alt="Not Found" width="100" />
                                        </div>
                                        <table className="table-profile">
                                            <tr>
                                                <td><p>Fullname</p></td>
                                                <td><p>{val.fullname.length <= 0? (<p>Not specified</p>) : (<p>{val.fullname}</p>)}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p>Username</p></td>
                                                <td><p>{val.name.length <= 0? (<p>Not specified</p>) : (<p>{val.name}</p>)}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p>Email</p></td>
                                                <td><p>{val.email.length <= 0? (<p>Not specified</p>) : (<p>{val.email}</p>)}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p>Gender</p></td>
                                                <td><p>{val.gender.length <= 0? (<p>Not specified</p>) : (<p>{val.gender}</p>)}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p>Date of birth</p></td>
                                                <td><p>{val.BoD === "0000-00-00" ? (<p>Not specified</p>) : (<p>{val.BoD}</p>)}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p>Phonenumber</p></td>
                                                <td><p>{val.phoneNumber.length <= 0? (<p>Not specified</p>) : (<p>{val.phoneNumber}</p>)}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p>Emergency Number</p></td>
                                                <td><p>{val.emergencyNumber.length <= 0? (<p>Not specified</p>) : (<p>{val.emergencyNumber}</p>)}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p>Address</p></td>
                                                <td><p>{val.address.length <= 0? (<p>Not specified</p>) : (<p>{val.address}</p>)}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p>City</p></td>
                                                <td><p>{val.city.length <= 0? (<p>Not specified</p>) : (<p>{val.city}</p>)}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p>Postal Code</p></td>
                                                <td><p>{val.postalCode === 0? (<p>Not specified</p>) : (<p>{val.postalCode}</p>)}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p>Education</p></td>
                                                <td><p>{val.education.length <= 0? (<p>Not specified</p>) : (<p>{val.education}</p>)}</p></td>
                                            </tr>
                                            <tr>
                                                <td><p>Status</p></td>
                                                <td><p>{val.status}</p></td>
                                            </tr>
                                        </table>
                                        <div>
                                            <Link to={"/edit-profile/" + val.name}>
                                                <p className="bg-blue-1 text-white text-sm text-center rounded-md px-8 py-2 cursor-pointer outline-none">Edit Profile</p>
                                            </Link>
                                        </div>
                                    </div>
                                }
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
