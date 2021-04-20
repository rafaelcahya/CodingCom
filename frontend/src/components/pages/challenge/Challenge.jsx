import React, { Component } from 'react'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import ChallengeComp from './ChallengeComp'
import Footer from "../../major/Footer"

import challenge1 from "../../../asset/photo/challenge/mandiri/Simple Login Page.png"
import challenge2 from "../../../asset/photo/challenge/mandiri/Profile Card Component.png"
import challenge3 from "../../../asset/photo/challenge/mandiri/Codecareer Jobs.png"
import challenge4 from "../../../asset/photo/challenge/mandiri/Bookmark Landing Page.jpg"
import challenge5 from "../../../asset/photo/challenge/mandiri/Huddle Landing Page.jpg"
import challenge6 from "../../../asset/photo/challenge/mandiri/Todo App.jpg"
import { Link } from 'react-router-dom'

export class Challenge extends Component {
    render() {
        return (
            <>
                <NavbarLogin/>
                <NavbarMobile/>
                <div className="flex flex-col gap-20 mx-8 sm:mx-24 md:mx-40 lg:mx-52 mt-32 lg:mt-20">
                    <div>
                        <p className="text-3xl font-semibold text-center">For Certificate</p>
                        <div className="flex flex-wrap justify-center gap-10 my-10">
                            <div className="challenge-box p-5 rounded-lg shadow-xl transform hover:scale-105">
                                <Link>
                                    <p className="color-blue-1 font-semibold">UI/UX Exercise</p>
                                    <p className="text-sm mt-5">Get UI/UX Certificate by working on big project based on real project</p>
                                </Link>
                            </div>
                            <div className="challenge-box p-5  rounded-lg shadow-xl transform hover:scale-105">
                                <Link to="/html-css-js-exercise">
                                    <p className="color-blue-1 font-semibold">HTML, CSS and Javascript Exercise</p>
                                    <p className="text-sm mt-5">Get HTML, CSS, and Javascript Certificate by working on big project based on real project</p>
                                </Link>
                            </div>
                            <div className="challenge-box p-5   rounded-lg shadow-xl transform hover:scale-105">
                                <Link to="/react-exercise">
                                    <p className="color-blue-1 font-semibold">React Exercise</p>
                                    <p className="text-sm mt-5">Get React Certificate by working on big project based on real project</p>
                                </Link>
                            </div>
                            <div className="challenge-box p-5   rounded-lg shadow-xl transform hover:scale-105">
                                <Link to="/react-exercise">
                                    <p className="color-blue-1 font-semibold">VUE Exercise</p>
                                    <p className="text-sm mt-5">Get VUE Certificate by working on big project based on real project</p>
                                </Link>
                            </div>
                            <div className="challenge-box p-5   rounded-lg shadow-xl transform hover:scale-105">
                                <Link to="/react-exercise">
                                    <p className="color-blue-1 font-semibold">Angular Exercise</p>
                                    <p className="text-sm mt-5">Get Angular Certificate by working on big project based on real project</p>
                                </Link>
                            </div>
                            <div className="challenge-box p-5   rounded-lg shadow-xl transform hover:scale-105">
                                <Link to="/react-exercise">
                                    <p className="color-blue-1 font-semibold">NodeJS Exercise</p>
                                    <p className="text-sm mt-5">Get NodeJS Certificate by working on big project based on real project</p>
                                </Link>
                            </div>
                            <div className="challenge-box p-5   rounded-lg shadow-xl transform hover:scale-105">
                                <Link to="/react-exercise">
                                    <p className="color-blue-1 font-semibold">PHP Exercise</p>
                                    <p className="text-sm mt-5">Get PHP Certificate by working on big project based on real project</p>
                                </Link>
                            </div>
                            <div className="challenge-box p-5   rounded-lg shadow-xl transform hover:scale-105">
                                <Link to="/react-exercise">
                                    <p className="color-blue-1 font-semibold">Laravel Exercise</p>
                                    <p className="text-sm mt-5">Get Laravel Certificate by working on big project based on real project</p>
                                </Link>
                            </div>
                            <div className="challenge-box p-5   rounded-lg shadow-xl transform hover:scale-105">
                                <Link to="/react-exercise">
                                    <p className="color-blue-1 font-semibold">Golang Exercise</p>
                                    <p className="text-sm mt-5">Get Golang Certificate by working on big project based on real project</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-3xl font-semibold text-center">Challenge</p>
                        <div className="flex flex-wrap items-center justify-center gap-10 my-10">
                            <ChallengeComp
                                image={challenge1}
                                title="Simple Login Page"
                                diff="Easy"
                                desc="This HTML and CSS challenge is perfect for those of you who want to learn about display and postition. The responsive layout shifts will also be a great test!"
                                pl1="HTML"
                                pl2="CSS"
                            />
                            <ChallengeComp
                                image={challenge2}
                                title="Profile Card Component"
                                diff="Easy"
                                desc="This HTML and CSS perfect challenge to test your layout skills. The card layout doesn't shift, so it's also great for those that haven't dived into responsive websites yet!"
                                pl1="HTML"
                                pl2="CSS"
                            />
                            <ChallengeComp
                                image={challenge3}
                                title="Codecareer Jobs"
                                diff="Hard"
                                desc="In this challenge, you must be able to search validation in javascript. The responsive layout shifts will also be a great test!"
                                pl1="HTML"
                                pl2="CSS"
                                pl3="JS"
                            />
                            <ChallengeComp
                                image={challenge4}
                                title="Bookmark Landing Page"
                                diff="Medium"
                                desc="This challenge will really test your layout skills. There are also areas that will require some JavaScript, such as the tabbed features section and the FAQ accordion."
                                pl1="HTML"
                                pl2="CSS"
                                pl3="JS"
                            />
                            <ChallengeComp
                                image={challenge5}
                                title="Huddle landing page"
                                diff="Medium"
                                desc="Practice using pseudo-elements for styling extras and the CSS position property for the sections with curved edges."
                                pl1="HTML"
                                pl2="CSS"
                            />
                            <ChallengeComp
                                image={challenge6}
                                title="Todo App"
                                diff="Hard"
                                desc="The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering for anyone wanting an extra test"
                                pl1="HTML"
                                pl2="CSS"
                                pl3="JS"
                            />
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Challenge
