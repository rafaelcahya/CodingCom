import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'


function TopicDetail(props) {
    const urlid = props.match.params.id
    const [value, setValue] = useState([])
    const [valueList, setValueList] = useState([])
    const [rating, setRating] = useState([])
    const [valueAVG, setValueAVG] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:3001/rating/ratingList/"+ urlid).then((response) => {
            setRating(response.data)
            console.log(response.data)
        })
    }, []);

    useEffect(() => {
        Axios.get("http://localhost:3001/rating/AvgratingList/" + urlid).then((response) => {
            setValueAVG(response.data)
            console.log(response.data)
        })
    }, []);

    useEffect(() => {
        Axios.get("http://localhost:3001/course/courseByTopikId/" + urlid).then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    }, []);

    useEffect(() => {
        Axios.get("http://localhost:3001/topik/topikById/" + urlid).then((response) => {
            setValueList(response.data)
            console.log(response.data)
        })
    }, []);

    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
    const formatTime = s => new Date(s).toLocaleTimeString(undefined, { timeStyle: 'short' });

    return (
        <>
            <NavbarLogin />
            <NavbarMobile />
            <div className="flex gap-10 mt-32 lg:mt-16 mx-10 md:mx-20 lg:mx-32 leading-7">
                <div className="hidden lg:block lg:w-1/5">
                    <div className="hidden lg:block sticky self-start top-0 pt-6">
                        <p className="text-lg font-semibold">Course List</p>
                        {
                            valueList.map((nilai)=>{
                                return <div className="sidebar-tutorial flex flex-col gap-2 my-5">
                                {
                                    value.map(
                                        (val) => {
                                            return <div className="flex justify-between items-center">
                                                <Link to={"/"+ val.judul +"/" + val.id + "/" + nilai.topikId}>{val.number}.{val.judul}</Link>
                                                <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">{val.time} min</p>
                                            </div>
                                        }
                                    )
                                }
                            </div>
                            })
                        }
                        
                    </div>
                </div>
                <nav className="sidebar-mobile block lg:hidden fixed top-16 right-2 z-10">
                    <ul>
                        <li>
                            <div className="flex items-center px-8 py-4 gap-2 shadow rounded-lg">
                                <p className="uppercase font-semibold text-xs tracking-wider">Course List</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </div>
                            {
                                valueList.map((nilai)=>{
                                    return  <div className="sidebar-mobile-dropdown bg-red-100 absolute right-0 text-right shadow rounded-lg px-4">
                                    {
                                        value.map(
                                            (val) => {
                                                return <div className="flex justify-between items-center">
                                                    <Link to={"/"+ val.judul +"/" + val.id + "/" + nilai.topikId}>{val.number}.{val.judul}</Link>
                                                    <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">{val.time} min</p>
                                                </div>
                                            }
                                        )
                                    }
                                </div>
                                })
                            }
                           
                        </li>
                    </ul>
                </nav>
                <div className="w-full lg:w-7/12 pl-0 lg:pl-10 pr-0 pt-5 border-0 lg:border-l border-gray-300"></div>
            </div>
            <div className="w-full lg:w-7/12 pl-0 lg:pl-10 pr-0 pt-5 border-0 lg:border-l border-gray-300">
                {
                    valueList.map(
                        (val) => {
                            return <div>
                                <div className="block sm:flex justify-between border-b border-gray-300 pb-10">
                                    <div>
                                        <p className="text-2xl lg:text-5xl font-semibold">{val.topikTitle}</p>
                                        <p className="text-gray-400 text-sm mt-2">{val.topikInfo}</p>
                                    </div>
                                </div>
                                <div className="content-course flex flex-col gap-5 my-5 pt-5">
                                    <div dangerouslySetInnerHTML={{ __html: val.about }} />
                                </div>
                            </div>
                        }
                    )
                }
            </div>
            {
                valueAVG.map(
                    (val) => {
                        return <div className="my-10">
                            <p className="text-xl font-semibold mb-2">User feedback</p>
                            <p>Tutorial rating</p>
                            {val.AverageRating == 1 ? (<p className="text-lg font-semibold mb-2">😍 {val.AverageRating}</p>) :
                                val.AverageRating == 2 ? (<p className="text-lg font-semibold mb-2">🤩 {val.AverageRating}</p>) :
                                    val.AverageRating == 3 ? (<p className="text-lg font-semibold mb-2">😑 {val.AverageRating}</p>) :
                                        val.AverageRating == 4 ? (<p className="text-lg font-semibold mb-2">☹️ {val.AverageRating}</p>) :
                                            (<p className="text-lg font-semibold mb-2">😰 {val.AverageRating}</p>)
                            }
                        </div>
                    }
                )
            }
            <div className="my-10 border-b">
                <p className="text-xl font-semibold mb-2">Review</p>
            </div>
            {
                rating.map(
                    (val) => {
                        return <div>
                            <div className="flex justify-between gap-2">
                                <p className="text-lg font-semibold">{val.name}</p>
                                <div className="text-right">
                                    {val.rating == 1 ? (<p>😰 {val.rating}</p>) :
                                        val.rating == 2 ? (<p>☹️ {val.rating}</p>) :
                                            val.rating == 3 ? (<p>😑 {val.rating}</p>) :
                                                val.rating == 4 ? (<p>🤩 {val.rating}</p>) :
                                                    (<p>😍 {val.rating}</p>)
                                    }
                                </div>
                            </div>
                            <p className="text-sm text-gray-600">{formatDate(val.ratingCreateAt)} {formatTime(val.ratingCreateAt)}</p>
                            <p className="py-5"> {val.description}</p>
                        </div>
                    }
                )
            }

        </>
    )
}

export default TopicDetail