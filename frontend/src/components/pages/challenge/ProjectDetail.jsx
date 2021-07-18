/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

import Footer from '../../major/Footer'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'

const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
const formatTime = s => new Date(s).toLocaleTimeString();

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
        axios.get("http://localhost:3001/submit/submitListById/" + urlid + "/" + localStorage.getItem("name")).then((response) => {
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
                    let file = require('../../../asset/upload/'+ val.projectFile)
                    return <div className="flex flex-col md:flex-row gap-10 w-full px-16 xl:px-32 mt-32 lg:mt-20">
                        <div className="flex flex-col gap-20 w-full md:w-3/4">
                            <div className="projDetail flex flex-col">
                                <img src={image.default} className="mb-5 rounded-xl" />
                                <p className="block md:hidden text-3xl font-semibold mb-10">{val.projectTitle}</p>
                                {
                                    !valueList.length ? <p className="block md:hidden text-sm w-max rounded-lg">You haven't submitted this project</p> : <p className="block md:hidden bg-blue-1 text-white text-sm py-2 px-4 w-max rounded-lg cursor-pointer" onClick={openPopupScore}>Check score</p>
                                }
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
                        </div>
                        <div className="sticky self-start top-5 flex flex-col gap-10 w-full md:w-2/5">
                            <p className="hidden md:block text-3xl font-semibold">{val.projectTitle}</p>
                            {
                                !valueList.length ? <p className="hidden md:block text-sm w-max rounded-lg">You haven't submitted this project</p> : <p className="hidden md:block bg-blue-1 text-white text-sm py-2 px-4 w-max rounded-lg cursor-pointer" onClick={openPopupScore}>Check score</p>
                            }
                            
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold text-lg">Download Starter File</p>
                                <p>Includes a basic style guide. There's also a PDF File to help you get started.</p>
                                <a href={file.default} className="text-white bg-blue-1 w-max my-5 px-4 py-2 rounded-lg" download>Download</a>
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
                            </div>) : (
                                !valueList.length ? (<div className="flex flex-col justify-between gap-2">
                                    <div className="flex flex-col gap-2">
                                        <p className="font-semibold text-lg">Download Certificate</p>
                                        <p>You can get a certificate if your score passes 95</p>
                                    </div>
                                </div>) : (
                                    valueList.map((v) => {
                                        return <div className="flex flex-col justify-between gap-2">
                                            {v.score >= 95 ? (<div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="font-semibold text-lg">Download Certificate</p>
                                                    <p>Congrats, download your certificate now</p>
                                                </div>
                                                <div>
                                                    <Link to={"/CertificateAngular/" + urlid}>
                                                        <p className="text-white text-sm bg-blue-1 w-max my-5 px-4 py-2 rounded-lg">Download certificate</p>
                                                    </Link>
                                                </div>
                                            </div>) : (<div className="flex flex-col gap-2">
                                                <p className="font-semibold text-lg">Download Certificate</p>
                                                <p>You can get a certificate if your score passes 95</p>
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
                                <span className="hidden sm:block">
                                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="30" height="45" viewBox="0 0 44 59" preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0,59) scale(0.1,-0.1)" fill="currentColor" stroke="none"><path d="M270 548 c-136 -52 -250 -236 -250 -403 0 -85 7 -101 51 -125 46 -24
                                    80 -25 117 -6 44 23 192 181 192 205 0 11 -5 21 -11 21 -6 0 -49 -36 -96 -80
                                    -90 -85 -135 -115 -160 -106 -13 5 -15 21 -11 84 5 94 44 175 125 262 60 66
                                    153 122 153 94 0 -10 -6 -25 -14 -33 -13 -14 -12 -18 10 -28 22 -10 26 -8 41
                                    13 25 39 24 70 -4 99 -32 31 -68 32 -143 3z m-184 -324 c-20 -56 -25 -63 -25
                                    -38 -1 49 31 126 46 110 2 -1 -8 -34 -21 -72z"/>
                                        </g>
                                    </svg>
                                </span>
                                <p className="text-xl font-medium">{val.projectTitle}</p>
                                <div onClick={closePopupScore}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </div>
                            </div>
                            {
                                valueList.map((v) => {
                                    return <div className="flex flex-col gap-5 mt-10">
                                        <div>
                                            <p className="text-xs font-medium text-gray-500">Collection time</p>
                                            <p className="font-medium">{formatDate(v.projectsubCreateAt)} {formatTime(v.projectsubCreateAt)}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-gray-500">Times upload</p>
                                            <p className="font-medium">{v.timesUpload}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-gray-500">Score</p>
                                            <p className="font-medium">{v.score}</p>
                                        </div>
                                        <div className="border-darkmode w-full h-0.5 my-5"></div>
                                        <div>
                                            <p className="text-xs font-medium text-gray-500">Description</p>
                                            <p className="font-medium">{v.description}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-gray-500">Revision note</p>
                                            <p className="font-medium">{v.revisi}</p>
                                        </div>
                                    </div>
                                })
                            }
                            <div className="flex justify-center">
                                <Link to={"/submit-solution/" + val.projectId}>
                                    <p className="text-white bg-blue-1 text-sm w-max my-5 px-4 py-2 rounded-lg">Submit solution</p>
                                </Link>
                            </div>
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

function Popup(props) {
    return (props.trigger) ? (
        <div className="register-popup-container px-5 sm:px-20 md:px-32 lg:px-80 pt-10 z-50">
            <div className="popup-box p-8 rounded-lg">
                {props.children}
            </div>
        </div>
    ) : "";
}