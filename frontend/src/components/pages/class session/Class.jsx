import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import "../../../../node_modules/swiper/swiper.min.css"

import Footer from '../../major/Footer'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import Tabs from '../../minor/tab/Tab'
import TabPan from '../../minor/tab/TabPan'
import ClassComp from './ClassComp';

SwiperCore.use([Navigation, Pagination]);

export class Class extends Component {
    tab(){
        let consultation = document.getElementById("class-consultation")
        let session = document.getElementById("class-session")

        if (consultation === "none"){
            session.style.display = "flex"
        }
    }
    render() {
        var menu = ['Web Design', 'Frontend', 'CSS Frameworks', 'JS Frameworks & Libraries', 'Backend', 'Database']
        return (
            <>
                <NavbarLogin/>
                <NavbarMobile/>
                
                <div className="mx-8 sm:mx-24 md:mx-40 lg:mx-52 xl:mx-72 mt-20">
                    <Tabs>
                        <TabPan name="Class Consultation" key="1">
                            <div className="class-header mt-20">
                                <p className="color-blue-1 font-semibold text-3xl mb-5">Class Consultation</p>
                                <p>Here you can learn directly with a mentor via zoom. Just ask your question without hesitation according to the topic you choose. Mentors will be ready to help your learning process anytime and anywhere.</p>
                                <div className="flex flex-col justify-center items-center mt-10">
                                    <p className="text-gray-400 font-medium text-sm">Filter by:</p>
                                    <div className="swiper-pagination flex justify-start md:justify-center items-center text-sm text-center gap-8 overflow-x-auto w-5/6 md:w-full my-3"></div>
                                </div>
                            </div>
                            <Swiper
                                slidesPerView= {1} 
                                spaceBetween={100}
                                pagination= {{
                                    el: '.swiper-pagination',
                                    clickable: true,
                                    renderBullet: function (index, className) {
                                        return '<p class="' + className + '">' + (menu[index]) + '</p>';
                                    },
                                }}
                            >
                                <SwiperSlide>
                                    <div className="flex flex-col justify-center gap-8 my-10">
                                        <ClassComp
                                            name="Marco Nadalio"
                                            time="09:00 - 17:00"
                                            button="Class A"
                                            link="https://meet.google.com/psc-xujk-dmk"
                                        />
                                        <ClassComp
                                            name="Shiva Camila"
                                            time="09:00 - 17:00"
                                            button="Class B"
                                            link="https://meet.google.com/bcm-gkid-hhx"
                                        />
                                        <ClassComp
                                            name="Samuel Miron"
                                            time="09:00 - 17:00"
                                            button="Class C"
                                            link="https://meet.google.com/wim-pxuu-vkt"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="flex flex-col justify-center gap-8 my-10">
                                        <ClassComp
                                            name="Muhammed Niclas"
                                            time="09:00 - 17:00"
                                            button="Class A"
                                            link="https://meet.google.com/psc-xujk-dmk"
                                        />
                                        <ClassComp
                                            name="Thelma Isi"
                                            time="09:00 - 17:00"
                                            button="Class B"
                                            link="https://meet.google.com/bcm-gkid-hhx"
                                        />
                                        <ClassComp
                                            name="Tomi Natanhiel"
                                            time="09:00 - 17:00"
                                            button="Class C"
                                            link="https://meet.google.com/wim-pxuu-vkt"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="flex flex-col justify-center gap-8 my-10">
                                        <ClassComp
                                            name="Tomi Natanhiel"
                                            time="09:00 - 17:00"
                                            button="Class A"
                                            link="https://meet.google.com/psc-xujk-dmk"
                                        />
                                        <ClassComp
                                            name="Samuel Miron"
                                            time="09:00 - 17:00"
                                            button="Class B"
                                            link="https://meet.google.com/bcm-gkid-hhx"
                                        />
                                        <ClassComp
                                            name="Shiva Camila"
                                            time="09:00 - 17:00"
                                            button="Class C"
                                            link="https://meet.google.com/wim-pxuu-vkt"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="flex flex-col justify-center gap-8 my-10">
                                        <ClassComp
                                            name="Muhammed Niclas"
                                            time="09:00 - 17:00"
                                            button="Class A"
                                            link="https://meet.google.com/psc-xujk-dmk"
                                        />
                                        <ClassComp
                                            name="Tomi Natanhiel"
                                            time="09:00 - 17:00"
                                            button="Class B"
                                            link="https://meet.google.com/bcm-gkid-hhx"
                                        />
                                        <ClassComp
                                            name="Shiva Camila"
                                            time="09:00 - 17:00"
                                            button="Class C"
                                            link="https://meet.google.com/wim-pxuu-vkt"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="flex flex-col justify-center gap-8 my-10">
                                        <ClassComp
                                            name="Marco Nadalio"
                                            time="09:00 - 17:00"
                                            button="Class A"
                                            link="https://meet.google.com/psc-xujk-dmk"
                                        />
                                        <ClassComp
                                            name="Samuel Miron"
                                            time="09:00 - 17:00"
                                            button="Class B"
                                            link="https://meet.google.com/bcm-gkid-hhx"
                                        />
                                        <ClassComp
                                            name="Muhammed Niclas"
                                            time="09:00 - 17:00"
                                            button="Class C"
                                            link="https://meet.google.com/wim-pxuu-vkt"
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="flex flex-col justify-center gap-8 my-10">
                                        <ClassComp
                                            name="Shiva Camila"
                                            time="09:00 - 17:00"
                                            button="Class A"
                                            link="https://meet.google.com/psc-xujk-dmk"
                                        />
                                        <ClassComp
                                            name="Marco Nadalio"
                                            time="09:00 - 17:00"
                                            button="Class B"
                                            link="https://meet.google.com/bcm-gkid-hhx"
                                        />
                                        <ClassComp
                                            name="Tomi Natanhiel"
                                            time="09:00 - 17:00"
                                            button="Class C"
                                            link="https://meet.google.com/wim-pxuu-vkt"
                                        />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </TabPan>
                        <TabPan name="Class Session" key="2">
                            <div className="mt-20 h-full">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem tempore non, architecto qui voluptates modi neque necessitatibus id esse cum maxime, laboriosam iure, eius accusantium? Facilis deleniti velit tenetur rem!</p>
                            </div>
                        </TabPan>
                    </Tabs>
                </div>

                <section className="discord flex flex-col items-center gap-10 text-center text-white mx-10 lg:mx-20 px-10 lg:px-20 py-20 mt-32 rounded-xl" >
                    <img src="https://cdn.discordapp.com/attachments/414258067870449665/445736475158380544/discord.gif" alt="discord" width={100}/>
                    <div className="flex flex-col gap-5">
                        <p className="text-xl font-semibold">Join us in our community.</p>
                        <p>We talk about challenge and project, help each other with code, chat about all things web development.</p>
                    </div>
                    <a href="https://discord.gg/rvdAvXYt" className="font-medium px-8 py-3 rounded-xl" style={{backgroundColor: "#2c2f33"}}>Join us</a>
                </section>  
                <Footer/>
            </>
        )
    }
}

export default Class
