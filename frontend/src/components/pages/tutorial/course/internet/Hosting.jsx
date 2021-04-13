import React, { Component } from 'react'
import Footer from '../../../../major/Footer'
import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'
import NextPrevBtnTutorial from '../NextPrevBtnTutorial'
import SidebarInternet from '../SidebarInternet'

export class Hosting extends Component {
    render() {
        return (
            <>
                <NavbarLogin/>
                <NavbarMobile/>
                <div className="internet-header w-full py-40 text-white">
                    <div className="flex flex-col items-center text-center gap-2">
                        <h1 className="text-4xl font-semibold">Internet</h1>
                        <p className="font-medium">Hosting</p>
                        <p className="text-sm">10 min</p>
                    </div>
                </div>
                <div className="flex gap-10 mt-20 mx-32 leading-7">
                    <SidebarInternet/>
                    <div className="flex flex-col gap-10 w-3/5 py-5">
                        <div>
                            <p className="text-xl font-semibold">What is Hosting?</p>
                            <div className="flex flex-col gap-5 my-5">
                                <p>A simple way of hosting is a service for storing data, images, and files on a website. Another definition is a service that allows users to publish a website to the internet.</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-xl font-semibold">Type of Hosting</p>
                            <div className="flex flex-col gap-5 my-5">
                                <p>here are the types of hosting that you need to know:</p>
                                <ol className="list-decimal mx-10 flex flex-col gap-5">
                                    <div>
                                        <li>Shared hosting</li>
                                        <p>Shared hosting is very often used by novice users. Shared hosting is good for new websites because it doesn't have a lot of traffic. However, shared hosting requires you to share a server with other people. So when the traffic from other users' websites is high, it can affect the performance of your website.</p>
                                    </div>
                                    <div>
                                        <li>Cloud based hosting</li>
                                        <p>Cloud based hosting allows hundreds of servers to work together so it looks like one giant server. This type of hosting is the target of many people because it will not experience downtime. In fact, when the server is in trouble, it will not affect your website.</p>
                                    </div>
                                    <div>
                                        <li>VPS hosting</li>
                                        <p>With VPS hosting users get dedicated server space. So, when there is a high increase in traffic on other websites that are still on the same server, it will not have an impact on your website.</p>
                                    </div>
                                    <div>
                                        <li>WordPress hosting</li>
                                        <p>WordPress hosting is another type of shared hosting and functions specifically for website users from WordPress. This type of hosting will provide users with services such as updating a WordPress installation to help protect the website from hackers' security threats.</p>
                                    </div>
                                </ol>
                            </div>
                        </div>
                        <NextPrevBtnTutorial
                            back="/DNS"
                            next="/closing"
                        />
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Hosting
