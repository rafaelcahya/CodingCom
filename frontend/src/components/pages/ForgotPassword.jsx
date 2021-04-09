import React from 'react'
import { Link } from 'react-router-dom'

import arrow_left from "../../asset/icon/arrow-left.svg"
import info from "../../asset/icon/info.svg"

function ForgotPassword() {
    return (
        <div className="flex justify-center my-10">
            <div className="login-container">
                <div className="text-lg">
                    <p className="color-blue-1">Create your best password again</p>
                    <p>Don't share with anyone</p>
                </div>
                <div className="login_box flex flex-col my-10">
                    <div className="flex flex-col gap-5">
                        <div>
                            <div className="flex justify-between">
                                <p className="password text-xs mb-1">New password</p>
                                <div className="flex flex-col items-end">
                                    <img src={info} alt="" className="info w-3 text-right"/>
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
                            <input
                                type="password"
                                placeholder="exp: William2404" 
                                className="input-password"/>
                        </div>
                        <div>
                            <p className="username text-xs mb-1">Confirm password</p>
                            <input
                                type="text"
                                placeholder="exp: William2404" 
                                className="input-username"/>
                        </div>
                    </div>
                    <p className="text-sm color-red-1 text-center mt-2">errorMessage</p>
                </div>
                <div className="flex justify-end items-center gap-5 text-sm">
                    <Link to="/login">
                        <div className="flex items-center gap-1">
                            <img src={arrow_left} alt="" className="w-4"/>
                            <p>Back</p>
                        </div>
                    </Link>
                    <p className="bg-blue-1 text-white px-7 py-2 rounded-lg">Submit</p>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
