import React from 'react'
import { Link } from 'react-router-dom'

import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'
import Footer from '../../../../major/Footer'

function Internet() {
    return (
        <>
            <NavbarLogin />
            <NavbarMobile />
            <div className="flex gap-10 mt-32 lg:mt-16 mx-10 md:mx-20 lg:mx-32 leading-7">
                <div className="w-3/4 pt-5">
                    <div className="">
                        <p className="text-2xl lg:text-5xl font-semibold">Basic Internet</p>
                        <p className="text-lg mt-2">Learn the basics about the internet from understanding to the type of hosting</p>
                        <p className="bg-blue-1 w-32 h-0.5 my-4"></p>
                        <div className="flex gap-5">
                            <p>Rating</p>
                            <p>Learners</p>
                        </div>
                        <p>7 lessons | 7 videos | 56 min</p>
                        <div className="flex gap-1">
                            <p>Created by</p>
                            <p className="font-semibold">William Kosasie</p>
                        </div>
                        <Link to="/user-course/11">
                            <p className="text-white font-semibold px-8 py-2 mt-5 rounded-lg w-max bg-blue-1 hover:bg-blue-400">Start learning</p>
                        </Link>
                    </div>
                    <div className="bg-green-100 p-5 my-10 rounded-lg">
                        <p className="text-lg font-semibold mb-2">What you'll learn</p>
                        <div className="leading-loose">
                            <div className="flex items-center gap-2">
                                <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
                                </svg>
                                <p>Understand what is internet and how it works.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
                                </svg>
                                <p>Understand what is HTTP & HTTPS.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
                                </svg>
                                <p>Understand what is browser and how it works.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
                                </svg>
                                <p>Understand what is DNS Server and how it works.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
                                </svg>
                                <p>Understand what is DNS Server, how it works and type of domain.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
                                </svg>
                                <p>Understand what is Hosting and type of hosting.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg font-semibold mb-2">About this tutorial</p>
                        <div className="flex flex-col gap-4 leading-relaxed">
                            <p>The Internet is a worldwide computer network that connects computers all over the world. The Internet's "backbone" is made up of multiple high-bandwidth data connections. These lines connect to key Internet hubs that distribute data to various places such as web servers and Internet service providers (ISPs).</p>
                            <p>You must have access to an Internet service provider (ISP) in order to connect to the Internet. The ISP functions as a mediator between you and the Internet. The majority of ISPs provide broadband Internet access via cable, DSL, or fiber. When you use a public Wi-Fi signal to connect to the Internet, the Wi-Fi router is still connected to an ISP that provides Internet access. To provide Internet connectivity to linked devices, even cellular data towers must connect to an Internet service provider.</p>
                        </div>
                    </div>
                    <div className="my-10 border-b">
                        <p className="text-lg font-semibold mb-2">Review</p>
                        <div>
                            <div className="flex justify-between gap-2">
                                <p>Name</p>
                                <div className="text-right">
                                    <p>Rating</p>
                                    <p>Date</p>
                                </div>
                            </div>
                            <p className="py-5"> I have completed several of Max' courses by now and they are simply great to quickly kick off your career as a Web Dev. This course is no exception and really helped to get an understanding on how to use the MEAN stack. I would highly recommend doing Max' comprehensive Angular beforehand, since he explained all the important concepts there in more detail.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default Internet