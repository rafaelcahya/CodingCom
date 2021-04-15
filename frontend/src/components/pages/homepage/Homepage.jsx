import React, {Fragment, useEffect} from 'react'
import { Link } from "react-router-dom"

import AOS from "aos"
import "../../../../node_modules/aos/dist/aos.css"

import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import MentorComp from './MentorComp'
import PlanComp from './PlanComp'
import Footer from '../../major/Footer'

import header from "../../../asset/photo/backgroundheader.jpg"

import learning_path from "../../../asset/icon/learningpath.svg"
import challenge from "../../../asset/icon/challenge.svg"
import forum from "../../../asset/icon/forum.svg"
import news from "../../../asset/icon/newspaper.svg"
import career from "../../../asset/icon/career.svg"
import compiler from "../../../asset/icon/gear.svg"
import certificate from "../../../asset/icon/certificate.svg"
import bundle from "../../../asset/icon/bundle.svg"
import mentor from "../../../asset/icon/mentor.svg"

import anastasiaclara from "../../../asset/photo/anastasiaclara_mentor.png"
import angelica from "../../../asset/photo/angelica_mentor.png"
import irene from "../../../asset/photo/irene_mentor.png"
import jessica from "../../../asset/photo/jessica_mentor.png"
import joe from "../../../asset/photo/joe_mentor.png"
import toby from "../../../asset/photo/toby_mentor.png"

