import React, { useState } from 'react'
import Footer from '../../major/Footer'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import Axios from 'axios'

function ClassCreation() {
    const [name, setName] = useState("")
    const [className, setClassName] = useState("")
    const [time, setTime] = useState("")
    const [date, setDate] = useState("")
    const [url, setUrl] = useState("")
    const [createAt, setCreateAt] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    window.onload = setTimeout(function () {
        x = localStorage.getItem("name");
        setName(x)
        var today = new Date();
        if(today.getMonth()+1<=10){
        var date = today.getFullYear() + '-' + "0" +(today.getMonth() + 1) + '-' +today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        }else {
        var date = today.getFullYear() + '-' +(today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        }
        var dateTime = time + ' ' + date;
        setCreateAt(dateTime)
    }, 500)

    const createClass = () => {
        Axios.post("http://localhost:3001/class/createClass", { name:name, className: className, time: time, date: date, url: url, createAt: createAt }).then((response) => {
            console.log(response)
            setErrorMessage(response.data.message)

        })
    }

    return (
        <>
            <NavbarLogin />
            <NavbarMobile />

            <div className="mx-8 sm:mx-24 md:mx-40 lg:mx-52 xl:mx-72 mt-32 lg:mt-20">
                <p className="font-semibold text-2xl text-center my-5">Request class for mentor</p>
                <div className="request-class-container flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <p className="ClassName text-sm font-semibold">Class Name</p>
                        <input
                            type="text"
                            placeholder="Input Classname"
                            onChange={(event) => {
                                setClassName(event.target.value)
                            }} />
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                            <p className="Date text-sm font-semibold">Date</p>
                            <input
                                type="date"
                                placeholder="Input Date"
                                onChange={(event) => {
                                    setDate(event.target.value)
                                }} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="Waktu text-sm font-semibold">Time</p>
                            <select id="dropdown" onChange={(event) => {
                                setTime(event.target.value)
                            }}>
                                <option value="" selected>Choose time</option>
                                <option value="00:00">00:00</option>
                                <option value="01:00">01:00</option>
                                <option value="02:00">02:00</option>
                                <option value="03:00">03:00</option>
                                <option value="04:00">04:00</option>
                                <option value="05:00">05:00</option>
                                <option value="06:00">06:00</option>
                                <option value="07:00">07:00</option>
                                <option value="08:00">08:00</option>
                                <option value="09:00">09:00</option>
                                <option value="10:00">10:00</option>
                                <option value="11:00">11:00</option>
                                <option value="12:00">12:00</option>
                                <option value="13:00">13:00</option>
                                <option value="14:00">14:00</option>
                                <option value="15:00">15:00</option>
                                <option value="16:00">16:00</option>
                                <option value="17:00">17:00</option>
                                <option value="18:00">18:00</option>
                                <option value="19:00">19:00</option>
                                <option value="20:00">20:00</option>
                                <option value="21:00">21:00</option>
                                <option value="22:00">22:00</option>
                                <option value="23:00">23:00</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="url flex items-center gap-1 text-sm font-semibold">
                            <p>Meeting URL</p>
                            <p className="text-xs color-black-2 font-medium">(Optional)</p>
                        </div>
                        <input
                            type="text"
                            placeholder="Input Url"
                            onChange={(event) => {
                                setUrl(event.target.value)
                            }} />
                    </div>
                    <p className="color-red-1 text-center font-medium">{errorMessage}</p>
                    <p onClick={createClass} className="bg-blue-1 text-white text-center px-7 py-2 rounded-lg cursor-pointer">Submit</p>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ClassCreation