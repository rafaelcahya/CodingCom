import React, {useEffect, useRef, useState} from 'react'
import VanillaTilt from 'vanilla-tilt';
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

import html from "../../../asset/photo/homepage/html.svg"
import css from "../../../asset/photo/homepage/css.svg"
import js from "../../../asset/photo/homepage/js.svg"
import react from "../../../asset/photo/homepage/react.svg"
import nodejs from "../../../asset/photo/homepage/nodejs.svg"

import tutorial1 from "../../../asset/icon/Homepage/design.svg"
import tutorial2 from "../../../asset/icon/Homepage/frontend.svg"
import tutorial3 from "../../../asset/icon/Homepage/backend.svg"
import tutorial4 from "../../../asset/icon/Homepage/database.svg"
import tutorial5 from "../../../asset/icon/Homepage/devops.svg"

import learningPath from "../../../asset/photo/homepage/feature/learning-path.jpg"
import challenge from "../../../asset/photo/homepage/feature/challenge.jpg"
import consultation from "../../../asset/photo/homepage/feature/consultation.jpg"
import session from "../../../asset/photo/homepage/feature/session.jpg"
import bootcamp2 from "../../../asset/photo/homepage/feature/bootcamp.jfif"
import textEditor from "../../../asset/photo/homepage/feature/text-editor.jpg"
import certificate from "../../../asset/photo/homepage/feature/certificate.jpg"
import community from "../../../asset/photo/homepage/feature/community.jpg"

import bootcamp from "../../../asset/photo/homepage/bootcamp/bootcamp3.jfif"
import Confetti from '../../minor/confetti/Confetti';

SwiperCore.use([Navigation, Pagination]);

