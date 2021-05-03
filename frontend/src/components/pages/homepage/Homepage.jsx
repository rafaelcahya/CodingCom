import React, {Fragment, useEffect} from 'react'
import { Link } from "react-router-dom"

import AOS from "aos"
import "../../../../node_modules/aos/dist/aos.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import "../../../../node_modules/swiper/swiper.min.css"

import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import FeatureComp from './FeatureComp'
import Footer from '../../major/Footer'

import header from "../../../asset/photo/backgroundheader.jpg"

import tutorial1 from "../../../asset/icon/Homepage/design.svg"
import tutorial2 from "../../../asset/icon/Homepage/frontend.svg"
import tutorial3 from "../../../asset/icon/Homepage/backend.svg"
import tutorial4 from "../../../asset/icon/Homepage/database.svg"
import tutorial5 from "../../../asset/icon/Homepage/devops.svg"

import learningPath from "../../../asset/photo/homepage/feature/learning-path.jpg"
import challenge from "../../../asset/photo/homepage/feature/challenge.jpg"
import consultation from "../../../asset/photo/homepage/feature/consultation.jpg"
import bootcamp2 from "../../../asset/photo/homepage/feature/bootcamp.jfif"
import textEditor from "../../../asset/photo/homepage/feature/text-editor.jpg"
import certificate from "../../../asset/photo/homepage/feature/certificate.jpg"

import bootcamp from "../../../asset/photo/homepage/bootcamp/bootcamp3.jfif"

