import React, { Component } from 'react'
import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'
import Footer from '../../../../major/Footer'
import SidebarInternet from '../SidebarInternet'
import NextPrevBtnTutorial from '../NextPrevBtnTutorial'

export class Internet extends Component {
    render() {
        return (
            <>
                <NavbarLogin/>
                <NavbarMobile/>
                <div className="internet-header w-full pt-48 pb-40 text-white">
                    <div className="flex flex-col items-center text-center gap-2">
                        <h1 className="text-4xl font-semibold">Internet</h1>
                        <p className="font-medium">Introduction</p>
                        <p className="text-sm">1 min</p>
                    </div>
                </div>
                <div className="flex gap-10 mt-20 mx-32 leading-7">
                    <SidebarInternet/>
                    <div className="w-4/5 py-5">
                        <p className="text-xl font-semibold">Introduction</p>
                        <div className="flex flex-col gap-5 my-5 mr-56">
                            <p>According to the <a href="https://dictionary.cambridge.org/dictionary/english/" className="underline">Cambridge Academic Content Dictionary</a>, internet is a large system of connected computers around the world which people use to communicate with each other.</p>
                            <div className="border-left-orange-1 bg-orange-2 px-4 py-4">
                                <p>Before further learning, here are some of the learning paths that you will learn:</p>
                                <ol className="list-decimal">
                                    <div className="mx-10">
                                        <li>What is internet?</li>
                                        <li>How does internet work?</li>
                                        <li>What is HTTP?</li>
                                    </div>
                                </ol>
                            </div>
                        </div>
                        <NextPrevBtnTutorial
                            back="/tutorial"
                            next="/what-is-internet"
                        />
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Internet
