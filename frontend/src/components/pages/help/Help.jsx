import React, { Fragment, useEffect, useState } from 'react'
import Axios from "axios"

import NavbarLogin from '../../major/NavbarLogin'
import Footer from '../../major/Footer'
import NavbarMobile from '../../major/NavbarMobile'

function Help() {
    const [valueList, setValueList] = useState([])
    
    useEffect(() => {
        Axios.get("http://localhost:3001/faq/listFaq").then((response) => {
            setValueList(response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
            <Fragment>
                <NavbarLogin/>
                <NavbarMobile/>
                <p className="flex flex-col items-center text-3xl text-center mt-32 lg:mt-20 mb-10 gap-10">How we can help you ?</p>
                <div className="grid grid-cols-2 gap-10 mx-8 sm:mx-24 md:mx-40 lg:mx-52 xl:mx-72">
                    {valueList.map((val)=> {
                        return <Accordion title={val.question}>
                                <p>Answer : {val.answer}</p>
                                <p>Category : {val.category}</p>
                                <p>Description :</p>
                                <div dangerouslySetInnerHTML={{ __html: val.description }} />
                            </Accordion>
                    })}
                    {/* <div id="plan">
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
                    </div> */}
                </div>
                <Footer />
            </Fragment>
        )
}

export default Help


// const hiddenTexts = [{
//     label: 'What will I get from the program?',
//     value: 'Latest curriculum, Intensive Training, Networking, Carrer Opportunity, Certificate, and Prize'
// },
// {
//     label: 'How can I apply?',
//     value: 'You can directly apply through the registration form.'
// },
// {
//     label: 'Who is eligible to apply for this program?',
//     value: 'Everyone who have a minimum age of 15 years and over and has a high interest in technology.'
// },
// {
//     label: 'How long does the registration selection process take?',
//     value: 'Approximately 1 week. Our team will select registrations and invite tests for participants who meet the criteria.'
// },
// {
//     label: 'What can I expect after I apply?',
//     value: 'If you pass the Document screening, You will receive an email containing the syllabus, bootcamp schedule, and payment methods no later than one week after you register. Regularly check your email for further announcements and information.'
// },
// {
//     label: 'When will the final announcement be made?',
//     value: 'We will announce the final list of participants on 14 June 2021.'
// },
// {
//     label: 'When and where will the program be held?',
//     value: 'Tokopedia DevCamp will be held between 5 - 10 July 2021. Due to the pandemic, the program will be held remotely.'
// },
// {
//     label: 'What do I need to prepare?',
//     value: 'You have to at least spend approximately 6 hours per day for 5 days a week to follow the Fultime Coding Bootcamp and make sure you have your own laptop. Any supporting software and/or hardware needed will be informed to selected participants with the announcement email before the event.'
// },
// {
//     label: 'Can I miss one or two sessions?',
//     value: 'Participants are highly encouraged to participate in all of the activities, especially the hackathon. All of the participants’ attendance will be recorded.'
// },
// {
//     label: 'Is there a selection of materials that I should choose?',
//     value: 'No, Coding.com provides Full Stack web development materials covering common problems in the world of work'
// },
// {
//     label: 'Should I have Programming background',
//     value: 'No, we will provide training for all potential participants regardless of their educational background.'
// },
// {
//     label: 'Does Hacktiv8 provide certificates upon graduation?',
//     value: 'Hacktiv8 provides digital certificates for Hacktiv8 students who have successfully completed the Hacktiv8 learning program.'
// }];