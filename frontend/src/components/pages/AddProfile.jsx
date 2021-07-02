import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../major/Footer'

import Axios from "axios"
import { SnackbarProvider, wrapComponent, Snackbar } from 'react-snackbar-alert';

export default function AddProfile(props) {
    const urlname = props.match.params.name
    const [education, setEducation] = useState("")
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
        let x = localStorage.getItem("name");
        setName(x)
    }, 10)

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
        fd.append('education', education)
        Axios.post("http://localhost:3001/user/profile",fd).then((response) => {
            setErrorMessage(response.data.message)
        })
    }

    const CustomSnackbarComponent = (props) => {
        return (
            <Snackbar {...props}>
                <Link to="/">
                    <div className="text-left">{props.message}</div>
                </Link>
            </Snackbar>
        );
    }
    
    const Container = wrapComponent(function({ createSnackbar }) {
        function showSnackbar() {
            createSnackbar({
                message: 'Profile updated successfully',
                dismissable: false,
                pauseOnHover: true,
                progressBar: true,
                sticky: false,
                theme: 'default',
                timeout: 3000
            });
        }
        return (
            <div>
                <button onClick={showSnackbar}>Save profile</button>
            </div>
        );
    });

    return (
        <>
            <div className="bg-blue-600 px-16 py-10 pb-48" id="container" >
                <Link to={"/profile/" + name}>
                    <div className="flex gap-1 bg-white text-black py-2 pl-1 pr-3 rounded-lg w-max">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        <p>back</p>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col items-center -mt-20">
                <form className="profile-form w-3/4 md:w-1/2" id="reset-form">
                    {
                        valueList.map((val)=>{
                            let image = require('../../asset/upload/'+ val.image)
                            return <div className="flex flex-col items-center gap-10">
                            <div className="image-profile relative">
                                <img src={image.default} className="img-image-profile ring-4 ring-white rounded-full transform transition duration-150 hover:scale-110 mb-3" alt=""/>
                                <label htmlFor="edit-image-profile">
                                    <div className="bg-blue-500 hover:bg-blue-300 cursor-pointer p-2 w-max rounded-full absolute bottom-3 right-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                    </div>
                                </label>
                            </div>
                            <div className="hidden">
                                <p className="text-sm font-semibold">Image Profile</p>
                                <input className="edit-image-profile w-full"
                                    id="edit-image-profile"
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
                                        <option value="">Gender</option>
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
                                    <input type="number" defaultValue={val.phoneNumber} placeholder="Phone number" min="0" max="9999999999999" onChange={(event) => {
                                            setPhoneNumber(event.target.value)
                                        }} />
                                </div>
                                <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                    <p className="text-sm font-semibold">Confirm phone number</p>
                                    <input type="number" defaultValue={val.phoneNumber} placeholder="Confirm phone number" min="0" max="9999999999999" onChange={(event) => {
                                            setCphoneNumber(event.target.value)
                                        }} />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-5 w-full">
                                <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                    <p className="text-sm font-semibold">Emergency number</p>
                                    <input type="number" defaultValue={val.emergencyNumber} placeholder="Emergency number" min="0" max="9999999999999" onChange={(event) => {
                                            setEmergencyNumber(event.target.value)
                                        }} />
                                </div>
                                <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                    <p className="text-sm font-semibold">Confirm emergency number</p>
                                    <input type="number" defaultValue={val.emergencyNumber} placeholder="Confirm emergency number" min="0" max="9999999999999" onChange={(event) => {
                                            setCemergencyNumber(event.target.value)
                                        }} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <p className="text-sm font-semibold">Home address</p>
                                    <textarea placeholder="Home address" rows={5} defaultValue={val.address} className="resize-none" onChange={(event) => {
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
                                    <input type="number" defaultValue={val.postalCode} placeholder="Postal Code" min="0" max="99999" onChange={(event) => {
                                            setPostalCode(event.target.value)
                                        }} />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm font-semibold">Last education</p>
                                    <select name="" id=""  onChange={(event) => {
                                            setEducation(event.target.value)
                                        }} >
                                        <option value="Gender" className="p-3">Choose education level</option>
                                        <option value="Male">Elementary school</option>
                                        <option value="Junior">Junior high school</option>
                                        <option value="Senior">Senior high school</option>
                                        <option value="Associate">Associate Degrees</option>
                                        <option value="Bachelor’s">Bachelor’s Degrees</option>
                                        <option value="Master’s">Master’s Degrees</option>
                                        <option value="Doctoral">Doctoral Degrees</option>
                                    </select>
                                </div>
                            </div>
                            <p className="text-sm color-red-1 text-center font-medium">{errorMessage}</p>
                        </div>
                        })
                    }
                </form>
            </div>
            <div className="flex justify-center">
                <div onClick={submit} className="w-max bg-blue-1 hover:bg-blue-400 text-white text-sm text-center rounded-md px-8 py-2 cursor-pointer outline-none">
                    <SnackbarProvider position="top-left" component={CustomSnackbarComponent}>
                        <Container />
                    </SnackbarProvider>
                </div>
            </div>
            <Footer/>
        </>
    )
}