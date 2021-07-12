/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useRef, useState } from "react";
import Axios from 'axios'
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import Popup from "./PopUp"

const GenerateID = (len, k) => {
    const s = (k) => {
        var text = ""
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        for (let i = 0; i < k; i++) {
            text += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return text
    }
    var id = s(k);
    for (let n = 0; n < len; n++) {
        id += '-' + s(k)
    }
    return id
}

export default function NavbarMobile() {
    const [loggedIn, setLoggedIn] = useState(true)
    const [openTutorial, setOpenTutorial] = useState(false)
    const [openProfile, setOpenProfile] = useState(false)
    const [valueList, setValueList] = useState([])
    const [valueVal, setValueVal] = useState([])
    const [buttonPopup, setButtonPopup] = useState(false)
    const [name, setName] = useState("")
    var image = ""
    if (localStorage.getItem("image") != null) {
        image = require('../../asset/upload/' + localStorage.getItem("image"))
    }
    window.onload = setTimeout(function () {
        let x = localStorage.getItem("name");
        setName(x)
    }, 10)

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
    }, []);

    useEffect(() => {
        Axios.get("http://localhost:3001/user/userkuotaById/" + localStorage.getItem("name")).then((response) => {
            setValueVal(response.data)
            console.log(response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const popup = ()=>{
        setButtonPopup(true)
    }

    const cancel = () =>{
        setButtonPopup(false)
    }

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
                    {localStorage.getItem("loggedIn") === "false" ? <div className="flex items-center gap-2">
                        <Link to="/login">
                            Login
                        </Link>
                    </div> : <div className="flex items-center gap-2">
                        <img src={image.default} className="ring-1 rounded-full p-0.5" width="35" alt="Image Profile" />
                    </div>}
                    {localStorage.getItem("loggedIn") === "true" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    ) : ("")}
                </motion.div>
            </nav>
            <div className="block lg:hidden fixed top-0 px-10 shadow-md w-full z-10">
                <motion.div
                    initial={false}
                    variants={menuVariants}
                    animate={openTutorial ? "opened" : "closed"} className="navbar-mobile-dropdown absolute top-0 p-5 flex flex-col gap-2 rounded-lg bg-white z-10">
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
                        <DropDownMenu />
                        {localStorage.getItem("loggedIn")=="true" ? (
                            <Link to="/challenge">
                            <p className="pl-6 pr-20 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Challenge</p>
                        </Link>
                        ):(
                            <div onClick={popup}>
                            <p className="pl-6 pr-20 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Challenge</p>
                        </div>
                        )}
                        {localStorage.getItem("loggedIn")=="true" ? (
                            <Link to="/class-session">
                            <p className="pl-6 pr-20 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Coding Class</p>
                        </Link>
                        ):(
                            <div onClick={popup}>
                            <p className="pl-6 pr-20 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Coding Class</p>
                        </div>
                        )}
                        <Link to="/news">
                            <p className="pl-6 pr-20 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Newsfeed</p>
                        </Link>
                        {localStorage.getItem("loggedIn")== "true" ? (
                            <Link to="/career">
                            <p className="pl-6 pr-20 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Career</p>
                        </Link>
                        ):(
                            <div onClick={popup}>
                            <p className="pl-6 pr-20 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Career</p>
                        </div>
                        )}
                    </div>
                </motion.div>
                {localStorage.getItem("loggedIn") == "true" ? (<motion.div
                    initial={false}
                    variants={menuProfile}
                    animate={openProfile ? "opened" : "closed"} className="dropdown-user absolute top-0 right-0 mx-16 xl:mx-32 p-5 lg:flex flex-col gap-2 rounded-lg bg-white z-10">
                    <div className="flex gap-5">
                        {valueList.map((v) => {
                            return <div className="text-sm">
                                {v.status == "Actived" ? (<div>
                                    <div className="dropdown-user-quota rounded-lg">
                                        {
                                            v.status === "Actived" ?
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
                                    {valueVal.map((val) => {
                                        return <div>
                                            <div className="dropdown-user-quota rounded-lg">
                                                {
                                                    val.classConsultation <= 3 ?
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
                                                    val.classSession <= 3 ?
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
                                </div>) : (<div>
                                    <div className="dropdown-user-quota rounded-lg">
                                        {
                                            v.status === "Actived" ?
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
                            <Link to={"/profile/" + name}>
                                <p className="text-sm rounded-lg">Profile</p>
                            </Link>
                            <Link to={"/ChangePassword/" + localStorage.getItem("name") + "-" + GenerateID(15, 10)}>
                                <p className="text-sm rounded-lg">Change Password</p>
                            </Link>
                            <Link to="/purchase">
                                <p className="text-sm rounded-lg">Purchase</p>
                            </Link>
                            <Link to="/history-submit-project">
                                <p className="text-sm rounded-lg">Project</p>
                            </Link>
                            <Link to={"/feedback/" + name}>
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
                </motion.div>) : ("")}
            </div>
            <Popup trigger={buttonPopup}>
                <p className="pb-5 font-medium text-center">Already have an account?</p>
                <div className="flex flex-col justify-center gap-5">
                    <Link to="/login">
                        <p className="bg-blue-1 text-white font-medium text-center rounded-md px-8 py-2 cursor-pointer outline-none">Login</p>
                    </Link>
                    <Link to="/register">
                        <p className="bg-blue-1 text-white font-medium text-center rounded-md px-8 py-2 cursor-pointer outline-none">Register</p>
                    </Link>
                    <p onClick={cancel} className="text-sm text-center rounded-md px-8 py-2 cursor-pointer outline-none">Cancel</p>
                </div>
            </Popup>
        </>
    )
}

const DropDownMenu = () => {
    const [dropdownTutorial, setDropdownTutorial] = useState();
    const [open, setOpen] = useState(false);
    const container = useRef(null);

    const handleClickOutside = event => {
        if (container.current && !container.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    useEffect(() => {
        Axios.get("http://localhost:3001/category/listCategory").then((response) => {
            setDropdownTutorial(response.data)
            console.log(response.data)
        })
    }, []);

    return (
        <div className="container" ref={container}>
            <div className="flex justify-between items-center px-6 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg" onClick={() => setOpen(!open)}>
                <p>Tutorial</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
            {open && (
                <div>
                    {
                        dropdownTutorial.map((val) => {
                            return <div className="dropdown-tutorial rounded-lg ml-14">
                                <Link to={"/category-detail-" + val.categoryId + "/" + GenerateID(15, 10)} className="">
                                    <p className="text-sm font-medium p-2">{val.category}</p>
                                </Link>
                            </div>
                        })
                    }
                </div>
            )}
        </div>
    );
};