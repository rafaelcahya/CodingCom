import React, { useEffect, useState } from 'react'
import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'
import Footer from '../../../../major/Footer'
import SidebarInternet from '../SidebarInternet'
import NextPrevBtnTutorial from '../NextPrevBtnTutorial'
import SidebarInternetMobile from '../SidebarInternetMobile'
import Axios from 'axios'
import { Link } from 'react-router-dom'

function Browser() {
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
        Axios.get("http://localhost:3001/comment/commentListBrowser").then((response)=>{
            setCommentList(response.data)
        })
    },[]);

    const commentInternet = () => {
        Axios.post("http://localhost:3001/comment/commentBrowser", {name: name, comment: comment, createAt:createAt}).then((response) => {
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
                            <p className="text-2xl lg:text-5xl font-semibold">Browser</p>
                            <p className="text-gray-400 text-sm mt-2">This page discusses what the browser is and how it works.</p>
                        </div>
                        <p className="text-gray-400 text-sm mt-5 sm:mt-0">10 min</p>
                    </div>
                    <div className="flex flex-col gap-5 my-5 pt-5">
                        <div className="flex flex-col gap-5">
                            <iframe src="https://www.youtube.com/embed/QzohDuGk4mM" title="YouTube video player" className="w-full h-80" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <p className="text-xl font-semibold">What is browser?</p>
                            <p>Browser is an application for accessing a website. Usually the purpose of the browser is to find and get information from websites. Fundamentally, browsers have the ability to display the semantic code (programming language) of web pages such as HTML, CSS, JS, and others into pages that are understandable to everyone. Google Chrome, Mozilla, Internet Explorer are just a few of the existing browsers.</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="text-xl font-semibold">How the browser works</p>
                            <p>When the user enters a website address or URL (Uniform Resource Locator) in the address bar, the browser will perform data retrieval on the DNS Server. The data retrieved is an IP (Internet Protocol) address. The browser will access the server using an IP address and the server will provide data from website content based on the technology used (HTML, CSS, JS, etc.)</p>
                            <div className="border-left-orange-1 bg-orange-2 px-4 py-4 my-5 color-black-1">
                                <p>DNS Server is a system that converts website URLs into IP addresses. Without DNS Server, you have to type the complete IP address when you want to visit a website.</p>
                                <p>IP Address (Internet Protocol Address) is a numeric identity used by all computer devices to connect to each other on the internet network.</p>
                            </div>
                        </div>
                    </div>
                    <NextPrevBtnTutorial
                        back="/what-is-http"
                        next="/DNS"
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


export default Browser
