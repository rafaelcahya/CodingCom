import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import Axios from 'axios'
import { Link } from 'react-router-dom'

import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'
import Footer from '../../../../major/Footer'
import SidebarInternet from '../SidebarInternet'
import SidebarInternetMobile from '../SidebarInternetMobile'

import star from "../../../../../asset/icon/star.svg"

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

function Internet(props) {
    const urlid = props.match.params.id
    const urlid2 = props.match.params.id2
    const urlid3 = props.match.params.id3
    const modal = useRef()
    let x
    const [comment, setComment] = useState("")
    const [name, setName] = useState("")
    const [createAt, setCreateAt] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const [value, setValue] = useState([])
    const [courseList, setCourseList] = useState([])
    const [commentlist, setCommentList] = useState([])

    window.onload = setTimeout(function () {
        x = localStorage.getItem("name");
        document.getElementById("name").innerHTML = x;
        setName(x)
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setCreateAt(dateTime)
    }, 500)

    useEffect(() => {
        Axios.get("http://localhost:3001/course/courseById/" + urlid + "/" + urlid2).then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    }, [urlid, urlid2]);

    useEffect(() => {
        Axios.get("http://localhost:3001/comment/commentListById/" + urlid3).then((response) => {
            setCommentList(response.data)
            console.log(response.data)
        })
    }, [urlid3]);

    useEffect(() => {
        Axios.get("http://localhost:3001/course/courseByTopikId/" + urlid2).then((response) => {
            setCourseList(response.data)
            console.log(response.data)
        })
    }, [urlid2]);

    const commentInternet = () => {
        Axios.post("http://localhost:3001/comment/commentInternet", { id: urlid3, name: name, comment: comment, createAt: createAt }).then((response) => {
            setErrorMessage(response.data.message)
            window.location.reload()
        })
    }

    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
    const formatTime = s => new Date(s).toLocaleTimeString();

    return (
        <>
            <NavbarLogin />
            <NavbarMobile />
            <div className="flex gap-10 mt-32 lg:mt-16 mx-10 md:mx-20 lg:mx-32 leading-7">
                <div className="hidden lg:block lg:w-1/5">
                    <div className="hidden lg:block sticky self-start top-0 pt-6">
                        <p className="text-lg font-semibold">Course List</p>
                        <div className="sidebar-tutorial flex flex-col gap-2 my-5">
                            <div className="flex justify-between items-center">
                                <Link to={"/topic-detail/" + urlid2 + "-" + GenerateID(1, 10)}>Getting Started</Link>
                                <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">1 min</p>
                            </div>
                            {
                                courseList.map((v) => {
                                    return <div className="flex justify-between items-center">
                                        <Link to={"/" + GenerateID(1, 10) + "/" + v.number + "-" + v.id + "/" + v.topik_id}>{v.judul}</Link>
                                        <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">{v.time} min</p>
                                    </div>
                                })
                            }
                        </div>

                    </div>
                </div>
                <nav className="sidebar-mobile block lg:hidden fixed top-16 right-2 z-10">
                    <ul>
                        <li>
                            <div className="flex items-center px-8 py-4 gap-2 shadow rounded-lg">
                                <p className="uppercase font-semibold text-xs tracking-wider">Tutorial</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </div>
                            <div className="sidebar-mobile-dropdown bg-red-100 absolute right-0 text-right shadow rounded-lg px-4">
                                <p>
                                    <Link to={"/topic-detail/" + urlid2 + "-" + GenerateID(1, 10)}>
                                        <p className="px-6 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">Introduction</p>
                                    </Link>
                                </p>
                                {courseList.map((v) => {
                                    return <p>
                                        <Link to={"/" + GenerateID(1, 10) + "/" + v.number + "-" + v.id + "/" + v.topik_id}>
                                            <p className="px-6 py-2 font-medium hover:bg-blue-500 hover:text-white rounded-lg">{v.judul}</p>
                                        </Link>
                                    </p>
                                })}
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="w-full lg:w-7/12 pl-0 lg:pl-10 pr-0 pt-5 border-0 lg:border-l border-gray-300">
                    {
                        value.map(
                            (val) => {
                                return <div>
                                    <div className="block sm:flex justify-between border-b border-gray-300 pb-10">
                                        <div>
                                            <p className="text-2xl lg:text-5xl font-semibold">{val.judul}</p>
                                            <p className="text-gray-400 text-sm mt-2">{val.description}</p>
                                        </div>
                                        <p className="text-gray-400 text-sm mt-5 sm:mt-0">{val.time} min</p>
                                    </div>
                                    <div className="content-course flex flex-col gap-5 my-5 pt-5">
                                        <div dangerouslySetInnerHTML={{ __html: val.content }} />
                                    </div>
                                </div>
                            }
                        )
                    }


                    <div className="comment-container mt-32">
                        <p className="font-semibold text-2xl my-10 text">Discussion Section</p>
                        <span className="flex gap-2 my-2">Discussion as <p id="name" className="color-blue-1"></p></span>
                        <textarea placeholder="add your discussion here(255 char)" className="textarea resize-none cursor-text" onChange={(event) => {
                            setComment(event.target.value)
                        }} ></textarea>
                        <p className="text-sm color-red-1 text-center mt-8 font-medium">{errorMessage}</p>
                        <div className="flex justify-end items-center gap-10 my-5 mb-20">
                            <p className="bg-gray-200 color-black-1 px-4 py-1 rounded-lg cursor-pointer">Cancel</p>
                            <p onClick={commentInternet} id="submitComment" className="bg-blue-1 text-white px-4 py-1 rounded-lg cursor-pointer">Discussion</p>
                        </div>
                        {
                            commentlist.map(
                                (val) => {
                                    return <div className="comment-box p-4 my-5 rounded-lg">
                                        <div className="flex justify-between mb-1">
                                            <p className="color-blue-1 font-semibold text-sm">{val.name}</p>
                                            <p className="text-gray-400 text-sm">{formatDate(val.commentCreateAt)} {formatTime(val.commentCreateAt)}</p>
                                        </div>
                                        <p className="text-sm">{val.comment}</p>
                                    </div>
                                }
                            )
                        }
                    </div>
                </div>
                <div className="hidden lg:flex flex-col items-center sticky self-start top-6 mt-6 gap-5" style={{ width: "18%" }}>
                    <div className="p-6 bg-white rounded-lg shadow">
                        <p className="text-lg font-semibold">Consultation class</p>
                        <p className="text-sm pt-2">Consult with a professional mentor.</p>
                        <Link to="/consultation-class">
                            <p className="bg-blue-1 text-white text-sm px-6 py-2 mt-4 w-max rounded-lg">Consult</p>
                        </Link>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow">
                        <p className="text-lg font-semibold">Satisfied with this tutorial ?</p>
                        <div className="flex gap-3 items-center justify-center py-4">
                            <img src={star} alt="" width="10" class="animate1" />
                            <img src={star} alt="" width="15" class="animate2" />
                            <img src={star} alt="" width="20" class="animate3" />
                            <img src={star} alt="" width="15" class="animate4" />
                            <img src={star} alt="" width="10" class="animate5" />
                        </div>
                        <p className="bg-blue-1 text-white text-sm px-6 py-2 mt-4 w-max rounded-lg" onClick={() => modal.current.open()}>Leave a rating</p>
                        <Modal ref={modal}> </Modal>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Internet

const Modal = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false)

    useImperativeHandle(ref, () => {
        return {
            open: () => setOpen(true),
            close: () => setOpen(false)
        }
    })

    const Choose = (props) => {
        const [id, setId] = useState("")
        const [name, setName] = useState("")
        const [rating, setRating] = useState("")
        const [des, setDes] = useState("")
        const [message,setMessage] = useState("")
        const [createAt, setCreateAt] = useState("")
        let x

        window.onload = setTimeout(function () {
            var url1 = window.location.pathname;
            var idurl = url1.substring(url1.lastIndexOf('/') + 1);
            setId(idurl)
            x = localStorage.getItem("name");
            document.getElementById("name").innerHTML = x;
            setName(x)
            var today = new Date();
            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date + ' ' + time;
            setCreateAt(dateTime)
            console.log(idurl)
        }, 500)

        const RateEmo1 = () => {
            setRating("1")
            setMessage("Very Bad")
        }
        const RateEmo2 = () => {
            setRating("2")
            setMessage("Poor")
        }
        const RateEmo3 = () => {
            setRating("3")
            setMessage("Fair")
        }
        const RateEmo4 = () => {
            setRating("4")
            setMessage("Good")
        }
        const RateEmo5 = () => {
            setRating("5")
            setMessage("Very Good")
        }
        const Rate = () => {
            Axios.post("http://localhost:3001/rating/rating", { id: id, name: name, rating: rating, des: des, createAt: createAt }).then((response) => {
                window.location.reload()
                console.log(response)
            })
        }

        return (
            <>
                <div className="">
                    <p className="flex justify-end cursor-pointer" onClick={() => setOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(156, 163, 175)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></p>

                    <div className="flex flex-col items-center gap-4">
                        <p className="text-xl font-bold">Rate us</p>
                        <p className="text-sm text-center font-semibold">We love to hear from you. How is your tutorial experience?</p>
                        <div className="flex items-center my-10">
                            <span onClick={RateEmo1} class="emoji emoji--crying"></span>
                            <span onClick={RateEmo2} class="emoji emoji--sad"></span>
                            <span onClick={RateEmo3} class="emoji emoji--neutral"></span>
                            <span onClick={RateEmo4} class="emoji emoji--happy"></span>
                            <span onClick={RateEmo5} class="emoji emoji--satisfy"></span>
                        </div>
                        <p className="text-sm color-red-1 text-center mt-8 font-medium">{message}</p>
                        <div>
                            <textarea placeholder="add your rating here(255 char)" className="textarea resize-none cursor-text" onChange={(event) => {
                                setDes(event.target.value)
                            }}></textarea>
                            <p onClick={Rate} id="submitRating" className="bg-blue-1 text-white px-4 py-1 rounded-lg cursor-pointer">Rate Now</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1,
                            transition: {
                                duration: 0.3
                            }
                        }}
                        exit={{
                            opacity: 0
                        }}
                        className="rating-container">
                        <motion.div
                            initial={{
                                scale: 0
                            }}
                            animate={{
                                scale: 1
                            }}
                            exit={{
                                scale: 0
                            }}
                            className="rating-box p-5 rounded-lg">
                            <motion.div
                                exit={{
                                    opacity: 0,
                                    transition: {
                                        duration: 0.3
                                    }
                                }}>
                                {props.children}
                                <Choose />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
})
