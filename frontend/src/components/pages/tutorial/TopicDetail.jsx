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
            <div className="mt-32 lg:mt-16 mx-10 md:mx-20 lg:mx-32 leading-7">
                {
                    valueList.map(
                        (val) => {
                            return <div>
                                <div className="block sm:flex justify-between border-b border-gray-300 pb-10">
                                    <div>
                                        <p className="text-2xl lg:text-5xl font-semibold">{val.topikTitle}</p>
                                        <p className="max-w-3xl text-gray-400 text-sm mt-2">{val.topikInfo}</p>
                                    </div>
                                </div>
                                <div className="flex gap-10 my-10 w-full">
                                    <div className="content-course w-2/3">
                                        <div dangerouslySetInnerHTML={{ __html: val.about }} className="tinymce-topic-detail"/>
                                        <div className="pt-10 border-b">
                                            <p className="text-xl font-semibold">Reviews</p>
                                            </div>
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
                                    <div className='sticky self-start top-10 w-1/3'>
                                        <div className="p-5 rounded-lg shadow-lg">
                                            <div>
                                                <p className="text-2xl font-semibold mb-4">{val.topikTitle}</p>
                                                <ShowMoreText
                                                    more='Read more'
                                                    less='Read less'
                                                    anchorClass='anchor-showmore'
                                                    className="text-sm text-gray-500">
                                                    <p className="max-w-3xl text-gray-400 text-sm">{val.topikInfo}</p>
                                                </ShowMoreText>
                                            </div>
                                            {
                                                !value.length ? (<p>gkada</p>) : value.map((item)=>{
                                                    return <Link to={"/"+ GenerateID(1,10) +"/" + item.number + "-" + item.id + "/" + val.topikId}>
                                                    <p className="bg-blue-1 text-white font-medium text-center rounded-lg p-2 my-5">Start learning</p>
                                                    </Link>
                                                })
                                            }
                                        </div>
                                        <div className="p-5 flex flex-col items-center rounded-lg shadow-lg">
                                            {
                                                valueAVG.map(
                                                    (val) => {
                                                        return <div>
                                                            {
                                                                valueList.map(
                                                                    (val) => {
                                                                        return <p className="font-semibold">Average rating</p>
                                                                    }
                                                                )
                                                            }
                                                            {val.AverageRating == 5 ? (<div className="flex flex-col items-center gap-1"><p className="text-3xl pt-5">😍</p><p className="font-semibold">Very good</p></div>) :
                                                                val.AverageRating == 4 ? (<div className="flex flex-col items-center gap-1"><p className="text-3xl pt-5">🤩</p><p className="font-semibold">Good</p></div>) :
                                                                    val.AverageRating == 3 ? (<div className="flex flex-col items-center gap-1"><p className="text-3xl pt-5">😑</p><p className="font-semibold">Fair</p></div>) :
                                                                        val.AverageRating == 2 ? (<div className="flex flex-col items-center gap-1"><p className="text-3xl pt-5">☹️</p><p className="font-semibold">Poor</p></div>) :
                                                                            val.AverageRating == 1 ? (<div className="flex flex-col items-center gap-1"><p className="text-3xl pt-5">😰</p><p className="font-semibold">Very bad</p></div>) :
                                                                                (<p className="text-lg font-semibold mb-2">not rated yet</p>)
                                                            }
                                                            <div>
                                                                Total berapa orng yang ngerating
                                                            </div>
                                                            <div>
                                                                Total berapa orng yang ngerating bad 
                                                            </div>
                                                            <div>
                                                                Total berapa orng yang ngerating very bad
                                                            </div>
                                                        </div>
                                                    }
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    )
                }
            </div>
            <Footer/>
        </>
    )
}

export default TopicDetail