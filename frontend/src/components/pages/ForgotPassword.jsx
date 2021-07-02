import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import info from "../../asset/icon/info.svg"
import Axios from "axios"

import showPass from "../../asset/icon/eye.svg"
import hidePass from "../../asset/icon/eye-off.svg"

export default function ForgotPassword() {
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setCPassword] = useState("")
    const [updateAt, setUpdateAt] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [revealPass, setRevealPass] = useState(false)

    window.onload = setTimeout(function () {
        var url1 = window.location.pathname;
        var idurl = url1.substring(url1.lastIndexOf('/') + 1);
        setId(idurl)
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setUpdateAt(dateTime)
    }, 500)

    const submit = () => {
        Axios.post("http://localhost:3001/user/resetPassword", { password:password, confirmPassword:confirmPassword, id:id, updateAt:updateAt}).then((response) => {
            console.log(response)
            setErrorMessage(response.data.message)
            
        })
    }

    return (
        <>
            <div className="login-container flex justify-center py-10 h-screen">
                <div className="login-box rounded-lg p-10 shadow-xl overflow-hidden">
                    <p className="color-blue-1 text-xl font-semibold mb-2">Create new password</p>
                    <p className="text-sm">Your new password must be different from previous used password</p>
                    <div className="flex flex-col my-10">
                        <div className="flex flex-col gap-5">
                            <div>
                                <div className="flex justify-between">
                                    <p className="password text-sm font-semibold mb-1">Password</p>
                                    <div className="flex flex-col items-end">
                                        <img src={info} alt="" className="info w-3 text-right" />
                                        <div className="password-hint-box text-xs shadow-black absolute bg-white mt-5 px-3 py-1 rounded-xl">
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
                                <div className="flex gap-2">
                                    <input
                                        type={revealPass ? "text" : "password"}
                                        placeholder="Enter your password again" 
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
                                            setCPassword(event.target.value)
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
                        <p className="text-sm color-red-1 text-center mt-8 font-medium">{errorMessage}</p>
                    </div>
                    <div className="flex flex-col gap-5 text-sm">
                        <p onClick={submit} className="bg-blue-1 hover:bg-blue-400 text-white font-medium text-center px-7 py-2 rounded-lg cursor-pointer">Reset password</p>
                        <Link to="/login">
                            <p className="border border-blue-500 font-medium text-center px-7 py-2 rounded-lg cursor-pointer">Cancel</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