function Tilt(props) {
    
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
  }

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

    const options = {
        speed: 1000,
        max: 10
        };
    return (
        <>
            <Link to={"/feedback/" + name}>
                <p className="fixed left-0 bottom-0 bg-blue-1 text-white text-sm px-4 py-2 cursor-pointer z-10">Feedback</p>
            </Link>
            <div className="overflow-x-hidden">
                <NavbarLogin /> 
                <NavbarMobile /> 
                <header className="headerheader flex justify-center lg:justify-between items-center mx-10 lg:mx-32 mt-20 lg:mt-16">
                    <div className="flex flex-col gap-2">
                        <div data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="0" className="flex items-center gap-5 my-4 sm:my-8">
                            <Confetti/>
                            <p className="shake text-3xl sm:text-4xl font-semibold">coding.com</p>
                        </div>
                        <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="150" className="text-2xl sm:text-3xl md:text-6xl font-bold mr-10 md:mr-20 mb-4 sm:mb-8">An educational platform for web programming from scratch.</p>
                        <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="300" className="change-text-anim text-base sm:text-xl font-medium text-gray-500 mb-10"></p>
                        <div className="w-max">
                            <Link to="/tutorial">
                                <p data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-delay="450" className="animate__tada bg-blue-1 text-white font-semibold px-8 py-3 rounded-lg block hover:bg-yellow-300">Start learning today</p>
                            </Link>
                        </div>
                    </div>
                </header>

                <Swiper
                    slidesPerView= {1} loop="true"
                    className="my-32 py-20 hidden sm:block">
                    <SwiperSlide>
                        <div className="vscode flex flex-col items-center">
                            <p className="text-4xl font-bold my-14 tracking-wide">HTML</p>
                            <Tilt data-aos="flip-right" data-aos-easing="ease-in-out" options={options}>
                                <img src={html} alt="" className=" hidden md:block rounded-lg"/>
                            </Tilt>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="vscode flex flex-col items-center">
                            <p className="text-4xl font-bold my-14 tracking-wide">CSS</p>
                            <Tilt data-aos="flip-right" data-aos-easing="ease-in-out"  options={options}>
                                <img src={css} alt="" className=" hidden md:block rounded-lg"/>
                            </Tilt>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="vscode flex flex-col items-center">
                            <p className="text-4xl font-bold my-14 tracking-wide">Javascript</p>
                            <Tilt data-aos="flip-right" data-aos-easing="ease-in-out"  options={options}>
                                <img src={js} alt="" className=" hidden md:block rounded-lg"/>
                            </Tilt>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="vscode flex flex-col items-center">
                            <p className="text-4xl font-bold my-14 tracking-wide">ReactJS</p>
                            <Tilt data-aos="flip-right" data-aos-easing="ease-in-out"  options={options}>
                                <img src={react} alt="" className=" hidden md:block rounded-lg"/>
                            </Tilt>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="vscode flex flex-col items-center">
                            <p className="text-4xl font-bold my-14 tracking-wide">NodeJS</p>
                            <Tilt data-aos="flip-right" data-aos-easing="ease-in-out"  options={options}>
                                <img src={nodejs} alt="" className=" hidden md:block rounded-lg"/>
                            </Tilt>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="mx-10 md:mx-16 lg:mx-20 xl:mx-64 my-20 lg:mb-32">
                    <p className="animate__animated animate__swing text-center text-2xl sm:text-3xl md:text-5xl font-semibold py-10">Our Tutorials</p>
                    <div className="cta flex flex-wrap justify-center gap-10">
                        <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="500" data-aos-delay="100" className="bg-white flex flex-col justify-center items-center gap-2 py-5 w-56 rounded-xl">
                            <div className="h-12 w-12 p-3 rounded-full" style={{backgroundColor: "#ff75a0"}}>
                                <img src={tutorial1} alt=""/>
                            </div>
                            <p className="font-semibold">Design</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="500" data-aos-delay="50" className="bg-white flex flex-col justify-center items-center gap-2 py-5 w-56 rounded-xl">
                            <div className="h-12 w-12 p-3 rounded-full" style={{backgroundColor: "#7868e6"}}>
                                <img src={tutorial2} alt="" />
                            </div>
                            <p className="font-semibold">Frontend</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="500" data-aos-delay="200" className="bg-white flex flex-col justify-center items-center gap-2 py-5 w-56 rounded-xl">
                            <div className="h-12 w-12 p-3 rounded-full" style={{backgroundColor: "#ffab73"}}>
                                <img src={tutorial3} alt=""/>
                            </div>
                            <p className="font-semibold">Backend</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="500" data-aos-delay="50" className="bg-white flex flex-col justify-center items-center gap-2 py-5 w-56 rounded-xl">
                            <div className="h-12 w-12 p-3 rounded-full" style={{backgroundColor: "#6ddccf"}}>
                                <img src={tutorial4} alt=""/>
                            </div>
                            <p className="font-semibold">Database</p>
                        </div>
                        <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="500" data-aos-delay="100" className="bg-white flex flex-col justify-center items-center gap-2 py-5 w-56 rounded-xl">
                            <div className="h-12 w-12 p-3 rounded-full" style={{backgroundColor: "#91c788"}}>
                                <img src={tutorial5} alt=""/>
                            </div>
                            <p className="font-semibold">DevOps</p>
                        </div>
                    </div>
                </div>

                <div className="mx-10 lg:mx-32 py-20 mt-32 lg:mt-0 rounded-xl">
                    <span data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom" className="flex justify-center gap-3 text-2xl sm:text-3xl md:text-5xl text-left md:text-center font-semibold py-10">Fulltime Coding <span className="animated tada">Bootcamp</span></span>
                    <div className="block md:flex items-center gap-28">
                        <div>
                            <p data-aos="fade-right" data-aos-easing="ease-in-out" className="text-base sm:text-xl font-medium">Join this bootcamp for a career in industry. Learn everything from basic coding, UI designing to deployment.</p>
                            <Link to="/bootcamp">
                                <p className="bg-blue-1 text-white font-semibold px-8 py-3 mt-10 rounded-lg w-max   mb-16 hover:bg-blue-400">Join now</p>
                            </Link>
                            <div className="flex gap-5">
                                <p data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="0" className="border-2 border-blue-300 px-2 py-1 text-sm rounded-xl">Classroom</p>
                                <p data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="100" className="border-2 border-blue-300 px-2 py-1 text-sm rounded-xl">Online</p>
                                <p data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200" className="border-2 border-blue-300 px-2 py-1 text-sm rounded-xl">Fullstack</p>
                            </div>
                        </div>
                        <img src={bootcamp} alt="" width={450} data-aos="zoom-in" data-aos-easing="ease-in-out" className="hidden md:block rounded-xl"/>
                    </div>
                </div>

                <div className="my-32 lg:my-48">
                    <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom" className="text-center text-2xl sm:text-3xl md:text-5xl font-semibold py-10">What do we provide</p>
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
                                title= "Coding Class"
                                desc="You can study together with professional mentors to guest stars in Coding Class. improve knowledge with coding class"
                                image={session}
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
                        <SwiperSlide>
                            <FeatureComp
                                title= "Community"
                                desc="We talk about challenge and project, help each other with code, chat about all things web development."
                                image={community}
                            />
                        </SwiperSlide>
                    </Swiper>
                    <div className="swiper-paginationn flex gap-4 items-center justify-center my-10 cursor-default"></div>
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
                        <p data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-delay="300" className="bg-orange-1 text-white font-semibold px-8 py-3 mt-10 rounded-lg w-max hover:bg-yellow-300">Start learning today</p>
                    </Link>
                </div>
            </div>
            <Footer/>
        </>
    )
}