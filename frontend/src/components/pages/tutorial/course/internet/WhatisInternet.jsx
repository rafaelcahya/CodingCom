import React, { Component } from 'react'
import Footer from '../../../../major/Footer'
import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'
import NextPrevBtnTutorial from '../NextPrevBtnTutorial'
import SidebarInternet from '../SidebarInternet'

import osimodel from '../../../../../asset/photo/Tutorial/internet/osimodel.png'
import SidebarInternetMobile from '../SidebarInternetMobile'

export class WhatisInternet extends Component {
    render() {
        return (
            <>
                <NavbarLogin/>
                <NavbarMobile/>
                <div id="tutorial" className="internet-header w-full py-40 text-white">
                    <div className="flex flex-col items-center text-center gap-2">
                        <h1 className="text-4xl font-semibold">Internet</h1>
                        <p className="font-medium">What is Internet?</p>
                        <p className="text-sm">15 min</p>
                    </div>
                </div>
                <div className="flex gap-10 mt-20 mx-10 md:mx-20 lg:mx-32 leading-7">
                    <SidebarInternet/>
                    <SidebarInternetMobile/>
                    <div className="w-full lg:w-3/5 py-5">
                        <p className="text-xl font-semibold">What is Internet?</p>
                        <div className="flex flex-col gap-5 my-5">
                            <p>The internet is a network or computer connection that is very extensive throughout the world so that people can share information and communicate from anywhere. The network or connection makes use of communication devices such as telephones and satellites which also use standard protocols for communication, namely the TCP / IP (Transmission Control / Internet Protocol) protocol.</p>
                            <p>TCP / IP (Transmission Control Protocol / Internet Protocol) is a type of network protocol that can provide freedom in communicating between one computer and another in a network even though the platforms used on these computers are different from one another.</p>
                            <div className="border-left-orange-1 bg-orange-2 px-4 py-4">
                                <p>TCP / IP protocol suite was developed prior to the OSI model.</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <img src={osimodel} alt="7 OSI Layer" width="500"/>
                                <p className="text-sm font-semibold">7 OSI Layer</p>
                            </div>
                        </div>
                        <NextPrevBtnTutorial
                            back="/internet"
                            next="/how-does-internet-work"
                        />
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

export default WhatisInternet
