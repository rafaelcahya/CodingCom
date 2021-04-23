import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../major/Footer'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import ClassComp from './ClassComp'

function ClassCreation() {
    const [mentorName, setMentorName] = useState("")
    const [className, setClassName] = useState("")
    const [time, setTime] = useState("")
    const [month, setMonth] = useState("")
    const [date, setDate] = useState("")
    const [email, setEmail] = useState("")
    const [url, setUrl] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    return (
        <>
            <NavbarLogin />
            <NavbarMobile />

            <div className="mx-8 sm:mx-24 md:mx-40 lg:mx-52 xl:mx-72 mt-32 lg:mt-20">
                <div>
                    <div>
                        <p className="MentorName text-xs mb-1">Mentor Name ?</p>
                        <input
                            type="text"
                            placeholder="Input Mentor name"
                            onChange={(event) => {
                                setMentorName(event.target.value)
                            }} />
                    </div>
                    <div>
                        <p className="Email text-xs mb-1">Email ?</p>
                        <input
                            type="text"
                            placeholder="Input Email"
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }} />
                    </div>
                    <div>
                        <p className="ClassName text-xs mb-1">Class Name ?</p>
                        <input
                            type="text"
                            placeholder="Input Classname"
                            onChange={(event) => {
                                setClassName(event.target.value)
                            }} />
                    </div>
                    <div>
                        <p className="Month text-xs mb-1">Month ?</p>
                        <input
                            type="text"
                            placeholder="Input Month"
                            onChange={(event) => {
                                setMonth(event.target.value)
                            }} />
                    </div>
                    <div>
                        <p className="Date text-xs mb-1">Date ?</p>
                        <input
                            type="text"
                            placeholder="Input Date"
                            onChange={(event) => {
                                setDate(event.target.value)
                            }} />
                    </div>
                    <div>
                        <p className="Waktu text-xs mb-1">What time do you want ?</p>
                        <select id="dropdown" onChange={(event) => {
                                setTime(event.target.value)
                            }}>
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
                    <div>
                        <p className="Url text-xs mb-1">Url ?</p>
                        <input
                            type="text"
                            placeholder="Input Url"
                            onChange={(event) => {
                                setUrl(event.target.value)
                            }} />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ClassCreation