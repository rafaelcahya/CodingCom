import React, { useEffect, useState } from 'react'
import Footer from '../../../../major/Footer'
import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'
import NextPrevBtnTutorial from '../NextPrevBtnTutorial'
import SidebarInternet from '../SidebarInternet'
import SidebarInternetMobile from '../SidebarInternetMobile'
import Axios from 'axios'

function Hosting() {
    let x
    const [comment, setComment] = useState("")
    const [name,setName] = useState("")
    const [createAt,setCreateAt] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [commentlist,setCommentList] = useState([])

    window.onload = setTimeout(function () {
        x = localStorage.getItem("name");
        document.getElementById("name").innerHTML = x;
        setName(x)
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = time + ' ' + date;
        setCreateAt(dateTime)
    }, 500)

    useEffect(()=>{
        Axios.get("http://localhost:3001/comment/commentListHosting").then((response)=>{
            setCommentList(response.data)
        })
    },[]);

    const commentInternet = () => {
        Axios.post("http://localhost:3001/comment/commentHosting", {name: name, comment: comment, createAt:createAt}).then((response) => {
            setErrorMessage(response.data.message)
        })
    }
    return (
        <>
            <NavbarLogin />
            <NavbarMobile />
            <div className="internet-header w-full py-40 text-white">
                <div className="flex flex-col items-center text-center gap-2">
                    <h1 className="text-4xl font-semibold">Internet</h1>
                    <p className="font-medium">Hosting</p>
                    <p className="text-sm">10 min</p>
                </div>
            </div>
            <div className="flex gap-10 mt-20 mx-10 md:mx-20 lg:mx-32 leading-7">
                <SidebarInternet />
                <SidebarInternetMobile />
                <div className="flex flex-col gap-10 w-full lg:w-3/5 py-5">
                    <div>
                        <p className="text-xl font-semibold">What is Hosting?</p>
                        <div className="flex flex-col gap-5 my-5">
                            <p>A simple way of hosting is a service for storing data, images, and files on a website. Another definition is a service that allows users to publish a website to the internet.</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-xl font-semibold">Type of Hosting</p>
                        <div className="flex flex-col gap-5 my-5">
                            <p>here are the types of hosting that you need to know:</p>
                            <ol className="list-decimal mx-10 flex flex-col gap-5">
                                <div>
                                    <li>Shared hosting</li>
                                    <p>Shared hosting is very often used by novice users. Shared hosting is good for new websites because it doesn't have a lot of traffic. However, shared hosting requires you to share a server with other people. So when the traffic from other users' websites is high, it can affect the performance of your website.</p>
                                </div>
                                <div>
                                    <li>Cloud based hosting</li>
                                    <p>Cloud based hosting allows hundreds of servers to work together so it looks like one giant server. This type of hosting is the target of many people because it will not experience downtime. In fact, when the server is in trouble, it will not affect your website.</p>
                                </div>
                                <div>
                                    <li>VPS hosting</li>
                                    <p>With VPS hosting users get dedicated server space. So, when there is a high increase in traffic on other websites that are still on the same server, it will not have an impact on your website.</p>
                                </div>
                                <div>
                                    <li>WordPress hosting</li>
                                    <p>WordPress hosting is another type of shared hosting and functions specifically for website users from WordPress. This type of hosting will provide users with services such as updating a WordPress installation to help protect the website from hackers' security threats.</p>
                                </div>
                            </ol>
                        </div>
                    </div>
                    <NextPrevBtnTutorial
                        back="/DNS"
                        next="/closing"
                    />
                    <div className="mt-32">
                        <p className="font-semibold text-2xl my-5">Discussion</p>
                        <span className="flex gap-2 my-2">Discussion as <p id="name" className="color-blue-1"></p></span>
                        <form className="mb-16 pb-10 border-b-2 border-gray-300">
                            <textarea placeholder="add your discussion here(255 char)" className="textarea resize-none cursor-text" onChange={(event) => {
                                setComment(event.target.value)
                            }} ></textarea>
                            <p className="text-sm color-red-1 text-center mt-8 font-medium">{errorMessage}</p>
                            <div className="flex justify-end items-center gap-10 my-5">
                                <input type="reset" defaultValue="Reset" className="bg-gray-200 text-black px-4 py-1 rounded-lg cursor-pointer" />  
                                <p onClick={commentInternet} className="bg-blue-1 text-white px-4 py-1 rounded-lg cursor-pointer">Post discussion</p>
                            </div>
                        </form>
                        {
                            commentlist.map(
                                (val)=> {
                                    return <div className="bg-white p-4 my-5 rounded-xl">
                                                <div className="flex justify-between mb-1">
                                                    <p className="color-blue-1 font-semibold text-sm">William Kosasie</p>
                                                    <p className="text-gray-400 text-sm">{val.createAt}</p>
                                                </div>
                                                <p className="text-sm">{val.comment}</p>
                                            </div>
                                }
                            )
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Hosting
