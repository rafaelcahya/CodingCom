import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Footer from '../../major/Footer'

import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import PlanComp from '../homepage/PlanComp'

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
                    <div className="plan-box pl-10 py-5 pr-24 rounded-xl shadow-xl flex flex-col justify-between">
                        <PlanComp
                            planName="Starter Bundle"
                            currency="Rp"
                            price="0"
                            get1="No ads"
                            get2="Unlimited course"
                            get3="Live Compiler tool"
                            get4="Career access"
                            get5="News access"
                            get6="Get certificate"
                            get7="Get future updates"
                        />
                    </div>
                    <div className="plan-box pl-10 py-5 pr-24 rounded-xl shadow-xl flex flex-col justify-between">
                        <PlanComp
                            planName="Premium Bundle"
                            currency="Rp"
                            price="286,000"
                            get1="No ads"
                            get2="Unlimited course"
                            get3="Live Compiler tool"
                            get4="Career access"
                            get5="News access"
                            get6="Get certificate"
                            get7="Get future updates"
                            get8="DevOps course"
                            get10="Class session access"
                        />
                        <Link to="/payment-confirmation-premium" className="bg-blue-1 text-white text-sm text-center py-2 my-10 rounded-xl cursor-pointer">Get started</Link>
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
