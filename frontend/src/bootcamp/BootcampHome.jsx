import React from 'react'
import BenefitComp from './BenefitComp';
import StageComp from './StageComp';

function BootcampHome() {
    window.onload = setTimeout( function () {
        var x = localStorage.getItem("name");
        document.getElementById("demo").innerHTML = x;
    }, 500)
    return (
        <>
            <nav className="flex justify-between items-center px-16 xl:px-32 py-5">
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
                    <p>About</p>
                    <p>Learn</p>
                    <p>Program</p>
                    <p>Testimonials</p>
                    <p>FAQs</p>
                    <div className="flex items-center gap-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(90)" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        <p id="demo"></p>
                    </div>
                </div>
            </nav>

            <header className="header-bootcamp text-white">
                <div className=" flex flex-col items-center py-32">
                    <p className="text-4xl font-semibold">Fulltime Coding Bootcamp</p>
                    <p className="text-xl font-medium w-3/5 text-center mt-5 mb-10">Be a part of coding.com and show your skills and creativity to impact others in an affordable time. Gain a knowledge base for the future and learn how to build a website for yourself or even your business.</p>
                    <p>Prepare yourself to be the next tech leaders!</p>
                    <p className="bg-yellow-600 px-8 py-3 mt-5 mb-10 rounded-xl">Register Now</p>
                </div>
            </header>

            <section className="mx-8 md:mx-16 lg:mx-40 py-32">
                <p className="text-center text-3xl font-semibold mb-20">Benefits</p>
                <div className="grid grid-cols-3 gap-x-20 gap-y-20 text-center">
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

            <section className="mx-8 md:mx-16 lg:mx-40 py-32">
                <p className="text-center text-3xl font-semibold mb-20">Fulltime Coding Bootcamp Stages</p>
                <div className="flex flex-col items-center gap-7 text-center">
                    <StageComp
                        title="Preparation"
                        desc="At this stage, learners will learn the basics and mindset of programming"
                    />

                    <svg width="16" height="37" viewBox="0 0 16 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V36" stroke="rgb(217, 119, 6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 29L8 36L1 29" stroke="rgb(217, 119, 6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    
                    <StageComp
                        title="Stage 1"
                        desc="t this stage, learners will learn how to structure the application or website and the programming paradigm"
                    />

                    <svg width="16" height="37" viewBox="0 0 16 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V36" stroke="rgb(217, 119, 6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 29L8 36L1 29" stroke="rgb(217, 119, 6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <StageComp
                        title="Stage 2"
                        desc="At this stage, learners will learn how to make a website from the frontend side"
                    />

                    <svg width="16" height="37" viewBox="0 0 16 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V36" stroke="rgb(217, 119, 6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 29L8 36L1 29" stroke="rgb(217, 119, 6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <StageComp
                        title="Stage 3"
                        desc="t this stage, learners will learn how to make a website from the backend side"
                    />
                    
                    <svg width="16" height="37" viewBox="0 0 16 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V36" stroke="rgb(217, 119, 6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 29L8 36L1 29" stroke="rgb(217, 119, 6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <StageComp
                        title="Final Stage"
                        desc="At final stage, learners are given a big project and then it will be presented"
                    />
                </div>
            </section>
        </>
    )
}

export default BootcampHome
