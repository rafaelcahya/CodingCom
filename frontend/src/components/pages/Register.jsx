import React, { useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

import Particles from "react-particles-js"
import particlesConfig from '../background/ParticlesConfig'

import info from "../../asset/icon/info.svg"
import Popup from "./RegisterPopup"

function Register() {
    const [fullname, setFullname] = useState("")
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [BoD, setBoD] = useState("")
    const [phonenumber, setPhonenumber] = useState("")
    const [cphonenumber, setCphonenumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [createAt,setCreateAt] = useState("")
    const [buttonPopup, setButtonPopup] = useState(false)

    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = time + ' ' + date;
        setCreateAt(dateTime)
    }, 500)

    const register = () => {
        console.log(name)
        Axios.post("http://localhost:3001/user/register", { fullname: fullname, name: name, gender:gender, BoD:BoD, phoneNumber:phonenumber, cphoneNumber:cphonenumber, email: email, password: password, confirmpassword: confirmpassword, createAt: createAt }).then((response) => {
            console.log(response)
            if (response.data.message) {
                setErrorMessage(response.data.message)
            } else {
                setButtonPopup(true)
            }
        })
    }

    return (
        <div className="relative flex justify-center">
            <div className="absolute">
                <Particles height="100vh" width="100vw" params={particlesConfig} />
            </div>
            <div className="login-container my-10 bg-white rounded-xl p-10 shadow-xl overflow-hidden" style={{ zIndex: "1" }}>
                <div className="text-lg">
                    <p className="color-blue-1">Hello,</p>
                    <p>Let's introduce yourself</p>
                </div>
                <div className="register-box flex flex-col my-10">
                    <div className="flex flex-col gap-5">
                        <div className="w-full flex flex-col lg:flex-row justify-between gap-10">
                            <div>
                                <p className="fullname text-sm mb-1">Fullname</p>
                                <input
                                    type="text"
                                    placeholder="Input your fullname"
                                    className="input-fullname"
                                    onChange={(event) => {
                                        setFullname(event.target.value)
                                    }} />
                            </div>
                            <div>
                                <p className="username text-sm mb-1">Username</p>
                                <input
                                    type="text"
                                    placeholder="Input your username"
                                    className="input-username"
                                    onChange={(event) => {
                                        setName(event.target.value)
                                    }} />
                            </div>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row justify-between gap-10">
                            <div className="w-full flex flex-col gap-2">
                                <p className="gender text-sm">Gender</p>
                                <select name="" id=""  onChange={(event) => {
                                    setGender(event.target.value)
                                }} >
                                    <option value="Gender">Choose gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="w-1/2 flex flex-col gap-2">
                                <p className="text-sm">Birth date</p>
                                <input type="date"  onChange={(event) => {
                                    setBoD(event.target.value)
                                }} />
                            </div>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row justify-between gap-10">
                            <div className="w-1/2 flex flex-col gap-2">
                                <p className="text-sm">Phone number</p>
                                <input type="number" placeholder="Phone number"  onChange={(event) => {
                                    setPhonenumber(event.target.value)
                                }} />
                            </div>
                            <div className="w-1/2 flex flex-col gap-2">
                                <p className="text-sm">Confirm phone number</p>
                                <input type="number" placeholder="Confirm phone number" className="input-confph" onChange={(event) => {
                                    setCphonenumber(event.target.value)
                                }} />
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="email text-sm mb-1">Email</p>
                            <input
                                type="text"
                                placeholder="Input your email"
                                className="input-email"
                                style={{width: "100%"}}
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }} />
                        </div>
                        <div className="w-full flex flex-col lg:flex-row justify-between gap-10">
                            <div>
                                <div className="flex justify-between">
                                    <p className="password text-sm mb-1">Password</p>
                                    <div className="flex flex-col items-end">
                                        <img src={info} alt="" className="info w-3 text-right" />
                                        <div className="password-hint-box text-sm shadow-black absolute bg-white mt-5 px-3 py-1 rounded-xl">
                                            <p>Your password must contain: </p>
                                            <ul className="list-inside list-disc">
                                                <div className="m-2">
                                                    <li>Uppercase letter</li>
                                                    <li>Lowercase letter</li>
                                                    <li>Number</li>
                                                    <li>8 - 20 Characters</li>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <input
                                    type="password"
                                    placeholder="Input your password"
                                    className="input-password"
                                    onChange={(event) => {
                                        setPassword(event.target.value)
                                    }} />
                            </div>
                            <div>
                                <p className="confirmpass text-sm mb-1">Confirm password</p>
                                <input
                                    type="password"
                                    placeholder="Input your password again"
                                    className="input-confirmpass"
                                    onChange={(event) => {
                                        setConfirmpassword(event.target.value)
                                    }} />
                            </div>
                        </div>
                    </div>
                    <p className="text-sm color-red-1 text-center mt-8 font-medium">{errorMessage}</p>
                </div>
                <div className="flex justify-end items-center gap-5 text-sm">
                    <Link to="/login">
                        <div className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            <p>Back to login</p>
                        </div>
                    </Link>
                    <p onClick={register} className="bg-blue-1 text-white px-7 py-2 rounded-lg cursor-pointer">Register</p>
                    <Popup trigger={buttonPopup}>
                        <p className="text-lg font-bold py-5">Register Success</p>
                        <p className="text-sm font-medium">Your account is successfully created, please click this button below and go to login page</p>
                        <br></br>
                        <Link to="/login">
                        <div className="flex justify-end">
                            <button className="bg-blue-1 text-white text-sm text-center rounded-md px-8 py-2 cursor-pointer outline-none">
                                    Login Now
                            </button>
                        </div>
                        </Link>

                    </Popup>
                </div>
            </div>

        </div>


    )
}

export default Register


