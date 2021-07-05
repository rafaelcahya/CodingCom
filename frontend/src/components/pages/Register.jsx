import React, { useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

import info from "../../asset/icon/info.svg"
import Popup from "./RegisterPopup"

import showPass from "../../asset/icon/eye.svg"
import hidePass from "../../asset/icon/eye-off.svg"

function Register() {
    const [fullname, setFullname] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // eslint-disable-next-line no-unused-vars
    const [confirmpassword, setConfirmpassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [createAt,setCreateAt] = useState("")
    const [buttonPopup, setButtonPopup] = useState(false)
    const [revealPass, setRevealPass] = useState(false)

    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setCreateAt(dateTime)
    }, 500)

    const register = () => {
        console.log(name)
        Axios.post("http://localhost:3001/user/register", { fullname: fullname, name: name, email: email, password: password, confirmpassword: confirmpassword, createAt: createAt }).then((response) => {
            console.log(response)
            if (response.data.message) {
                setErrorMessage(response.data.message)
            } else {
                setButtonPopup(true)
            }
        })
    }

    return (
        <div className="register-container flex justify-center py-10 px-20 h-screen">
            <div className="register-box rounded-lg p-10 shadow-xl overflow-hidden">
                <div className="text-sm mb-10">
                    <p className="text-xl font-semibold color-blue-1 mb-2">Let's get started,</p>
                    <div className="text-gray-500 font-medium">
                        <p>Find new opportunities to make your voice heard. Be proud!</p>
                    </div>
                </div>
                <div className="flex flex-col gap-7">
                    <div className="flex flex-col md:flex-row gap-10">
                        <div>
                            <p className="text-sm font-semibold mb-1">Fullname</p>
                            <input
                                type="text"
                                placeholder="Input your fullname"
                                onChange={(event) => {
                                    setFullname(event.target.value)
                                }} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold mb-1">Username</p>
                            <input
                                type="text"
                                placeholder="Input your username"
                                onChange={(event) => {
                                    setName(event.target.value)
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
                    <div>
                        <div className="flex justify-between items-center">
                            <p className="password text-sm font-semibold mb-1">Password</p>
                            <div className="tooltip">
                                <img src={info} alt="" width={15}/>
                                <span className="tooltiptext bg-white text-sm p-2 border border-gray-300 rounded-lg shadow-lg">Password must have uppercase letter, numbers and maximum between 8 - 20 characters</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <input
                                type={revealPass ? "text" : "password"}
                                placeholder="Enter your password" 
                                className="border-none"
                                onChange={(event) => {
                                    setPassword(event.target.value)
                            }} />
                            <img
                                alt=""
                                title={revealPass ? "Hide password" : "Show password"}
                                src={revealPass ? hidePass : showPass}
                                onClick={() => setRevealPass(prevState => !prevState)}
                            />
                        </div>
                    </div>
                    <div>
                        <p className="confirmpass text-sm font-semibold mb-1">Confirm password</p>
                        <div className="flex gap-2">
                            <input
                                type={revealPass ? "text" : "password"}
                                placeholder="Enter your password again" 
                                className="border-none"
                                onChange={(event) => {
                                    setConfirmpassword(event.target.value)
                            }} />
                            <img
                                alt=""
                                title={revealPass ? "Hide password" : "Show password"}
                                src={revealPass ? hidePass : showPass}
                                onClick={() => setRevealPass(prevState => !prevState)}
                            />
                        </div>
                    </div>
                </div>
                <p className="text-sm color-red-1 text-center my-8 font-medium">{errorMessage}</p>
                <div className="flex justify-between w-full gap-5 text-sm pt-5">
                    <Link to="/login" className="text-sm font-medium text-center px-7 py-2.5 rounded-lg cursor-pointer w-1/2">Back</Link>
                    <p onClick={register} className="bg-blue-1 hover:bg-blue-400 text-sm text-white font-medium text-center px-7 py-2.5 rounded-lg cursor-pointer w-1/2">Register</p>
                </div>
                <Popup trigger={buttonPopup}>
                    <p className="text-lg font-semibold py-5">Register Success</p>
                    <p className="text-sm font-medium">Your account is successfully created.</p>
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