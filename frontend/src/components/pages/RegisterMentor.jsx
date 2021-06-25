import React, { useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

import Popup from "./RegisterPopup"

function RegisterMentor() {
    const [fullname, setFullname] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [createAt,setCreateAt] = useState("")
    const [buttonPopup, setButtonPopup] = useState(false)

    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setCreateAt(dateTime)
    }, 500)

    const register = () => {
        Axios.post("http://localhost:3001/user/registerMentor", { fullname: fullname, name: name, email: email, createAt: createAt }).then((response) => {
            console.log(response)
            if (response.data.message) {
                setErrorMessage(response.data.message)
            } else {
                setButtonPopup(true)
            }
        })
    }

    return (
        <div className="register-container flex justify-center py-10 px-20 h-screen overflow-hidden">
            <div className="register-box rounded-lg p-10 shadow-xl">
                <div className="text-sm mb-10">
                    <p className="text-xl font-semibold color-blue-1 mb-2">Let's get started as Mentor,</p>
                    <div className="text-gray-500 font-medium">
                        <p>Find new opportunities to make your voice heard. Be proud!</p>
                    </div>
                </div>
                <div className="flex flex-col gap-7">
                    <div className="flex flex-col md:flex-row gap-10">
                    <div>
                        <p className="fullname text-sm font-semibold mb-1">Fullname</p>
                        <input
                            type="text"
                            placeholder="Input your fullname"
                            onChange={(event) => {
                                setFullname(event.target.value)
                            }} />
                    </div>
                    <div>
                        <p className="username text-sm font-semibold mb-1">Username</p>
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
                </div>
                <p className="text-sm color-red-1 text-center my-8 font-medium">{errorMessage}</p>
                <div className="flex justify-between w-full gap-5 text-sm pt-5">
                    <Link to="/login" className="border border-gray-200 hover:bg-gray-200 text-sm font-medium text-center px-7 py-2.5 rounded-lg cursor-pointer w-1/2">Back</Link>
                    <p onClick={register} className="bg-blue-1 hover:bg-blue-400 text-sm text-white font-medium text-center px-7 py-2.5 rounded-lg cursor-pointer w-1/2">Register</p>
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

export default RegisterMentor