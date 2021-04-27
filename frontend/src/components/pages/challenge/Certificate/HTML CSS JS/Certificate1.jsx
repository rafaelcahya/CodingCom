import React, { Component } from 'react'
import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'
import Footer from "../../../../major/Footer"

import facebookui from "../../../../../asset/photo/challenge/certificate/facebook.PNG"
import { Link } from 'react-router-dom'

import file from "../../../../../asset/file/Challenge.docx"

export class Certificate1 extends Component {
    render() {

        const scrollToTop = () => {
            window.scrollTo(0, 0)
        }
        return (
            <>
                <NavbarLogin/>
                <NavbarMobile/>
                <div className="mx-8 sm:mx-24 md:mx-40 lg:mx-72 mt-32 lg:mt-20">
                    <p className="text-3xl font-semibold text-center my-10">HTML, CSS, and JS Certificate</p>
                    <div className="flex justify-center">
                        <img src={facebookui} alt="" width="750" className="rounded-3xl"/>
                    </div>
                    <div className="flex flex-col gap-2 my-10">
                        <p className="font-semibold text-xl">Brief</p>
                        <p>Welcome to the HTML CSS JS Challenge. In this challenge, you must create a Facebook Clone. Make it as close to the original as possible. You can use any tools you like to help you complete the challenge but you have to use HTML CSS and Javascript only. Download the project and go through the PDF file. This will provide further details about the project and help you get set up.</p>
                    </div> 
                    <div className="flex flex-col gap-2 my-20">
                    <p className="font-semibold text-xl">Getting Started</p>
                    <ol className="list-decimal ml-10 flex flex-col gap-2">
                        <li>Download the project file.</li>
                        <li>Read the PDF file and have a look around the project.</li>
                        <li>Go to <a href="https://www.facebook.com/" className="underline">Facebook.com</a> for designs system.</li>
                        <li>Get colors, fonts, etc from the design system.</li>
                        <li>Set up your project/file architecture however you want</li>
                        <li>Set up the project with version control (e.g. Git).</li>
                        <li>Start coding!</li>
                    </ol>
                    </div>   
                    <div className="flex flex-col md:flex-row gap-10 my-20">
                        <div className="flex flex-col gap-2 my-10">
                            <p className="font-semibold text-xl">Download Starter File</p>
                            <p>Includes a basic style guide. There's also a PDF File to help you get started.</p>
                            <a href={file} className="text-white bg-blue-1 w-max my-5 px-4 py-2 rounded-lg" download>Download starter file</a>
                        </div> 
                        <div className="flex flex-col gap-2 my-10">
                            <p className="font-semibold text-xl">Submit Solution</p>
                            <p>Once you've completed the challenge, you can submit your solution.</p>
                            <p onClick={scrollToTop}>
                                <Link to="/submit-solution">
                                    <p className="text-white bg-blue-1 w-max my-5 px-4 py-2 rounded-lg">Submit solution</p>
                                </Link>
                            </p>
                        </div>
                    </div>    
                    <div>
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
                    </div>
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

export default Certificate1