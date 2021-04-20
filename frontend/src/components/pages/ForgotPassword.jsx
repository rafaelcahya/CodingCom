import React, { Fragment } from 'react'
import Particles from "react-particles-js"

import { Link } from 'react-router-dom'

import particlesConfig from '../background/ParticlesConfig'
import info from "../../asset/icon/info.svg"

export default function ForgotPassword() {
    const focus = () => {
        let passwordpassword = document.getElementsByClassName("password")[0]
        let inputPassword = document.getElementsByClassName("input-password")[0]
        let confirmpass = document.getElementsByClassName("confirmpass")[0]
        let inputConfirmpass = document.getElementsByClassName("input-confirmpass")[0]

    
        if(inputPassword === document.activeElement){
            passwordpassword.style.fontWeight = "bold"
        }else{
            passwordpassword.style.fontWeight = "normal"
        }

        if (inputConfirmpass === document.activeElement) {
            confirmpass.style.fontWeight = "bold"
        } else {
            confirmpass.style.fontWeight = "normal"
        }
    }
    
    return (
        <Fragment>
            <div className="relative flex justify-center" onFocus={focus}>
                <div className="absolute">
                    <Particles height="100vh" width="100vw" params={particlesConfig} />
                </div>
                <div className="login-container my-10 bg-white rounded-xl p-10 shadow-xl overflow-hidden" style={{ zIndex: "1" }}>
                    <div className="text-lg">
                        <p className="color-blue-1">Hello,</p>
                        <p>Create your best password again</p>
                    </div>
                    <div className="register-box flex flex-col my-10">
                        <div className="flex flex-col gap-5">
                            <div>
                                <div className="flex justify-between">
                                    <p className="password text-xs mb-1">Password</p>
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
                                <input
                                    type="password"
                                    placeholder="Input your password"
                                    className="input-password"/>
                            </div>
                            <div>
                                <p className="confirmpass text-xs mb-1">Confirm password</p>
                                <input
                                    type="password"
                                    placeholder="Input your password again"
                                    className="input-confirmpass"/>
                            </div>
                        </div>
                        <p className="text-sm color-red-1 text-center mt-8 font-medium">errorMessage</p>
                    </div>
                    <div className="flex justify-end items-center gap-5 text-sm">
                        <Link to="/login">
                            <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                <p>Back to login</p>
                            </div>
                        </Link>
                        <p className="bg-blue-1 text-white px-7 py-2 rounded-lg cursor-pointer">Register</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

