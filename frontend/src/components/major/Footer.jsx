import React, { useState } from 'react'
import Axios from 'axios'
import logo from "../../asset/logo/logo_codingcom_footer.svg"

function Footer() {
    const [des, setDes] = useState("")
    const [email, setEmail] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const subscribe = () => {
        Axios.post("http://localhost:3001/subscribe/subscribe", {email:email, des:des}).then((response) => {
            console.log(response)
            setErrorMessage(response.data.message)

        })
    }
    return (
        <div className="flex flex-col mt-20 lg:mt-56">
            <div className="footer-box flex flex-col items-center pb-10 bg-dark-1">
                <div className="bg-orange-1 my-10 py-10 px-0 md:px-20 lg:px-32 rounded-xl">
                    <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-x-10 gap-y-10 lg:gap-y-0">
                        <p className="font-semibold text-xl text-white w-80">Want Us to Email you About Special Offers & Updates?</p>
                        <div className="flex flex-col md:flex-row items-center">
                            <input type="text" placeholder="Enter your email" className="color-black-1 font-size-base px-5 py-4 w-64 rounded-xl md:rounded-none md:rounded-tl-xl md:rounded-bl-xl outline-none" onChange={(event) => {
                            setEmail(event.target.value)
                        }}/>
                            <input onClick={subscribe} type="submit" value="Subscribe" className="bg-blue-1 font-size-base text-white px-5 py-4 w-full md:w-auto rounded-xl md:rounded-none md:rounded-tr-xl md:rounded-br-xl outline-none" onChange={(event) => {
                            setDes(event.target.value)
                        }}/>
                        </div>
                        <p className="color-red-1 text-center font-medium">{errorMessage}</p>
                    </div>
                </div>
                <img src={logo} alt="" width={25} className="my-10 text-white"/>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-x-10 xl:gap-x-48 gap-y-20 lg:gap-y-0 text-white">
                    <div className="flex flex-col lg:flex-row gap-32 text-sm text-center lg:text-left">
                        <div className="flex flex-col gap-3">
                            <p className="font-semibold my-2">Navigation</p>
                            <p>Home</p>
                            <p>Pricing</p>
                            <p>Roadmap</p>
                            <p>Tutorial</p>
                            <p>Deployment</p>
                            <p>Challenge</p>
                            <p>Class</p>
                            <p>News</p>
                            <p>Career</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="font-semibold my-2">Tutorial</p>
                            <p>Web Design</p>
                            <p>Frontend</p>
                            <p>Backend</p>
                            <p>Database</p>
                            <p>DevOps</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="font-semibold my-2">Location</p>
                            <p>Jakarta, Indonesia</p>
                            <p>codingcom@code.com</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="font-semibold my-2">Social Media</p>
                            <p>Instagram</p>
                            <p>Twitter</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="font-semibold my-2">Website</p>
                            <p>Help</p>
                            <p>Certificate</p>
                            <p>How to purchase</p>
                            <p>About us</p>
                            <p>Contact us</p>
                        </div>
                    </div>
                </div>
                <p className="text-xs text-white mt-10">Copyright 2021 all right reserved</p>
            </div>
        </div>
    )
}

export default Footer
