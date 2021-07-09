/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

function RegisterBootcamp(props) {
    const urlname = props.match.params.name
    const [name, setName] = useState("")
    const [education, setEducation] = useState("")
    const [fullname, setFullname] = useState("")
    const [gender, setGender] = useState("")
    const [BoD, setBoD] = useState("")
    const [phonenumber, setPhoneNumber] = useState("")
    const [cphonenumber, setCphoneNumber] = useState("")
    const [emergencynumber, setEmergencyNumber] = useState("")
    const [cemergencynumber, setCemergencyNumber] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [program, setProgram] = useState("")
    const [batch, setBatch] = useState("")
    const [motivation, setMotivation] = useState("")
    const [busy, setBusy] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [errorMessage2, setErrorMessage2] = useState("")
    const [createAt, setCreateAt] = useState("")
    const [value, setValue] = useState([])
    const [valueGet, setValueGet] = useState([])
    let name1 = ""
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
        Axios.all([
            Axios.post("http://localhost:3001/bootcampuser/bootcampUserRegis", { program: program, batch: batch, motivation: motivation, busy: busy, createAt: createAt, name: name }).then((response) => {
                setErrorMessage2(response.data.message2)
            }),
            Axios.post("http://localhost:3001/user/profile", {urlname:urlname, name:name1, fullname:fullname, gender:gender, education:education, BoD:BoD, phonenumber:phonenumber, cphonenumber:cphonenumber, emergencynumber:emergencynumber, cemergencynumber:cemergencynumber, city:city, address:address, postalCode:postalCode, updateAt:createAt}).then((response) => {
                console.log(response)
                setErrorMessage(response.data.message)
            })
        ])
    }

    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
    return (
        <>
            <div className="flex items-center justify-between px-16 py-10 pb-20">
                <Link to="/bootcamp">
                    <div className="flex items-center text-black bg-white hover:bg-gray-200 p-2 rounded-lg w-max">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        <p>back</p>
                    </div>
                </Link>
                <p className="font-semibold">Bootcamp Registration</p>
            </div>
            <section className="">
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
                                        <input type="text" placeholder="Fullname" value={val.fullname} disabled onChange={(event) => {
                                            setFullname(event.target.value)
                                        }} />
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
                                        <select name="" id="" disabled onChange={(event) => {
                                            setGender(event.target.value)
                                        }}>
                                            <option>{val.gender}</option>
                                        </select>
                                    </div>)}
                                    {val.BoD == "0000-00-00" ? (<div className="flex flex-col gap-2 w-full lg:w-1/2">
                                        <p className="text-sm font-semibold">Birth date</p>
                                        <input type="date" onChange={(event) => {
                                            setBoD(event.target.value)
                                        }} />
                                    </div>) : (<div className="flex flex-col gap-2 w-full lg:w-1/2">
                                        <p className="text-sm font-semibold">Birth date</p>
                                        <input type="text" value={formatDate(val.BoD)} disabled onChange={(event) => {
                                            setBoD(event.target.value)
                                        }} />
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
                                        <input type="number" value={val.phoneNumber} disabled placeholder="Phone number" onChange={(event) => {
                                            setPhoneNumber(event.target.value)
                                        }} />
                                    </div>
                                    <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                        <p className="text-sm font-semibold">Confirm phone number</p>
                                        <input type="number" value={val.phoneNumber} disabled placeholder="Confirm phone number" onChange={(event) => {
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
                                        <input type="number" value={val.emergencyNumber} disabled placeholder="Phone number" onChange={(event) => {
                                            setEmergencyNumber(event.target.value)
                                        }} />
                                    </div>
                                    <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                        <p className="text-sm font-semibold">Confirm emergency</p>
                                        <input type="number" value={val.emergencyNumber} disabled placeholder="Confirm phone number" onChange={(event) => {
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
                                    <textarea placeholder="Home address" value={val.address} disabled className="resize-none" onChange={(event) => {
                                        setAddress(event.target.value)
                                    }} />
                                </div>)}
                                <div className="w-full flex justify-between gap-1 lg:gap-10">
                                    {val.city.length <= 0 ? (<div className="w-1/2 flex flex-col gap-2">
                                        <p className="text-sm font-semibold">City</p>
                                        <input type="text" placeholder="City" onChange={(event) => {
                                            setCity(event.target.value)
                                        }} />
                                    </div>) : (<div className="w-1/2 flex flex-col gap-2">
                                        <p className="text-sm font-semibold">City</p>
                                        <input type="text" value={val.city} disabled placeholder="City" onChange={(event) => {
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
                                        <input type="number" value={val.postalCode} disabled placeholder="Postal Code" onChange={(event) => {
                                            setPostalCode(event.target.value)
                                        }} />
                                    </div>)}
                                </div>
                                {val.education.length <=0 ? (<div className="flex flex-col gap-2">
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
                                </div>):(<div className="flex flex-col gap-2">
                                    <p className="text-sm font-semibold">Last education</p>
                                    <select name="" id="" disabled onChange={(event) => {
                                        setEducation(event.target.value)
                                    }} >
                                        <option>{val.education}</option>
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
                                <p className="color-red-1 text-center font-medium">{errorMessage2}</p>
                                <p className="color-red-1 text-center font-medium">{errorMessage}</p>
                                <p onClick={submit} className="text-white bg-blue-1 text-center px-4 py-2 rounded-lg cursor-pointer">Submit</p>
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