SwiperCore.use([Navigation, Pagination]);

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
                        <Link to="/tutorial">
                            <p className="bg-orange-1 text-white text-sm font-medium px-8 py-3 mt-10 rounded-xl w-max hover:bg-yellow-300">Start learning today</p>
                        </Link>
                    </div>
                    <div className="hidden lg:block">
                        <img src={header} alt="" width="400" className="rounded-3xl"/>
                    </div>
                </header>

                <section className="mx-8 md:mx-16 lg:mx-64 my-20 lg:mb-32">
                    <p className="text-center text-2xl md:text-4xl font-semibold py-10">Our Tutorials</p>
                    <div className="cta flex flex-wrap justify-center gap-10">
                        <div className="bg-white flex flex-col justify-center items-center gap-2 py-5 w-56 rounded-xl">
                            <div className="h-12 w-12 p-3 rounded-full" style={{backgroundColor: "#ff75a0"}}>
                                <img src={tutorial1} alt=""/>
                            </div>
                            <p className="font-semibold">Design</p>
                        </div>
                        <div className="bg-white flex flex-col justify-center items-center gap-2 py-5 w-56 rounded-xl">
                            <div className="h-12 w-12 p-3 rounded-full" style={{backgroundColor: "#7868e6"}}>
                                <img src={tutorial2} alt="" />
                            </div>
                            <p className="font-semibold">Frontend</p>
                        </div>
                        <div className="bg-white flex flex-col justify-center items-center gap-2 py-5 w-56 rounded-xl">
                            <div className="h-12 w-12 p-3 rounded-full" style={{backgroundColor: "#ffab73"}}>
                                <img src={tutorial3} alt=""/>
                            </div>
                            <p className="font-semibold">Backend</p>
                        </div>
                        <div className="bg-white flex flex-col justify-center items-center gap-2 py-5 w-56 rounded-xl">
                            <div className="h-12 w-12 p-3 rounded-full" style={{backgroundColor: "#6ddccf"}}>
                                <img src={tutorial4} alt=""/>
                            </div>
                            <p className="font-semibold">Database</p>
                        </div>
                        <div className="bg-white flex flex-col justify-center items-center gap-2 py-5 w-56 rounded-xl">
                            <div className="h-12 w-12 p-3 rounded-full" style={{backgroundColor: "#91c788"}}>
                                <img src={tutorial5} alt=""/>
                            </div>
                            <p className="font-semibold">DevOps</p>
                        </div>
                    </div>
                </section>

                <section className=" mx-8 md:mx-16 lg:mx-64 py-20 mt-32 lg:mt-0 rounded-xl">
                    <p className="text-2xl text-center md:text-4xl font-semibold py-10">Fulltime Coding Bootcamp</p>
                    <div className="flex items-center gap-28">
                        <div>
                            <p className="font-medium">Join this bootcamp for a career in industry. Learn everything from basic coding, UI designing to deployment.</p>
                            <Link to="/bootcamp">
                                <p className="bg-blue-1 text-white w-max font-medium px-8 py-2 mt-5 mb-16 rounded-xl hover:bg-blue-400">Join now</p>
                            </Link>
                            <div className="flex gap-5">
                                <p className="border-2 border-blue-300 px-2 py-1 text-sm rounded-xl">Classroom</p>
                                <p className="border-2 border-blue-300 px-2 py-1 text-sm rounded-xl">Online</p>
                                <p className="border-2 border-blue-300 px-2 py-1 text-sm rounded-xl">Fullstack</p>
                            </div>
                        </div>
                        <img src={bootcamp} alt="" width={450} className="rounded-xl"/>
                    </div>
                </section>

                <section className="my-32 lg:my-48">
                    <p className="text-center text-2xl md:text-4xl font-semibold py-10">What do we provide</p>
                    <Swiper
                        slidesPerView= {1}
                        keyboard= {{
                            enabled: true
                        }}
                        pagination= {{
                            el: '.swiper-paginationn',
                            clickable: true,
                            renderBullet: function (index, className) {
                                return '<span class="' + className + '">' + (index + 1) + '</span>';
                            },
                        }}
                    >
                        <SwiperSlide>
                            <FeatureComp
                                title= "Learning Path"
                                desc="Learning path was created to make it easier for people who want to learn programming and related topics. We start by taking you back to the basics of your favorite programming language, then move on to more advanced topics. All these courses are completely free!"
                                image={learningPath}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FeatureComp
                                title= "Challenge"
                                desc="Challenge is ideal for your portfolio, training skills and building real-world applications. Through an online interface or in your favorite IDE, you can deploy challenge with your own data. challenge is 100% open source"
                                image={challenge}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FeatureComp
                                title= "Consultation"
                                desc="Learn directly with a professional mentor and receive a customized, professional consultation in this exciting industry. Learn from home or anywhere on your schedule."
                                image={consultation}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FeatureComp
                                title= "Bootcamp"
                                desc="At bootcamp, we help you develop your skills in programming and design to work on a professional project, right from the first day!"
                                image={bootcamp2}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FeatureComp
                                title= "Text Editor"
                                desc="Our tool makes learning web development easy for everyone. Beginners can learn simple programming, and experienced coders can learn new languages. Write, compile and play with code using our user-friendly interface"
                                image={textEditor}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FeatureComp
                                title= "Certificate"
                                desc="The Certificate is intended to complement any other training or experience you may have, and gives you the opportunity to learn valuable skills that will shape your understanding and outlook on how technology evolves."
                                image={certificate}
                            />
                        </SwiperSlide>
                    </Swiper>
                    <div className="">
                        <div className="swiper-paginationn flex gap-4 items-center justify-center my-10 cursor-default"></div>
                    </div>
                </section>
                
                <section className="discord flex flex-col items-center gap-10 text-center text-white mx-10 lg:mx-20 px-10 lg:px-20 py-20 mt-32 lg:mt-0 rounded-xl" >
                    <img src="https://cdn.discordapp.com/attachments/414258067870449665/445736475158380544/discord.gif" alt="discord" width={100}/>
                    <div className="flex flex-col gap-5">
                        <p className="text-xl font-semibold">Join us in our community.</p>
                        <p>We talk about challenge and project, help each other with code, chat about all things web development.</p>
                    </div>
                    <a href="https://discord.gg/rvdAvXYt" className="font-medium px-8 py-3 rounded-xl" style={{backgroundColor: "#2c2f33"}}>Join us</a>
                </section>

                <section className="flex flex-col items-center gap-5 mt-32 mx-20">
                    <p className="text-center text-2xl md:text-4xl font-semibold">Start learning today</p>
                    <p className="text-center mx-20" style={{width: "500px"}}>Whether you’re interested in learning how to code or getting a head start in web development, this website will be a powerful ally.</p>
                    <Link to="/tutorial">
                        <p className="bg-orange-1 hover:bg-yellow-300 text-white text-sm font-medium px-8 py-3 mt-10 rounded-xl w-max">Start learning today</p>
                    </Link>
                </section>
            </div>
            <Footer/>
        </Fragment>
    )
}