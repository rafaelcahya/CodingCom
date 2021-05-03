import React, { useState } from 'react'
import {motion} from "framer-motion"
import BenefitComp from './BenefitComp';
import StageComp from './StageComp';

function BootcampHome() {
    
    const [open, setOpen] = useState(false)
    const menuVariants = {
        opened: {
            top: "8vh",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        },
        closed: {
            top: "-200vh"
        }
    }

    window.onload = setTimeout( function () {
        var x = localStorage.getItem("name");
        document.getElementById("demo").innerHTML = x;
    }, 500)
    return (
        <>
            <nav className="bootcamp-navbar hidden fixed w-full bg-white lg:flex justify-between items-center px-16 xl:px-32 py-5">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="30" height="45" viewBox="0 0 44 59"
                preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0,59) scale(0.1,-0.1)"
                fill="currentColor" stroke="none">
                <path d="M270 548 c-136 -52 -250 -236 -250 -403 0 -85 7 -101 51 -125 46 -24
                80 -25 117 -6 44 23 192 181 192 205 0 11 -5 21 -11 21 -6 0 -49 -36 -96 -80
                -90 -85 -135 -115 -160 -106 -13 5 -15 21 -11 84 5 94 44 175 125 262 60 66
                153 122 153 94 0 -10 -6 -25 -14 -33 -13 -14 -12 -18 10 -28 22 -10 26 -8 41
                13 25 39 24 70 -4 99 -32 31 -68 32 -143 3z m-184 -324 c-20 -56 -25 -63 -25
                -38 -1 49 31 126 46 110 2 -1 -8 -34 -21 -72z"/>
                </g>
                </svg>
                <div className="flex gap-14">
                    <a href="#about" className="hover:text-yellow-500">About</a>
                    <a href="#benefit">Benefit</a>
                    <a href="#program">Program</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#faq">FAQ</a>
                    <div className="flex items-center gap-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(90)" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        <p id="demo"></p>
                    </div>
                </div>
            </nav>

            <nav className="bootcamp-navbar fixed bg-white w-full flex lg:hidden justify-between items-center px-10 py-3 z-10">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="30" height="45" viewBox="0 0 44 59"
                preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0,59) scale(0.1,-0.1)"
                fill="currentColor" stroke="none">
                <path d="M270 548 c-136 -52 -250 -236 -250 -403 0 -85 7 -101 51 -125 46 -24
                80 -25 117 -6 44 23 192 181 192 205 0 11 -5 21 -11 21 -6 0 -49 -36 -96 -80
                -90 -85 -135 -115 -160 -106 -13 5 -15 21 -11 84 5 94 44 175 125 262 60 66
                153 122 153 94 0 -10 -6 -25 -14 -33 -13 -14 -12 -18 10 -28 22 -10 26 -8 41
                13 25 39 24 70 -4 99 -32 31 -68 32 -143 3z m-184 -324 c-20 -56 -25 -63 -25
                -38 -1 49 31 126 46 110 2 -1 -8 -34 -21 -72z"/>
                </g>
                </svg>
                <motion.svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu" onClick={() => setOpen(state => !state)} initial={false} animate={open ? "opened" : "closed"}><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></motion.svg>
            </nav>
            <motion.div
            initial= {false}
            variants={menuVariants}
            animate={open ? "opened" : "closed"} className="bootcamp-navbar fixed top-0 left-0 w-full lg:hidden flex flex-col">
                <a className="px-10 py-4 hover:bg-yellow-500 hover:text-white" href="#benefit">Benefit</a>
                <a className="px-10 py-4 hover:bg-yellow-500 hover:text-white" href="#program">Program</a>
                <a className="px-10 py-4 hover:bg-yellow-500 hover:text-white" href="#pricing">Pricing</a>
                <a className="px-10 py-4 hover:bg-yellow-500 hover:text-white" href="#faq">FAQ</a>
            </motion.div>

            <header className="header-bootcamp text-white">
                <div className=" flex flex-col items-center pt-56 pb-28">
                    <p className="text-4xl font-semibold text-center">Fulltime Coding Bootcamp</p>
                    <p className="text-xl font-medium w-3/5 text-center mt-5 mb-10">Be a part of coding.com and show your skills and creativity to impact others in an affordable time. Gain a knowledge base for the future and learn how to build a website for yourself or even your business.</p>
                    <p>Prepare yourself to be the next tech leaders!</p>
                    <p className="bg-yellow-600 px-8 py-3 mt-5 mb-10 rounded-xl">Register Now</p>
                </div>
            </header>

            <section className="mx-8 md:mx-16 lg:mx-40 py-20 md:py-28" id="about">
                <p className="text-center text-3xl font-semibold mb-10">What is Fulltime Coding Bootcamp?</p>
                <p className="text-xl leading-10 font-medium text-center lg:mx-10 xl:mx-32">FullTime Coding Bootcamp is a bootcamp with 11 weeks of intensive training on fullstack web programming for anyone who desires to create impact through technology. This program is open to all and a maximum of 1 year of work experience. Participants will gain experience building products in accordance with real projects.</p>

            </section>

            <section className="mx-8 md:mx-16 lg:mx-40 py-20 md:py-28" id="benefit">
                <p className="text-center text-3xl font-semibold mb-20">Benefits</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-20 text-center">
                    <BenefitComp
                        title="Latest curriculum"
                        desc="Specialize in advanced curriculum with real-life experience"
                    />
                    <BenefitComp
                        title="Intensive Training"
                        desc="Improve your skills & become an advanced user with our expert-led tech"
                    />
                    <BenefitComp
                        title="Networking"
                        desc="With a community of like-minded tech professionals"
                    />
                    <BenefitComp
                        title="Carrer Opportunity"
                        desc="Offers a great opportunity for participants to leave the bootcamp with valuable industry experience"
                    />
                    <BenefitComp
                        title="Certificate"
                        desc="Show that you are experienced"
                    />
                    <BenefitComp
                        title="Prize"
                        desc="Win a prize worth up to IDR 100 million"
                    />
                </div>
            </section>

            <section className="mx-8 md:mx-16 lg:mx-40 py-20 md:py-28" id="program">
                <p className="text-center text-3xl font-semibold mb-10">Fulltime Coding Bootcamp Program</p>
                <p className="text-xl leading-10 font-medium text-center lg:mx-10 xl:mx-32">Students will take part in intensive learning starting from the Preparation Phase to learn programming fundamentals and the Bootcamp Phase to learn the hard skills and soft skills needed to become a programmer.</p>
            </section>

            <section className="mx-8 md:mx-16 lg:mx-40 py-20 md:py-28">
                <p className="text-center text-3xl font-semibold mb-10">Bootcamp Process</p>
                <div className="flex flex-wrap justify-center items-center gap-10">
                    <p>Register</p>
                    <svg width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)"><path d="M1.17578 8.5L24.8244 8.5" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.0947 1.5L24.8245 8.5L20.0947 15.5" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs>
                    <clipPath id="clip0"><rect width="16" height="25" fill="white" transform="translate(0.5 16.5) rotate(-90)"/></clipPath></defs></svg>
                    <p>Document Screening</p>
                    <svg width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)"><path d="M1.17578 8.5L24.8244 8.5" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.0947 1.5L24.8245 8.5L20.0947 15.5" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs>
                    <clipPath id="clip0"><rect width="16" height="25" fill="white" transform="translate(0.5 16.5) rotate(-90)"/></clipPath></defs></svg>
                    <p>Announcement</p>
                    <svg width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)"><path d="M1.17578 8.5L24.8244 8.5" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.0947 1.5L24.8245 8.5L20.0947 15.5" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs>
                    <clipPath id="clip0"><rect width="16" height="25" fill="white" transform="translate(0.5 16.5) rotate(-90)"/></clipPath></defs></svg>
                    <p>Bootcamp</p>
                    <svg width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)"><path d="M1.17578 8.5L24.8244 8.5" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.0947 1.5L24.8245 8.5L20.0947 15.5" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs>
                    <clipPath id="clip0"><rect width="16" height="25" fill="white" transform="translate(0.5 16.5) rotate(-90)"/></clipPath></defs></svg>
                    <p>Graduation</p>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <p className="text-center text-3xl font-semibold mb-10">Stages</p>
                <div className="flex flex-col items-center gap-7 text-center">
                    <StageComp
                        title="Preparation"
                        desc="In the first week, you will learn the basics and mindset of programming"
                    />

                    <svg width="16" height="37" viewBox="0 0 16 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V36" stroke="rgb(217, 119, 6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 29L8 36L1 29" stroke="rgb(217, 119, 6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    
                    <StageComp
                        title="Stage 1"
                        desc="In 1 week, you will learn how to structure the application or website and the programming paradigm"
                    />

                    <svg width="16" height="37" viewBox="0 0 16 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V36" stroke="rgb(217, 119, 6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 29L8 36L1 29" stroke="rgb(217, 119, 6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <StageComp
                        title="Stage 2"
                        desc="In 3 weeks, you will learn how to make a website from the frontend side (HTML, CSS, Javascript, React and, Vue)"
                    />

                    <svg width="16" height="37" viewBox="0 0 16 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V36" stroke="rgb(217, 119, 6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 29L8 36L1 29" stroke="rgb(217, 119, 6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <StageComp
                        title="Stage 3"
                        desc="In 2 weeks, you will learn how to make a website from the backend side (NodeJS and MongoDB)"
                    />
                    
                    <svg width="16" height="37" viewBox="0 0 16 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V36" stroke="rgb(217, 119, 6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 29L8 36L1 29" stroke="rgb(217, 119, 6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <StageComp
                        title="Final Stage"
                        desc="in 4 weeks, You will be given a big project and then will be presented"
                    />
                </div>
            </section>

            <section className="py-10 mt-10 mb-20 md:mb-28 bg-yellow-200 text-black">
                <div className="flex justify-center gap-10  lg:mx-10 xl:mx-32">
                    <div className="text-center px-10 py-5 rounded-xl">
                        <p>Batch 1 will run on </p>
                        <p className="text-lg font-semibold mt-2">1 August 2020 - 15 October 2020</p>
                    </div>
                    <div className="text-center px-10 py-5 rounded-xl">
                        <p>Batch 2 will run on </p>
                        <p className="text-lg font-semibold mt-2">25 October 2020 - 21 Januari 2021</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-20 md:gap-0 px-8 md:px-16 lg:px-40 py-10">
                    <div>
                        <p className="mb-2">Duration</p>
                        <p className="font-semibold text-lg ">11 weeks</p>
                    </div>
                    <div>
                        <p className="mb-2">Day</p>
                        <p className="font-semibold text-lg ">Monday - Friday</p>
                    </div>
                    <div>
                        <p className="mb-2">Time</p>
                        <p className="font-semibold text-lg ">09:00 AM - 15:00 PM</p>
                    </div>
                </div>
            </section>

            <section className="mx-8 md:mx-16 lg:mx-40 py-20 md:py-28" id="pricing">
                <p className="text-center text-3xl font-semibold mb-10">Package Price</p>
                <div className="flex justify-center">
                    <div className="bootcamp-package flex flex-col items-center text-center ring-2 ring-yellow-500  w-64 py-5 rounded-xl">
                        <p className="text-gray-400 font-semibold text-xs uppercase">Fulltime</p>
                        <p className="text-yellow-500 font-bold text-4xl my-5">2 juta</p>
                        <div className="flex flex-col gap-2 font-medium text-sm">
                            <p>Intensive training</p>
                            <p>Latest curriculum</p>
                            <p>Networking</p>
                            <p>Career Opportunity</p>
                            <p>Certificate</p>
                        </div>
                        <p className="bg-yellow-500 text-white font-medium mt-20 px-6 py-2 rounded-xl">Register Now</p>
                    </div>
                </div>
            </section>
            
            <footer className="bg-black text-white flex flex-col items-center mt-20 lg:mt-56 py-20 md:py-28">
                <div>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="30" height="45" viewBox="0 0 44 59"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0,59) scale(0.1,-0.1)"
                        fill="white" stroke="none">
                        <path d="M270 548 c-136 -52 -250 -236 -250 -403 0 -85 7 -101 51 -125 46 -24
                        80 -25 117 -6 44 23 192 181 192 205 0 11 -5 21 -11 21 -6 0 -49 -36 -96 -80
                        -90 -85 -135 -115 -160 -106 -13 5 -15 21 -11 84 5 94 44 175 125 262 60 66
                        153 122 153 94 0 -10 -6 -25 -14 -33 -13 -14 -12 -18 10 -28 22 -10 26 -8 41
                        13 25 39 24 70 -4 99 -32 31 -68 32 -143 3z m-184 -324 c-20 -56 -25 -63 -25
                        -38 -1 49 31 126 46 110 2 -1 -8 -34 -21 -72z"/>
                        </g>
                    </svg>
                </div>
                <div className="flex flex-col lg:flex-row gap-32 text-sm text-center lg:text-left mt-10">
                    <div className="flex flex-col gap-3">
                        <p className="font-semibold my-2">Navigation</p>
                        <p>Benefit</p>
                        <p>Program</p>
                        <p>Pricing</p>
                        <p>FAQ</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="font-semibold my-2">Location</p>
                        <p>Jakarta, Indonesia</p>
                        <p>codingcom@code.com</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="font-semibold my-2">Social Media</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                    </div>
                </div>
                <p className="text-xs text-white mt-10">Copyright 2021 all right reserved</p>
            </footer>
        </>
    )
}

export default BootcampHome
