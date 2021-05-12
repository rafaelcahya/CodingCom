import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"
import { NavLink, Link } from 'react-router-dom'

export default function NavbarLogin() {
    const [loggedIn, setLoggedIn] = useState(true)

    useEffect(() => {
        setLoggedIn(localStorage.getItem("loggedIn"));
    }, [localStorage.getItem("loggedIn")]); 

    window.onload = setTimeout( function () {
        var x = localStorage.getItem("name");
        document.getElementById("demo").innerHTML = x;
    }, 100)

    const [openTutorial, setOpenTutorial] = useState(false)
    const [openProfile, setOpenProfile] = useState(false)
    const menuVariants = {
        opened: {
            top: "12vh",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        },
        closed: {
            top: "-100vh",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0), 0 10px 10px -5px rgba(0, 0, 0, 0)"
        }
    }

    const menuVariantsa = {
        opened: {
            top: "12vh",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        },
        closed: {
            top: "-100vh",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0), 0 10px 10px -5px rgba(0, 0, 0, 0)"
        }
    }
    
    return (
        <>
            <nav id="top">
                <div className="navbar hidden relative text-sm lg:flex justify-between px-16 xl:px-32 z-20">
                    <div className=" flex items-center py-5">
                        <NavLink to=""
                            exact 
                            className="logo">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="30" height="45" viewBox="0 0 44 59"
                            preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0,59) scale(0.1,-0.1)"
                            fill="currentColor" stroke="none">
                            <path d="M270 548 c-136 -52 -250 -236 -250 -403 0 -85 7 -101 51 -125 46 -24
                            80 -25 117 -6 44 23 192 181 192 205 0 11 -5 21 -11 21 -6 0 -49 -36 -96 -80
                            -90 -85 -135 -115 -160 -106 -13 5 -15 21 -11 84 5 94 44 175 125 262 60 66
                            153 122 153 94 0 -10 -6 -25 -14 -33 -13 -14 -12 -18 10 -28 22 -10 26 -8 41
                            13 25 39 24 70 -4 99 -32 31 -68 32 -143 3z m-184 -324 c-20 -56 -25 -63 -25
                            -38 -1 49 31 126 46 110 2 -1 -8 -34 -21 -72z"/>
                            </g>
                            </svg>
                        </NavLink>
                        <div className="navbar flex items-center ml-12 gap-6 xl:gap-12" id="navbar">
                            <NavLink to="/pricing"
                                activeClassName="navbar_active" 
                                className="navbar__link underline_anim">
                                <p>Pricing</p>
                            </NavLink>
                            <motion.div className="course"
                            onClick={() => setOpenTutorial(state => !state)} 
                            initial={false} 
                            animate={openTutorial ? "opened" : "closed"}>
                                <div
                                    className="navbar__link">
                                    <p className="navbar_btn underline_anim cursor-pointer">Tutorial</p>
                                </div>
                            </motion.div>

                            <NavLink to="/challenge"
                                activeClassName="navbar_active" 
                                className="navbar__link">
                                    <p className="navbar_btn underline_anim">Challenges</p>
                            </NavLink>

                            <NavLink to="/class-session"
                                activeClassName="navbar_active" 
                                className="navbar__link">
                                    <p className="navbar_btn underline_anim">Class</p>
                            </NavLink>

                            <NavLink to="/news"
                                activeClassName="navbar_active" 
                                className="navbar__link">
                                    <p className="navbar_btn underline_anim">News</p>
                            </NavLink>

                            <NavLink to="/career"
                                activeClassName="navbar_active" 
                                className="navbar__link">
                                    <p className="navbar_btn underline_anim">Career</p>
                            </NavLink>

                            <NavLink to="/bootcamp"
                                activeClassName="navbar_active" 
                                className="navbar__link">
                                    <p className="navbar_btn underline_anim">Bootcamp</p>
                            </NavLink>

                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <NavLink to="/help"
                            activeClassName="navbar_active" 
                            className="navbar__link underline_anim">
                            <p className="help">Help</p>
                        </NavLink>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(90)" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        <motion.div className="flex items-center gap-1 cursor-pointer"
                            onClick={() => setOpenProfile(state => !state)} 
                            initial={false} 
                            animate={openProfile ? "opened" : "closed"}>
                            <div id="demo"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </motion.div>
                    </div>
                </div>
            <motion.div
                initial= {false}
                variants={menuVariants}
                animate={openTutorial ? "opened" : "closed"} className="dropdown-tutorial absolute top-0 mx-16 xl:mx-32 hidden lg:flex flex-col rounded-xl bg-white z-10" >
                    <div className="tutorials-overview flex items-center gap-2 px-4 py-2 rounded-tl-xl rounded-tr-xl">
                        <Link to="/tutorial" className="font-semibold hover:underline">Tutorials overview</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                    <div className="dropdown-tutorial-box flex flex-col gap-5 py-5 px-5">
                        <div className="flex gap-10">
                            <div>
                                <p className="font-semibold color-blue-1">Roadmap</p>
                                <div className="flex flex-col gap-2 text-sm mt-2">
                                    <Link to="/roadmap-frontend">
                                        <p>Frontend</p>
                                    </Link>
                                    <Link to="/roadmap-backend">
                                        <p>Backend</p>
                                    </Link>
                                    <Link to="/roadmap-devops">
                                        <p>DevOps</p>
                                    </Link>
                                    <Link to="/roadmap-react">
                                        <p>ReactJs</p>
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold color-blue-1">Internet</p>
                                <div className="flex flex-col gap-2 text-sm mt-2">
                                    <Link to="/internet">
                                        <p>Basic Internet</p>
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold color-blue-1">Web design</p>
                                <p>User Interface / UI</p>
                                <p>User Experience / UX</p>
                                <p>Customer Experience / CX</p>
                            </div>
                            <div>
                                <p className="font-semibold color-blue-1">Frontend</p>
                                <div className="flex gap-10">
                                    <div>
                                        <p className="text-sm mt-2">HTML</p>
                                        <p>CSS</p>
                                        <p>SASS</p>
                                        <p>Javascript</p>
                                        <p>Bootstrap</p>
                                        <p>TailwindCSS</p>
                                        <p>Foundation</p>
                                        <p>SemanticUI</p>
                                    </div>
                                    <div>
                                        <p className="text-sm mt-2">React</p>
                                        <p>VUE</p>
                                        <p>Angular</p>
                                        <p>JQuery</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold color-blue-1">Backend</p>
                                <p>NodeJS</p>
                                <p>NextJS</p>
                                <p>PHP</p>
                                <p>Laravel</p>
                                <p>Golang</p>
                            </div>
                            <div>
                                <p className="font-semibold color-blue-1">Database</p>
                                <p>MySQL</p>
                                <p>PostgreSQL</p>
                                <p>MongoDB</p>
                            </div>
                            <div>
                                <p className="font-semibold color-blue-1">DevOps</p>
                                <p>Overview</p>
                            </div>
                            <div>
                                <p className="font-semibold color-blue-1">Deployment</p>
                                <p>Overview</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial= {false}
                    variants={menuVariantsa}
                    animate={openProfile ? "opened" : "closed"} className="dropdown-tutorial absolute top-0 right-0 mx-16 xl:mx-32 py-5 px-5 hidden lg:flex flex-col gap-4 rounded-xl bg-white z-10">
                    <p className="text-sm">Change Password</p>
                    {loggedIn ? (
                        <>
                            <Link to="/login" className="bg-blue-100 hover:bg-blue-50 color-blue-1 text-sm py-2 text-center rounded-lg">
                                Logout
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login"  className="login bg-blue-1 text-white px-8 py-2 rounded-xl">login</Link>
                        </>
                    )}
                </motion.div>
            </nav>
        </>
    )
}