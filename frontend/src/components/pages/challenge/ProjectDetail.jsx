/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

import Footer from '../../major/Footer'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'

import File from "../../../asset/file/Challenge.docx"

function ProjectDetail(props) {
    const urlid = props.match.params.id
    const urltype = props.match.params.type
    const [value, setValue] = useState([])
    const [valueList, setValueList] = useState([])
    const [buttonPopup, setButtonPopup] = useState(false)
    useEffect(() => {
        axios.get("http://localhost:3001/project/GetprojectById/" + urlid).then((response) => {
            setValue(response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        axios.get("http://localhost:3001/submit/submitListById/" + urlid+ "/" + localStorage.getItem("name")).then((response) => {
            setValueList(response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const openPopupScore = () => {
        setButtonPopup(true)
    }

    const closePopupScore = () => {
        setButtonPopup(false)
    }
    return (
        <>
            <NavbarLogin />
            <NavbarMobile />

            {
                value.map((val) => {
                    let image = require('../../../asset/upload/' + val.image)
                    return <div className="flex flex-col md:flex-row gap-10 w-full px-16 xl:px-32 mt-32 lg:mt-20">
                        <div className="flex flex-col gap-20 w-full md:w-3/4">
                            <div className="projDetail flex flex-col">
                                <img src={image.default} className="mb-5 rounded-xl" />
                                <p className="block md:hidden text-3xl font-semibold mb-10">{val.projectTitle}</p>
                                <p className="block md:hidden bg-blue-1 text-white text-sm py-2 px-4 w-max rounded-lg">Check score</p>
                                <div className="project-tinymce flex flex-col gap-3 mt-10">
                                    <p className="font-semibold text-xl">Brief</p>
                                    <div dangerouslySetInnerHTML={{ __html: val.projectBrief }} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="font-semibold text-xl">Getting Started</p>
                                <ol className="list-decimal ml-10 flex flex-col gap-2">
                                    <li>Download the project file.</li>
                                    <li>Read the PDF file and have a look around the project.</li>
                                    <li>Get colors, fonts, etc from the design system.</li>
                                    <li>Set up your project/file architecture however you want</li>
                                    <li>Set up the project with version control (e.g. Git).</li>
                                    <li>Start coding!</li>
                                </ol>
                            </div>
                            {/* <div>
                                <p className="text-center text-lg font-semibold">FAQs</p>
                                <div className="flex flex-col md:flex-row gap-10 my-10">
                                    <div className="w-full md:w-1/2">
                                        <p className="font-semibold text-xl my-2">Is there an official solution i can take a look at?</p>
                                        <p>We don't provide "official" solutions for the challenges. This is because there is no single perfect way to complete a challenge. Instead, you're encouraged to review other people's code in the community. You can learn so much by seeing how other people have approached the same challenges.</p>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <p className="font-semibold text-xl my-2">Can i use my solution on my portofolio</p>
                                        <p>Of course! Frontend Mentor was created to make professionally designed projects more accessible to the development community. Please feel free to use anything you build in your portfolio.</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="sticky self-start top-5 flex flex-col gap-10 w-full md:w-2/5">
                            <p className="hidden md:block text-3xl font-semibold">{val.projectTitle}</p>
                            <p className="hidden md:block bg-blue-1 text-white text-sm py-2 px-4 w-max rounded-lg" onClick={openPopupScore}>Check score</p>
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold text-lg">Download Starter File</p>
                                <p>Includes a basic style guide. There's also a PDF File to help you get started.</p>
                                <a href={File} className="text-white bg-blue-1 text-sm w-max my-5 px-4 py-2 rounded-lg" download>Download starter file</a>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold text-lg">Submit Solution</p>
                                <p>Once you've completed the challenge, you can submit your solution.</p>
                                <Link to={"/submit-solution/" + val.projectId}>
                                    <p className="text-white bg-blue-1 text-sm w-max my-5 px-4 py-2 rounded-lg">Submit solution</p>
                                </Link>
                            </div>
                            {urltype != "Certificate" ? (<div className="flex flex-col justify-between gap-2">
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-lg">Download Cerificate</p>
                                    <p>This project does not have a certificate</p>
                                </div>
                            </div>):(
                                !valueList.length ? (<div className="flex flex-col justify-between gap-2">
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-lg">Download Certificate</p>
                                    <p>If your project meets the conditions, you can download your certificate.</p>
                                </div>
                            </div>) :(
                                valueList.map((v)=>{
                                    return <div className="flex flex-col justify-between gap-2">
                                        {v.score >= 95 ?(<div>
                                        <div className="flex flex-col gap-2">
                                        <p className="font-semibold text-xl">Download Certificate</p>
                                        <p>You can download certificate, Click Button Below</p>
                                    </div>
                                    <div>
                                        <Link to={"/CertificateAngular/"+urlid}>
                                            <p className="text-white bg-blue-1 w-max my-5 px-4 py-2 rounded-lg">Download certificate</p>
                                        </Link>
                                    </div>
                                    </div>):(<div className="flex flex-col gap-2">
                                        <p className="font-semibold text-xl">Download Certificate</p>
                                        <p>Score is not high enough to download certificate</p>
                                    </div>)}
                                </div>
                                })
                            )
                            )}
                        </div>
                    </div>
                })
            }
            <Popup trigger={buttonPopup}>
            {
                value.map((val) => {
                    return <div>
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-semibold mb-10">{val.projectTitle}</p>
                            <div onClick={closePopupScore}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </div>
                        </div>
                        <p>CreateAt</p>
                        <p>Score</p>
                        <p>Description</p>
                        <p>Revision Note</p>
                    </div>
                }) 
            }
            </Popup>
            {/* <div className="flex flex-wrap justify-center gap-10 my-10">
                    <div className="challenge-box p-5 rounded-lg shadow transform hover:scale-105 hover:shadow-lg transition duration-200">
                    <img src={image.default} style={{width:"400px", height:"250px"}} className="rounded-lg" />
                        <p className="color-blue-1 font-semibold">{val.projectTitle}</p>
                        <p className="text-sm mt-5">{val.projectInfo}</p>
                    </div>
            </div> 
            */}

            <section className="discord flex flex-col items-center gap-10 text-center text-white mx-10 lg:mx-20 px-10 lg:px-20 py-20 mt-32 rounded-xl" >
                <img src="https://cdn.discordapp.com/attachments/414258067870449665/445736475158380544/discord.gif" alt="discord" width={100} />
                <div className="flex flex-col gap-5">
                    <p className="text-xl font-semibold">Join us in our community.</p>
                    <p>We talk about challenge and project, help each other with code, chat about all things web development.</p>
                </div>
                <a href="https://discord.gg/rvdAvXYt" className="font-medium px-8 py-3 rounded-xl" style={{ backgroundColor: "#2c2f33" }}>Join us</a>
            </section>
            <Footer />
        </>
    )
}

export default ProjectDetail

function Popup(props){
    return(props.trigger)?(
        <div className="register-popup-container overflow-hidden">
            <div className="popup-box p-5 rounded-lg">
                {props.children}
            </div>
        </div>
    ):"";
}