import React, { useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

import info from "../../asset/icon/info.svg"
import Popup from "./RegisterPopup"

function Register() {
    const [fullname, setFullname] = useState("")
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [BoD, setBoD] = useState("")
    const [phonenumber, setPhonenumber] = useState("")
    const [cphonenumber, setCphonenumber] = useState("")
    const [emergencynumber, setEmergencynumber] = useState("")
    const [cemergencynumber, setCemergencynumber] = useState("")
    const [education, setEducation] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [createAt,setCreateAt] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [buttonPopup, setButtonPopup] = useState(false)

    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setCreateAt(dateTime)
    }, 500)

    const register = () => {
        console.log(name)
        Axios.post("http://localhost:3001/user/register", { fullname: fullname, address:address, city:city, postalCode:postalCode, emergencynumber:emergencynumber, cemergencynumber:cemergencynumber, education:education, name: name, gender:gender, BoD:BoD, phoneNumber:phonenumber, cphoneNumber:cphonenumber, email: email, password: password, confirmpassword: confirmpassword, createAt: createAt }).then((response) => {
            console.log(response)
            if (response.data.message) {
                setErrorMessage(response.data.message)
            } else {
                setButtonPopup(true)
            }
        })
    }

    return (
        <div className="register-container flex justify-center p-10 h-screen overflow-hidden">
            <div className="register-box rounded-lg p-10 shadow-xl overflow-auto">
                <div className="text-sm mb-5">
                    <p className="text-xl font-semibold color-blue-1 mb-2">Let's get started,</p>
                    <div className="text-gray-500 font-medium">
                        <p>Find new opportunities to make your voice heard. Be proud!</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col lg:flex-row gap-5 w-full">
                        <div className="w-full lg:w-1/2">
                            <p className="fullname text-sm font-semibold mb-1">Fullname</p>
                            <input
                                type="text"
                                placeholder="Input your fullname"
                                onChange={(event) => {
                                    setFullname(event.target.value)
                                }} />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <p className="username text-sm font-semibold mb-1">Username</p>
                            <input
                                type="text"
                                placeholder="Input your username"
                                onChange={(event) => {
                                    setName(event.target.value)
                                }} />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 w-full">
                        <div className="flex flex-col gap-2 w-full lg:w-1/2">
                            <p className="text-sm font-semibold">Gender</p>
                            <select name="" id=""  onChange={(event) => {
                                setGender(event.target.value)
                            }} >`
                                <option value="Gender">Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2 w-full lg:w-1/2">
                            <p className="text-sm font-semibold">Birth date</p>
                            <input type="date" onChange={(event) => {
                                setBoD(event.target.value)
                            }} />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 w-full">
                        <div className="flex flex-col gap-2 w-full lg:w-1/2">
                            <p className="text-sm font-semibold">Phone number</p>
                            <input type="number" placeholder="Phone number" className="w-32"  onChange={(event) => {
                                setPhonenumber(event.target.value)
                            }} />
                        </div>
                        <div className="flex flex-col gap-2 w-full lg:w-1/2">
                            <p className="text-sm font-semibold">Confirm phone number</p>
                            <input type="number" placeholder="Confirm phone number" className="input-confph" onChange={(event) => {
                                setCphonenumber(event.target.value)
                            }} />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 w-full">
                        <div className="flex flex-col gap-2 w-full lg:w-1/2">
                            <p className="text-sm font-semibold">Phone number(Optional)</p>
                            <input type="number" placeholder="Phone number" className="w-32"  onChange={(event) => {
                                setEmergencynumber(event.target.value)
                            }} />
                        </div>
                        <div className="flex flex-col gap-2 w-full lg:w-1/2">
                            <p className="text-sm font-semibold">Confirm phone number(Optional)</p>
                            <input type="number" placeholder="Confirm phone number" className="input-confph" onChange={(event) => {
                                setCemergencynumber(event.target.value)
                            }} />
                        </div>
                    </div>
                    <div>
                        <p className="email text-sm font-semibold mb-1">Email</p>
                        <input
                            type="text"
                            placeholder="Input your email"
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }} />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 w-full">
                        <div className="w-full lg:w-1/2">
                            <div className="flex justify-between items-center">
                                <p className="password text-sm font-semibold mb-1">Password</p>
                                <div className="tooltip">
                                    <img src={info} alt="" width={15}/>
                                    <span className="tooltiptext bg-white text-sm p-2 border border-gray-300 rounded-lg shadow-lg">Password must have uppercase letter, numbers and maximum between 8 - 20 characters</span>
                                </div>
                            </div>
                            <input
                                type="password"
                                placeholder="Input your password"
                                onChange={(event) => {
                                    setPassword(event.target.value)
                                }} />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <p className="confirmpass text-sm font-semibold mb-1">Confirm password</p>
                            <input
                                type="password"
                                placeholder="Input your password again"
                                className="input-confirmpass"
                                onChange={(event) => {
                                    setConfirmpassword(event.target.value)
                                }} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Home address(Optional)</p>
                            <textarea placeholder="Home address" onChange={(event) => {
                                setAddress(event.target.value)
                            }} />
                        </div>
                        <div className="w-full flex justify-between gap-10">
                            <div className="w-1/2 flex flex-col gap-2">
                                <p className="text-sm font-semibold">City(Optional)</p>
                                <input type="text" placeholder="City" onChange={(event) => {
                                    setCity(event.target.value)
                                }} />
                            </div>
                            <div className="w-1/2 flex flex-col gap-2">
                                <p className="text-sm font-semibold">Postal Code(Optional)</p>
                                <input type="number" placeholder="Postal Code" onChange={(event) => {
                                    setPostalCode(event.target.value)
                                }} />
                            </div>
                        </div>
                    <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Last education</p>
                            <select name="" id=""  onChange={(event) => {
                                    setEducation(event.target.value)
                                }} >
                                <option value="Gender">Choose education level</option>
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
                <p className="text-sm color-red-1 text-center my-8 font-medium">{errorMessage}</p>
                <div className="flex justify-end gap-5 text-sm">
                    <Link to="/login">
                        <p className="border border-blue-500 text-sm font-medium text-center px-7 py-2 rounded-lg cursor-pointer">Back to login</p>
                    </Link>
                    <p onClick={register} className="bg-blue-1 hover:bg-blue-400 text-sm text-white font-medium text-center px-7 py-2 rounded-lg cursor-pointer">Register</p>
                </div>
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
    )
}

export default Register


