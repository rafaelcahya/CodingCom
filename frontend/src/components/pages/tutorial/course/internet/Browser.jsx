import React, { Component } from 'react'
import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'
import Footer from '../../../../major/Footer'
import SidebarInternet from '../SidebarInternet'
import NextPrevBtnTutorial from '../NextPrevBtnTutorial'

export class Browser extends Component {
    render() {
        return (
            <>
                <NavbarLogin/>
                <NavbarMobile/>
                <div className="internet-header w-full py-40 text-white">
                    <div className="flex flex-col items-center text-center gap-2">
                        <h1 className="text-4xl font-semibold">Internet</h1>
                        <p className="font-medium">Browser and How Browser Works</p>
                        <p className="text-sm">1 min</p>
                    </div>
                </div>
                <div className="flex gap-10 mt-20 mx-32 leading-7">
                    <SidebarInternet/>
                    <div className="w-3/5 py-5">
                        <div>
                            <p className="text-xl font-semibold">What is Browser</p>
                            <div className="flex flex-col gap-5 my-5">
                                <p>Browser is an application for accessing a website. Usually the purpose of the browser is to find and get information from websites. Fundamentally, browsers have the ability to display the semantic code (programming language) of web pages such as HTML, CSS, JS, and others into pages that are understandable to everyone. Google Chrome, Mozilla, Internet Explorer are just a few of the existing browsers.</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-xl font-semibold">How the browser works</p>
                            <p>
                                When the user enters a website address or URL (Uniform Resource Locator) in the address bar, the browser will perform data retrieval on the DNS Server. The data retrieved is an IP (Internet Protocol) address. The browser will access the server using an IP address and the server will provide data from website content based on the technology used (HTML, CSS, JS, etc.)
                            </p>
                            <div className="border-left-orange-1 bg-orange-2 px-4 py-4 my-5 color-black-1">
                                <p>DNS Server is a system that converts website URLs into IP addresses. Without DNS Server, you have to type the complete IP address when you want to visit a website.</p>
                                <p>IP Address (Internet Protocol Address) is a numeric identity used by all computer devices to connect to each other on the internet network.</p>
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

export default Browser
