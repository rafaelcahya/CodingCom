import React, { Component } from 'react'
import NavbarLogin from "../../major/NavbarLogin"
import NavbarMobile from "../../major/NavbarMobile"
import TutorialComp from "./TutorialComp"
import TutorialUpcomingComp from "./TutorialUpcomingComp"
import TutorialPaidComp from "./TutorialPaidComp"

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import "../../../../node_modules/swiper/swiper.min.css"

import internet from "../../../asset/photo/Tutorial/internet.jpg"
import ui from "../../../asset/photo/Tutorial/ui.png"
import ux from "../../../asset/photo/Tutorial/ux.png"
import cx from "../../../asset/photo/Tutorial/cx.png"
import html from "../../../asset/photo/Tutorial/html.png"
import css from "../../../asset/photo/Tutorial/css.png"
import js from "../../../asset/photo/Tutorial/js.png"
import sass from "../../../asset/photo/Tutorial/sass.png"
import bootstrap from "../../../asset/photo/Tutorial/bootstrap.png"
import tailwind from "../../../asset/photo/Tutorial/tailwindcss.png"
import foundation from "../../../asset/photo/Tutorial/foundation.png"
import semanticui from "../../../asset/photo/Tutorial/semanticui.png"
import react from "../../../asset/photo/Tutorial/react.png"
import vue from "../../../asset/photo/Tutorial/vue.png"
import angular from "../../../asset/photo/Tutorial/angular.png"
import jquery from "../../../asset/photo/Tutorial/jquery.png"
import nodejs from "../../../asset/photo/Tutorial/nodejs.png"
import nextjs from "../../../asset/photo/Tutorial/nextjs.png"
import php from "../../../asset/photo/Tutorial/php.png"
import laravel from "../../../asset/photo/Tutorial/laravel.png"
import go from "../../../asset/photo/Tutorial/go.png"
import postgre from "../../../asset/photo/Tutorial/postgre.png"
import mongodb from "../../../asset/photo/Tutorial/mongodb.png"
import mysql from "../../../asset/photo/Tutorial/mysql.png"
import { Link } from 'react-router-dom'

SwiperCore.use([Navigation, Pagination]);

export class Tutorial extends Component {

