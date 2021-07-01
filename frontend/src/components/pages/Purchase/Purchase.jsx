/* eslint-disable eqeqeq */
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

    useEffect(() => {
        axios.get("http://localhost:3001/transaction/TransactionListUser/"+localStorage.getItem("name")).then((response) => {
            setPayList(response.data)
            console.log(response.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });
    const formatTime = s => new Date(s).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    return (
        <>
            <NavbarLogin /> 
            <NavbarMobile /> 
            <div className="flex flex-col lg:flex-row gap-10 mt-16 lg:mt-0 px-10 xl:px-32 py-10 w-full">
                <div className="static lg:sticky self-start top-5 border w-full lg:w-1/4 rounded-lg p-3">
                    <div className="flex items-center gap-5 mb-5 p-2">
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
                    <div className="flex gap-5">
                        {valueVal.map((v)=>{
                            return <div className="text-sm">
                                <div className="flex flex-col">
                                    {
                                        v.classConsultation<=3 ? 
                                        <Link to="/payment-confirmation-class-consultation-quota" className="flex justify-between gap-10 p-2 hover:bg-blue-50 rounded-md">
                                            <p className="text-gray-400">Class Consultation Quota</p>
                                            <p>{v.classConsultation}</p>
                                        </Link>
                                        :
                                        <Link to="/payment-confirmation-class-consultation-quota" className="flex justify-between gap-10 p-2 hover:bg-blue-50 rounded-md">
                                            <p className="text-gray-400">Class Consultation Quota</p>
                                            <p>{v.classConsultation}</p>
                                        </Link>
                                    }
                                    {
                                        v.classSession<=3 ? 
                                        <Link to="/payment-confirmation-class-session-quota" className="flex justify-between gap-10 p-2 hover:bg-blue-50 rounded-md">
                                            <p className="text-gray-400">Coding Class Quota</p>
                                            <p>{v.classSession}</p>
                                        </Link>
                                        :
                                        <Link to="/payment-confirmation-class-session-quota" className="flex justify-between gap-10 p-2 hover:bg-blue-50 rounded-md">
                                            <p className="text-gray-400">Coding Class Quota</p>
                                            <p>{v.classSession}</p>
                                        </Link>
                                    }
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className="flex flex-col w-full lg:w-3/4">
                    <p className="text-xl font-semibold">Purchase List</p>
                    <div className="border mt-5 rounded-lg ">
                        {
                            payList.map((val)=>{
                                return <div className="flex justify-between items-center p-5 hover:shadow-md w-full">
                                <div className="flex flex-col gap-3 text-sm w-4xxa/12">
                                    <p className="font-semibold">{val.tipe_paket}</p>
                                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                                        <p>{formatDate(val.transactionCreateAt)}</p>
                                        <p>{formatTime(val.transactionCreateAt)}</p>
                                    </div>
                                    {
                                        val.status === "Approved" ? <p className="text-xs bg-green-100 text-green-500 font-semibold w-max px-2 py-1 rounded-md">{val.status}</p> :
                                        val.status === "Pending" ? <p className="text-xs bg-yellow-100 text-yellow-500 font-semibold w-max px-2 py-1 rounded-md">{val.status}</p> : <p className="text-xs bg-red-100 text-red-500 font-semibold w-max px-2 py-1 rounded-md">{val.status}</p>
                                    }
                                </div>
                                <div className="flex flex-col gap-1 w-3/12">
                                    <p className="text-xs font-medium text-gray-400">Bundle price</p>
                                    <div>
                                        {
                                            val.paket_id == 1 ? (<p className="font-semibold">IDR 286.000</p>) :
                                            val.paket_id == 2 ? (<p className="font-semibold">IDR 250.000</p>): (<p className="font-semibold">IDR 75.000</p>)
                                        }
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 w-3/12">
                                    <p className="text-xs font-medium text-gray-400">Total price</p>
                                    <div>
                                        {
                                            val.paket_id == 1 ? (<p className="font-semibold">IDR 286.000</p>) :
                                            val.paket_id == 2 ? (<p className="font-semibold">IDR 250.000</p>): (<p className="font-semibold">IDR 75.000</p>)
                                        }
                                    </div>
                                </div>
                            </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
