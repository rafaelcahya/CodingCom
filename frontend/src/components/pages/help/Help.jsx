import React, { Component, Fragment, useEffect, useState } from 'react'
import NavbarLogin from '../../major/NavbarLogin'
import HelpComp from './HelpComp'
import Footer from '../../major/Footer'
import NavbarMobile from '../../major/NavbarMobile'
import Axios from "axios"

function Help() {
    const [valueList, setValueList] = useState([])
    
    useEffect(() => {
        Axios.get("http://localhost:3001/faq/listFaq").then((response) => {
            setValueList(response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

        return (
            <Fragment>
                <NavbarLogin/>
                <NavbarMobile/>
                <p className="flex flex-col items-center text-3xl text-center mt-32 lg:mt-20 mb-10 gap-10">How we can help you ?</p>
                <div className="help-container flex flex-col gap-20 mx-8 sm:mx-24 md:mx-40 lg:mx-52 xl:mx-72">
                    <div >
                        <p className="color-blue-1 text-2xl font-medium my-5">Basic</p>
                        <div className="flex flex-col gap-5">
                            <p className="text-lg font-semibold">How does this website work ?</p>
                            {
                                valueList.map((val)=>{
                                    return <HelpComp
                                    subtitle= {val.question}
                                    desc= {val.answer}
                                />
                                })
                            }
                            
                            {/* <HelpComp
                                subtitle= "What do Coding.com Courses include ?"
                                desc= "Each course is created and managed by a mentor in text form. At any time, the mentor can modify each existing course so you can get the latest learning."
                            />
                            <HelpComp
                                subtitle= "What is Challenge ?"
                                desc= "Challenge is a coding exercise to improve the ability of what you learn. Coding exercises created and managed by a mentor. The coding exercises will always add up to new ones whenever the mentor wants to be added. You can easily download these exercises to help your learning process."
                            />
                            <HelpComp
                                subtitle= "What is Class Session ?"
                                desc= "Class Session is a virtual class that is used for you to ask questions or discuss with mentors and other users via zoom. You can join the class anywhere and anytime. however, you have to buy a premium plan so you can use it."
                            />
                            <HelpComp
                                subtitle= "What is News ?"
                                desc= "News is a technology news portal from various trusted sources for those of you who want to update your technology knowledge. it contains general news, programming languages, software, blogs, gadgets and games."
                            />
                            <HelpComp
                                subtitle= "What is Career ?"
                                desc= "in Career, you can see job vacancies from various companies that are available and you can apply directly. We will be a bridge between you and the company you are applying for. We will continue to update job vacancies with new ones."
                            /> */}
                        </div>
                    </div>
                    <div id="plan">
                        <p className="color-blue-1 text-2xl font-medium my-5">Premium Plan</p>
                        <p>Premium Bundle is a bundle that contains additional features so that users can get additional interesting features. The premium bundle has a period of 1 month. if you want to have access forever, you can buy the premium plus bundle. But don't worry, you don't have to buy the bundles offered to study. You can still access existing free courses and you will still get updates in the future</p>
                    </div>
                    <div>
                        <p className="color-blue-1 text-2xl font-medium my-5" id="purchase">Purchase</p>
                        <div className="bg-blue-3 p-5 rounded-3xl">
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
                        <div>
                            <p className="font-semibold text-lg my-5">Instructions</p>
                            <ol className="list-decimal mx-5 leading-8">
                                <li>Be careful when making transactions, do the transfer process correctly by looking at the transaction process above. besides the transfer process above, we make sure it is a scam.</li>
                                <li>At this time, we only accept payments via transfer. Other than that, we could be considered a scam. We'll be expanding payment transactions soon, making it even easier for you to learn</li>
                                <li>We will process the transaction if it is read in the system</li>
                                <li>Look at the third step. If you have clicked the buy button, that means you will buy the Premium Plan and it will be read in our system. So don't worry, if your purchase is not confirmed by us. </li>
                            </ol>
                        </div>
                    </div>
                    <div>
                        <p className="color-blue-1 text-2xl font-medium my-5" id="refund">Refund</p>
                        <p>For the time being, you cannot refund what you have bought in any form, so you have to make sure whether you intend to buy or not.</p>
                    </div>
                    <div>
                        <p className="color-blue-1 text-2xl font-medium my-5" id="certificate">Certificate</p>
                        <p>At Coding.com, you can get a certificate for free if you have done the 10 practice questions that we have provided. It is to show that you have really mastered what you are learning.</p>
                    </div>
                </div>
                <Footer />
            </Fragment>
        )
}

export default Help
