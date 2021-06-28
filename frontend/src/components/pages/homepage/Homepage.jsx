import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom"

import AOS from "aos"
import "../../../../node_modules/aos/dist/aos.css"

import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import Footer from '../../major/Footer'

import tutorial1 from "../../../asset/icon/Homepage/design.svg"
import tutorial2 from "../../../asset/icon/Homepage/frontend.svg"
import tutorial3 from "../../../asset/icon/Homepage/backend.svg"
import tutorial4 from "../../../asset/icon/Homepage/database.svg"
import tutorial5 from "../../../asset/icon/Homepage/devops.svg"

import whychooseus from "../../../asset/photo/homepage/whychooseus2.jpg" 

import bootcamp from "../../../asset/photo/homepage/bootcamp/bootcamp3.png"
import Confetti from '../../minor/confetti/Confetti';

export default function Homepage() {
    AOS.init();
    const [name,setName] = useState("")
    let x

    window.onload = setTimeout(function () {
        x = localStorage.getItem("name");
        setName(x)
    }, 10)
    
    useEffect(() => {
        if (!localStorage.getItem("loggedIn")) {
            localStorage.setItem("loggedIn", false);
            }
        }, []);
    return (
        <>
            <Link to={"/feedback/" + name}>
                <p className="fixed left-0 bottom-0 bg-blue-1 text-white text-sm px-4 py-2 cursor-pointer z-10">Feedback</p>
            </Link>
            <div className="overflow-x-hidden">
                <NavbarLogin /> 
                <NavbarMobile /> 
                <header className="headerheader flex justify-center lg:justify-between items-center mx-10 lg:mx-32 mt-20 lg:mt-16 mb-48">
                    <div className="flex flex-col gap-2">
                        <div data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="0" className="flex items-center gap-5 my-4 sm:my-8">
                            <Confetti/>
                            <p className="shake text-3xl sm:text-4xl font-semibold">coding.com</p>
                        </div>
                        <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="150" className="text-2xl sm:text-3xl md:text-6xl font-bold mr-10 md:mr-20 mb-4 sm:mb-8">An educational platform for web programming from scratch.</p>
                        <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="300" className="change-text-anim text-base sm:text-xl font-medium text-gray-500 mb-10"></p>
                        <div className="w-max">
                            <Link to="/tutorial">
                                <p data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-delay="450" className="animate__tada bg-blue-1 text-white font-medium px-8 py-3 rounded-lg block hover:bg-yellow-300">Start learning today</p>
                            </Link>
                        </div>
                    </div>
                </header>

                <div className="mx-10 md:mx-16 lg:mx-20 my-20 lg:mb-32">
                    <div className="cta flex flex-wrap justify-center gap-10">
                        <div className="bg-white flex flex-col justify-center items-center gap-2 py-5 w-56 rounded-xl shadow-4xl hover-translateY">
                            <div className="h-12 w-12 p-3 rounded-full" style={{backgroundColor: "#ff75a0"}}>
                                <img src={tutorial1} alt=""/>
                            </div>
                            <p className="font-semibold">Web Design</p>
                        </div>
                        <div  className="bg-white flex flex-col justify-center items-center gap-2 py-5 w-56 rounded-xl shadow-4xl hover-translateY">
                            <div className="h-12 w-12 p-3 rounded-full" style={{backgroundColor: "#7868e6"}}>
                                <img src={tutorial2} alt="" />
                            </div>
                            <p className="font-semibold">Frontend Development</p>
                        </div>
                        <div  className="bg-white flex flex-col justify-center items-center gap-2 py-5 w-56 rounded-xl shadow-4xl hover-translateY">
                            <div className="h-12 w-12 p-3 rounded-full" style={{backgroundColor: "#ffab73"}}>
                                <img src={tutorial3} alt=""/>
                            </div>
                            <p className="font-semibold">Backend Development</p>
                        </div>
                        <div  className="bg-white flex flex-col justify-center items-center gap-2 py-5 w-56 rounded-xl shadow-4xl hover-translateY">
                            <div className="h-12 w-12 p-3 rounded-full" style={{backgroundColor: "#6ddccf"}}>
                                <img src={tutorial4} alt=""/>
                            </div>
                            <p className="font-semibold">Database Management</p>
                        </div>
                        <div  className="bg-white flex flex-col justify-center items-center gap-2 py-5 w-56 rounded-xl shadow-4xl hover-translateY">
                            <div className="h-12 w-12 p-3 rounded-full" style={{backgroundColor: "#91c788"}}>
                                <img src={tutorial5} alt=""/>
                            </div>
                            <p className="font-semibold text-center">Development and IT operations</p>
                        </div>
                    </div>
                </div>

                <div className="mx-10 md:mx-16 lg:mx-20 my-32 lg:my-48">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <img src={whychooseus} alt="" width={500} data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in-out"/>
                        <div className="flex flex-col gap-5">
                            <p className="color-blue-1 tracking-widest font-semibold" data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="0">Why Choose Us</p>
                            <p className="text-3xl font-bold" data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="100">Online Learning</p>
                            <p className="text-gray-500 leading-7" data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="150">Coding.com offers you how to build a website from scratch with online learning. improve your skills with us, we will be ready to help achieve your goals</p>
                            <div className="font-medium ml-5">
                                <div className="flex items-center gap-2" data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="165">
                                    <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8"/>
                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                    </svg>
                                    <p className="hover-translateX">Latest Learning Path</p>
                                </div>
                                <div className="flex items-center gap-2" data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="180">
                                    <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8"/>
                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                    </svg>
                                    <p className="hover-translateX">Challenge</p>
                                </div>
                                <div className="flex items-center gap-2" data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="195">
                                    <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8"/>
                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                    </svg>
                                    <p className="hover-translateX">Consultation</p>
                                </div>
                                <div className="flex items-center gap-2" data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="210">
                                    <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8"/>
                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                    </svg>
                                    <p className="hover-translateX">Coding Class</p>
                                </div>
                                <div className="flex items-center gap-2" data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="225">
                                    <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8"/>
                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                    </svg>
                                    <p className="hover-translateX">Bootcamp</p>
                                </div>
                                <div className="flex items-center gap-2" data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="240">
                                    <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8"/>
                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                    </svg>
                                    <p className="hover-translateX">Text Editor</p>
                                </div>
                                <div className="flex items-center gap-2" data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="255">
                                    <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8"/>
                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                    </svg>
                                    <p className="hover-translateX">Certificate</p>
                                </div>
                                <div className="flex items-center gap-2" data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="270">
                                    <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8"/>
                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                    </svg>
                                    <p className="hover-translateX">Bootcamp</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-10 md:mx-16 lg:mx-20 my-32 lg:my-48">
                    {/* <span data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom" className="flex justify-center gap-3 text-2xl sm:text-3xl md:text-5xl text-left md:text-center font-semibold py-10">Fulltime Coding <span className="animated tada">Bootcamp</span></span> */}
                    <div className="flex flex-col lg:flex-row items-center gap-28">
                        <img src={bootcamp} alt="" width={450} data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in-out"/>
                        <div className="flex flex-col gap-5">
                            <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="0" className="color-blue-1 tracking-widest font-semibold">Bootcamp</p>
                            <span data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="100" className="flex gap-3 text-3xl font-bold">Fulltime Coding <span className="animated tada">Bootcamp</span></span>
                            <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="150" className="text-gray-500 leading-7">Join this bootcamp for a career in industry. Learn everything from basic coding, UI designing to deployment.</p>
                            <Link to="/bootcamp">
                                <p className="bg-blue-1 text-white font-semibold px-8 py-2 mb-5 rounded-lg w-max hover:bg-blue-400">Join now</p>
                            </Link>
                            <div className="flex gap-5">
                                <p data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200" className="border-2 border-blue-300 px-2 py-1 text-sm rounded-xl">Classroom</p>
                                <p data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200" className="border-2 border-blue-300 px-2 py-1 text-sm rounded-xl">Online</p>
                                <p data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200" className="border-2 border-blue-300 px-2 py-1 text-sm rounded-xl">Fullstack</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="discord flex flex-col items-center gap-10 text-center text-white mx-10 lg:mx-20 px-10 lg:px-20 py-20 mt-32 lg:mt-0 rounded-xl" >
                    <img src="https://cdn.discordapp.com/attachments/414258067870449665/445736475158380544/discord.gif" alt="discord" width={100}/>
                    <div className="flex flex-col gap-5">
                        <p className=" text-xl font-semibold">Join us in our community.</p>
                        <p>We talk about challenge and project, help each other with code, chat about all things web development.</p>
                    </div>
                    <a href="https://discord.gg/rvdAvXYt" className="font-medium px-8 py-3 rounded-xl" style={{backgroundColor: "#2c2f33"}}>Join us</a>
                </div>

                <div className="flex flex-col items-center gap-5 mt-32 mx-10">
                    <p data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-delay="100" className="text-center text-3xl sm:text-4xl font-semibold">Start learning today</p>
                    <p data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-delay="200" className="text-base sm:text-lg font-medium text-center w-full sm:w-1/2">Whether you’re interested in learning how to code or getting a head start in web development, this website will be a powerful ally.</p>
                    <Link to="/tutorial">
                        <p data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-delay="300" className="bg-orange-1 text-white font-medium px-8 py-3 mt-10 rounded-lg w-max hover:bg-yellow-300">Start learning today</p>
                    </Link>
                </div>
            </div>
            <Footer/>
        </>
    )
}