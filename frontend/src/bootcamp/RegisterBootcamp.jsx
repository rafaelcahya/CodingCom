import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

function RegisterBootcamp(props) {
    const urlname = props.match.params.name
    const [name, setName] = useState("")
    var [education, setEducation] = useState("")
    var [fullname, setFullname] = useState("")
    var [gender, setGender] = useState("")
    var [BoD, setBoD] = useState("")
    var [phonenumber, setPhoneNumber] = useState("")
    var [cphonenumber, setCphoneNumber] = useState("")
    var [emergencynumber, setEmergencyNumber] = useState("")
    var [cemergencynumber, setCemergencyNumber] = useState("")
    var [address, setAddress] = useState("")
    var [city, setCity] = useState("")
    var [postalCode, setPostalCode] = useState("")
    var [program, setProgram] = useState("")
    var [batch, setBatch] = useState("")
    var [motivation, setMotivation] = useState("")
    var [busy, setBusy] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [errorMessage2, setErrorMessage2] = useState("")
    const [createAt, setCreateAt] = useState("")
    const [value, setValue] = useState([])
    const [valueGet, setValueGet] = useState([])
    var name1 = ""
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
            console.log(response.data)
        })
    }, []);

    useEffect(() => {
        Axios.get("http://localhost:3001/user/userById/" + urlname).then((response) => {
            setValueGet(response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const submit = () => {
        if (fullname.length <= 0 && document.getElementById("fullname") != null) {
            fullname = document.getElementById("fullname").value
        } if (gender.length <= 0 && document.getElementById("gender") != null) {
            gender = document.getElementById("gender").value
        } if (BoD.length <= 0 && document.getElementById("bod") != null) {
            BoD = document.getElementById("bod").value
        } if (phonenumber.length <= 0 && cphonenumber.length <= 0 && document.getElementById("phonenumber") != null && document.getElementById("cphonenumber") != null) {
            phonenumber = document.getElementById("phonenumber").value
            cphonenumber = document.getElementById("cphonenumber").value
        } if (emergencynumber.length <= 0 && cemergencynumber.length <= 0 && document.getElementById("emergencynumber") != null && document.getElementById("cemergencynumber") != null) {
            emergencynumber = document.getElementById("emergencynumber").value
            cemergencynumber = document.getElementById("cemergencynumber").value
        } if (address.length <= 0 && document.getElementById("address") != null) {
            address = document.getElementById("address").value
        } if (city.length <= 0 && document.getElementById("city") != null) {
            city = document.getElementById("city").value
        } if (postalCode.length <= 0 && document.getElementById("postalcode") != null) {
            postalCode = document.getElementById("postalcode").value
        } if (education.length <= 0 && document.getElementById("education") != null) {
            education = document.getElementById("education").value
        }
        Axios.all([
            Axios.post("http://localhost:3001/bootcampuser/bootcampUserRegis", { fullname: fullname, gender: gender, education: education, BoD: BoD, phonenumber: phonenumber, cphonenumber: cphonenumber, emergencynumber: emergencynumber, cemergencynumber: cemergencynumber, city: city, address: address, postalCode: postalCode, program: program, batch: batch, motivation: motivation, busy: busy, createAt: createAt, name: name }).then((response) => {
                setErrorMessage(response.data.message)
            }),
            Axios.post("http://localhost:3001/user/profileBootcamp", { urlname: urlname, fullname: fullname, gender: gender, education: education, BoD: BoD, phonenumber: phonenumber, cphonenumber: cphonenumber, emergencynumber: emergencynumber, cemergencynumber: cemergencynumber, city: city, address: address, postalCode: postalCode, updateAt: createAt }).then((response) => {
            })
        ])
    }

    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
    const formatTime = s => new Date(s).toLocaleTimeString();
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
                {
                    valueGet.map((val) => {
                        return <div className="flex flex-col items-center">
                            <form className="reg-bootcamp-box w-3/4 md:w-1/2 lg:w-2/5 py-10 flex flex-col gap-10">
                                <div className="flex flex-col lg:flex-row gap-5 w-full">
                                    {val.fullname.length <= 0 ? (<div className="flex flex-col gap-2 w-full">
                                        <p className="text-sm font-semibold">Fullname</p>
                                        <input type="text" placeholder="Fullname" onChange={(event) => {
                                            setFullname(event.target.value)
                                        }} />
                                    </div>) : (<div className="flex flex-col gap-2 w-full">
                                        <p className="text-sm font-semibold">Fullname</p>
                                        <input type="text" id="fullname" placeholder="Fullname" value={val.fullname} disabled />
                                    </div>)}
                                </div>
                                <div className="flex flex-col lg:flex-row gap-5 w-full">
                                    {val.gender.length <= 0 ? (<div className="flex flex-col gap-2 w-full lg:w-1/2">
                                        <p className="text-sm font-semibold">Gender</p>
                                        <select name="" id="" onChange={(event) => {
                                            setGender(event.target.value)
                                        }} >
                                            <option>Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>) : (<div className="flex flex-col gap-2 w-full lg:w-1/2">
                                        <p className="text-sm font-semibold">Gender</p>
                                        <select name="" id="gender" disabled onChange={(event) => {
                                            setGender(event.target.value)
                                        }}>
                                            <option value={val.gender}>{val.gender}</option>
                                        </select>
                                    </div>)}
                                    {val.BoD == "0000-00-00" ? (<div className="flex flex-col gap-2 w-full lg:w-1/2">
                                        <p className="text-sm font-semibold">Birth date</p>
                                        <input type="date" onChange={(event) => {
                                            setBoD(event.target.value)
                                        }} />
                                    </div>) : (<div className="flex flex-col gap-2 w-full lg:w-1/2">
                                        <p className="text-sm font-semibold">Birth date</p>
                                        <input type="text" value={formatDate(val.BoD)} disabled />
                                        <input type="hidden" id="bod" value={val.BoD} disabled />
                                    </div>)}
                                </div>
                                {val.phoneNumber.length <= 0 ? (<div className="flex flex-col lg:flex-row gap-5 w-full">
                                    <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                        <p className="text-sm font-semibold">Phone number</p>
                                        <input type="number" placeholder="Phone number" onChange={(event) => {
                                            setPhoneNumber(event.target.value)
                                        }} />
                                    </div>
                                    <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                        <p className="text-sm font-semibold">Confirm phone number</p>
                                        <input type="number" placeholder="Confirm phone number" onChange={(event) => {
                                            setCphoneNumber(event.target.value)
                                        }} />
                                    </div>
                                </div>) : (<div className="flex flex-col lg:flex-row gap-5 w-full">
                                    <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                        <p className="text-sm font-semibold">Phone number</p>
                                        <input type="number" id="phonenumber" value={val.phoneNumber} disabled placeholder="Phone number" onChange={(event) => {
                                            setPhoneNumber(event.target.value)
                                        }} />
                                    </div>
                                    <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                        <p className="text-sm font-semibold">Confirm phone number</p>
                                        <input type="number" id="cphonenumber" value={val.phoneNumber} disabled placeholder="Confirm phone number" onChange={(event) => {
                                            setCphoneNumber(event.target.value)
                                        }} />
                                    </div>
                                </div>)}
                                {val.emergencyNumber.length <= 0 ? (<div className="flex flex-col lg:flex-row gap-5 w-full">
                                    <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                        <p className="text-sm font-semibold">Emergency number</p>
                                        <input type="number" placeholder="Phone number" onChange={(event) => {
                                            setEmergencyNumber(event.target.value)
                                        }} />
                                    </div>
                                    <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                        <p className="text-sm font-semibold">Confirm emergency</p>
                                        <input type="number" placeholder="Confirm phone number" onChange={(event) => {
                                            setCemergencyNumber(event.target.value)
                                        }} />
                                    </div>
                                </div>) : (<div className="flex flex-col lg:flex-row gap-5 w-full">
                                    <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                        <p className="text-sm font-semibold">Emergency number</p>
                                        <input type="number" id="emergencynumber" value={val.emergencyNumber} disabled placeholder="Phone number" onChange={(event) => {
                                            setEmergencyNumber(event.target.value)
                                        }} />
                                    </div>
                                    <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                        <p className="text-sm font-semibold">Confirm emergency</p>
                                        <input type="number" id="cemergencynumber" value={val.emergencyNumber} disabled placeholder="Confirm phone number" onChange={(event) => {
                                            setCemergencyNumber(event.target.value)
                                        }} />
                                    </div>
                                </div>)}
                                {val.address.length <= 0 ? (<div className="flex flex-col gap-2 w-full">
                                    <p className="text-sm font-semibold">Home address</p>
                                    <textarea placeholder="Home address" className="resize-none" onChange={(event) => {
                                        setAddress(event.target.value)
                                    }} />
                                </div>) : (<div className="flex flex-col gap-2 w-full">
                                    <p className="text-sm font-semibold">Home address</p>
                                    <textarea placeholder="Home address" id="address" value={val.address} disabled className="resize-none" onChange={(event) => {
                                        setAddress(event.target.value)
                                    }} />
                                </div>)}
                                <div className="w-full flex justify-between gap-10">
                                    {val.city.length <= 0 ? (<div className="w-1/2 flex flex-col gap-2">
                                        <p className="text-sm font-semibold">City</p>
                                        <input type="text" placeholder="City" onChange={(event) => {
                                            setCity(event.target.value)
                                        }} />
                                    </div>) : (<div className="w-1/2 flex flex-col gap-2">
                                        <p className="text-sm font-semibold">City</p>
                                        <input type="text" id="city" value={val.city} disabled placeholder="City" onChange={(event) => {
                                            setCity(event.target.value)
                                        }} />
                                    </div>)}
                                    {val.postalCode == 0 ? (<div className="w-1/2 flex flex-col gap-2">
                                        <p className="text-sm font-semibold">Postal Code</p>
                                        <input type="number" placeholder="Postal Code" min="0" onChange={(event) => {
                                            setPostalCode(event.target.value)
                                        }} />
                                    </div>) : (<div className="w-1/2 flex flex-col gap-2">
                                        <p className="text-sm font-semibold">Postal Code</p>
                                        <input type="number" id="postalcode" value={val.postalCode} disabled placeholder="Postal Code" onChange={(event) => {
                                            setPostalCode(event.target.value)
                                        }} />
                                    </div>)}
                                </div>
                                {val.education.length <= 0 ? (<div className="flex flex-col gap-2">
                                    <p className="text-sm font-semibold">Last education</p>
                                    <select name="" id="" onChange={(event) => {
                                        setEducation(event.target.value)
                                    }} >
                                        <option>Choose education level</option>
                                        <option value="Elementary school">Elementary school</option>
                                        <option value="Junior">Junior high school</option>
                                        <option value="Senior">Senior high school</option>
                                        <option value="Associate">Associate Degrees</option>
                                        <option value="Bachelor’s">Bachelor’s Degrees</option>
                                        <option value="Master’s">Master’s Degrees</option>
                                        <option value="Doctoral">Doctoral Degrees</option>
                                    </select>
                                </div>) : (<div className="flex flex-col gap-2">
                                    <p className="text-sm font-semibold">Last education</p>
                                    <select name="" id="education" disabled onChange={(event) => {
                                        setEducation(event.target.value)
                                    }} >
                                        <option value={val.education}>{val.education}</option>
                                    </select>
                                </div>)}
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm font-semibold">How did you know this program?</p>
                                    <select name="" id="" onChange={(event) => {
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
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm font-semibold">Select the Batch You Want to Join</p>
                                    <select name="" id="" onChange={(event) => {
                                        setBatch(event.target.value)
                                    }} >
                                        <option>Choose Batch</option>
                                        {
                                            value.map(
                                                (val) => {
                                                    return <option value={val.batchId}>{val.batch} : {formatDate(val.startDate)} - {formatDate(val.endDate)}</option>
                                                }
                                            )
                                        }
                                    </select>
                                </div>


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
                                <p onClick={() => { submit(val.fullname, val.gender, val.education, val.BoD, val.phoneNumber, val.emergencyNumber, val.address, val.city, val.postalCode) }} className="text-white bg-blue-1 text-center px-4 py-2 rounded-lg cursor-pointer">Submit</p>
                            </form>
                        </div>
                    })
                }

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
