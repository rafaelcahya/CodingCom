/* eslint-disable eqeqeq */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from "axios"

import showPass from "../../asset/icon/eye.svg"
import hidePass from "../../asset/icon/eye-off.svg"

export default function ChangePassword(props) {
    const urlname = props.match.params.name
    const [password, setPassword] = useState("")
    const [newpassword, setNewPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    const [revealPass, setRevealPass] = useState(false)
    const [updateAt, setUpdateAt] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setUpdateAt(dateTime)
    }, 500)

    const change = () => {
        Axios.post("http://localhost:3001/user/ChangePassword", {updateAt:updateAt, name:urlname, password:password, newpassword:newpassword, confirmpassword:confirmpassword}).then((response) => {
            console.log(response)
            setErrorMessage(response.data.message)
            console.log(urlname)
        })
    }

    return (
        <>
            <div className="change-password-container flex justify-center py-10 h-screen">
                <div className="change-password-box rounded-lg p-10 shadow-xl overflow-hidden">
                    <p className="color-blue-1 text-xl text-center font-semibold mb-2">Change Password</p>
                    <div className="flex flex-col my-10">
                        <div className="flex flex-col gap-5">
                            <div>
                                <div className="flex justify-between">
                                    <p className="text-sm font-medium mb-2">Old Password</p>
                                </div>
                                <div className="flex gap-2">
                                    <input
                                        type={revealPass ? "text" : "password"}
                                        placeholder="Enter your old password" 
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
                                <div className="flex justify-between">
                                    <p className="text-sm font-medium mb-2">New Password</p>
                                </div>
                                <div className="flex gap-2">
                                    <input
                                        type={revealPass ? "text" : "password"}
                                        placeholder="Enter your new password" 
                                        onChange={(event) => {
                                            setNewPassword(event.target.value)
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
                                <div className="flex justify-between">
                                    <p className="text-sm font-medium mb-2">Confirm New Password</p>
                                </div>
                                <div className="flex gap-2">
                                    <input
                                        type={revealPass ? "text" : "password"}
                                        placeholder="Enter your new password again" 
                                        onChange={(event) => {
                                            setConfirmPassword(event.target.value)
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
                        {
                            errorMessage == "Password has changed" ? <p className="text-sm text-green-500 text-center mt-8 font-medium">{errorMessage}</p> : <p className="text-sm color-red-1 text-center mt-8 font-medium">{errorMessage}</p>
                        }
                    </div>
                    <div className="flex flex-col gap-5 text-sm">
                        <p onClick={change} className="bg-blue-1 hover:bg-blue-400 text-white font-medium text-center px-7 py-2.5 rounded-lg cursor-pointer">Save Changes</p>
                        <Link to="/login">
                            <p className="font-medium text-center px-7 py-2.5 rounded-lg cursor-pointer">Cancel</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}