/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { NavLink, Link } from 'react-router-dom'
import Axios from 'axios'

const GenerateID = (len, k)=>{
    const s = (k) =>{
        var text = ""
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        for(let i = 0 ; i<k ; i++){
            text += chars.charAt(Math.floor(Math.random()*chars.length));
        }
        return text
    }
    var id = s(k);
    for(let n = 0;n<len;n++){
        id += '-'+s(k)
    }
    return id
}

export default function NavbarLogin() {
    const [loggedIn, setLoggedIn] = useState(true)
    const [value, setValue] = useState([])
    const [valueList, setValueList] = useState([])
    const [valueVal, setValueVal] = useState([])
    let image = require('../../asset/upload/'+ localStorage.getItem("image"))

    useEffect(() => {
        setLoggedIn(localStorage.getItem("loggedIn"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localStorage.getItem("loggedIn")]);

    useEffect(() => {
        Axios.get("http://localhost:3001/user/userById/" + localStorage.getItem("name")).then((response) => {
            setValueList(response.data)
            console.log(response.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        Axios.get("http://localhost:3001/category/listCategory").then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    }, []);

    useEffect(() => {
        Axios.get("http://localhost:3001/user/userkuotaById/" + localStorage.getItem("name")).then((response) => {
            setValueVal(response.data)
            console.log(response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const logout = () => {
    //     localStorage.setItem('loggedIn', false)
    //     localStorage.removeItem('image')
    //     localStorage.removeItem('name')
    //     localStorage.removeItem('role')
    // }

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

    function refreshPage(){
        window.location.reload();
    } 

    return (
        <>
            <nav id="top">
                <div className="navbar hidden lg:block relative z-20">
                    <div className="navbar-content text-sm relative lg:flex justify-between px-16 xl:px-32 border-b border-gray-200">
                        <div className=" flex items-center py-3">
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
                                <NavLink to={"/pricing/"+ localStorage.getItem("name")}
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
                                    <p className="navbar_btn underline_anim">Coding Class</p>
                                </NavLink>

                                <NavLink to="/news"
                                    activeClassName="navbar_active"
                                    className="navbar__link">
                                    <p className="navbar_btn underline_anim">Newsfeed</p>
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
                                <div className="flex items-center gap-2">
                                    <img src={image.default} className="ring-1 rounded-full p-0.5" width="35" alt="Image Profile"/>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <motion.div
                    initial={false}
                    variants={menuVariants}
                    animate={openTutorial ? "opened" : "closed"} className="dropdown absolute top-0 mx-16 xl:mx-32 hidden lg:flex flex-col rounded-lg p-5 z-10">
                        <div className="flex flex-col gap-5">
                            <p className="font-semibold">Tutorial Overview</p>
                            <div className="flex flex-wrap gap-x-5 gap-5">
                                <div className="dropdown-tutorial rounded-lg">
                                    <div>
                                        <Link to="/roadmap" className="flex flex-col gap-1">
                                            <p className="font-semibold">Roadmap</p>
                                            <p className="text-sm">A collection of web development roadmaps</p>
                                        </Link>
                                    </div>
                                </div>
                                {
                                    value.map((val) => {
                                        return <div className="dropdown-tutorial rounded-lg" onClick={refreshPage}>
                                                <Link to={"/category-detail-"+ val.categoryId + "/" + GenerateID(1,10)}>
                                                <div className="flex flex-col gap-1">
                                                    <p className="font-semibold">{val.category}</p>
                                                    <p className="truncate2 leading-6 text-sm">{val.categoryInfo}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                </motion.div>
                <motion.div
                    initial={false}
                    variants={menuVariantsa}
                    animate={openProfile ? "opened" : "closed"} className="dropdown-user absolute top-0 right-0 mx-16 xl:mx-32 p-5 hidden lg:flex flex-col gap-2 rounded-lg bg-white z-10">
                    <div className="flex gap-5">
                        {valueList.map((v)=>{
                            return <div className="text-sm">
                            {v.status == "Actived" ? (<div>
                                <div className="dropdown-user-quota rounded-lg">
                                {
                                    v.status==="Actived"?
                                    <div className="flex justify-between gap-20">
                                        <p className="text-gray-400">Premium plan</p>
                                        <p className="text-green-500 rounded-lg font-semibold tracking-wide">{v.status}</p>
                                    </div>
                                    :
                                    <div className="flex justify-between gap-20">
                                        <p className="text-gray-400">Premium plan</p>
                                        <p>{v.status}</p>
                                    </div>
                                }
                            </div>
                            {valueVal.map((val)=>{
                                return <div>
                                    <div className="dropdown-user-quota rounded-lg">
                                    {
                                        val.classConsultation<=3 ? 
                                        <Link to="/payment-confirmation-class-consultation-quota">
                                            <div className="flex justify-between gap-10">
                                                <p className="text-gray-400">Class Consultation Quota</p>
                                                <p className="font-semibold text-yellow-500">{val.classConsultation}</p>
                                            </div>
                                        </Link>
                                        : v.classConsultation <= 3 ?
                                        <Link to="/payment-confirmation-class-consultation-quota">
                                            <div className="flex justify-between gap-10">
                                                <p className="text-gray-400">Class Consultation Quota</p>
                                                <p className="font-semibold text-yellow-500">{v.classConsultation}</p>
                                            </div>
                                        </Link> :
                                        <Link to="/payment-confirmation-class-consultation-quota">
                                            <div className="flex justify-between gap-10">
                                                <p className="text-gray-400">Class Consultation Quota</p>
                                                <p className="font-semibold text-green-500">{val.classConsultation}</p>
                                            </div>
                                        </Link>
                                    }
                                </div>
                                <div className="dropdown-user-quota rounded-lg">
                                    {
                                        val.classSession<=3 ? 
                                        <Link to="/payment-confirmation-class-session-quota" className="dropdown-user-quota">
                                            <div className="flex justify-between gap-10">
                                                <p className="text-gray-400">Coding Class Quota</p>
                                                <p className="font-semibold text-yellow-500">{val.classSession}</p>
                                            </div>
                                        </Link>
                                        : v.classSession <= 3 ? 
                                        <Link to="/payment-confirmation-class-session-quota" className="dropdown-user-quota">
                                            <div className="flex justify-between gap-10">
                                                <p className="text-gray-400">Coding Class Quota</p>
                                                <p className="font-semibold text-green-500">{val.classSession}</p>
                                            </div>
                                        </Link> : 
                                        <Link to="/payment-confirmation-class-session-quota" className="dropdown-user-quota">
                                        <div className="flex justify-between gap-10">
                                            <p className="text-gray-400">Coding Class Quota</p>
                                            <p className="font-semibold text-green-500">{v.classSession}</p>
                                        </div>
                                    </Link>
                                    }
                                </div>
                                </div>
                            })}
                            </div>):(<div>
                                <div className="dropdown-user-quota rounded-lg">
                                {
                                    v.status==="Actived"?
                                    <div className="flex justify-between gap-20">
                                        <p className="text-gray-400">Premium plan</p>
                                        <p className="text-green-500 rounded-lg font-semibold tracking-wide">{v.status}</p>
                                    </div>
                                    :
                                    <div className="flex justify-between gap-20">
                                        <p className="text-gray-400">Premium plan</p>
                                        <p>{v.status}</p>
                                    </div>
                                }
                            </div>
                            
                                 <div>
                                    <div className="dropdown-user-quota rounded-lg">
                                  
                                        <Link to="/payment-confirmation-premium-plan">
                                            <div className="flex justify-between gap-10">
                                                <p className="text-gray-400">Class Consultation Quota</p>
                                                <p className="font-semibold text-yellow-500">0</p>
                                            </div>
                                        </Link>
                                </div>
                                <div className="dropdown-user-quota rounded-lg">
                                   
                                        <Link to="/payment-confirmation-premium-plan" className="dropdown-user-quota">
                                            <div className="flex justify-between gap-10">
                                                <p className="text-gray-400">Coding Class Quota</p>
                                                <p className="font-semibold text-yellow-500">0</p>
                                            </div>
                                        </Link>
                                </div>
                                </div>
                            </div>)}
                                
                            </div>
                        })}
                        <div className="border-darkmode w-0.5 my-5"></div>
                        <div className="dropdown-user-setting">
                            <Link to={"/profile/" + localStorage.getItem("name")}>
                                <p className="text-sm rounded-lg">Profile</p>
                            </Link>
                            <Link to={"/ChangePassword/"+ localStorage.getItem("name") + "-" + GenerateID(15,10)}>
                                <p className="text-sm rounded-lg">Change Password</p>
                            </Link>
                            <Link to="/purchase">
                                <p className="text-sm rounded-lg">Purchase</p>
                            </Link>
                            <Link to="/history-submit-project">
                                <p className="text-sm rounded-lg">Project</p>
                            </Link>
                            <Link to={"/feedback/" + localStorage.getItem("name")}>
                                <p className="text-sm rounded-lg">Feedback</p>
                            </Link>
                            {loggedIn ? (
                                <>
                                    <Link to="/login" className="text-sm text-red-500">
                                        <p className="rounded-lg">Logout</p>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="login bg-blue-1 text-white text-sm rounded-lg"><p className="rounded-lg">login</p></Link>
                                </>
                            )}
                        </div>
                    </div>
                </motion.div>
            </nav>
        </>
    )
}