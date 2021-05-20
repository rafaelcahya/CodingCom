import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import {AnimatePresence, motion} from "framer-motion"
import Axios from 'axios'
import { Link } from 'react-router-dom'

import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'
import Footer from '../../../../major/Footer'
import SidebarInternet from '../SidebarInternet'
import NextPrevBtnTutorial from '../NextPrevBtnTutorial'
import SidebarInternetMobile from '../SidebarInternetMobile'

import star from "../../../../../asset/icon/star.svg"

function Internet() {
    const modal = useRef()
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
                <div className="hidden lg:flex flex-col items-center sticky self-start top-6 mt-6 gap-5" style={{width: "18%"}}>
                    <div className="p-6 bg-white rounded-lg shadow">
                        <p className="text-lg font-semibold">Consultation class</p>
                        <p className="text-sm pt-2">Consult with a professional mentor.</p>
                        <Link to="/consultation-class">
                            <p className="bg-blue-1 text-white text-sm px-6 py-2 mt-4 w-max rounded-lg">Consult</p>
                        </Link>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow">
                        <p className="text-lg font-semibold">Satisfied with this tutorial ?</p>
                        <div className="flex gap-3 items-center justify-center py-4">
                            <img src={star} alt="" width="10" class="animate1"/>
                            <img src={star} alt="" width="15" class="animate2"/>
                            <img src={star} alt="" width="20" class="animate3"/>
                            <img src={star} alt="" width="15" class="animate4"/>
                            <img src={star} alt="" width="10" class="animate5"/>
                        </div>
                        <p className="bg-blue-1 text-white text-sm px-6 py-2 mt-4 w-max rounded-lg" onClick={() => modal.current.open()}>Leave a rating</p>
                        <Modal ref={modal}> </Modal>
                    </div>
                </div>
            </div>
            
            
            <Footer />
        </>
    )
}

export default Internet

const Modal = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false)

    useImperativeHandle(ref, () => {
        return {
            open: () => setOpen(true),
            close: () => setOpen(false)
        }
    })

    const Choose = () =>{
        return(
            <>
                <div className="">
                    <p className="flex justify-end cursor-pointer" onClick={() => setOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(156, 163, 175)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></p>
                    
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-xl font-bold">Rate us</p>
                        <p className="text-sm text-center font-semibold">We love to hear from you. How is your tutorial experience?</p>
                        <div className="flex items-center my-10">
                            <span class="emoji emoji--crying"></span>
                            <span class="emoji emoji--sad"></span>
                            <span class="emoji emoji--neutral"></span>
                            <span class="emoji emoji--happy"></span>
                            <span class="emoji emoji--satisfy"></span>
                        </div>
                        <p>Thank you for rating</p>
                    </div>
                </div>
            </>
        )
    }

    return(
        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1,
                        transition: {
                            duration: 0.3
                        }
                    }}
                    exit={{
                        opacity: 0
                    }}
                    className="rating-container">
                        <motion.div
                        initial={{
                            scale: 0
                        }}
                        animate={{
                            scale: 1
                        }}
                        exit={{
                            scale: 0
                        }}
                        className="rating-box p-5 rounded-lg">
                            <motion.div
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.3
                                }
                            }}>
                                {props.children}
                                <Choose/>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
})

// import React from 'react'
// import { Link } from 'react-router-dom'

// import NavbarLogin from '../../../../major/NavbarLogin'
// import NavbarMobile from '../../../../major/NavbarMobile'
// import Footer from '../../../../major/Footer'

// function Internet() {
//     return (
//         <>
//             <NavbarLogin />
//             <NavbarMobile />
//             <div className="flex gap-10 mt-32 lg:mt-16 mx-10 md:mx-20 lg:mx-32 leading-7">
//                 <div className="w-3/4 pt-5">
//                     <div className="">
//                         <p className="text-2xl lg:text-5xl font-semibold">Basic Internet</p>
//                         <p className="text-lg mt-2">Learn the basics about the internet from understanding to the type of hosting</p>
//                         <p className="bg-blue-1 w-32 h-0.5 my-4"></p>
//                         <div className="flex gap-5">
//                             <p>Rating</p>
//                             <p>Learners</p>
//                         </div>
//                         <p>7 lessons | 7 videos | 56 min</p>
//                         <div className="flex gap-1">
//                             <p>Created by</p>
//                             <p className="font-semibold">William Kosasie</p>
//                         </div>
//                         <Link to="/what-is-internet">
//                             <p className="text-white font-semibold px-8 py-2 mt-5 rounded-lg w-max bg-blue-1 hover:bg-blue-400">Start learning</p>
//                         </Link>
//                     </div>
//                     <div className="bg-green-100 p-5 my-10 rounded-lg">
//                         <p className="text-lg font-semibold mb-2">What you'll learn</p>
//                         <div className="leading-loose">
//                             <div className="flex items-center gap-2">
//                                 <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
//                                 </svg>
//                                 <p>Understand what is internet and how it works.</p>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
//                                 </svg>
//                                 <p>Understand what is HTTP & HTTPS.</p>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
//                                 </svg>
//                                 <p>Understand what is browser and how it works.</p>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
//                                 </svg>
//                                 <p>Understand what is DNS Server and how it works.</p>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
//                                 </svg>
//                                 <p>Understand what is DNS Server, how it works and type of domain.</p>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
//                                 </svg>
//                                 <p>Understand what is Hosting and type of hosting.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <p className="text-lg font-semibold mb-2">About this tutorial</p>
//                         <div className="flex flex-col gap-4 leading-relaxed">
//                             <p>The Internet is a worldwide computer network that connects computers all over the world. The Internet's "backbone" is made up of multiple high-bandwidth data connections. These lines connect to key Internet hubs that distribute data to various places such as web servers and Internet service providers (ISPs).</p>
//                             <p>You must have access to an Internet service provider (ISP) in order to connect to the Internet. The ISP functions as a mediator between you and the Internet. The majority of ISPs provide broadband Internet access via cable, DSL, or fiber. When you use a public Wi-Fi signal to connect to the Internet, the Wi-Fi router is still connected to an ISP that provides Internet access. To provide Internet connectivity to linked devices, even cellular data towers must connect to an Internet service provider.</p>
//                         </div>
//                     </div>
//                     <div className="my-10 border-b">
//                         <p className="text-lg font-semibold mb-2">Review</p>
//                         <div>
//                             <div className="flex justify-between gap-2">
//                                 <p>Name</p>
//                                 <div className="text-right">
//                                     <p>Rating</p>
//                                     <p>Date</p>
//                                 </div>
//                             </div>
//                             <p className="py-5"> I have completed several of Max' courses by now and they are simply great to quickly kick off your career as a Web Dev. This course is no exception and really helped to get an understanding on how to use the MEAN stack. I would highly recommend doing Max' comprehensive Angular beforehand, since he explained all the important concepts there in more detail.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//             <Footer />
//         </>
//     )
// }

// export default Internet