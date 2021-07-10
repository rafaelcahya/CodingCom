/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from '../../major/Footer'
import ShowMoreText from 'react-show-more-text';

import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'

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

function TopicDetail(props) {
    const urlid = props.match.params.id
    const [value, setValue] = useState([])
    const [valueList, setValueList] = useState([])
    const [rating, setRating] = useState([])
    const [valueAVG, setValueAVG] = useState([])
    const [Count1, setCount1] = useState([])
    const [Count2, setCount2] = useState([])
    const [Count3, setCount3] = useState([])
    const [Count4, setCount4] = useState([])
    const [Count5, setCount5] = useState([])
    let image = require('../../../asset/upload/'+ localStorage.getItem("image"))

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
        Axios.get("http://localhost:3001/rating/Count1/" + urlid).then((response) => {
            setCount1(response.data)
            console.log(response.data)
        })
        Axios.get("http://localhost:3001/rating/Count2/" + urlid).then((response) => {
            setCount2(response.data)
            console.log(response.data)
        })
        Axios.get("http://localhost:3001/rating/Count3/" + urlid).then((response) => {
            setCount3(response.data)
            console.log(response.data)
        })
        Axios.get("http://localhost:3001/rating/Count4/" + urlid).then((response) => {
            setCount4(response.data)
            console.log(response.data)
        })
        Axios.get("http://localhost:3001/rating/Count5/" + urlid).then((response) => {
            setCount5(response.data)
            console.log(response.data)
        })
    }, []);

    useEffect(() => {
        Axios.get("http://localhost:3001/course/courseByTopikIdNumber/" + urlid).then((response) => {
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

    return (
        <>
            <NavbarLogin />
            <NavbarMobile />
            <div className="mt-32 lg:mt-16 px-16 xl:px-32 leading-7">
                {
                    valueList.map(
                        (val) => {
                            return <div>
                                <div className="block sm:flex justify-between border-b border-gray-300 pb-10">
                                    <div className="flex flex-col gap-3">
                                        <p className="text-2xl lg:text-5xl font-semibold">{val.topikTitle}</p>
                                        {/* <p className="max-w-3xl text-gray-400 text-sm mt-2">{val.topikInfo}</p> */}
                                        <div className="flex gap-1 max-w-3xl text-sm mt-2">
                                            <p className="text-black font-semibold">Created by</p>
                                            <p className="text-gray-500">{val.fullname}</p>
                                        </div>
                                        {
                                            valueAVG.map((val) => {
                                                return <div className='flex items-center gap-2'>
                                                    {val.AverageRating == 5 ? (<div className="flex items-center gap-1"><p className="text-sm font-semibold text-green-500">Very good</p><p className="text-lg">😍</p></div>) 
                                                        :
                                                            val.AverageRating == 4 ? (<div className="flex items-center gap-1"><p className="text-sm font-semibold text-green-500">Good</p><p className="text-lg">🤩</p></div>)
                                                        :
                                                            val.AverageRating == 3 ? (<div className="flex items-center gap-1"><p className="text-sm font-semibold text-blue-500">Fair</p><p className="text-lg">😑</p></div>) 
                                                        :
                                                            val.AverageRating == 2 ? (<div className="flex items-center gap-1"><p className="text-sm font-semibold text-yellow-500">Poor</p><p className="text-lg">☹️</p></div>) 
                                                        :
                                                            val.AverageRating == 1 ? (<div className="flex  items-center gap-1"><p className="text-sm font-semibold text-red-500">Very bad</p><p className="text-lg">😰</p></div>) 
                                                        :
                                                            (<p className="text-sm font-semibold mb-2">not rated yet</p>)
                                                    }
                                                    <p className="text-sm">{val.SumRating} ratings</p>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-10 my-10">
                                    <div className="content-course w-full md:w-2/3">
                                        <div dangerouslySetInnerHTML={{ __html: val.about }} className="tinymce-topic-detail"/>
                                        {
                                            valueAVG.map(
                                                (val) => {
                                                    return <div className="rating py-10">
                                                        {
                                            valueAVG.map((val) => {
                                                return <div className='flex items-center gap-2 pb-8'>
                                                    {val.AverageRating == 5 ? (<div className="flex items-center gap-1"><p className="text-sm font-semibold">Very good</p><p className="text-5xl">😍</p></div>) 
                                                        :
                                                            val.AverageRating == 4 ? (<div className="flex items-center gap-1"><p className="text-5xl">🤩</p></div>)
                                                        :
                                                            val.AverageRating == 3 ? (<div className="flex items-center gap-1"><p className="text-5xl">😑</p></div>) 
                                                        :
                                                            val.AverageRating == 2 ? (<div className="flex items-center gap-1"><p className="text-5xl">☹️</p></div>) 
                                                        :
                                                            val.AverageRating == 1 ? (<div className="flex  items-center gap-1"><p className="text-5xl">😰</p></div>) 
                                                        :
                                                            (<p className="text-sm font-semibold mb-2">not rated yet</p>)
                                                    }
                                                    <div>
                                                        <p>{val.SumRating} ratings</p>
                                                        <p className="text-sm text-gray-400 font-medium">Average rating</p>
                                                    </div>
                                                </div>
                                            })
                                        }
                                                        <table>
                                                            {Count5.map((c5) => {
                                                                return <tr>
                                                                    <td><p className="text-sm font-semibold">Very Good</p></td>
                                                                    <td><p className="text-lg">😍</p></td>
                                                                    <td><p className="text-sm">{c5.Rating5} ratings</p></td>
                                                                </tr>
                                                            })}
                                                            {Count4.map((c4) => {
                                                                return <tr>
                                                                    <td><p className="text-sm font-semibold">Good</p></td>
                                                                    <td><p className="text-lg">🤩</p></td>
                                                                    <td><p className="text-sm">{c4.Rating4} ratings</p></td>
                                                                </tr>
                                                            })}
                                                            {Count3.map((c3) => {
                                                                return <tr>
                                                                    <td><p className="text-sm font-semibold">Fair</p></td>
                                                                    <td><p className="text-lg">😑</p></td>
                                                                    <td><p className="text-sm">{c3.Rating3} ratings</p></td>
                                                                </tr>
                                                            })}
                                                            {Count2.map((c2) => {
                                                                return <tr>
                                                                    <td><p className="text-sm font-semibold">Poor</p></td>
                                                                    <td><p className="text-lg">☹️</p></td>
                                                                    <td><p className="text-sm">{c2.Rating2} ratings</p></td>
                                                                </tr>
                                                            })}
                                                            {Count1.map((c1) => {
                                                                return <tr>
                                                                    <td><p className="text-sm font-semibold">Very Bad</p></td>
                                                                    <td><p className="text-lg">😰</p></td>
                                                                    <td><p className="text-sm">{c1.Rating1} ratings</p></td>
                                                                </tr>
                                                            })}
                                                        </table>
                                                    </div>
                                                }
                                            )
                                        }
                                    </div>
                                    <div className="flex flex-col gap-10 w-full md:w-1/3">
                                        <div className="shadow-xl p-5 top-10 rounded-lg">
                                            {
                                                !value.length ? (<p>gkada</p>) : value.map((item)=>{
                                                    return <div className="flex flex-col gap-8">
                                                        <div className="flex flex-col gap-2">
                                                            <p className="text-2xl lg:text-3xl font-semibold">{val.topikTitle}</p>
                                                            <ShowMoreText
                                                                more='Read more'
                                                                less='Read less'
                                                                anchorClass='anchor-showmore'
                                                                className="text-sm text-gray-400">
                                                                <p className="max-w-3xl text-gray-400 text-sm">{val.topikInfo}</p>
                                                            </ShowMoreText>
                                                        </div>
                                                        <Link to={"/"+ GenerateID(1,10) +"/" + item.number + "-" + item.id + "/" + val.topikId} className="bg-blue-500 hover:bg-blue-400 text-center text-sm font-medium text-white rounded-lg py-3">
                                                            Start Learning
                                                        </Link>
                                                    </div>
                                                })
                                            }
                                        </div>
                                        <div className="flex flex-col gap-5 bg-gray-100 p-5 top-10 rounded-lg">
                                            <div>
                                                <p className="text-lg font-semibold">100% online courses</p>
                                                <p className="text-gray-500 text-sm">Start instantly and learn at your own schedule.</p>
                                            </div>
                                            <div>
                                                <p className="text-lg font-semibold">Flexible Schedule</p>
                                                <p className="text-gray-500 text-sm">Set and maintain flexible deadlines.</p>
                                            </div>
                                            <div>
                                                <p className="text-lg font-semibold">English</p>
                                                <p className="text-gray-500 text-sm">Subtitles: English</p>
                                            </div>
                                            <div>
                                                <p className="text-lg font-semibold">Start from scratch</p>
                                                <p className="text-gray-500 text-sm">No coding or design experience required</p>
                                            </div>
                                            <div>
                                                <p className="text-lg font-semibold">High quality content</p>
                                                <p className="text-gray-500 text-sm">Knowledge from well-curated experts</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    )
                }
                <div className="w-full md:w-2/3">
                    <p className="text-xl font-semibold">Reviews</p>
                    <div className="border-darkmode h-0.5 w-full my-5"></div>
                    {
                        rating.map(
                            (val) => {
                                return <div className="review py-5">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-4">
                                            <img src={image.default} className="ring-1 rounded-full p-0.5 w-10 h-10" alt="Image Profile"/>
                                            <div>
                                                <p className="font-medium">{val.name}</p>
                                                <p className="text-xs text-gray-400">{formatDate(val.ratingCreateAt)}</p>
                                                <p className="py-2"> {val.description}</p>
                                            </div>
                                        </div>
                                        <div>
                                            {val.rating == 1 ? (<p className="text-2xl">😰</p>) :
                                                val.rating == 2 ? (<p className="text-2xl">☹️</p>) :
                                                    val.rating == 3 ? (<p className="text-2xl">😑</p>) :
                                                        val.rating == 4 ? (<p className="text-2xl">🤩</p>) :
                                                            (<p className="text-2xl">😍</p>)
                                            }
                                        </div>
                                    </div>
                                </div>
                            }
                        )
                    }
                </div>
            </div>
            
            <Footer/>
        </>
    )
}

export default TopicDetail