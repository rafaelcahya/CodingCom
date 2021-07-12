/* eslint-disable no-unused-vars */
/* eslint-disable default-case */
/* eslint-disable jsx-a11y/alt-text */
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { Link } from 'react-router-dom'
import axios from 'axios';
import ShowMoreText from 'react-show-more-text';

import Footer from '../../major/Footer'
import NavbarLogin from '../../major/NavbarLogin';
import NavbarMobile from '../../major/NavbarMobile';

function CareerDetail(props) {
    const urlid = props.match.params.id
    const urlname = props.match.params.name
    const [name, setName] = useState("")
    const [createAt, setCreateAt] = useState("")
    const [lockDate, setLockDate] = useState("")
    const [id, setId] = useState("")
    const [value, setValue] = useState([])
    const [valueList, setValueList] = useState([])
    let x
    let dateTime

    useEffect(() => {
        axios.get("http://localhost:3001/jobs/jobById/" + urlid).then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [urlid]);

    useEffect(() => {
        axios.get("http://localhost:3001/jobs/applicationById/" + localStorage.getItem("name") + "/" + urlid).then((response) => {
            setValueList(response.data)
            console.log(response.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [urlid]);

    window.onload = setTimeout(function () {
        x = localStorage.getItem("name");
        setName(x)
        var url1 = window.location.pathname;
        var idurl = url1.substring(url1.lastIndexOf('/') + 1);
        setId(idurl)
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        //var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        dateTime = date;
        setCreateAt(dateTime)
        var date1 = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 7);
        setLockDate(date1)
    }, 500)

    const submit = () => {
        axios.post("http://localhost:3001/jobs/apply", { createAt: createAt, name: name, id:id, lockDate:lockDate}).then((response) => {
            console.log(response)
            window.location.reload();
        })
    };

    const items = valueList
    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });

    items.map((val)=>{
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        //var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        dateTime = date;
        if(formatDate(dateTime) === formatDate(val.applicationLocked)){
            axios.post("http://localhost:3001/jobs/update", {id:urlid, name:localStorage.getItem("name")}).then((response) => {
                window.location.reload();
        })
        }
        return val
    },[])

    const modal = useRef()
    const Modal = forwardRef((props, ref) => {
        const [open, setOpen] = useState(false)
        const [value, setValue] = useState([])
    
        useImperativeHandle(ref, () => {
            return {
                open: () => setOpen(true),
                close: () => setOpen(false)
            }
        })
    
        useEffect(() => {
            axios.get("http://localhost:3001/jobs/jobById/" + urlid).then((response) => {
                setValue(response.data)
                console.log(response.data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [urlid]);
    
        const Choose = () => {
            const submit = () => {
                axios.post("http://localhost:3001/jobs/apply", { createAt: createAt, name: name, id:id, lockDate:lockDate}).then((response) => {
                    console.log(response)
                    window.location.reload();
                })
            };
        
            return (
                <>
                    <div className="flex justify-between items-center gap-10 my-5">
                        <Link to="/help">
                            <p className="color-black-2 text-xs underline">Help</p>
                        </Link>
                        <div className="flex gap-5">
                            <p className="text-sm rounded-lg py-2 px-4 cursor-pointer" onClick={() => setOpen(false)}>Cancel</p>
                            {
                                value.map((val) => {
                                    return <a href={"mailto:" + val.companyEmail} className="bg-blue-500 text-white px-4 py-2 font-semibold rounded-lg text-sm w-max" onClick={submit}>Apply</a>
                                })
                            }
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
                            className="payment-confirm-container">
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
                                className="payment-confirm-box px-10 py-5 rounded-3xl ">
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
    return (
        <>
            <NavbarLogin/>
            <NavbarMobile/>
            <div className="mx-16 xl:mx-32 mt-20">
                    {
                        value.map((val) => {
                            let image = require('../../../asset/upload/'+ val.companyLogo)
                            return <div className="flex flex-col gap-4 px-2 pt-2 w-full lg:w-3/4">
                                <div className="flex flex-col gap-4 border-b-2 border-gray-300 pb-10">
                                    <div className="flex items-center gap-5">
                                        <img src={image.default} className="w-20 h-20 rounded-lg" />
                                        <div className="flex flex-col gap-2">
                                            <a href={val.companyUrl} target="_blank" rel="noreferrer" className="hover:underline text-lg text-blue-500 font-semibold capitalize">{val.companyName}</a>
                                            <p className="text-2xl md:text-3xl font-bold capitalize">{val.jobTitle}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-y-4 md:gap-10 text-sm">
                                        <p>{val.jobLocation}</p>
                                        <p>{val.jobType}</p>
                                        <p>{val.companyEmail}</p>
                                    </div>
                                    {
                                        !valueList.length ? (<p className="bg-blue-500 text-white px-4 py-2 font-semibold rounded-lg text-sm w-max cursor-pointer" onClick={() => modal.current.open()}>Apply</p>):
                                        (valueList.map((val) => {
                                            return <div>
                                                {
                                                    (val.status === "Pending") ? <p className="bg-green-200 text-green-500 px-4 py-2 font-semibold rounded-lg text-sm w-max">Already Applied</p> :
                                                    <p className="bg-blue-500 text-white px-4 py-2 font-semibold rounded-lg text-sm w-max cursor-pointer" onClick={() => modal.current.open()}>Apply</p>
                                                }
                                            </div>
                                        }))
                                    }
                                    <p className="text-sm text-gray-500">{formatDate(val.jobCreateAt)}</p>
                                </div>
                                <div className="flex flex-col gap-10 pt-5">
                                    <div className="content-course flex flex-col gap-2">
                                        <p className="text-xl font-semibold">Overview</p>
                                        <div dangerouslySetInnerHTML={{ __html: val.overview }} />
                                    </div>
                                    <div className="content-course flex flex-col gap-2">
                                        <p className="text-xl font-semibold">Job Description</p>
                                        <div dangerouslySetInnerHTML={{ __html: val.jobDescription }} />
                                    </div>
                                </div>
                            </div>
                        })
                    }
                    {
                        value.map((val)=> {
                            let image = require('../../../asset/upload/'+ val.companyLogo)
                            return <div className="about-company flex flex-col gap-5 p-5 my-10 rounded-lg w-full lg:w-2/5">
                                <p className="font-semibold">About company</p>
                                <div className="flex items-center gap-5">
                                    <img src={image.default} className="w-10 h-10 rounded-lg" />
                                    <div className="flex flex-col">
                                        <a href={val.companyUrl} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline text-lg font-semibold capitalize">{val.companyName}</a>
                                        <a href={"mailto:" + val.companyEmail} className="text-sm">{val.companyEmail}</a>
                                    </div>
                                </div>
                                <ShowMoreText
                                    more='Read more'
                                    less='Read less'
                                    anchorClass='anchor-showmore'>
                                    <div dangerouslySetInnerHTML={{ __html: val.overview }} />
                                </ShowMoreText>
                            </div>
                        })
                    }
                    
            </div>

            <section className="discord flex flex-col items-center gap-10 text-center text-white mx-10 lg:mx-20 px-10 lg:px-20 py-20 mt-32 rounded-xl" >
                <img src="https://cdn.discordapp.com/attachments/414258067870449665/445736475158380544/discord.gif" alt="discord" width={100} />
                <div className="flex flex-col gap-5">
                    <p className="text-xl font-semibold">Join us in our community.</p>
                    <p>We talk about challenge and project, help each other with code, chat about all things web development.</p>
                </div>
                <a href="https://discord.gg/rvdAvXYt" className="font-medium px-8 py-3 rounded-xl" style={{ backgroundColor: "#2c2f33" }}>Join us</a>
            </section>
            <Modal ref={modal}>
                <p className="text-lg font-bold py-5">Apply confirmation</p>
                <p className="text-sm font-medium">Make sure beforehand that you have prepared the necessary documents to apply. Are you sure you want to apply?</p>
            </Modal>
            <Footer />
        </>
    )
}



export default CareerDetail
