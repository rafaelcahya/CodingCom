/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

import NavbarLogin from "../../major/NavbarLogin"
import NavbarMobile from "../../major/NavbarMobile"
import Footer from "../../major/Footer"

const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
const formatTime = s => new Date(s).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

export default function HistorySubmit(props) {
    const urlid = props.match.params.id
    const [value,setValue] = useState([])
    const [sum, setSum] = useState([])
    const [certi, setCerti] = useState([])
    const [chel, setChel] = useState([])
    const [show, setShow] = useState(true);
    const [buttonPopup1, setButtonPopup1] = useState(false)
    const [valueList, setValueList] = useState([])
    const [projectId, setProjectId] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/submit/submitListUser/"+localStorage.getItem("name")).then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        axios.get("http://localhost:3001/submit/submitListCount/"+localStorage.getItem("name")).then((response) => {
            setSum(response.data)
            console.log(response.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        axios.get("http://localhost:3001/submit/submitListCountCerti/"+localStorage.getItem("name")).then((response) => {
            setCerti(response.data)
            console.log(response.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    useEffect(() => {
        axios.get("http://localhost:3001/submit/submitListCountChel/"+localStorage.getItem("name")).then((response) => {
            setChel(response.data)
            console.log(response.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        axios.get("http://localhost:3001/submit/submitListById/" + urlid+ "/" + localStorage.getItem("name")).then((response) => {
            setValueList(response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        axios.get("http://localhost:3001/project/GetprojectById/" + urlid).then((response) => {
            setProjectId(response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const OpenSetButtonPopup1 = () =>{
        setButtonPopup1(true)
    }

    const CloseSetButtonPopup1 = () =>{
        setButtonPopup1(false)
    }

    // const allCategories = ['All', ...new Set(value.map(item => item.type))];
    const allCategories = ['All', 'Certificate', 'Challenge'];

    const [menuItem, setMenuItem] = useState(value);
    const [buttons] = useState(allCategories);

  //Filter Function
    const filter = (button) =>{
        setShow(false);
        if(button === 'All'){
            setMenuItem(value);
            
            return
        }

        const filteredData = value.filter(item => item.type === button);
        setMenuItem(filteredData)
    }
    
    const [name, setName] = useState("")
    
    let image = require('../../../asset/upload/'+ localStorage.getItem("image"))
    window.onload = setTimeout(function () {
        let x = localStorage.getItem("name");
        setName(x)
    }, 10)
    return (
        <>
            <NavbarLogin />
            <NavbarMobile />
            <div className="flex flex-col lg:flex-row gap-10 mt-16 lg:mt-0 px-10 xl:px-32 py-10 w-full">
                <div className="separator-project-card static lg:sticky self-start top-5 border rounded-lg p-5 w-full lg:w-1/4">
                    <div className="flex items-center gap-5 mb-5">
                        <img src={image.default} className="ring-1 rounded-full p-0.5" width="50" alt="Image Profile"/>   
                        <div>
                            <p>{name}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 text-sm">
                        <div className="flex justify-between">
                            <p className="text-gray-400">Total Submit</p>
                            {
                                sum.map((val)=>{
                                    return <p>{val.sum}</p>
                                })
                            }
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-400">Challenge Submit</p>
                            {chel.map((val)=>{
                                return <p>{val.chel}</p>
                            })}
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-400">Certificate Submit</p>
                            {certi.map((val)=>{
                                return <p>{val.certi}</p>
                            })}
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-3/4">
                    <p className="text-xl font-semibold mb-5">Project Collection History</p>
                    <Button button={buttons} filter={filter} />
                    {
                        show ? <div>
                            {
                                value.map((item) =>{
                                    return <div>
                                            <div className="history-project-card flex flex-col gap-3 mt-5 p-5 hover:shadow-lg transform hover:scale-105 duration-200 rounded-lg w-full border-b">
                                            <div className="flex items-center justify-between gap-2">
                                                <p className="text-sm font-semibold">{item.type}</p>
                                                <p className="text-xs">{formatDate(item.projectsubCreateAt)}</p>
                                            </div>
                                            <p className="font-semibold">{item.projectTitle}</p>
                                            <div className="flex flex-col md:justify-between gap-5">
                                                <div className="flex gap-10">
                                                    <div className="flex flex-col gap-1">
                                                        <p className="text-xs font-medium text-gray-400">Times upload</p>
                                                        <p>{item.timesUpload}</p>
                                                    </div>
                                                    <div className="flex flex-col gap-1">
                                                        <p className="text-xs font-medium text-gray-400">Score</p>
                                                        <div>
                                                            {
                                                                item.score <= 59 ? (<p className="text-red-500 text-xl font-bold">{item.score}</p>) :
                                                                item.score <= 75 ? <p className="text-yellow-500 text-xl font-bold">{item.score}</p> : <p className="text-green-500 text-xl font-bold">{item.score}</p>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-end gap-5 text-sm">
                                                    <p className="text-blue-500 font-medium cursor-pointer" onClick={OpenSetButtonPopup1}>More project details</p>
                                                    {
                                                        item.score >= 95 ? ( <Link to={"/CertificateAngular/"+item.project_id}>
                                                        <p className="text-blue-500 font-medium text-sm w-max px-4 py-2 rounded-lg">Download certificate</p>
                                                    </Link>) : ( <p className="text-gray-600 font-medium text-sm w-max px-4 py-2 rounded-lg">Download certificate</p>)
                                                    }
                                                    <div>
                                                    {
                                                        item.score < 95 ? <Link to={"/submit-solution/" + item.project_id}><p className="text-white text-center bg-blue-1 px-4 py-2 rounded-lg">Submit solution</p>
                                                        </Link> : <p className="text-center px-4 py-2 rounded-lg">Submit solution</p>
                                                    }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <DetailsPopup trigger={buttonPopup1}>
                                            <div className="flex items-center justify-between">
                                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="30" height="45" viewBox="0 0 44 59" preserveAspectRatio="xMidYMid meet">
                                                <g transform="translate(0,59) scale(0.1,-0.1)" fill="currentColor" stroke="none"><path d="M270 548 c-136 -52 -250 -236 -250 -403 0 -85 7 -101 51 -125 46 -24
                                                80 -25 117 -6 44 23 192 181 192 205 0 11 -5 21 -11 21 -6 0 -49 -36 -96 -80
                                                -90 -85 -135 -115 -160 -106 -13 5 -15 21 -11 84 5 94 44 175 125 262 60 66
                                                153 122 153 94 0 -10 -6 -25 -14 -33 -13 -14 -12 -18 10 -28 22 -10 26 -8 41
                                                13 25 39 24 70 -4 99 -32 31 -68 32 -143 3z m-184 -324 c-20 -56 -25 -63 -25
                                                -38 -1 49 31 126 46 110 2 -1 -8 -34 -21 -72z"/>
                                                    </g>
                                                </svg>
                                                <p className="text-xl font-medium">Detail Project</p>
                                                <div onClick={CloseSetButtonPopup1} className="cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                                </div>
                                            </div>
                                            <div className="flex justify-between mt-14">
                                                <div className="flex flex-col gap-5">
                                                    <div>
                                                        <p className="text-xs text-gray-500">Project name</p>
                                                        <p className="font-medium">{item.projectTitle}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-gray-500">Project type</p>
                                                        <p className="font-medium">{item.type}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-gray-500">Upload time</p>
                                                        <p className="font-medium">{formatDate(item.projectsubCreateAt)} {formatTime(item.projectsubCreateAt)}</p>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <div>
                                                            <p className="text-xs text-gray-500">Times upload</p>
                                                            <p className="font-medium">{item.timesUpload}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-xs text-gray-500">Score</p>
                                                            {
                                                                item.score <= 59 ? (<p className="text-red-500 text-xl font-bold">{item.score}</p>) :
                                                                item.score <= 75 ? <p className="text-yellow-500 text-xl font-bold">{item.score}</p> : <p className="text-green-500 text-xl font-bold">{item.score}</p>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-5 text-sm">
                                                    {
                                                        item.score >= 95 ? ( <Link to={"/CertificateAngular/"+item.project_id}>
                                                        <p className="text-white bg-blue-1 px-4 py-2 rounded-lg">Download certificate</p>
                                                    </Link>) : ( <p className="text-gray-600 font-medium text-sm px-4 py-2 rounded-lg">Download certificate</p>)
                                                    }
                                                    <div>
                                                        {
                                                            item.score < 95 ? <Link to={"/submit-solution/" + item.project_id}><p className="text-white text-center bg-blue-1 px-4 py-2 rounded-lg">Submit solution</p>
                                                            </Link> : <p className="text-center px-4 py-2 rounded-lg">Submit solution</p>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-popup-history-project w-full h-0.5 my-5"></div>
                                            <div className="flex flex-col gap-5">
                                                <div>
                                                    <p className="text-xs text-gray-500">Description</p>
                                                    <p>{item.description}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500">Revision note</p>
                                                    <p>{item.revisi}</p>
                                                </div>
                                            </div>
                                        </DetailsPopup>
                                    </div>
                                })
                            }
                        </div> : null
                    }
                    <Menu menuItem={menuItem}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

function Button({button, filter}) {
    return (
        <div className="flex items-center gap-4">
            <p className="text-sm text-gray-500">Filter :</p>
            <div className="flex gap-4">
                {
                    button.map((cat, i)=>{
                        return <button onClick={()=> filter(cat)}  id="jobCategorybtn" className="project-filter-btn text-left text-sm font-medium bg-blue-50 px-2 py-2 rounded-lg">{cat}</button>
                    })
                }
            </div>
        </div>
    )
}

function Menu({menuItem}) {
    const [buttonPopup2, setButtonPopup2] = useState(false)
    
    const OpenSetButtonPopup2 = () =>{
        setButtonPopup2(true)
    }

    const CloseSetButtonPopup2 = () =>{
        setButtonPopup2(false)
    }
    return (
        <>
            {
                menuItem.map((item) =>{
                    return <div>
                            <div className="history-project-card flex flex-col gap-3 mt-5 p-5 hover:shadow-lg transform hover:scale-105 duration-200 rounded-lg w-full border-b">
                            <div className="flex items-center justify-between gap-2">
                                <p className="text-sm font-semibold">{item.type}</p>
                                <p className="text-xs">{formatDate(item.projectsubCreateAt)}</p>
                            </div>
                            <p className="font-semibold">{item.projectTitle}</p>
                            <div className="flex flex-col md:justify-between gap-5">
                                <div className="flex gap-10">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-xs font-medium text-gray-400">Times upload</p>
                                        <p>{item.timesUpload}</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-xs font-medium text-gray-400">Score</p>
                                        <div>
                                            {
                                                item.score <= 59 ? (<p className="text-red-500 text-xl font-bold">{item.score}</p>) :
                                                item.score <= 75 ? <p className="text-yellow-500 text-xl font-bold">{item.score}</p> : <p className="text-green-500 text-xl font-bold">{item.score}</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end gap-5 text-sm">
                                    <p className="text-blue-500 font-medium cursor-pointer" onClick={OpenSetButtonPopup2}>More project details</p>
                                    {
                                        item.score >= 95 ? ( <Link to={"/CertificateAngular/"+item.project_id}>
                                        <p className="text-blue-500 text-center font-medium text-sm w-max px-4 py-2 rounded-lg">Download certificate</p>
                                    </Link>) : ( <p className="text-gray-600 text-center font-medium text-sm w-max px-4 py-2 rounded-lg">Download certificate</p>)
                                    }
                                    <div>
                                        {
                                            item.score < 95 ? <Link to={"/submit-solution/" + item.project_id}><p className="text-white text-center bg-blue-1 px-4 py-2 rounded-lg">Submit solution</p>
                                            </Link> : <p className="text-center px-4 py-2 rounded-lg">Submit solution</p>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <DetailsPopup trigger={buttonPopup2}>
                            <div className="flex items-center justify-between">
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="30" height="45" viewBox="0 0 44 59" preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0,59) scale(0.1,-0.1)" fill="currentColor" stroke="none"><path d="M270 548 c-136 -52 -250 -236 -250 -403 0 -85 7 -101 51 -125 46 -24
                                80 -25 117 -6 44 23 192 181 192 205 0 11 -5 21 -11 21 -6 0 -49 -36 -96 -80
                                -90 -85 -135 -115 -160 -106 -13 5 -15 21 -11 84 5 94 44 175 125 262 60 66
                                153 122 153 94 0 -10 -6 -25 -14 -33 -13 -14 -12 -18 10 -28 22 -10 26 -8 41
                                13 25 39 24 70 -4 99 -32 31 -68 32 -143 3z m-184 -324 c-20 -56 -25 -63 -25
                                -38 -1 49 31 126 46 110 2 -1 -8 -34 -21 -72z"/>
                                    </g>
                                </svg>
                                <p className="text-xl font-medium">Detail Project</p>
                                <div onClick={CloseSetButtonPopup2} className="cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </div>
                            </div>
                            <div className="flex justify-between mt-14">
                                <div className="flex flex-col gap-5">
                                    <div>
                                        <p className="text-xs text-gray-500">Project name</p>
                                        <p className="font-medium">{item.projectTitle}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Project type</p>
                                        <p className="font-medium">{item.type}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Upload time</p>
                                        <p className="font-medium">{formatDate(item.projectsubCreateAt)} {formatTime(item.projectsubCreateAt)}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <div>
                                            <p className="text-xs text-gray-500">Times upload</p>
                                            <p className="font-medium">{item.timesUpload}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Score</p>
                                            {
                                                item.score <= 59 ? (<p className="text-red-500 text-xl font-bold">{item.score}</p>) :
                                                item.score <= 76 ? <p className="text-yellow-500 text-xl font-bold">{item.score}</p> : <p className="text-green-500 text-xl font-bold">{item.score}</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 text-sm">
                                    {
                                        item.score >= 95 ? ( <Link to={"/CertificateAngular/"+item.project_id}>
                                        <p className="text-white bg-blue-1 text-center px-4 py-2 rounded-lg">Download certificate</p>
                                    </Link>) : ( <p className="text-gray-600 text-center font-medium text-sm px-4 py-2 rounded-lg">Download certificate</p>)
                                    }
                                    <div>
                                        {
                                            item.score < 95 ? <Link to={"/submit-solution/" + item.project_id}><p className="text-white text-center bg-blue-1 px-4 py-2 rounded-lg">Submit solution</p>
                                            </Link> : <p className="text-center px-4 py-2 rounded-lg">Submit solution</p>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="border-popup-history-project w-full h-0.5 my-10"></div>
                            <div className="flex flex-col gap-5">
                                <div>
                                    <p className="text-xs text-gray-500">Description</p>
                                    <p>{item.description}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Revision note</p>
                                    <p>{item.revisi}</p>
                                </div>
                            </div>
                        </DetailsPopup>
                    </div>
                })
            }
        </>
    )
}

function DetailsPopup(props){
    return(props.trigger)?(
        <div className="register-popup-container px-5 sm:px-20 md:px-32 lg:px-80 pt-10 z-50">
            <div className="popup-box p-8 rounded-lg">
                {props.children}
            </div>
        </div>
    ):"";
}
