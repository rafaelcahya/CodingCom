import React, { Component } from 'react'
import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'
import Footer from '../../../../major/Footer'
import SidebarInternet from '../SidebarInternet'
import NextPrevBtnTutorial from '../NextPrevBtnTutorial'
import SidebarInternetMobile from '../SidebarInternetMobile'
import Comment from '../Comment'

export class Internet extends Component {
    render() {
        return (
            <>
                <NavbarLogin/>
                <NavbarMobile/>
                <div className="internet-header w-full py-40 text-white">
                    <div className="flex flex-col items-center text-center gap-2">
                        <h1 className="text-4xl font-semibold">Internet</h1>
                        <p className="font-medium">Introduction</p>
                        <p className="text-sm">1 min</p>
                    </div>
                </div>
                <div className="flex gap-10 mt-20 mx-10 md:mx-20 lg:mx-32 leading-7">
                    <SidebarInternet/>
                    <SidebarInternetMobile/>
                    <div className="w-full lg:w-3/5 py-5">
                        <p className="text-xl font-semibold">Introduction</p>
                        <div className="flex flex-col gap-5 my-5">
                            <p>According to the <a href="https://dictionary.cambridge.org/dictionary/english/" className="underline">Cambridge Academic Content Dictionary</a>, internet is a large system of connected computers around the world which people use to communicate with each other.</p>
                            <div className="border-left-orange-1 bg-orange-2 px-4 py-4 text-black">
                                <p>Before further learning, here are some of the learning paths that you will learn:</p>
                                <ol className="list-decimal">
                                    <div className="mx-10">
                                        <li>What is internet?</li>
                                        <li>How does internet work?</li>
                                        <li>What is HTTP & HTTPS?</li>
                                        <li>Browse and how browser work?</li>
                                        <li>DNS Server</li>
                                        <li>Domain</li>
                                        <li>Hosting</li>
                                    </div>
                                </ol>
                            </div>
                        </div>
                        <NextPrevBtnTutorial
                            back="/tutorial"
                            next="/what-is-internet"
                        />
                        <Comment/>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Internet
