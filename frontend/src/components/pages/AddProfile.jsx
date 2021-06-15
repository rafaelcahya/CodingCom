import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../major/Footer'
import Axios from "axios"

export default function AddProfile(props) {
    const urlname = props.match.params.name
    const [id, setId] = useState("")
    const [fullname, setFullname] = useState("")
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [BoD, setBoD] = useState("")
    const [phonenumber, setPhoneNumber] = useState("")
    const [cphonenumber, setCphoneNumber] = useState("")
    const [emergencynumber, setEmergencyNumber] = useState("")
    const [cemergencynumber, setCemergencyNumber] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [updateAt, setUpdateAt] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [file, setFile] = useState([])
    const [valueList,setValueList] = useState([])

    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setUpdateAt(dateTime)
    }, 500)
    
    useEffect(() => {
        Axios.get("http://localhost:3001/user/userById/"+urlname).then((response) => {
            setValueList(response.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const submit = () => {
        const fd = new FormData();
        fd.append('fileUpload', file)
        fd.append('fullname', fullname)
        fd.append('gender', gender)
        fd.append('name', name)
        fd.append('BoD', BoD)
        fd.append('phonenumber', phonenumber)
        fd.append('cphonenumber', cphonenumber)
        fd.append('emergencynumber', emergencynumber)
        fd.append('cemergencynumber', cemergencynumber)
        fd.append('address', address)
        fd.append('city', city)
        fd.append('postalCode', postalCode)
        fd.append('updateAt', updateAt)
        fd.append('urlname', urlname)
        Axios.post("http://localhost:3001/user/profile",fd).then((response) => {
            console.log(response)
            setErrorMessage(response.data.message)
        })
    }

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
                        <p className="font-medium text-sm">This is your profile. Fill your profile wisely, it will affect others.</p>
                    </div>
                    {
                        valueList.map((val)=>{
                          return <div className="flex flex-col items-center gap-10">
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Image Profile</p>
                                <input className="w-full"
                                    type="file"
                                    accept=".svg,.png,.jpg,.jpeg,.psd,.tiff,.bmp,.hdr,.webp"
                                    name="fileUpload" 
                                    onChange={(event) => {
                                        setFile(event.target.files[0])
                                    }} />
                            </div>
                            <div className="flex flex-col lg:flex-row gap-5 w-full">
                                <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                    <p className="text-sm font-semibold">Fullname</p>
                                    <input type="text" defaultValue={val.fullname} placeholder="Fullname" onChange={(event) => {
                                            setFullname(event.target.value)
                                        }} />
                                </div>
                                <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                    <p className="text-sm font-semibold">Username</p>
                                    <input type="text" defaultValue={val.name} placeholder="Username" onChange={(event) => {
                                            setName(event.target.value)
                                        }} />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-5 w-full">
                                <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                    <p className="text-sm font-semibold">Gender</p>
                                    <select name="" id="" onChange={(event) => {
                                            setGender(event.target.value)
                                        }} >
                                        <option>{val.gender}</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                    <p className="text-sm font-semibold">Birth date</p>
                                    <input type="date" defaultValue={val.BoD} onChange={(event) => {
                                            setBoD(event.target.value)
                                        }} />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-5 w-full">
                                <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                    <p className="text-sm font-semibold">Phone number</p>
                                    <input type="number" defaultValue={val.phoneNumber} placeholder="Phone number" onChange={(event) => {
                                            setPhoneNumber(event.target.value)
                                        }} />
                                </div>
                                <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                    <p className="text-sm font-semibold">Confirm phone number</p>
                                    <input type="number" defaultValue={val.phoneNumber} placeholder="Confirm phone number" onChange={(event) => {
                                            setCphoneNumber(event.target.value)
                                        }} />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-5 w-full">
                                <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                    <p className="text-sm font-semibold">Emergency number</p>
                                    <input type="number" defaultValue={val.emergencyNumber} placeholder="Phone number" onChange={(event) => {
                                            setEmergencyNumber(event.target.value)
                                        }} />
                                </div>
                                <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                    <p className="text-sm font-semibold">Confirm emergency</p>
                                    <input type="number" defaultValue={val.emergencyNumber} placeholder="Confirm phone number" onChange={(event) => {
                                            setCemergencyNumber(event.target.value)
                                        }} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <p className="text-sm font-semibold">Home address</p>
                                <textarea placeholder="Home address" defaultValue={val.address} className="resize-none" onChange={(event) => {
                                            setAddress(event.target.value)
                                        }} />
                            </div>
                            <div className="w-full flex justify-between gap-10">
                                <div className="w-1/2 flex flex-col gap-2">
                                    <p className="text-sm font-semibold">City</p>
                                    <input type="text" defaultValue={val.city} placeholder="City" onChange={(event) => {
                                            setCity(event.target.value)
                                        }} />
                                </div>
                                <div className="w-1/2 flex flex-col gap-2">
                                    <p className="text-sm font-semibold">Postal Code</p>
                                    <input type="number" defaultValue={val.postalCode} placeholder="Postal Code" onChange={(event) => {
                                            setPostalCode(event.target.value)
                                        }} />
                                </div>
                            </div>
                        </div>
                        })
                    }
                    <p>{errorMessage}</p>
                    <div className="py-10">
                        <p onClick={submit} className="bg-blue-1 hover:bg-blue-400 text-white text-sm text-center rounded-md px-8 py-2 cursor-pointer outline-none">Save</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}