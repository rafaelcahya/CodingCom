import React, { useState } from 'react'
import Footer from '../../../major/Footer'
import NavbarLogin from '../../../major/NavbarLogin'
import NavbarMobile from '../../../major/NavbarMobile'
import Axios from 'axios'

function Submit() {
    let x
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [live_site_url, setLiveSiteUrl] = useState("")
    const [description, setDescription] = useState("")
    const [url, setUrl] = useState("")
    const [createAt, setCreateAt] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    window.onload = setTimeout(function () {
        x = localStorage.getItem("name");
        setName(x)
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = time + ' ' + date;
        setCreateAt(dateTime)
    }, 500)

    const submit = () => {
        Axios.post("http://localhost:3001/submit/submit", { name: name, title: title, live_site_url: live_site_url, description: description, url: url, createAt: createAt }).then((response) => {
            console.log(response)
            setErrorMessage(response.data.message)

        })
    }

    return (
        <>
            <NavbarLogin />
            <NavbarMobile />
            <div className="mx-8 sm:mx-24 md:mx-40 lg:mx-72 mt-20">
                <p className="font-semibold text-2xl text-center my-5">Submit Solution</p>
                <div className="submit-box flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-semibold">Solution title</p>
                        <input type="text" onChange={(event) => {
                            setTitle(event.target.value)
                        }}/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-semibold">Repository URL</p>
                        <input type="text" onChange={(event) => {
                            setUrl(event.target.value)
                        }}/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-1 text-sm font-semibold">
                            <p>Live site URL</p>
                            <p className="text-xs color-black-2 font-medium">(Optional)</p>
                        </div>
                        <p className="text-xs color-black-2 font-medium underline cursor-pointer">Recommended</p>
                        <input type="text" onChange={(event) => {
                            setLiveSiteUrl(event.target.value)
                        }}/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-semibold">Description</p>
                        <p className="text-xs color-black-2 font-medium">You can enter any information such as tools, how to open github, feedback and anything</p>
                        <textarea name="" id="" maxLength="250" cols="30" rows="10" className="resize-none" onChange={(event) => {
                            setDescription(event.target.value)
                        }}></textarea>
                    </div>
                    <p className="text-sm color-red-1 text-center mt-8 font-medium">{errorMessage}</p>
                    <p className="text-white bg-blue-1 w-max my-5 px-4 py-2 rounded-lg" onClick={submit}>Submit solution</p>
                </div>
            </div>
            <section className="discord flex flex-col items-center gap-10 text-center text-white mx-10 lg:mx-20 px-10 lg:px-20 py-20 mt-32 rounded-xl" >
                <img src="https://cdn.discordapp.com/attachments/414258067870449665/445736475158380544/discord.gif" alt="discord" width={100}/>
                <div className="flex flex-col gap-5">
                    <p className="text-xl font-semibold">Join us in our community.</p>
                    <p>We talk about challenge and project, help each other with code, chat about all things web development.</p>
                </div>
                <a href="https://discord.gg/rvdAvXYt" className="font-medium px-8 py-3 rounded-xl" style={{backgroundColor: "#2c2f33"}}>Join us</a>
            </section>  
            <Footer />
        </>
    )
}


export default Submit
