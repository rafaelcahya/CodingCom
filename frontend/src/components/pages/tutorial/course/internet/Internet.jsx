import React, { useEffect, useState } from 'react'
import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'
import Footer from '../../../../major/Footer'
import SidebarInternet from '../SidebarInternet'
import NextPrevBtnTutorial from '../NextPrevBtnTutorial'
import SidebarInternetMobile from '../SidebarInternetMobile'
import Axios from 'axios'
import { Link } from 'react-router-dom'
// import Comment from '../../../../major/Comment'


function Internet() {
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
        Axios.get("http://localhost:3001/comment/commentListInternet").then((response)=>{
            setCommentList(response.data)
        })
    },[]);

    const commentInternet = () => {
        Axios.post("http://localhost:3001/comment/commentInternet", {name: name, comment: comment, createAt:createAt}).then((response) => {
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
                            <p className="text-2xl lg:text-5xl font-semibold">Introduction</p>
                            <p className="text-gray-400 text-sm mt-2">This page is an opening for learning the basics of the internet.</p>
                        </div>
                        <p className="text-gray-400 text-sm mt-5 sm:mt-0">1 min</p>
                    </div>
                    <div className="flex flex-col gap-5 my-5 pt-5">
                        <p>According to the <a href="https://dictionary.cambridge.org/dictionary/english/" className="underline">Cambridge Academic Content Dictionary</a>, internet is a large system of connected computers around the world which people use to communicate with each other.</p>
                        <div className="border-left-orange-1 bg-orange-2 px-4 py-4 text-black">
                            <p>Before further learning, here are some of the learning paths that you will learn:</p>
                            <ol className="list-decimal">
                                <div className="mx-10">
                                    <li>What is internet?</li>
                                    <li>How does internet work?</li>
                                    <li>What is HTTP & HTTPS?</li>
                                    <li>Browse and how browser work?</li>
                                    <li>DNS Server</li>
                                    <li>Domain</li>
                                    <li>Hosting</li>
                                </div>
                            </ol>
                        </div>
                    </div>
                    <NextPrevBtnTutorial
                        back="/tutorial"
                        next="/what-is-internet"
                    />
                    <div className="comment-container mt-32">
                        <p className="font-semibold text-2xl my-10 text">Discussion Section</p>
                        <span className="flex gap-2 my-2">Discussion as <p id="name" className="color-blue-1"></p></span>
                        <textarea placeholder="add your discussion here(255 char)" className="textarea resize-none cursor-text" onChange={(event) => {
                            setComment(event.target.value)
                        }} ></textarea>
                        <p className="text-sm color-red-1 text-center mt-8 font-medium">{errorMessage}</p>
                        <div className="flex justify-end items-center gap-10 my-5 mb-20">
                            <p className="bg-gray-200 color-black-1 px-4 py-1 rounded-lg cursor-pointer">Cancel</p>
                            <p onClick={commentInternet} id="submitComment" className="bg-blue-1 text-white px-4 py-1 rounded-lg cursor-pointer">Discussion</p>
                        </div>
                        {
                            commentlist.map(
                                (val)=> {
                                    return <div className="comment-box p-4 my-5 rounded-lg">
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
                    <Link to="/class-session">
                        <p className="bg-blue-1 text-white text-sm px-6 py-2 mt-4 w-max rounded-lg">Consult</p>
                    </Link>
                </div>
            </div>
            
            <Footer />
        </>
    )
}


export default Internet