    render() {
        var menu = ['Internet', 'Web Design', 'Frontend', 'CSS Frameworks', 'JS Frameworks & Libraries', 'Backend', 'Database', 'DevOps']
        
        return (
            <div>
                <NavbarLogin/>
                <NavbarMobile/>
                <div className="flex flex-col gap-10 mt-20">
                    <p className="color-blue-1 text-xl md:text-3xl text-center font-bold">Choose What You Want to Learn</p>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-gray-400 font-medium text-sm">Filter by:</p>
                        <div className="swiper-pagination flex justify-start md:justify-center items-center text-sm text-center gap-8 overflow-x-auto w-5/6 md:w-full my-3"></div>
                    </div>
                    
                    <div>
                        <Swiper
                            slidesPerView= {1}
                            pagination= {{
                                el: '.swiper-pagination',
                                clickable: true,
                                renderBullet: function (index, className) {
                                    return '<p class="' + className + '">' + (menu[index]) + '</p>';
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="flex justify-center gap-10 my-10" >
                                    <Link to="/internet">
                                        <TutorialComp
                                        image={internet}
                                        title="Basic Internet"
                                        desc="In this tutorial, you will learn the internet from understanding the internet to internet crimes."
                                        status="available"
                                        time="56 min"
                                        />
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-wrap justify-center gap-10 mx-0 sm:mx-20 my-10">
                                    <TutorialComp
                                    image={ui}
                                    title="Basic design for web : User Interface (UI)"
                                    desc="User interface (UI) design is the process designers use to build interfaces in software, focusing on looks or style."
                                    status="available"
                                    />
                                    <TutorialComp
                                    image={ux}
                                    title="Basic design for web : User Experience (UX)"
                                    desc="User experience is about how a user interacts with, and experiences, a particular product, system or service."
                                    status="available"
                                    />
                                    <TutorialUpcomingComp
                                    image={cx}
                                    title="Basic design for web : Customer Experience (CX)"
                                    desc="Customer experience is the customer experience when interacting with your product."
                                    status="Upcoming"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex justify-center flex-wrap gap-10 mx-0 sm:mx-20 xl:mx-32 my-10">
                                    <Link to="/html">
                                        <TutorialComp
                                        image={html}
                                        title="Basic web programming : HTML"
                                        desc="HypertText Markup Language is the standard markup language for documents designed to be displayed in a web browser."
                                        />
                                    </Link>
                                    <TutorialComp
                                    image={css}
                                    title="Basic web programming : CSS"
                                    desc="Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML."
                                    />
                                    <TutorialComp
                                    image={sass}
                                    title="Basic web programming : SASS"
                                    desc="Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets."
                                    />
                                    <TutorialComp
                                    image={js}
                                    title="Basic web programming : Javascript"
                                    desc="JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification."
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex justify-center flex-wrap gap-10 mx-0 sm:mx-20 xl:mx-32 my-10">
                                    <TutorialComp
                                    image={bootstrap}
                                    title="Basic framework CSS : Bootstrap"
                                    desc="Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development."
                                    />
                                    <TutorialComp
                                    image={tailwind}
                                    title="Basic framework CSS : Tailwind"
                                    desc="Rapidly build modern websites without ever leaving your HTML. A utility-first CSS framework packed with classes."
                                    />
                                    <TutorialComp
                                    image={foundation}
                                    title="Basic framework CSS : Foundation"
                                    desc="Foundation is a responsive front-end framework. Foundation provides a responsive grid and HTML and CSS UI components."
                                    />
                                    <TutorialComp
                                    image={semanticui}
                                    title="Basic framework CSS : Semantic UI"
                                    desc="Semantic empowers designers and developers by creating a shared vocabulary for UI."
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex justify-center flex-wrap gap-10 mx-0 sm:mx-20 xl:mx-32 my-10">
                                    <TutorialComp
                                    image={react}
                                    title="Adv. web programming : React"
                                    desc="React is an open-source, front end, JavaScript library for building user interfaces or UI components."
                                    />
                                    <TutorialComp
                                    image={vue}
                                    title="Adv. web programming : Vue"
                                    desc="Vue.js is an open-source model–view–view-model front end JavaScript framework for building user interfaces and single-page applications."
                                    />
                                    <TutorialComp
                                    image={angular}
                                    title="Adv. web programming : Angular"
                                    desc="FAngular is a TypeScript-based open-source web application framework."
                                    />
                                    <TutorialComp
                                    image={jquery}
                                    title="Adv. web programming : JQuery"
                                    desc="JQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax."
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex justify-center flex-wrap gap-10 mx-0 sm:mx-20 xl:mx-32 my-10">
                                    <TutorialComp
                                    image={nodejs}
                                    title="Backend web programming : NodeJS"
                                    desc="Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine."
                                    />
                                    <TutorialComp
                                    image={nextjs}
                                    title="Backend web programming : NextJS"
                                    desc="Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites."
                                    />
                                    <TutorialComp
                                    image={php}
                                    title="Backend web programming : Laravel"
                                    desc="Laravel is a free, open-source PHP web framework,  intended for the development of web applications following the MVC architectural pattern."
                                    />
                                    <TutorialComp
                                    image={laravel}
                                    title="Backend web programming : PHP"
                                    desc="PHP is a general-purpose scripting language especially suited to web development."
                                    />
                                    <TutorialComp
                                    image={go}
                                    title="Backend web programming : Go"
                                    desc="Go is an open source programming language that makes it easy to build simple, reliable, and efficient software."
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex justify-center flex-wrap gap-10 mx-0 sm:mx-20 xl:mx-32 my-10">
                                    <TutorialComp
                                    image={postgre}
                                    title="Database programming : PostgreSQL"
                                    desc="PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance."
                                    />
                                    <TutorialComp
                                    image={mongodb}
                                    title="Database programming : MySQL"
                                    desc="MySQL is an open-source relational database management system."
                                    />
                                    <TutorialComp
                                    image={mysql}
                                    title="Database programming : MongoDB"
                                    desc="MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas."
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex justify-center flex-col gap-10 mx-20 xl:mx-56 my-10">
                                    <TutorialPaidComp 
                                        title= "DevOps"
                                        subtitle="Development and Operations"
                                        desc="DevOps is a set of practices that combines software development and IT operations. It aims to shorten the systems development life cycle and provide continuous delivery with high software quality. DevOps is complementary with Agile software development; several DevOps aspects came from the Agile methodology."
                                        desc2="In this course, you will learn a complete explanation of DevOps, operating system concepts, networking, security and protocol, web servers and infrastructure such as docker, ansible, kubernetes, terraform, and prometheus. besides that, you will learn about cloud servers such as AWS, google cloud, Heroku, and Amazon Cloud."
                                    />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Tutorial