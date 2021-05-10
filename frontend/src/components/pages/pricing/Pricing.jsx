import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Footer from '../../major/Footer'

import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import Accordion from '../../minor/accordion/Accordion'

export class Pricing extends Component {
    render() {
        
    const hiddenTexts = [{
            label: 'How long will the plan be active?',
            value: 'There is no time limit for the premium plan meaning you can access all the features included in the premium plan forever.'
        },
        {
            label: 'What is Text Editor?',
            value: 'Text Editor is a tool for reading and writing programming languages directly on each tutorial topic so that learners can try first hand how the programming language syntax works.'
        },
        {
            label: 'What does get future updates mean?',
            value: 'You will get additional features and other tutorials in the next update. features and tutorials are added in accordance with the provisions.'
        },
        {
            label: 'What will you get from the premium course?',
            value: 'You will get DevOps tutorials and other paid tutorials whenever possible.'
        },
        {
            label: 'What is Quota?',
            value: 'Quota is the unit for the number of times you get access to use Session Class or Consultation Class.'
        },
        {
            label: 'Can the quota be purchased repeatedly?',
            value: 'Of course, you can buy quotas over and over again'
        },
        {
            label: 'Can I refund the premium plan?',
            value: 'Currently, the premium plan is non-refundable.'
        }];
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
                                        <p>Text Editor</p>
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
                                        <p>Text Editor</p>
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
                                        <p>Access to consultation classes and get 7 quotas</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                        <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
                                        </svg>
                                        <p>Access to session classes and get 5 quotas</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#D1FAE5"/>
                                        <path d="M4 7.5L7 10L11 5" stroke="#10B981" stroke-width="1.5"/>
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

                <section className="flex flex-col sm:flex-row justify-center mx-10 lg:mx-20 xl:mx-56 pb-20 gap-20">
                    <div className="plan-box px-10 py-8 rounded-xl shadow-xl flex items-center ring-2 ring-blue-500">
                        <div>
                            <p className="text-lg font-semibold">Consultation Class Quota</p>
                            <p className="text-sm font-medium text-gray-400 w-72">You will get 5 quota for  consultation class access</p>
                        </div>
                        <Link to="/payment-confirmation-class-consultation-quota">
                            <p className="bg-blue-1 hover:bg-blue-400 text-white text-sm font-medium px-4 py-2 rounded-lg">IDR 75,000</p>
                        </Link>
                    </div>
                    <div className="plan-box px-10 py-8 rounded-xl shadow-xl flex items-center ring-2 ring-blue-500">
                        <div>
                            <p className="text-lg font-semibold">Session Class Quota</p>
                            <p className="text-sm font-medium text-gray-400 w-72">You will get 5 quota for session class access</p>
                        </div>
                        <Link to="/payment-confirmation-class-session-quota">
                            <p className="bg-blue-1 hover:bg-blue-400 text-white text-sm font-medium px-4 py-2 rounded-lg">IDR 250,000</p>
                        </Link>
                    </div>
                </section>

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

                <section className="mx-8 md:mx-16 lg:mx-40 py-20 md:py-28" id="faq">
                    <p className="text-center text-3xl font-semibold mb-10">Frequently Asked Questions</p>
                    <div className="flex justify-center">
                        <div className="w-full sm:w-3/4">
                            <Accordion hiddenTexts={hiddenTexts}/>
                        </div>
                    </div>
                </section>
                <Footer/>
            </>
        )
    }
}

export default Pricing
