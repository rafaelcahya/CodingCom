import React from 'react'
import {Link} from 'react-router-dom'

import Accordion from "../components/minor/accordion/Accordion"

import BenefitComp from './BenefitComp';
import StageComp from './StageComp';

import Syllabus from '../asset/file/Silabus-Update2021.pdf'
import BootcampNavbar from './BootcampNavbar';

function BootcampHome() {

    window.onload = setTimeout( function () {
        var x = localStorage.getItem("name");
        document.getElementById("demo").innerHTML = x;
    }, 10)

    const hiddenTexts = [{
        label: 'What will I get from the program?',
        value: 'Latest curriculum, Intensive Training, Networking, Carrer Opportunity, Certificate, and Prize'
    },
    {
        label: 'How can I apply?',
        value: 'You can directly apply through the registration form.'
    },
    {
        label: 'Who is eligible to apply for this program?',
        value: 'Everyone who have a minimum age of 15 years and over and has a high interest in technology.'
    },
    {
        label: 'How long does the registration selection process take?',
        value: 'Approximately 1 week. Our team will select registrations and invite tests for participants who meet the criteria.'
    },
    {
        label: 'What can I expect after I apply?',
        value: 'If you pass the Document screening, You will receive an email containing the syllabus, bootcamp schedule, and payment methods no later than one week after you register. Regularly check your email for further announcements and information.'
    },
    {
        label: 'When will the final announcement be made?',
        value: 'We will announce the final list of participants on 14 June 2021.'
    },
    {
        label: 'When and where will the program be held?',
        value: 'Tokopedia DevCamp will be held between 5 - 10 July 2021. Due to the pandemic, the program will be held remotely.'
    },
    {
        label: 'What do I need to prepare?',
        value: 'You have to at least spend approximately 6 hours per day for 5 days a week to follow the Fultime Coding Bootcamp and make sure you have your own laptop. Any supporting software and/or hardware needed will be informed to selected participants with the announcement email before the event.'
    },
    {
        label: 'Can I miss one or two sessions?',
        value: 'Participants are highly encouraged to participate in all of the activities, especially the hackathon. All of the participants’ attendance will be recorded.'
    },
    {
        label: 'Is there a selection of materials that I should choose?',
        value: 'No, Coding.com provides Full Stack web development materials covering common problems in the world of work'
    },
    {
        label: 'Should I have Programming background',
        value: 'No, we will provide training for all potential participants regardless of their educational background.'
    },
    {
        label: 'Does Hacktiv8 provide certificates upon graduation?',
        value: 'Hacktiv8 provides digital certificates for Hacktiv8 students who have successfully completed the Hacktiv8 learning program.'
    }];
    return (
        <>
            <BootcampNavbar/>

            <header className="header-bootcamp text-white">
                <div className=" flex flex-col items-center pt-56 pb-28">
                    <p className="text-4xl font-semibold text-center">Fulltime Coding Bootcamp</p>
                    <p className="text-xl font-medium w-3/5 text-center mt-5 mb-10">Be a part of coding.com and show your skills and creativity to impact others in an affordable time. Gain a knowledge base for the future and learn how to build a website for yourself or even your business.</p>
                    <p>Prepare yourself to be the next tech leaders!</p>
                    <Link to="/register-bootcamp">
                        <p className="bg-yellow-500 px-8 py-3 mt-5 mb-10 rounded-xl">Register Now</p>
                    </Link>
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

            <section className="color-black-1 bg-yellow-200 px-8 md:px-16 lg:px-40 py-20 my-20 md:my-28" id="syllabus">
                <p className="text-center text-3xl font-semibold mb-10">Syllabus Fulltime Coding Bootcamp</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 lg:gap-x-32 gap-y-12 py-10">
                    <div className="flex items-center gap-8">
                        <div className="bg-yellow-500 w-max p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cpu"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                        </div>
                        <div>
                            <p className="text-lg font-semibold mb-2">Mindset of a Programmer</p>
                            <p>Students will learn the mindset of a programmer to become a reliable programmer.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="bg-yellow-500 w-max p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                        </div>
                        <div>
                            <p className="text-lg font-semibold mb-2">Website Structure</p>
                            <p>Students will learn about the structure of making a website.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="bg-yellow-500 w-max p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                        </div>
                        <div>
                            <p className="text-lg font-semibold mb-2">Frontend side</p>
                            <p>Students will learn about creating websites from the frontend side using selected frameworks and libraries such as TailwindCSS/Bootstrap and React/Vue.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="bg-yellow-500 w-max p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tool"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                        </div>
                        <div>
                            <p className="text-lg font-semibold mb-2">Backend Side</p>
                            <p>Students will learn about creating a website from the backend side using NodeJS.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="bg-yellow-500 w-max p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                        </div>
                        <div>
                            <p className="text-lg font-semibold mb-2">Introduction to Databases</p>
                            <p>Students will learn how to create a database to build a website using MongoDB.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="bg-yellow-500 w-max p-3 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        <div>
                            <p className="text-lg font-semibold mb-2">Project</p>
                            <p>Students will be asked and will be guided to build an MVP (Minimum Viable Product).</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <a href={Syllabus} className="w-max bg-yellow-500 text-white font-medium px-8 py-3 mt-10 rounded-xl" download>Download syllabus</a>
                </div>
            </section>

            <section className="mx-8 md:mx-16 lg:mx-40 py-20 md:py-28" id="program">
                <p className="text-center text-3xl font-semibold mb-10">Fulltime Coding Bootcamp Program</p>
                <p className="text-xl leading-10 font-medium text-center lg:mx-10 xl:mx-32">Students will take part in intensive learning starting from the Preparation Phase to learn programming fundamentals and the Bootcamp Phase to learn the hard skills and soft skills needed to become a programmer.</p>
            </section>

            <section className="mx-8 md:mx-16 lg:mx-40 py-20 md:py-28">
                <p className="text-center text-3xl font-semibold mb-10">Bootcamp Process</p>
                <div className="grid md:flex md:flex-wrap md:justify-center md:items-center gap-10">
                    <div className="flex flex-col items-center gap-2">
                        <p className="font-semibold">Register</p>
                        <p>1 July 2021 - 13 August 2021</p>
                    </div>
                    <svg width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block">
                    <g clip-path="url(#clip0)"><path d="M1.17578 8.5L24.8244 8.5" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.0947 1.5L24.8245 8.5L20.0947 15.5" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs>
                    <clipPath id="clip0"><rect width="16" height="25" fill="white" transform="translate(0.5 16.5) rotate(-90)"/></clipPath></defs></svg>
                    <div className="flex flex-col items-center gap-2">
                        <p className="font-semibold">Document Screening</p>
                        <p>16 August 2021 - 19 August 2021</p>
                    </div>
                    <svg width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block">
                    <g clip-path="url(#clip0)"><path d="M1.17578 8.5L24.8244 8.5" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.0947 1.5L24.8245 8.5L20.0947 15.5" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs>
                    <clipPath id="clip0"><rect width="16" height="25" fill="white" transform="translate(0.5 16.5) rotate(-90)"/></clipPath></defs></svg>
                    <div className="flex flex-col items-center gap-2">
                        <p className="font-semibold">Announcement</p>
                        <p>23 August 2021</p>
                    </div>
                    <svg width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block">
                    <g clip-path="url(#clip0)"><path d="M1.17578 8.5L24.8244 8.5" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.0947 1.5L24.8245 8.5L20.0947 15.5" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs>
                    <clipPath id="clip0"><rect width="16" height="25" fill="white" transform="translate(0.5 16.5) rotate(-90)"/></clipPath></defs></svg>
                    <div className="flex flex-col items-center gap-2">
                        <p className="font-semibold">Bootcamp</p>
                        <p>30 August 2021 - 12 November 2021</p>
                    </div>
                    <svg width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block">
                    <g clip-path="url(#clip0)"><path d="M1.17578 8.5L24.8244 8.5" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20.0947 1.5L24.8245 8.5L20.0947 15.5" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g><defs>
                    <clipPath id="clip0"><rect width="16" height="25" fill="white" transform="translate(0.5 16.5) rotate(-90)"/></clipPath></defs></svg>
                    <div className="flex flex-col items-center gap-2">
                        <p className="font-semibold">Graduation</p>
                        <p>15 November 2021</p>
                    </div>
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
                        desc="In 1 week, you will learn how to structure the website and the programming paradigm"
                    />

                    <svg width="16" height="37" viewBox="0 0 16 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V36" stroke="rgb(217, 119, 6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 29L8 36L1 29" stroke="rgb(217, 119, 6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <StageComp
                        title="Stage 2"
                        desc="In 3 weeks, you will learn how to make a website from the frontend side"
                    />

                    <svg width="16" height="37" viewBox="0 0 16 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V36" stroke="rgb(217, 119, 6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 29L8 36L1 29" stroke="rgb(217, 119, 6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <StageComp
                        title="Stage 3"
                        desc="In 2 weeks, you will learn how to make a website from the backend side"
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
                        <p className="text-lg font-semibold mt-2">30 August 2021 - 12 November 2021</p>
                    </div>
                    <div className="text-center px-10 py-5 rounded-xl">
                        <p>Batch 2 will run on </p>
                        <p className="text-lg font-semibold mt-2">29 November 2021 - 25 February 2022</p>
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
                        <p className="font-semibold text-lg">09:00 AM - 15:00 PM</p>
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
                        <Link to="/register-bootcamp">
                            <p className="bg-yellow-500 text-white font-medium mt-20 px-6 py-2 rounded-xl">Register Now</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="mx-8 md:mx-16 lg:mx-40 py-20 md:py-28" id="faq">
                <p className="text-center text-3xl font-semibold mb-10">Frequently Asked Questions</p>
                <div className="flex justify-center">
                    <div className="w-full sm:w-3/4">
                        <Accordion hiddenTexts={hiddenTexts}/>
                    </div>
                </div>
            </section>
            
            <footer className="bg-black text-white flex flex-col items-center mt-10 py-20 md:py-28">
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
                        <p>About</p>
                        <p>Benefit</p>
                        <p>Program</p>
                        <p>Syllabus</p>
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


