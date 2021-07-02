/* eslint-disable no-redeclare */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import Axios from 'axios'

function FeedbackForm() {
    const [name, setName] = useState("")
    const [about, setAbout] = useState("")
    const [des, setDes] = useState("")
    const [createAt, setCreateAt] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    let x
    const [file, setFile] = useState([])

    window.onload = setTimeout(function () {
        x = localStorage.getItem("name");
        setName(x)
        var today = new Date();
        if (today.getMonth() + 1 <= 10) {
            // eslint-disable-next-line no-useless-concat
            var date = today.getFullYear() + '-' + "0" + (today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        } else {
            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        }
        var dateTime = time + ' ' + date;
        setCreateAt(dateTime)
    }, 500)

    const submit = () => {
        const fd = new FormData();
        fd.append('fileUpload', file)
        fd.append('about', about)
        fd.append('des', des)
        fd.append('name', name)
        fd.append('createAt', createAt)
        Axios.post("http://localhost:3001/feedback/feedback", fd).then((response) => {
            console.log(response)
            setErrorMessage(response.data.message)
        })
        console.log(file)
    }

    // {
    //     valueList.map(
    //         (val) => {
    //             return 
    //         }
    //     )
    // }

    return (
        <>
            <div className="flex items-center justify-between px-16 py-10 pb-20">
                <Link to="/">
                    <div className="flex items-center text-black bg-white hover:bg-gray-200 p-2 rounded-lg w-max">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        <p>back</p>
                    </div>
                </Link>
                <p className="font-semibold">Leave Feedback</p>
            </div>
            <section className="flex flex-col items-center">
                <form action="" className="feedback-box flex flex-col gap-10 w-1/3">
                    <p className="font-medium text-3xl text-center pb-14">Lets talk about everything.</p>
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-semibold">About</p>
                        <select name="" id="" onChange={(event) => {
                            setAbout(event.target.value)
                        }}>
                            <option>Select a part</option>
                            <option value="Homepage">Homepage</option>
                            <option value="Pricing">Pricing</option>
                            <option value="Tutorial">Tutorial</option>
                            <option value="Challenges">Challenges</option>
                            <option value="Consultation">Class Consultation</option>
                            <option value="Session">Class Session</option>
                            <option value="News">News</option>
                            <option value="Career">Career</option>
                            <option value="Bootcamp">Bootcamp</option>
                            <option value="Community">Community</option>
                            <option value="Subscribe">Subscribe</option>
                            <option value="Theme">Theme</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-1 text-sm font-semibold">
                            <p>Image</p>
                            <p className="text-xs color-black-2 font-medium">(Optional)</p>
                        </div>
                        <input className="w-full mb-5"
                            type="file"
                            name="fileUpload"
                            onChange={(event) => {
                                setFile(event.target.files[0])
                            }} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="flex items-center gap-1 text-sm font-semibold">Description</p>
                        <p className="text-xs color-black-2 font-medium">Describe any suggestions such as design, user experience, system errors, etc.</p>
                        <textarea name="" id="" maxLength="250" rows="5" className="resize-none" onChange={(event) => {
                            setDes(event.target.value)
                        }}></textarea>
                    </div>
                    <p className="color-red-1 text-center font-medium">{errorMessage}</p>
                    <p onClick={submit} className="text-white bg-blue-1 text-center px-4 py-2 rounded-lg cursor-pointer">Submit feedback</p>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default FeedbackForm