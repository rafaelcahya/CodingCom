import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from "axios"

export default function ResetPassword() {
    const [email, setEmail] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const reset = () => {
        Axios.post("http://localhost:3001/user/reset", { email: email }).then((response) => {
            console.log(response)

            setErrorMessage(response.data.message)

        })
    }

    return (
        <>
            <div className="login-container flex justify-center py-10 h-screen">
                <div className="login-box rounded-lg p-10 shadow-xl overflow-hidden">
                    <p className="color-blue-1 text-xl font-semibold mb-2">Reset Password</p>
                    <p className="text-sm">Enter your email address in the form below. We will send a link to your email.</p>
                    <div className="reset-password-box flex flex-col my-10">
                        <div className="flex flex-col w-auto" style={{width: "370px"}}>
                            <div className="flex justify-between">
                                <p className="text-sm font-semibold mb-2 color-black-2">Email</p>
                            </div>
                            <input
                                type="text"
                                placeholder="Input your email"
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }} />
                        </div>
                        {
                            errorMessage === "Link has been send by email" ? <p className="px-20 text-sm text-green-500 mt-8 font-medium">{errorMessage}</p> : <p className="px-20 text-sm color-red-1 mt-8 font-medium">{errorMessage}</p>
                        }
                        
                    </div>
                    <div className="flex flex-col gap-5 text-sm">
                        <p onClick={reset} className="bg-blue-1 hover:bg-blue-400 bg-blue-100 text-white font-medium text-center px-7 py-2.5 rounded-lg cursor-pointer">Send Link</p>
                        <Link to="/login">
                            <p className="reset-password-cancel-btn font-medium text-center px-7 py-2.5 rounded-lg cursor-pointer">Cancel</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}