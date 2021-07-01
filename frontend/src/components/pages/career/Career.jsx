/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../major/Footer'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import Axios from 'axios'

const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });

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

export default function Career() {
    const [value,setValue] = useState([])
    const [valueCount,setValueCount] = useState([])
    const [show, setShow] = useState(true);

    useEffect(() => {
        Axios.get("http://localhost:3001/jobs/ListJobs").then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    }, []);

    useEffect(() => {
        Axios.get("http://localhost:3001/jobs/ListJobsCount").then((response) => {
            setValueCount(response.data)
            console.log(response.data)
        })
    }, []);

    const allCategories = ['All', 'Fulltime', 'Parttime', 'Internship'];

    const [menuItem, setMenuItem] = useState(value);
    const [buttons] = useState(allCategories);

  //Filter Function
    const filter = (button) =>{
        setShow(false);
        if(button === 'All'){
            setMenuItem(value);
            
            return
        }

        const filteredData = value.filter(val => val.jobType === button);
        setMenuItem(filteredData)
    }

    return (
        <>
            
            <NavbarLogin />
            <NavbarMobile />

            <div>
                <div className="bg-custom darken-overlay">
                    <div className="text-white flex flex-col items-center gap-2 px-5 xl:px-32 py-36">
                        <p className="text-4xl font-bold">Latest Jobs</p>
                        <p className="text-xl font-medium">Improve your skills by studying the needs of the company and find a job that suits you</p>
                    </div>
                </div>
                <div className="block md:flex gap-4 w-full px-5 xl:px-32 pt-10">
                    <Button button={buttons} filter={filter} />
                    <div className="flex flex-col my-10 md:my-0 w-full md:w-10/12">
                    {
                        valueCount.map((val) => {
                            return <p className="text-xl font-semibold">Showing {val.CountJobs} jobs in all</p>
                        })
                    }
                        <div className="flex py-4">
                        {show ? <div className="flex flex-wrap items-center gap-5">
                                {
                                    value.map((item) =>{
                                        let image = require('../../../asset/upload/'+ item.companyLogo)
                                        return <Link to={"/detail-career/" + item.jobsId + "-" + GenerateID(3,5)}>
                                            <div className="career-card p-4 rounded-lg transform hover:scale-105 duration-200 border border-gray-200 shadow hover:shadow-lg" style={{width: "310px"}}>
                                                <div className="flex justify-between">
                                                    <img src={image.default} className="w-10 h-10 rounded-lg" alt=""/>
                                                    <p className="text-xs font-medium text-gray-400">{formatDate(item.jobCreateAt)}</p>
                                                </div>
                                                <div className="flex flex-col gap-2 py-2">
                                                    <p className="text-sm">{item.companyName}</p>
                                                    <p className="font-semibold">{item.jobTitle}</p>
                                                    <div className="text-sm truncate3">
                                                        <div dangerouslySetInnerHTML={{ __html: item.overview }} />
                                                    </div>
                                                    <p className="text-sm text-gray-400 mt-5">{item.jobLocation}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    })
                                }
                            </div> : null
                        }
                        <Menu menuItem={menuItem}/>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

function Button({button, filter}) {
    return (
        <div className="filter-job sticky self-start top-5 flex flex-col gap-3 rounded-lg p-4 z-10 border border-gray-100 shadow w-full md:w-2/12">
            <p className="text-sm font-semibold">Type of employment :</p>
            <div className="flex flex-row md:flex-col gap-4">
                {
                    button.map((cat, i)=>{
                        return <button onClick={()=> filter(cat)}  id="jobCategorybtn" className="jobCategorybtn text-left text-sm font-medium bg-blue-50 px-2 py-2 rounded-lg">{cat}</button>
                    })
                }
            </div>
        </div>
    )
}

function Menu({menuItem}) {
    return (
        <div className="flex flex-wrap items-center gap-5">
            {
                menuItem.map((item) =>{
                    let image = require('../../../asset/upload/'+ item.companyLogo)
                    return <Link to={"/detail-career/" + item.jobsId + "-"+ GenerateID(3,5)}>
                        <div className="career-card p-4 rounded-lg transform hover:scale-105 duration-200 border border-gray-200 shadow hover:shadow-lg" style={{width: "310px"}}>
                            <div className="flex justify-between">
                                <img src={image.default} className="w-10 h-10 rounded-lg" alt="" />
                                <p className="text-xs font-medium text-gray-400">{formatDate(item.jobCreateAt)}</p>
                            </div>
                            <div className="flex flex-col gap-2 py-2">
                                <p className="text-sm">{item.companyName}</p>
                                <p className="font-bold">{item.jobTitle}</p>
                                <div className="text-sm truncate3">
                                    <div dangerouslySetInnerHTML={{ __html: item.overview }} />
                                </div>
                                <p className="text-sm text-gray-400 mt-5">{item.jobLocation}</p>
                            </div>
                        </div>
                    </Link>
                })
            }
        </div>
    )
}