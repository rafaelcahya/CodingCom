/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react'
import Axios from 'axios'

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
            <div className="mt-32 lg:mt-16 mx-10 md:mx-20 lg:mx-32 leading-7">
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
                                <div className="flex gap-10 my-10 w-full">
                                    <div className="content-course w-2/3">
                                        <div dangerouslySetInnerHTML={{ __html: val.about }} />
                                        <div className="my-10 border-b">
                                            <p className="text-xl font-semibold mb-2">Reviews</p>
                                            </div>
                                            {
                                                rating.map(
                                                    (val) => {
                                                        return <div className="border-b border-gray-300">
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
                                    </div>
                                    <div className="sticky self-start top-10 w-1/3">
                                        <p className="text-2xl lg:text-5xl font-semibold">{val.topikTitle}</p>
                                        <p className="text-gray-400 text-sm mt-2">{val.topikInfo}</p>
                                        <p>MASUK KE COURSE</p>
                                        {/* {
                                            value.map(
                                                (item) => {
                                                    return <div className="flex justify-between items-center">
                                                        <Link to={"/"+ item.judul +"/" + item.id + "/" + val.topikId}>{item.number}.{item.judul}</Link>
                                                        <p className="hidden text-xs bg-gray-200 text-gray-500 py-1 px-2 rounded-md">{item.time} min</p>
                                                    </div>
                                                }
                                            )
					                    } */}
                                        {
                                            valueAVG.map(
                                                (val) => {
                                                    return <div className="my-10 text-center">
                                                        {
                                                            valueList.map(
                                                                (val) => {
                                                                    return <p className="text-sm">Your rating for {val.topikTitle}</p>
                                                                }
                                                            )
                                                        }
                                                        {val.AverageRating == 5 ? (<div className="flex flex-col gap-1"><p className="text-3xl pt-5">😍</p><p className="font-semibold">Very good</p></div>) :
                                                            val.AverageRating == 4 ? (<div className="flex flex-col gap-1"><p className="text-3xl pt-5">🤩</p><p className="font-semibold">Good</p></div>) :
                                                                val.AverageRating == 3 ? (<div className="flex flex-col gap-1"><p className="text-3xl pt-5">😑</p><p className="font-semibold">Fair</p></div>) :
                                                                    val.AverageRating == 2 ? (<div className="flex flex-col gap-1"><p className="text-3xl pt-5">☹️</p><p className="font-semibold">Poor</p></div>) :
                                                                        val.AverageRating == 1 ? (<div className="flex flex-col gap-1"><p className="text-3xl pt-5">😰</p><p className="font-semibold">Very bad</p></div>) :
                                                                            (<p className="text-lg font-semibold mb-2">not rated yet</p>)
                                                        }
                                                    </div>
                                                }
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        }
                    )
                }
            </div>
        </>
    )
}

export default TopicDetail