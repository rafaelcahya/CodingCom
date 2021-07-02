/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'

const GenerateID = (len, k) => {
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
                                <p className="text-center px-32 py-5">{val.categoryInfo}</p>
                            </div>

                            <div className="hidden lg:block lg:w-1/5">
                                <div className="hidden lg:block sticky self-start top-0 pt-6">
                                    <div className="sidebar-tutorial flex flex-col gap-2 my-5">
                                        {
                                            value.map(
                                                (val) => {
                                                    return <div className="flex justify-between items-center">
                                                        <Link to={"/topic-detail/" + val.topikId + "-" + GenerateID(1, 10)}>
                                                            <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="100" id="tutorial-box" className="bg-white">
                                                                <div className="flex flex-col gap-2">
                                                                    {/* <img data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="300" data-aos-delay="200" src={item.image} width={40} alt="logo" className="" /> */}
                                                                    <p className="font-semibold">{val.topikTitle}</p>
                                                                    <p className="truncate3 text-sm text-gray-400 leading-6">{val.topikInfo}</p>
                                                                </div>
                                                            </div>
                                                        </Link>
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
        </>
    )
}

export default CategoryDetail