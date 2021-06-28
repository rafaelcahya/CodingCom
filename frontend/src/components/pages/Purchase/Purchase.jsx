/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'

export default function Purchase() {
    const [name, setName] = useState("")
    const [valueList, setValueList] = useState([])
    const [valueVal, setValueVal] = useState([])
    const [payList, setPayList] = useState([])

    let image = require('../../../asset/upload/'+ localStorage.getItem("image"))
    window.onload = setTimeout(function () {
        let x = localStorage.getItem("name");
        setName(x)
    }, 10)

    useEffect(() => {
        axios.get("http://localhost:3001/user/userById/"+localStorage.getItem("name")).then((response) => {
            setValueList(response.data)
            console.log(response.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        axios.get("http://localhost:3001/user/userkuotaById/" + localStorage.getItem("name")).then((response) => {
            setValueVal(response.data)
            console.log(response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <NavbarLogin /> 
            <NavbarMobile /> 
            <div className="flex gap-10 px-16 xl:px-32 py-10 w-full">
                <div className="border w-max rounded-lg p-5">
                    <div className="flex items-center gap-5 pb-5">
                        <img src={image.default} className="ring-1 rounded-full p-0.5" width="50" alt="Image Profile"/>   
                        <div>
                            <p>{name}</p> 
                            {valueList.map((val)=>{
                                return <div className="flex justify-between gap-20">
                                {
                                    val.status==="Actived"?<p className="text-sm text-green-500 rounded-lg font-medium tracking-wide">Premium account</p>:<p>{val.status}</p>
                                }
                            </div>
                            })}
                        </div>
                    </div>
                    <div className="flex gap-5 my-5">
                        {valueVal.map((v)=>{
                            return <div className="text-sm pr-5">
                                <div className="flex flex-col gap-2">
                                    {
                                        v.classConsultation<=3 ? 
                                        <Link to="/payment-confirmation-class-consultation-quota" className="flex justify-between gap-10">
                                            <p className="text-gray-400">Class Consultation Quota</p>
                                            <p>{v.classConsultation}</p>
                                        </Link>
                                        :
                                        <Link to="/payment-confirmation-class-consultation-quota" className="flex justify-between gap-10">
                                            <p className="text-gray-400">Class Consultation Quota</p>
                                            <p>{v.classConsultation}</p>
                                        </Link>
                                    }
                                    {
                                        v.classSession<=3 ? 
                                        <Link to="/payment-confirmation-class-session-quota" className="flex justify-between gap-10">
                                            <p className="text-gray-400">Coding Class Quota</p>
                                            <p>{v.classSession}</p>
                                        </Link>
                                        :
                                        <Link to="/payment-confirmation-class-session-quota" className="flex justify-between gap-10">
                                            <p className="text-gray-400">Coding Class Quota</p>
                                            <p>{v.classSession}</p>
                                        </Link>
                                    }
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className="flex flex-col w-3/4">
                    <p className="text-xl font-semibold">Purchase List</p>
                    <div className="flex justify-between items-center p-5 mt-5 border rounded-lg hover:shadow-md">
                        <div>
                            <p>Nama Paket</p>
                            <p>Create at</p>
                            <p>Status</p>
                        </div>
                        <div>
                            <p>Harga</p>
                        </div>
                        <div>
                            <p>Harga</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
