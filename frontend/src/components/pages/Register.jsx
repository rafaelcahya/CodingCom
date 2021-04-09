import React, { useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

import Particles from "react-particles-js"
import particlesConfig from '../background/ParticlesConfig'

import info from "../../asset/icon/info.svg"

function Register() {
    const [fullname, setFullname] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const register = () => {
        console.log(name)
        Axios.post("http://localhost:3001/user/register", {fullname: fullname ,name: name, email: email, password: password, confirmpassword: confirmpassword }).then((response) => {
            console.log(response)
            setErrorMessage(response.data.message)
        })
    }

    const focus = () => {
        let fullname = document.getElementsByClassName("fullname")[0]
        let inputFullname = document.getElementsByClassName("input-fullname")[0] 
        let username = document.getElementsByClassName("username")[0]
        let inputUsername = document.getElementsByClassName("input-username")[0] 
        let email = document.getElementsByClassName("email")[0]
        let inputEmail = document.getElementsByClassName("input-email")[0]
        let passwordpassword = document.getElementsByClassName("password")[0]
        let inputPassword = document.getElementsByClassName("input-password")[0]
        let confirmpass = document.getElementsByClassName("confirmpass")[0]
        let inputConfirmpass = document.getElementsByClassName("input-confirmpass")[0]

        if(inputFullname === document.activeElement){
            fullname.style.fontWeight = "bold"
        }else{
            fullname.style.fontWeight = "normal"
        }

        if(inputUsername === document.activeElement){
            username.style.fontWeight = "bold"
        }else{
            username.style.fontWeight = "normal"
        }
    
        if(inputEmail === document.activeElement){
            email.style.fontWeight = "bold"
        }else{
            email.style.fontWeight = "normal"
        }
    
        if(inputPassword === document.activeElement){
            passwordpassword.style.fontWeight = "bold"
        }else{
            passwordpassword.style.fontWeight = "normal"
        }
    
        if(inputConfirmpass === document.activeElement){
            confirmpass.style.fontWeight = "bold"
        }else{
            confirmpass.style.fontWeight = "normal"
        }
    }

    return (
        <div className="relative flex justify-center" onFocus={focus}>
            <div className="absolute">
                    <Particles height="100vh" width="100vw" params={particlesConfig}/>
                </div>
            <div className="login-container my-10 bg-white rounded-xl p-5 shadow-xl" style={{ zIndex: "1" }}>
                <div className="text-lg">
                    <p className="color-blue-1">Hello,</p>
                    <p>Let's introduce yourself</p>
                </div>
                <div className="register-box flex flex-col my-10">
                        <div className="flex flex-col gap-5">
                            <div>
                                <p className="fullname text-xs mb-1">Fullname</p>
                                <input 
                                    type="text" 
                                    placeholder="Input your fullname" 
                                    className="input-fullname"
                                    onChange={(event) => {
                                        setFullname(event.target.value)
                                    }} />
                            </div>
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
                                <p className="email text-xs mb-1">Email</p>
                                <input 
                                    type="text" 
                                    placeholder="Input your email" 
                                    className="input-email"
                                    onChange={(event) => {
                                        setEmail(event.target.value)
                                    }} />
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <p className="password text-xs mb-1">Password</p>
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
                                    placeholder="input your password" 
                                    className="input-password"
                                    onChange={(event) => {
                                        setPassword(event.target.value)
                                    }} />
                            </div>
                            <div>
                                <p className="confirmpass text-xs mb-1">Confirm password</p>
                                <input 
                                    type="password" 
                                    placeholder="Input your password again" 
                                    className="input-confirmpass"
                                    onChange={(event) => {
                                        setConfirmpassword(event.target.value)
                                    }} />
                            </div>
                        </div>
                        <p className="text-sm color-red-1 text-center mt-2">{errorMessage}</p>
                    </div>
                <div className="flex justify-end items-center gap-5 text-sm">
                    <Link to="/login">
                        <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        <p>Back to login</p>
                        </div>
                    </Link>
                    <p onClick={register} className="bg-blue-1 text-white px-7 py-2 rounded-lg cursor-pointer">Register</p>
                </div>
            </div>
        </div>
    )
}

export default Register


