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
                                                                item.score <= 74 ? <p className="text-yellow-500 text-xl font-bold">{item.score}</p> : <p className="text-green-500 text-xl font-bold">{item.score}</p>
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
                                                            <Link to={"/submit-solution/" + item.project_id}>
                                                                <p className="text-white bg-blue-1 w-max px-4 py-2 rounded-lg">Submit solution</p>
                                                            </Link>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <DetailsPopup trigger={buttonPopup1}>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum a id ex exercitationem doloribus, dolor impedit sed! Hic, dignissimos. Facere, provident porro velit quas culpa laborum explicabo fugit nulla.</p>
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
                                                item.score <= 74 ? <p className="text-yellow-500 text-xl font-bold">{item.score}</p> : <p className="text-green-500 text-xl font-bold">{item.score}</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end gap-5 text-sm">
                                    <p className="text-blue-500 font-medium cursor-pointer" onClick={OpenSetButtonPopup2}>More project details</p>
                                    {
                                        item.score >= 95 ? ( <Link to={"/CertificateAngular/"+item.project_id}>
                                        <p className="text-blue-500 font-medium text-sm w-max px-4 py-2 rounded-lg">Download certificate</p>
                                    </Link>) : ( <p className="text-gray-600 font-medium text-sm w-max px-4 py-2 rounded-lg">Download certificate</p>)
                                    }
                                    <div>
                                        {
                                            <Link to={"/submit-solution/" + item.project_id}>
                                                <p className="text-white bg-blue-1 w-max px-4 py-2 rounded-lg">Submit solution</p>
                                            </Link>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <DetailsPopup trigger={buttonPopup2}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum a id ex exercitationem doloribus, dolor impedit sed! Hic, dignissimos. Facere, provident porro velit quas culpa laborum explicabo fugit nulla.</p>
                        </DetailsPopup>
                    </div>
                })
            }
        </>
    )
}

function DetailsPopup(props){
    return(props.trigger)?(
        <div className="register-popup-container overflow-hidden">
            <div className="register-popup-box px-10 py-5 rounded-lg">
                {props.children}
            </div>
            
        </div>
    ):"";
}
