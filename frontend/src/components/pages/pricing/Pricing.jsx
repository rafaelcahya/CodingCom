/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Footer from '../../major/Footer'
import Popup from "./PricingPopup"

import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import Axios from 'axios'

function Pricing(props) {
    const urlname = props.match.params.name
    const [valueList, setValueList] = useState([])
    const [buttonPopup, setButtonPopup] = useState(false)
    const [value, setValue] = useState([])
    
    useEffect(() => {
        Axios.get("http://localhost:3001/faq/listFaqPricing").then((response) => {
            setValue(response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        Axios.get("http://localhost:3001/user/userById/" + urlname).then((response) => {
            setValueList(response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const popup = () =>{
        setButtonPopup(true)
    }
    const cancel = () =>{
        setButtonPopup(false)
    }

    const Accordion = ({ title, children }) => {
        const [isOpen, setOpen] = React.useState(false);
        return (
            <div className="accordion-wrapper">
                <div
                    className={`accordion-title ${isOpen ? "open" : ""} font-medium`}
                    onClick={() => setOpen(!isOpen)}
                    >
                    {title}
                </div>
                <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                    <div className="accordion-content">{children}</div>
                </div>
            </div>
        );
    };
    
        return (
            <>
                <NavbarLogin/>
                <NavbarMobile/>
                <div className="mt-20 md:mt-10">
                    <div className="leading-8 text-center py-20">
                        <div className="text-2xl sm:text-3xl md:text-5xl font-bold">
                            <p>Get Started Now,</p>
                            <p>Pick a Bundle Later</p>
                        </div>
                        <p className="text-base sm:text-xl font-medium text-gray-500 mt-10">Access to all our tutorials and features</p>
                    </div>
                </div>
                {localStorage.getItem("loggedIn") == "true" ? (
                    valueList.map((val)=>{
                        return <div>
                    {val.status=="Not Active"?( <div>
                            <section className="flex flex-col sm:flex-row items-center sm:items-stretch justify-center mx-10 lg:mx-20 xl:mx-56 pb-20 gap-20">
                                <div className="plan-box w-72 px-10 py-8 rounded-xl shadow-xl flex flex-col justify-between">
                                    <article>
                                        <div className="flex flex-col gap-2">
                                            <span className="text-3xl font-semibold color-blue-1">Free</span>
                                            <div className="my-5">
                                                <p className="text-lg font-semibold">Starter Bundle</p>
                                                <p className="text-gray-400 text-sm font-medium">All the basics is activated by itself</p>
                                            </div>
                                        </div>
                                        <div className="text-sm">
                                            <div className="flex flex-col gap-5 mt-5 font-semibold ">
                                                <div className="flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>No ads</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>Text Editor</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>Career access</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>News access</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>Get future updates</p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="plan-box w-72 px-10 py-8 rounded-xl shadow-xl flex flex-col justify-between ring-2 ring-blue-500">
                                    <article>
                                        <div className="flex flex-col gap-2">
                                            <p className="text-xs">IDR <span className="text-3xl font-semibold color-blue-1">286,000</span></p>
                                            <div className="my-5">
                                                <p className="text-lg font-semibold">Premium Bundle</p>
                                                <p className="text-gray-400 text-sm font-medium">In case if you needed a little bit more from our App</p>
                                            </div>
                                        </div>
                                        <div className="text-sm">
                                            <div className="flex flex-col gap-5 mt-5 font-semibold ">
                                                <div className="flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>No ads</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>Text Editor</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>Career access</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>News access</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>Get future updates</p>
                                                </div>
                                            </div>
                                            <div className="font-semibold flex flex-col gap-5 mt-5">
                                                <div className="flex items-center gap-2">
                                                    <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>Access to consultation class and get 7 quotas</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>Access to coding class and get 5 quotas</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>Get certificate</p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <Link to="/payment-confirmation-premium-plan" className="bg-blue-1 hover:bg-blue-400 text-white text-sm flex justify-center items-center gap-2 py-3 mt-10 rounded-xl cursor-pointer">
                                        <p className="font-medium">Get started</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </Link>
                                </div>
                        </section>
                        <section className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center mx-10 lg:mx-20 pb-20 gap-20">
                            <div className="plan-box px-5 sm:px-10 py-8 rounded-xl shadow-xl flex flex-col md:flex-row gap-5 md:gap-0 items-center ring-2 ring-blue-500 w-max">
                                <div>
                                    <p className="text-lg font-semibold">Consultation Class Quota</p>
                                    <p className="text-sm font-medium text-gray-400 w-72">You will get 5 quota for  consultation class access</p>
                                </div>
                                <p className="bg-blue-1 hover:bg-blue-400 text-white text-sm font-medium px-4 py-2 rounded-lg">Premium is not active yet</p>
                            </div>
                            <div className="plan-box px-5 sm:px-10 py-8 rounded-xl shadow-xl flex flex-col md:flex-row gap-5 md:gap-0 items-center ring-2 ring-blue-500 w-max">
                                <div>
                                    <p className="text-lg font-semibold">Coding Class Quota</p>
                                    <p className="text-sm font-medium text-gray-400 w-72">You will get 5 quota for Coding Class access</p>
                                </div>
                                <p className="bg-blue-1 hover:bg-blue-400 text-white text-sm font-medium px-4 py-2 rounded-lg">Premium is not active yet</p>
                            </div>
                        </section>
                    </div>
                    ):(
                    <div>
                        <section className="flex flex-col sm:flex-row items-center sm:items-stretch justify-center mx-10 lg:mx-20 xl:mx-56 pb-20 gap-20">
                            <div className="plan-box w-72 px-10 py-8 rounded-xl shadow-xl flex flex-col justify-between">
                                <article>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-3xl font-semibold color-blue-1">Free</span>
                                        <div className="my-5">
                                            <p className="text-lg font-semibold">Starter Bundle</p>
                                            <p className="text-gray-400 text-sm font-medium">All the basics is activated by itself</p>
                                        </div>
                                    </div>
                                    <div className="text-sm">
                                        <div className="flex flex-col gap-5 mt-5 font-semibold ">
                                            <div className="flex items-center gap-2">
                                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                </svg>
                                                <p>No ads</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                </svg>
                                                <p>Text Editor</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                </svg>
                                                <p>Career access</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                </svg>
                                                <p>News access</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                </svg>
                                                <p>Get future updates</p>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="plan-box w-72 px-10 py-8 rounded-xl shadow-xl flex flex-col justify-between ring-2 ring-blue-500">
                            <article>
                                <div className="flex flex-col gap-2">
                                    <p className="text-xs">IDR <span className="text-3xl font-semibold color-blue-1">286,000</span></p>
                                    <div className="my-5">
                                        <p className="text-lg font-semibold">Premium Bundle</p>
                                        <p className="text-gray-400 text-sm font-medium">In case if you needed a little bit more from our App</p>
                                    </div>
                                </div>
                                <div className="text-sm">
                                    <div className="flex flex-col gap-5 mt-5 font-semibold ">
                                        <div className="flex items-center gap-2">
                                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                            <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                            </svg>
                                            <p>No ads</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                            <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                            </svg>
                                            <p>Text Editor</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                            <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                            </svg>
                                            <p>Career access</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                            <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                            </svg>
                                            <p>News access</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                            <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                            </svg>
                                            <p>Get future updates</p>
                                        </div>
                                    </div>
                                    <div className="font-semibold flex flex-col gap-5 mt-5">
                                        <div className="flex items-center gap-2">
                                            <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                            <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                            </svg>
                                            <p>Access to consultation class and get 7 quotas</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                            <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                            </svg>
                                            <p>Access to coding class and get 5 quotas</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                            <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                            </svg>
                                            <p>Get certificate</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <div className="bg-blue-100 text-blue-500 text-sm text-center py-3 mt-10 rounded-xl">
                                <p className="font-semibold">Activated</p>
                            </div>
                        </div>
                        </section>
                        <section className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center mx-10 lg:mx-20 pb-20 gap-20">
                            <div className="plan-box px-5 sm:px-10 py-8 rounded-xl shadow-xl flex flex-col md:flex-row gap-5 md:gap-0 items-center ring-2 ring-blue-500 w-max">
                                <div>
                                    <p className="text-lg font-semibold">Consultation Class Quota</p>
                                    <p className="text-sm font-medium text-gray-400 w-72">You will get 5 quota for  consultation class access</p>
                                </div>
                                <Link to="/payment-confirmation-class-consultation-quota">
                                    <p className="bg-blue-1 hover:bg-blue-400 text-white text-sm font-medium px-4 py-2 rounded-lg">IDR 75,000</p>
                                </Link>
                            </div>
                            <div className="plan-box px-5 sm:px-10 py-8 rounded-xl shadow-xl flex flex-col md:flex-row gap-5 md:gap-0 items-center ring-2 ring-blue-500 w-max">
                                <div>
                                    <p className="text-lg font-semibold">Coding Class Quota</p>
                                    <p className="text-sm font-medium text-gray-400 w-72">You will get 5 quota for Coding Class access</p>
                                </div>
                                <Link to="/payment-confirmation-class-session-quota">
                                    <p className="bg-blue-1 hover:bg-blue-400 text-white text-sm font-medium px-4 py-2 rounded-lg">IDR 250,000</p>
                                </Link>
                            </div>
                        </section>
                    </div>
                    )}
                </div>
                })
                ):(
                    <div>
                            <section className="flex flex-col sm:flex-row items-center sm:items-stretch justify-center mx-10 lg:mx-20 xl:mx-56 pb-20 gap-20">
                                <div className="plan-box w-72 px-10 py-8 rounded-xl shadow-xl flex flex-col justify-between">
                                    <article>
                                        <div className="flex flex-col gap-2">
                                            <span className="text-3xl font-semibold color-blue-1">Free</span>
                                            <div className="my-5">
                                                <p className="text-lg font-semibold">Starter Bundle</p>
                                                <p className="text-gray-400 text-sm font-medium">All the basics is activated by itself</p>
                                            </div>
                                        </div>
                                        <div className="text-sm">
                                            <div className="flex flex-col gap-5 mt-5 font-semibold ">
                                                <div className="flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>No ads</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>Text Editor</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>Career access</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>News access</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>Get future updates</p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="plan-box w-72 px-10 py-8 rounded-xl shadow-xl flex flex-col justify-between ring-2 ring-blue-500">
                                    <article>
                                        <div className="flex flex-col gap-2">
                                            <p className="text-xs">IDR <span className="text-3xl font-semibold color-blue-1">286,000</span></p>
                                            <div className="my-5">
                                                <p className="text-lg font-semibold">Premium Bundle</p>
                                                <p className="text-gray-400 text-sm font-medium">In case if you needed a little bit more from our App</p>
                                            </div>
                                        </div>
                                        <div className="text-sm">
                                            <div className="flex flex-col gap-5 mt-5 font-semibold ">
                                                <div className="flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>No ads</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>Text Editor</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>Career access</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>News access</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>Get future updates</p>
                                                </div>
                                            </div>
                                            <div className="font-semibold flex flex-col gap-5 mt-5">
                                                <div className="flex items-center gap-2">
                                                    <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>Access to consultation class and get 7 quotas</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>Access to coding class and get 5 quotas</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                                    <path d="M4 7.5L7 10L11 5" stroke="#10B981" strokeWidth="1.5"/>
                                                    </svg>
                                                    <p>Get certificate</p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <div onClick={popup} className="bg-blue-1 hover:bg-blue-400 text-white text-sm flex justify-center items-center gap-2 py-3 mt-10 rounded-xl cursor-pointer">
                                        <p className="font-medium">Get started</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </div>
                                </div>
                        </section>
                        <section className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center mx-10 lg:mx-20 pb-20 gap-20">
                            <div className="plan-box px-5 sm:px-10 py-8 rounded-xl shadow-xl flex flex-col md:flex-row gap-5 md:gap-0 items-center ring-2 ring-blue-500 w-max">
                                <div>
                                    <p className="text-lg font-semibold">Consultation Class Quota</p>
                                    <p className="text-sm font-medium text-gray-400 w-72">You will get 5 quota for  consultation class access</p>
                                </div>
                                <p className="bg-blue-1 hover:bg-blue-400 text-white text-sm font-medium px-4 py-2 rounded-lg">Premium is not active yet</p>
                            </div>
                            <div className="plan-box px-5 sm:px-10 py-8 rounded-xl shadow-xl flex flex-col md:flex-row gap-5 md:gap-0 items-center ring-2 ring-blue-500 w-max">
                                <div>
                                    <p className="text-lg font-semibold">Coding Class Quota</p>
                                    <p className="text-sm font-medium text-gray-400 w-72">You will get 5 quota for Coding Class access</p>
                                </div>
                                <p className="bg-blue-1 hover:bg-blue-400 text-white text-sm font-medium px-4 py-2 rounded-lg">Premium is not active yet</p>
                            </div>
                        </section>
                    </div>
                )}
                <div className="px-10 lg:px-64 grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {value.map((val)=> {
                        return <Accordion title={val.question}>
                                <p>{val.answer}</p>
                            </Accordion>
                    })}
                </div>
                <section className="mx-10 lg:mx-20 xl:mx-56 my-20 md:my-32">
                    <p className="text-center text-xl md:text-2xl lg:text-4xl font-semibold">Steps to make the payment</p>
                    <div className="my-10">
                        <p>Here are some steps for how to make a payment:</p>
                        <ol className="list-decimal m-5 leading-8">
                            <li>You go to the homepage and scroll down until you see the plans section.</li>
                            <li>Click Get Started button.</li>
                            <li>Fill your name and email and click the buy button.</li>
                            <li>Please transfer to the account below.</li>
                            <div className="card bg-blue-100 w-max p-5 m-5 text-blue-500 rounded-xl">
                                <p>Bank BCA</p>
                                <p>8888897689</p>
                                <p>CodingPaymentCom</p>
                            </div>
                            <li>Please send a photo of purchase invoice to codingpayment@coding.com</li>
                            <li>Success and please wait a moment because we are processing the payment process</li>
                        </ol>
                    </div>
                </section>

                <Popup trigger={buttonPopup}>
                    <p className="pb-5 font-medium text-center">Already have an account?</p>
                    <div className="flex flex-col justify-center gap-5">
                        <Link to="/login">
                            <p className="bg-blue-1 text-white font-medium text-center rounded-md px-8 py-2 cursor-pointer outline-none">Login</p>
                        </Link>
                        <Link to="/register">
                            <p className="bg-blue-1 text-white font-medium text-center rounded-md px-8 py-2 cursor-pointer outline-none">Register</p>
                        </Link>
                        <p onClick={cancel} className="text-sm text-center rounded-md px-8 py-2 cursor-pointer outline-none">Cancel</p>
                    </div>
                </Popup>
                <Footer/>
            </>
        )
}

export default Pricing
