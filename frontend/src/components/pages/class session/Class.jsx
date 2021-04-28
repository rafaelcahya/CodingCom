import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Footer from '../../major/Footer'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import Tabs from '../../minor/tab/Tab'
import TabPan from '../../minor/tab/TabPan'
import ClassComp from './ClassComp'

export class Class extends Component {
    tab(){
        let consultation = document.getElementById("class-consultation")
        let session = document.getElementById("class-session")

        if (consultation === "none"){
            session.style.display = "flex"
        }
    }
    render() {
        return (
            <>
                <NavbarLogin/>
                <NavbarMobile/>
                
                <div className="mx-8 sm:mx-24 md:mx-40 lg:mx-52 xl:mx-72 mt-20">
                    <p className="flex justify-center text-gray-400 text-sm font-medium mb-5">Filter By</p>
                    <Tabs>
                        <TabPan name="Class Consultation" key="1">
                            <div className="class-header mt-20">
                                <p className="color-blue-1 font-semibold text-3xl mb-5">Class Consultation</p>
                                <p>Here you can learn directly with a mentor via zoom. Just ask your question without hesitation according to the topic you choose. Mentors will be ready to help your learning process anytime and anywhere.</p>
                                <Link to="/class-creation">
                                    <p className="color-blue-1 underline font-medium">Request Create Class Here</p>
                                </Link>
                            </div>
                            <div className="flex flex-col gap-10 my-10">
                                <ClassComp
                                    class="UI/UX Consultation Class"
                                    desc="Ask your questions about UI/UX. Select the class you want below"
                                    classname1="Consultation Class 1"
                                    classname2="Consultation Class 2"
                                    classname3="Consultation Class 3"
                                    link1="https://meet.google.com/sja-ydxs-ezi"
                                    link2="https://meet.google.com/tsk-zdtw-ibu"
                                    link3="https://meet.google.com/qfy-rdne-whj"
                                />
                                <ClassComp
                                    class="Frontend Consultation Class"
                                    desc="Ask your questions about HTML, CSS, and Javascript. Select the class you want below"
                                    classname1="Consultation Class 1"
                                    classname2="Consultation Class 2"
                                    classname3="Consultation Class 3"
                                    link1="https://meet.google.com/sja-ydxs-ezi"
                                    link2="https://meet.google.com/tsk-zdtw-ibu"
                                    link3="https://meet.google.com/qfy-rdne-whj"
                                />
                                <ClassComp
                                    class="CSS Framework Consultation Class"
                                    desc="Ask your questions about CSS Framework. Select the class you want below"
                                    classname1="Consultation Class 1"
                                    classname2="Consultation Class 2"
                                    classname3="Consultation Class 3"
                                    link1="https://meet.google.com/sja-ydxs-ezi"
                                    link2="https://meet.google.com/tsk-zdtw-ibu"
                                    link3="https://meet.google.com/qfy-rdne-whj"
                                />
                                <ClassComp
                                    class="Javascript Library and Framework Consultation Class"
                                    desc="Ask your questions about Javascript Library and Framework. Select the class you want below"
                                    classname1="Consultation Class 1"
                                    classname2="Consultation Class 2"
                                    classname3="Consultation Class 3"
                                    link1="https://meet.google.com/sja-ydxs-ezi"
                                    link2="https://meet.google.com/tsk-zdtw-ibu"
                                    link3="https://meet.google.com/qfy-rdne-whj"
                                />
                                <ClassComp
                                    class="Backend Consultation Class"
                                    desc="Ask your questions about Backend. Select the class you want below"
                                    classname1="Consultation Class 1"
                                    classname2="Consultation Class 2"
                                    classname3="Consultation Class 3"
                                    link1="https://meet.google.com/sja-ydxs-ezi"
                                    link2="https://meet.google.com/tsk-zdtw-ibu"
                                    link3="https://meet.google.com/qfy-rdne-whj"
                                />
                            </div>
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
