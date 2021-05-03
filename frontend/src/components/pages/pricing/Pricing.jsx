import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Footer from '../../major/Footer'

import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'

export class Pricing extends Component {
    render() {
        return (
            <>
                <NavbarLogin/>
                <NavbarMobile/>
                <div className="mt-20 md:mt-10">
                    <div className="leading-8 text-center py-20">
                        <div className="color-blue-1 text-2xl md:text-3xl lg:text-5xl xl:text:5xl font-bold">
                            <p>Get Started Now,</p>
                            <p>Pick a Bundle Later</p>
                        </div>
                        <p className="mt-10">Access to all our tutorials and features</p>
                    </div>
                </div>
                <section className="flex flex-col sm:flex-row justify-center mx-10 lg:mx-20 xl:mx-56 pb-20 gap-20">
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
                                        <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
                                        </svg>
                                        <p>No ads</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                        <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
                                        </svg>
                                        <p>Live Compiler tool</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                        <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
                                        </svg>
                                        <p>Career access</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                        <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
                                        </svg>
                                        <p>News access</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                        <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
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
                                        <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
                                        </svg>
                                        <p>No ads</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                        <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
                                        </svg>
                                        <p>Live Compiler tool</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                        <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
                                        </svg>
                                        <p>Career access</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                        <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
                                        </svg>
                                        <p>News access</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                        <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
                                        </svg>
                                        <p>Get future updates</p>
                                    </div>
                                </div>
                                <div className="font-semibold flex flex-col gap-5 mt-5">
                                    <div className="flex items-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                        <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
                                        </svg>
                                        <p>Get Premium course</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                        <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
                                        </svg>
                                        <p>Get 7 access quota for class consultation</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                        <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
                                        </svg>
                                        <p>Get 5 access quota for class session</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                        <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
                                        </svg>
                                        <p>Certificate</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <Link to="/payment-confirmation-premium" className="bg-blue-1 hover:bg-blue-400 text-white text-sm flex justify-center items-center gap-2 py-3 mt-10 rounded-xl cursor-pointer">
                            <p className="font-medium">Get started</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </Link>
                    </div>
                </section>

                <section className="flex flex-col sm:flex-row justify-center mx-10 lg:mx-20 xl:mx-56 pb-20 gap-20">
                    <div className="plan-box px-10 py-8 rounded-xl shadow-xl flex items-center ring-2 ring-blue-500">
                        <div>
                            <p className="text-lg font-semibold">Class Consultation Quota</p>
                            <p className="text-sm font-medium text-gray-400 w-72">You will get 5 quota for class consultation access</p>
                        </div>
                        <p className="bg-blue-1 hover:bg-blue-400 text-white text-sm font-medium px-4 py-2 rounded-lg">IDR 75,000</p>
                    </div>
                    <div className="plan-box px-10 py-8 rounded-xl shadow-xl flex items-center ring-2 ring-blue-500">
                        <div>
                            <p className="text-lg font-semibold">Class Session Quota</p>
                            <p className="text-sm font-medium text-gray-400 w-72">You will get 5 quota for class session access</p>
                        </div>
                        <p className="bg-blue-1 hover:bg-blue-400 text-white text-sm font-medium px-4 py-2 rounded-lg">IDR 250,000</p>
                    </div>
                </section>

                <section className="mx-10 lg:mx-20 xl:mx-56 my-20 md:my-32">
                    <p className="text-center text-xl md:text-2xl lg:text-4xl font-semibold">Information</p>
                    <div className="information flex gap-10 my-10">
                        <p>Unlimited courses only for the internet course, web design course, frontend course, backend course and relational database course.</p>
                        <p>Get future update means you will always get all updates from the features and courses.</p>
                    </div>
                </section>

                <section className="mx-10 lg:mx-20 xl:mx-56 my-20 md:my-32">
                    <p className="text-center text-xl md:text-2xl lg:text-4xl font-semibold">How to Purchase</p>
                    <div className="my-10">
                        <p>Here are some steps for how to make a payment:</p>
                        <ol className="list-decimal m-5 leading-8">
                            <li>You go to the homepage and scroll down until you see the plans section.</li>
                            <li>Click Get Started button.</li>
                            <li>Fill your name and email and click the buy button.</li>
                            <li>Please transfer to the account below.</li>
                            <div className="card bg-blue-1 w-max p-5 m-5 text-white rounded-xl">
                                <p>Bank BCA</p>
                                <p>8888897689</p>
                                <p>CodingPaymentCom</p>
                            </div>
                            <li>Please send a photo of purchase invoice to codingpayment@coding.com</li>
                            <li>Success and please wait a moment because we are processing the payment process</li>
                        </ol>
                    </div>
                </section>

                <section className="mx-10 lg:mx-20 xl:mx-56 my-20 md:my-32">
                    <p className="text-center text-xl md:text-2xl lg:text-4xl font-semibold">Instructions</p>
                    <ol className="flex flex-col gap-5 list-decimal mx-5 my-10">
                        <li>Be careful when making transactions, do the transfer process correctly by looking at the transaction process above. besides the transfer process above, we make sure it is a scam.</li>
                        <li>At this time, we only accept payments via transfer. Other than that, we could be considered a scam. We'll be expanding payment transactions soon, making it even easier for you to learn</li>
                        <li>We will process the transaction if it is read in the system</li>
                        <li>Look at the third step. If you have clicked the buy button, that means you will buy the Premium Plan and it will be read in our system. So don't worry, if your purchase is not confirmed by us. </li>
                    </ol>
                </section>

                <section className="mx-10 lg:mx-20 xl:mx-56 my-20 md:my-32">
                    <p className="text-center text-xl md:text-2xl lg:text-4xl font-semibold" id="refund">Refund</p>
                    <p className="my-10">For the time being, you cannot refund what you have bought in any form, so you have to make sure whether you intend to buy or not.</p>
                </section>
                <Footer/>
            </>
        )
    }
}

export default Pricing
