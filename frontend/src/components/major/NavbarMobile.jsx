/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

export default function NavbarMobile() {
    const [loggedIn, setLoggedIn] = useState(true)
    const [openTutorial, setOpenTutorial] = useState(false)
    const [openProfile, setOpenProfile] = useState(false)
    const [name, setName] = useState("")
    let image = require('../../asset/upload/'+ localStorage.getItem("image"))

    window.onload = setTimeout(function () {
        let x = localStorage.getItem("name");
        setName(x)
    }, 10)

    useEffect(() => {
        setLoggedIn(localStorage.getItem("loggedIn"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localStorage.getItem("loggedIn")]);

    const menuVariants = {
        opened: {
            top: "10vh",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        },
        closed: {
            top: "-100vh",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0), 0 10px 10px -5px rgba(0, 0, 0, 0)"
        }
    }

    const menuProfile = {
        opened: {
            top: "10vh",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        },
        closed: {
            top: "-100vh",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0), 0 10px 10px -5px rgba(0, 0, 0, 0)"
        }
    }
    return (
        <>
            <nav className="navbar-mobile flex justify-between lg:hidden fixed top-0 px-10 shadow-md w-full z-20">
                <motion.div
                    onClick={() => setOpenTutorial(state => !state)}
                    initial={false}
                    animate={openTutorial ? "opened" : "closed"}>
                    <div className="py-5">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                            <p className="uppercase font-semibold text-xs tracking-wider">Menu</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="flex items-center gap-1 cursor-pointer"
                    onClick={() => setOpenProfile(state => !state)}
                    initial={false}
                    animate={openProfile ? "opened" : "closed"}>
                    <div className="flex items-center gap-2">
                        <img src={image.default} className="ring-1 rounded-full p-0.5" width="35" alt="Image Profile"/>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </motion.div>
            </nav> 
            <div className="block lg:hidden fixed top-0 px-10 shadow-md w-full z-10">
                <motion.div
                    initial={false}
                    variants={menuVariants}
                    animate={openTutorial ? "opened" : "closed"} className="absolute top-0 p-5 flex flex-col gap-2 rounded-lg bg-white z-10">
                    <div className="rounded-lg">
                        <Link to="/">
                            <p className="pl-6 pr-20 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Home</p>
                        </Link>
                        <Link to={"/pricing/" + name}>
                            <p className="pl-6 pr-20 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Pricing</p>
                        </Link>
                        <Link to="/roadmap">
                            <p className="pl-6 pr-20 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Roadmap</p>
                        </Link>
                        <Link to="/tutorial">
                            <p className="pl-6 pr-20 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Tutorial</p>
                        </Link>
                        <Link to="/challenge">
                            <p className="pl-6 pr-20 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Challenge</p>
                        </Link>
                        <Link to="/class-session">
                            <p className="pl-6 pr-20 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Coding Class</p>
                        </Link>
                        <Link to="/news">
                            <p className="pl-6 pr-20 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">News</p>
                        </Link>
                        <Link to="/career">
                            <p className="pl-6 pr-20 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Career</p>
                        </Link> 
                    </div>
                </motion.div>
                <motion.div
                    initial={false}
                    variants={menuProfile}
                    animate={openProfile ? "opened" : "closed"} className="dropdown-user absolute top-0 right-0 mx-16 xl:mx-32 p-5 lg:flex flex-col gap-2 rounded-lg bg-white z-10">
                    <div className="flex gap-5">
                        <div className="text-sm pr-5 border-r-2">
                            <div className="dropdown-user-quota flex justify-between gap-5">
                                <p>Premium plan</p>
                                <p>Actived/Not Actived</p>
                            </div>
                            <Link to="/payment-confirmation-class-consultation-quota" className="dropdown-user-quota flex justify-between gap-5">
                                <p>Class Consultation Quota</p>
                                <p>0 quota</p>
                            </Link>
                            <Link to="/payment-confirmation-class-session-quota" className="dropdown-user-quota flex justify-between">
                                <p>Coding Class Quota</p>
                                <p>0 quota</p>
                            </Link>
                        </div>
                        <div>
                            <Link to={"/profile/" + name}>
                                <p className="text-sm">Profile</p>
                            </Link>
                            <Link to="/resetPassword">
                                <p className="text-sm">Change Password</p>
                            </Link>
                            <Link to={"/feedback/" + name}>
                                <p className="text-sm">Feedback</p>
                            </Link>
                            {loggedIn ? (
                                <>
                                    <Link to="/login" className="text-sm text-red-500 rounded-lg">
                                        <p>Logout</p>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="login bg-blue-1 text-white text-sm rounded-lg"><p>login</p></Link>
                                </>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
            
        </>
    )
}