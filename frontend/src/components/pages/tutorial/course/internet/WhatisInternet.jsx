import React, { useEffect, useState } from 'react'
import Footer from '../../../../major/Footer'
import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'
import NextPrevBtnTutorial from '../NextPrevBtnTutorial'
import SidebarInternet from '../SidebarInternet'

import osimodel from '../../../../../asset/photo/Tutorial/internet/osimodel.png'
import SidebarInternetMobile from '../SidebarInternetMobile'
import Axios from 'axios'
import { Link } from 'react-router-dom'

function WhatisInternet() {
    let x
    const [comment, setComment] = useState("")
    const [name, setName] = useState("")
    const [createAt, setCreateAt] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [commentlist, setCommentList] = useState([])

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

    useEffect(() => {
        Axios.get("http://localhost:3001/comment/commentListWhatisInternet").then((response) => {
            setCommentList(response.data)
        })
    }, []);

    const commentInternet = () => {
        Axios.post("http://localhost:3001/comment/commentWhatisInternet", { name: name, comment: comment, createAt: createAt }).then((response) => { 
            setErrorMessage(response.data.message)
            window.location.reload()
        })
    }
    return (
        <>
            <NavbarLogin />
            <NavbarMobile />
            <div className="flex gap-10 mt-32 lg:mt-16 mx-10 md:mx-20 lg:mx-32 leading-7">
                <div className="hidden lg:block lg:w-1/5">
                    <SidebarInternet />
                </div>
                <SidebarInternetMobile />
                <div className="w-full lg:w-7/12 pl-0 lg:pl-10 pr-0 pt-5 border-0 lg:border-l border-gray-300">
                    <div className="block sm:flex justify-between border-b border-gray-300 pb-10">
                        <div>
                            <p className="text-2xl lg:text-5xl font-semibold">What is internet</p>
                            <p className="text-gray-400 text-sm mt-2">This page discusses the meaning of the internet.</p>
                        </div>
                        <p className="text-gray-400 text-sm mt-5 sm:mt-0">5 min</p>
                    </div>
                    <div className="flex flex-col gap-10 pt-10 pb-20">
                        <div className="flex flex-col gap-5 my-5">
                            <iframe className="w-full h-80" src="https://www.youtube.com/embed/Dxcc6ycZ73M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <p className="text-xl font-semibold">What is Internet?</p>
                            <div className="flex flex-col gap-5 my-5">
                                <p>The internet is a network or computer connection that is very extensive throughout the world so that people can share information and communicate from anywhere. The network or connection makes use of communication devices such as telephones and satellites which also use standard protocols for communication, namely the TCP / IP (Transmission Control / Internet Protocol) protocol.</p>
                                <p>TCP / IP (Transmission Control Protocol / Internet Protocol) is a type of network protocol that can provide freedom in communicating between one computer and another in a network even though the platforms used on these computers are different from one another.</p>
                                <div className="border-left-orange-1 bg-orange-2 px-4 py-4">
                                    <p>TCP / IP protocol suite was developed prior to the OSI model.</p>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <img src={osimodel} alt="7 OSI Layer" width="500" />
                                    <p className="text-sm font-semibold">7 OSI Layer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <NextPrevBtnTutorial
                        back="/internet"
                        next="/how-does-internet-work"
                    />
                    <div className="mt-32">
                        <p className="font-semibold text-2xl my-5">Discussion</p>
                        <span className="flex gap-2 my-2">Discussion as <p id="name" className="color-blue-1"></p></span>
                        <form className="mb-16 pb-10 border-b-2 border-gray-300">
                            <textarea placeholder="add your discussion here(255 char)" className="textarea resize-none cursor-text" onChange={(event) => {
                                setComment(event.target.value)
                            }} ></textarea>
                            <p className="text-sm color-red-1 text-center mt-8 font-medium">{errorMessage}</p>
                            <div className="flex justify-end items-center gap-10 my-5 mb-20">
                                <input type="reset" defaultValue="Reset" className="bg-gray-200 text-black px-4 py-1 rounded-lg cursor-pointer" />  
                                <p onClick={commentInternet} id="submitComment" className="bg-blue-1 text-white px-4 py-1 rounded-lg cursor-pointer">Post discussion</p>
                            </div>
                        </form>
                        {
                            commentlist.map(
                                (val)=> {
                                    return <div className="comment-box p-4 my-5 rounded-xl">
                                                <div className="flex justify-between mb-1">
                                                    <p className="color-blue-1 font-semibold text-sm">{val.name}</p>
                                                    <p className="text-gray-400 text-sm">{val.createAt}</p>
                                                </div>
                                                <p className="text-sm">{val.comment}</p>
                                            </div>
                                }
                            )
                        }
                    </div>
                </div>
                <div className="hidden lg:block sticky self-start top-6 p-6 mt-6 bg-white rounded-lg shadow" style={{width: "18%"}}>
                    <p className="text-lg font-semibold">Consultation class</p>
                    <p className="text-sm pt-2">Consult with a professional mentor.</p>
                    <Link to="/consultation-class">
                        <p className="bg-blue-1 text-white text-sm px-6 py-2 mt-4 w-max rounded-lg">Consult</p>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default WhatisInternet
