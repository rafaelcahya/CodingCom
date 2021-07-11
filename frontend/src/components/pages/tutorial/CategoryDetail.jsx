/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import ShowMoreText from 'react-show-more-text';

import AOS from "aos"
import "../../../../node_modules/aos/dist/aos.css"

import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'

const GenerateID = (len, k) => {
    AOS.init();
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

function CategoryDetail(props) {
    const urlid = props.match.params.id
    const urlhash = props.match.params.hash
    const [value, setValue] = useState([])
    const [valueList, setValueList] = useState([])
    const [course,setCourse] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:3001/category/categoryById/" + urlid + "/" + urlhash).then((response) => {
            setValueList(response.data)
            console.log(response.data)
        })
    }, []);

    useEffect(() => {
        Axios.get("http://localhost:3001/topik/topikByCatId/" + urlid +"/" +urlhash).then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    },[]);

    useEffect(() => {
        Axios.get("http://localhost:3001/course/listCourse").then((response) => {
            setCourse(response.data)
        })
    }, []);

    // let total_min = 0; 
    // let tot = 0;
    
    // value.map((v)=>{

    //     for (let i = 0; i < course.length; i++) {
    //         if (course[i].topikTitle == v.topikTitle)
    //         if (course[i].time) tot += parseInt(course[i].time);
    //     }
    //    return total_min = tot;
            
    // })
    
    return (
        <>
            <NavbarLogin />
            <NavbarMobile />
            {
                valueList.map(
                    (val) => {
                        return <div className="mt-32 lg:mt-16 mx-10 md:mx-20 lg:mx-32 leading-7">
                            <div className="flex flex-col items-center">
                                <p className="text-2xl lg:text-5xl font-semibold">{val.category}</p>
                                <p className="text-center py-5 max-w-3xl">{val.categoryInfo}</p>
                            </div>
                            <div className="flex-1 flex flex-wrap gap-5 my-10">
                                {
                                    value.map(
                                        (val) => {
                                            return <div className="flex">
                                                {
                                                    val.progress != "Coming Soon" ? (<Link to={"/topic-detail/" + val.topikId + "-" + GenerateID(1, 10)}>
                                                    <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="100" id="tutorial-box" className="flex-1 shadow-md" key={val.topikId}>
                                                        <p className="font-semibold" style={{width: "300px"}}>{val.topikTitle}</p>
                                                        <p className="w-10 h-0.5 bg-yellow-500 my-3"></p>
                                                        <ShowMoreText
                                                            more='Read more'
                                                            less='Read less'
                                                            anchorClass='anchor-showmore'
                                                            className="text-sm text-gray-500">
                                                            <p>{val.topikInfo}</p>
                                                        </ShowMoreText>
                                                        <p className="text-sm font-medium mt-6">{val.time} min</p>
                                                        <div className="ribbon">
                                                            <p className="bg-red-50 text-sm text-center font-semibold text-red-500 px-10 leading-10">{val.progress}</p>
                                                        </div>
                                                    </div>
                                                </Link>) : (<Link to={"/category-detail-"+ val.category_id + "/" + GenerateID(1,10)}>
                                                    <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="100" id="tutorial-box" className="flex-1 shadow-md" key={val.topikId}>
                                                        <p className="font-semibold" style={{width: "300px"}}>{val.topikTitle}</p>
                                                        <p className="w-10 h-0.5 bg-yellow-500 my-3"></p>
                                                        <ShowMoreText
                                                            more='Read more'
                                                            less='Read less'
                                                            anchorClass='anchor-showmore'
                                                            className="text-sm text-gray-500">
                                                            <p>{val.topikInfo}</p>
                                                        </ShowMoreText>
                                                        <p className="text-sm font-medium mt-6">{val.time} min</p>
                                                        <div className="ribbon">
                                                            <p className="bg-red-50 text-sm text-center font-semibold text-red-500 px-10 leading-10">{val.progress}</p>
                                                        </div>
                                                    </div>
                                                </Link>)
                                                }
                                            </div>
                                        }
                                    )
                                }
                            </div>
                        </div>
                    }
                )
            }
        </>
    )
}

export default CategoryDetail