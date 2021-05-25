import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

function RegisterBootcamp() {
    const [name,setName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [emergency, setEmergency] = useState("")
    const [cemergency, setCemergency] = useState("")
    const [education, setEducation] = useState("")
    const [program, setProgram] = useState("")
    const [batch, setBatch] = useState("")
    const [motivation, setMotivation] = useState("")
    const [busy, setBusy] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [createAt,setCreateAt] = useState("")
    const [value,setValue] = useState([])
    let x

    window.onload = setTimeout(function () {
        x = localStorage.getItem("name");
        setName(x)
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setCreateAt(dateTime)
    }, 500)

    
    useEffect(() => {
        Axios.get("http://localhost:3001/batch/listBatch").then((response) => {
            setValue(response.data)
        })
    }, []);

    const submit = () => {
        Axios.post("http://localhost:3001/bootcampuser/bootcampUserRegis", {address:address, city:city, postalCode:postalCode,emergency:emergency, cemergency:cemergency, education:education, program:program, batch:batch, motivation:motivation, busy:busy, createAt:createAt, name:name }).then((response) => {
            setErrorMessage(response.data.message)
        })
    }

    return (
        <>
            <nav className="flex justify-between items-center px-16 xl:px-32 py-5 border-b-2 border-yellow-400">
                <Link to="/bootcamp">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        <p>Back</p>
                    </div>
                </Link>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="30" height="45" viewBox="0 0 44 59"
                preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0,59) scale(0.1,-0.1)"
                fill="currentColor" stroke="none">
                <path d="M270 548 c-136 -52 -250 -236 -250 -403 0 -85 7 -101 51 -125 46 -24
                80 -25 117 -6 44 23 192 181 192 205 0 11 -5 21 -11 21 -6 0 -49 -36 -96 -80
                -90 -85 -135 -115 -160 -106 -13 5 -15 21 -11 84 5 94 44 175 125 262 60 66
                153 122 153 94 0 -10 -6 -25 -14 -33 -13 -14 -12 -18 10 -28 22 -10 26 -8 41
                13 25 39 24 70 -4 99 -32 31 -68 32 -143 3z m-184 -324 c-20 -56 -25 -63 -25
                -38 -1 49 31 126 46 110 2 -1 -8 -34 -21 -72z"/>
                </g>
                </svg>
            </nav>
            <section className="py-20 md:py-28">
                <p className="text-2xl font-semibold text-center">Registration Form</p>
                <div className="flex flex-col items-center">
                    <form className="reg-bootcamp-box w-3/4 md:w-1/2 lg:w-2/5 py-10 flex flex-col gap-10">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Home address</p>
                            <textarea placeholder="Home address"  onChange={(event) => {
                                    setAddress(event.target.value)
                                }} />
                        </div>
                        <div className="w-full flex justify-between gap-10">
                            <div className="w-1/2 flex flex-col gap-2">
                                <p className="text-sm font-semibold">City</p>
                                <input type="text" placeholder="City"  onChange={(event) => {
                                    setCity(event.target.value)
                                }} />
                            </div>
                            <div className="w-1/2 flex flex-col gap-2">
                                <p className="text-sm font-semibold">Postal Code</p>
                                <input type="number" placeholder="Postal Code"  onChange={(event) => {
                                    setPostalCode(event.target.value)
                                }} />
                            </div>
                        </div>
                        <div className="w-full flex justify-between gap-10">
                            <div className="w-1/2 flex flex-col gap-2">
                                <p className="text-sm font-semibold">Emergency phone number</p>
                                <input type="number" placeholder="Emergency phone number"  onChange={(event) => {
                                    setEmergency(event.target.value)
                                }} />
                            </div>
                            <div className="w-1/2 flex flex-col gap-2">
                                <p className="text-sm font-semibold">Confirm emergency phone number</p>
                                <input type="number" placeholder="Confirm emergency phone number"  onChange={(event) => {
                                    setCemergency(event.target.value)
                                }} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Last education</p>
                            <select name="" id=""  onChange={(event) => {
                                    setEducation(event.target.value)
                                }} >
                                <option value="Gender">Choose education level</option>
                                <option value="Male">Elementary school</option>
                                <option value="Junior">Junior high school</option>
                                <option value="Senior">Senior high school</option>
                                <option value="Associate">Associate Degrees</option>
                                <option value="Bachelor’s">Bachelor’s Degrees</option>
                                <option value="Master’s">Master’s Degrees</option>
                                <option value="Doctoral">Doctoral Degrees</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">How did you know this program?</p>
                            <select name="" id=""  onChange={(event) => {
                                    setProgram(event.target.value)
                                }} >
                                <option>Select source</option>
                                <option value="Facebook">Facebook</option>
                                <option value="Google">Google</option>
                                <option value="Twitter">Twitter</option>
                                <option value="LinkedIn">LinkedIn</option>
                                <option value="Email">Email</option>
                                <option value="Wesbite">Wesbite</option>
                                <option value="Friends">Friends</option>
                                <option value="Family">Family</option>
                            </select>
                        </div>
                        {
                            value.map(
                                (val) => {
                                    return <div className="flex flex-col gap-2">
                                    <p className="text-sm font-semibold">Select the Batch You Want to Join</p>
                                    <select name="" id=""  onChange={(event) => {
                                            setBatch(event.target.value)
                                        }} >
                                        <option>Choose program</option>
                                        <option value={val.batch}>{val.batch}</option>
                                    </select>
                                </div>
                                }
                            )
                        }
                        
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Motivation for joining Fulltime Coding Bootcamp</p>
                            <textarea placeholder="Write your motivation to join Fulltime Coding Bootcamp" onChange={(event) => {
                                    setMotivation(event.target.value)
                                }} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Are you currently busy?</p>
                            <select name="" id="" onChange={(event) => {
                                    setBusy(event.target.value)
                                }} >
                                <option>Select one</option>
                                <option value="Student">Student</option>
                                <option value="Work">Work</option>
                                <option value="Graduate">Fresh graduate</option>
                                <option value="I am Free">I am Free</option>
                            </select>
                        </div>
                        <p className="color-red-1 text-center font-medium">{errorMessage}</p>
                        <p onClick={submit} className="text-white bg-blue-1 text-center px-4 py-2 rounded-lg cursor-pointer">Submit</p>
                    </form>
                </div>
            </section>
            
            <footer className="bg-black text-white flex flex-col items-center mt-10 py-20 md:py-28">
                <div>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="30" height="45" viewBox="0 0 44 59"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0,59) scale(0.1,-0.1)"
                        fill="white" stroke="none">
                        <path d="M270 548 c-136 -52 -250 -236 -250 -403 0 -85 7 -101 51 -125 46 -24
                        80 -25 117 -6 44 23 192 181 192 205 0 11 -5 21 -11 21 -6 0 -49 -36 -96 -80
                        -90 -85 -135 -115 -160 -106 -13 5 -15 21 -11 84 5 94 44 175 125 262 60 66
                        153 122 153 94 0 -10 -6 -25 -14 -33 -13 -14 -12 -18 10 -28 22 -10 26 -8 41
                        13 25 39 24 70 -4 99 -32 31 -68 32 -143 3z m-184 -324 c-20 -56 -25 -63 -25
                        -38 -1 49 31 126 46 110 2 -1 -8 -34 -21 -72z"/>
                        </g>
                    </svg>
                </div>
                <div className="flex flex-col lg:flex-row gap-32 text-sm text-center lg:text-left mt-10">
                    <div className="flex flex-col gap-3">
                        <p className="font-semibold my-2">Navigation</p>
                        <p>Benefit</p>
                        <p>Program</p>
                        <p>Pricing</p>
                        <p>FAQ</p>
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
                </div>
                <p className="text-xs text-white mt-10">Copyright 2021 all right reserved</p>
            </footer>
        </>
    )
}

export default RegisterBootcamp
