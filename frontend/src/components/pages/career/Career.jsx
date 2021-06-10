import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../major/Footer'
import Axios from 'axios'

const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
export default function Career() {
    const [value,setValue] = useState([])
    const [valueCount,setValueCount] = useState([])
    const [show, setShow] = useState(true);
    const [name, setName] = useState("")

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

    window.onload = setTimeout( function () {
        var x = localStorage.getItem("name");
        document.getElementById("demo").innerHTML = x;
        setName(x)
    }, 10)

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
            <div className="bg-white flex justify-between items-center px-16 xl:px-32 py-5">
                <Link to="/">
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        <p>Back</p>
                    </div>
                </Link>
                <p>Find job</p>
                <p id="demo"></p>
            </div>

            <div className="px-16 xl:px-32">
                <p className="text-xl font-semibold py-10">Improve your skills by studying the needs of the company and find a job that suits you</p>
                <div className="block md:flex gap-4 w-full">
                    <Button button={buttons} filter={filter} />
                    <div className="flex flex-col my-10 md:my-0 w-full md:w-10/12">
                    {
                        valueCount.map((val) => {
                            return <p className="text-xl font-semibold">Showing {val.CountJobs} jobs</p>
                        })
                    }
                        <div className="flex py-4">
                        {show ? <div className="flex flex-wrap items-center gap-5">
                                {
                                    value.map((item) =>{
                                        let image = require('../../../asset/upload/'+ item.companyLogo)
                                        return <Link to={"/career-detail/"+item.jobsId + "/" + name}>
                                            <div className="bg-white p-4 rounded-lg transform hover:scale-105 duration-200 hover:shadow-md" style={{width: "310px"}}>
                                                <div className="flex justify-between">
                                                <img src={image.default} className="w-72 h-36 sm:w-96 sm:h-52 rounded-lg" />
                                                    <p className="text-xs font-medium text-gray-400">{formatDate(item.jobCreateAt)}</p>
                                                </div>
                                                <div className="flex flex-col gap-2 py-2">
                                                    <p className="text-sm">{item.companyName}</p>
                                                    <p className="font-semibold">{item.jobTitle}</p>
                                                    <p className="text-gray-500 text-sm">{item.overview}</p>
                                                    <p className="text-xs bg-blue-100 color-blue-1 font-semibold w-max py-1 px-2 mt-2 rounded-lg">{item.jobType}</p>
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
        <div className="bg-white sticky self-start top-5 flex flex-col gap-3 rounded-lg p-4 z-10 shadow-lg w-full md:w-2/12">
            <p className="text-sm font-semibold">Type of employment :</p>
            <div className="flex flex-col sm:flex-row md:flex-col gap-4">
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
    const[name, setName] = useState("")
    window.onload = setTimeout( function () {
        var x = localStorage.getItem("name");
        setName(x)
    }, 10)
    return (
        <div className="flex flex-wrap items-center gap-5">
            {
                menuItem.map((item) =>{
                    let image = require('../../../asset/upload/'+ item.companyLogo)
                    return <Link to={"/career-detail/"+item.jobsId + "/" + name}>
                        <div className="bg-white p-4 rounded-lg transform hover:scale-105 duration-200 hover:shadow-md" style={{width: "310px"}}>
                            <div className="flex justify-between">
                            <img src={image.default} className="w-72 h-36 sm:w-96 sm:h-52 rounded-lg" />
                                <p className="text-xs font-medium text-gray-400">{formatDate(item.jobCreateAt)}</p>
                            </div>
                            <div className="flex flex-col gap-2 py-2">
                                <p className="text-sm">{item.companyName}</p>
                                <p className="font-semibold">{item.jobTitle}</p>
                                <div className="max-w-xs">
                                    <p className="truncate3 text-gray-500 text-sm">{item.overview}</p>
                                </div>
                                <p className="text-xs bg-blue-100 color-blue-1 font-semibold w-max py-1 px-2 mt-2 rounded-lg">{item.jobType}</p>
                            </div>
                        </div>
                    </Link>
                })
            }
        </div>
    )
}