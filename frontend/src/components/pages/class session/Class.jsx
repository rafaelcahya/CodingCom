import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../major/Footer'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import ClassComp from './ClassComp'

export class Class extends Component {
    render() {
        return (
            <>
                <NavbarLogin/>
                <NavbarMobile/>
                
                <div className="mx-8 sm:mx-24 md:mx-40 lg:mx-52 xl:mx-72 mt-32 lg:mt-20">
                    <div className="class-header">
                        <p className="color-blue-1 font-semibold text-3xl mb-5">Class Consultation</p>
                        <p>Here you can learn directly with a mentor via zoom. Just ask your question without hesitation according to the topic you choose. Mentors will be ready to help your learning process anytime and anywhere.</p>
                        <Link to="/class-creation">
                            <p className="color-blue-1 underline font-medium">Register here</p>
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
                </div>

                <Footer/>
            </>
        )
    }
}

export default Class
