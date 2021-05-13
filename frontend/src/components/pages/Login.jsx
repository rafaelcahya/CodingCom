import React, { Fragment, useState } from 'react'
import Particles from "react-particles-js"

import Axios from "axios"
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom"

import particlesConfig from '../background/ParticlesConfig'

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
    
    const focus = () => {
        let username = document.getElementsByClassName("username")[0]
        let inputUsername = document.getElementsByClassName("input-username")[0] 
        let passwordpassword = document.getElementsByClassName("password")[0]
        let inputPassword = document.getElementsByClassName("input-password")[0]

        if(inputUsername === document.activeElement){
            username.style.fontWeight = "bold"
        }else{
            username.style.fontWeight = "normal"
        }
    
        if(inputPassword === document.activeElement){
            passwordpassword.style.fontWeight = "bold"
        }else{
            passwordpassword.style.fontWeight = "normal"
        }
    }

    function refreshPage() {
        setTimeout(()=>{
            window.location.reload(true);
        }, 100);
    }
    
    return (
        <Fragment>
            <div className="relative flex justify-center" onFocus={focus}>
                <div className="absolute">
                    <Particles height="100vh" width="100vw" params={particlesConfig}/>
                </div>
                <div className="login-container my-10 bg-white rounded-xl p-10 shadow-xl overflow-hidden" style={{ zIndex: "1" }}>
                    <div className="text-lg">
                        <p className="color-blue-1">Hello,</p>
                        <p>Welcome to Coding.com</p>
                    </div>
                    <div className="login-box flex flex-col my-10">
                        <div className="flex flex-col gap-5">
                            <div>
                                <p className="username text-xs mb-1">Username</p>
                                <input
                                    type="text"
                                    placeholder="Input your username" 
                                    className="input-username" 
                                    onChange={(event) => {
                                        setName(event.target.value)
                                }} />
                            </div>
                            <div>
                                <p className="password text-xs mb-1">Password</p>
                                <input
                                    type="password"
                                    placeholder="Enter your password" 
                                    className="input-password"
                                    onChange={(event) => {
                                        setPassword(event.target.value)
                                }} />
                                <Link to="/forgotPassword">
                                    <p className="text-xs mt-1 underline text-right">Forgot password?</p>
                                </Link>
                            </div>
                        </div>
                        <p className="text-sm color-red-1 text-center mt-8 font-medium">{errorMessage}</p>
                    </div>
                    <div className="flex justify-end items-center gap-5 text-sm">
                        <p onClick={login} className="bg-blue-1 text-white px-7 py-2 rounded-lg">Login</p>
                    </div>
                    
                    <div className="text-sm flex flex-col justify-center items-center gap-2 my-10">
                        <p>Don't have an account?</p>
                        <Link to="/register">
                            <p className="color-blue-1 underline font-medium">Register here</p>
                        </Link>
                    </div>
                    <Link to="/mentor/login" onClick={refreshPage}>
                        <p className="text-xs underline text-center my-2 rounded-md">Login as Mentor</p>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

