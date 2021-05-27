import React, { Fragment, useState } from 'react'

import Axios from "axios"
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom"

import BlobAnim from '../minor/Blob animation/BlobAnim'

export default function Login() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const [errorMessage, setErrorMessage] = useState("")

    let history = useHistory()

    const login = () => {
        console.log(name)
        Axios.post("http://localhost:3001/user/login", { name: name, password: password }).then((response) => {
            if (response.data.loggedIn) {
                localStorage.setItem("loggedIn", true)
                localStorage.setItem("name", response.data.name)
                history.push("/")
            } else {
                setErrorMessage(response.data.message)
            }
        })
    }
    
    return (
        <Fragment>
            <div className="login-container flex justify-center py-10 h-screen">
                <div className="hidden lg:flex flex-col gap-10 w-1/2 py-10">
                    <div data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="0" className="flex gap-5">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="30" height="45" viewBox="0 0 44 59"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0,59) scale(0.1,-0.1)"
                        fill="#fff" stroke="none">
                        <path d="M270 548 c-136 -52 -250 -236 -250 -403 0 -85 7 -101 51 -125 46 -24
                        80 -25 117 -6 44 23 192 181 192 205 0 11 -5 21 -11 21 -6 0 -49 -36 -96 -80
                        -90 -85 -135 -115 -160 -106 -13 5 -15 21 -11 84 5 94 44 175 125 262 60 66
                        153 122 153 94 0 -10 -6 -25 -14 -33 -13 -14 -12 -18 10 -28 22 -10 26 -8 41
                        13 25 39 24 70 -4 99 -32 31 -68 32 -143 3z m-184 -324 c-20 -56 -25 -63 -25
                        -38 -1 49 31 126 46 110 2 -1 -8 -34 -21 -72z"/>
                        </g>
                        </svg>
                        <p className="text-white text-3xl sm:text-4xl font-medium">coding.com</p>
                    </div>
                    <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="150" className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold w-3/4">An educational platform for web programming from scratch.</p>
                </div>
                <div className="login-box rounded-lg p-10 shadow-xl overflow-hidden">
                    <div className="text-xl font-semibold">
                        <p className="color-blue-1">Hello,</p>
                        <p>Welcome to Coding.com</p>
                    </div>
                    <div className="flex flex-col my-10">
                        <div className="flex flex-col gap-5">
                            <div>
                                <p className="username text-sm font-semibold mb-1">Username</p>
                                <input
                                    type="text"
                                    placeholder="Input your username" 
                                    className="input-username" 
                                    onChange={(event) => {
                                        setName(event.target.value)
                                }} />
                            </div>
                            <div>
                                <p className="password text-sm font-semibold mb-1">Password</p>
                                <input
                                    type="password"
                                    placeholder="Enter your password" 
                                    className="input-password"
                                    onChange={(event) => {
                                        setPassword(event.target.value)
                                }} />
                                <Link to="/forgotPassword">
                                    <p className="text-xs font-semibold mt-1 underline text-right">Forgot password?</p>
                                </Link>
                            </div>
                        </div>
                        <p className="text-sm color-red-1 text-center mt-8 font-medium">{errorMessage}</p>
                    </div>
                    <p onClick={login} className="bg-blue-1 hover:bg-blue-400 text-sm text-white font-medium text-center px-7 py-2 rounded-lg cursor-pointer">Login</p>
                    
                    <div className="text-sm font-medium text-gray-500 flex flex-col justify-center items-center gap-2 my-10">
                        <p>Don't have an account?</p>
                        <Link to="/register">
                            <p className="color-blue-1 underline font-medium">Register here</p>
                        </Link>
                    </div>
                </div>
                <div className="hidden lg:block z-50">
                    <BlobAnim/>
                </div>
            </div>
        </Fragment>
    )
}