export default function Homepage() {
    AOS.init();
    
    useEffect(() => {
        if (!localStorage.getItem("loggedIn")) {
            localStorage.setItem("loggedIn", false);
            }
        }, []);

    return (
        <Fragment>
            <div className="overflow-x-hidden">
                <NavbarLogin /> 
                <NavbarMobile /> 
                <header className="headerheader flex justify-center lg:justify-between items-center text-white mx-10 lg:mx-20 px-10 lg:px-20 py-32 mt-32 lg:mt-0 rounded-xl">
                    <div className="flex flex-col items-center lg:items-start gap-2">
                        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold">Coding.com</p>
                        <div className="change-text-anim text-center lg:text-left text-sm lg:text-base px-14 lg:px-0"></div>
                        <p className="bg-orange-1 text-white text-sm font-medium px-8 py-3 mt-10 rounded-xl w-max">Start learning today</p>
                    </div>
                    <div className="hidden lg:block">
                        <img src={header} alt="" width="400" className="rounded-3xl"/>
                    </div>
                </header>

                <section className="mx-8 md:mx-16 lg:mx-64 my-20 lg:mb-44">
                    <p className="text-center text-2xl md:text-4xl font-semibold py-10">Our Popular Tutorials</p>
                    <div className="cta flex flex-wrap justify-center items-center gap-5">
                        <p>Web Design</p>
                        <p>Frontend</p>
                        <p>Backend</p>
                        <p>Database</p>
                        <p>DevOps</p>
                    </div>
                </section>

                <section data-aos="fade-up"
                        data-aos-offset="150"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out" className="text-center text-2xl md:text-4xl lg:text-5xl font-semibold mx-8 md:mx-16 lg:mx-64 mt-20 mb-10">
                    <p>Anytime, anywhere <span className="color-blue-1">learn on your schedule</span> from any device</p>
                </section>

                <section className="feature-box grid grid-flow-row grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-10 mx-4 md:mx-8 lg:mx-44">
                    <div data-aos="fade-up"
                        data-aos-offset="150"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out">
                        <div className="bg-green-1-10 rounded-full p-6">
                            <img src={learning_path} alt="" width="36" />
                        </div>
                        <div>
                            <p>Learning Path</p>
                            <p>Well-structured learning path</p>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-offset="150"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out">
                        <div className="bg-red-1-10 rounded-full px-6 py-8">
                            <img src={challenge} alt="" width="36"/>
                        </div>
                        <div>
                            <p>Challenge</p>
                            <p>Solve real-world HTML, CSS and JavaScript challenges</p>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-offset="150"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out">
                        <div className="bg-blue-1-10 rounded-full p-6">
                            <img src={forum} alt="" width="36"/>
                        </div>
                        <div>
                            <p>Forum Discussion</p>
                            <p>Share knowledge and experiences</p>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-offset="150"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out">
                        <div className="bg-red-1-10 rounded-full p-6">
                            <img src={news} alt="" width="36"/>
                        </div>
                        <div>
                            <p className="text-center">News</p>
                            <p>Update technology insights with the latest news</p>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-offset="150"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out">
                        <div className="bg-brown-1-10 rounded-full p-6">
                            <img src={career} alt="" width="36"/>
                        </div>
                        <div>
                            <p>Career</p>
                            <p>Show your skills in the real world</p>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-offset="150"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out">
                        <div className="bg-blue-1-10 rounded-full p-6">
                            <img src={compiler} alt="" width="36"/>
                        </div>
                        <div>
                            <p>Live Compiler</p>
                            <p>Easy and simple learning just for you</p>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-offset="150"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out">
                        <div className="bg-orange-1-10 rounded-full p-6">
                            <img src={certificate} alt="" width="36"/>
                        </div>
                        <div>
                            <p>Certificate</p>
                            <p>Enlarge your web development experience</p>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-offset="150"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out">
                        <div className="bg-blue-1-10 rounded-full p-6">
                            <img src={bundle} alt="" width="36"/>
                        </div>
                        <div>
                            <p>Premium plan</p>
                            <p>Affordable plan prices</p>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-offset="150"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out">
                        <div className="bg-red-1-10 rounded-full p-6">
                            <img src={mentor} alt="" width="36"/>
                        </div>
                        <div>
                            <p>Mentors</p>
                            <p>Profesional mentor with a lot of experience</p>
                        </div>
                    </div>
                </section>

                {/* <section className="flex flex-col items-center my-32">
                    <p className="text-center text-2xl md:text-4xl font-semibold py-10">Get your Premium Plan with life-time access</p>
                    <section data-aos="zoom-in"
                        data-aos-offset="150"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out" className="plan-box flex flex-col justify-center shadow-2xl mx-10 px-12 py-2 rounded-xl">
                        <div className="flex flex-col md:flex-row justify-center gap-x-24 gap-y-10 md:gap-y-0 text-center md:text-left">
                            <div className="flex flex-col justify-between">
                                <PlanComp
                                    planName="Starter Plan"
                                    currency="Rp"
                                    price="0"
                                    get1="No ads"
                                    get2="Unlimited course"
                                    get3="Live Compiler tool"
                                    get4="Career access"
                                    get5="News access"
                                    get6="Get certificate"
                                    get7="Get future updates"
                                />
                            </div>
                            <div className="flex flex-col justify-between">
                                <PlanComp
                                    planName="Premium plan"
                                    currency="Rp"
                                    price="286,000"
                                    access="/month"
                                    get1="No ads"
                                    get2="Unlimited course"
                                    get3="Live Compiler tool"
                                    get4="Career access"
                                    get5="News access"
                                    get6="Get certificate"
                                    get7="Get future updates"
                                    get8="DevOps course"
                                    get10="Class session access"
                                />
                                <Link to="/payment-confirmation-premium" className="bg-blue-1 text-white text-sm text-center py-2 rounded-xl cursor-pointer">Get started</Link>
                            </div>
                            <div className="flex flex-col justify-between">
                                <PlanComp
                                    planName="Premium plan plus"
                                    currency="Rp"
                                    price="430,000"
                                    get1="No ads"
                                    get2="Unlimited course"
                                    get3="Live Compiler tool"
                                    get4="Career access"
                                    get5="News access"
                                    get6="Get certificate"
                                    get7="Get future updates"
                                    get8="DevOps course"
                                    get10="Class session access"
                                    get11="Life-time access"
                                />
                                <Link to="/payment-confirmation-premiumplus" className="bg-blue-1 text-white text-sm text-center py-2 rounded-xl cursor-pointer">Get started</Link>
                            </div>
                        </div>
                        <article className="text-xs mt-10">
                            <p>*Unlimited courses only for the internet course, web design course, frontend course, backend course and relational database course.</p>
                            <p>*Get future update means you will always get all updates from the features and courses.</p>
                        </article>
                    </section>
                </section> */}

                <section className="flex flex-col items-center gap-5 mt-32">
                    <p className="text-center text-2xl md:text-4xl font-semibold">Start learning today</p>
                    <p className="text-center" style={{width: "500px"}}>Whether you’re interested in learning how to code or getting a head start in web development, this website will be a powerful ally.</p>
                    <p className="bg-orange-1 text-white text-sm font-medium px-8 py-3 mt-10 rounded-xl w-max">Start learning today</p>
                </section>
            </div>
            <Footer/>
        </Fragment>
    )
}