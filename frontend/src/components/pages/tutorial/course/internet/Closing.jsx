import React, { Component } from 'react'
import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'
import Footer from '../../../../major/Footer'
import SidebarInternet from '../SidebarInternet'
import NextPrevBtnTutorial from '../NextPrevBtnTutorial'
import SidebarInternetMobile from '../SidebarInternetMobile'

export class Browser extends Component {
    render() {
        return (
            <>
                <NavbarLogin/>
                <NavbarMobile/>
                <div className="internet-header w-full py-40 text-white">
                    <div className="flex flex-col items-center text-center gap-2">
                        <h1 className="text-4xl font-semibold">Internet</h1>
                        <p className="font-medium">Closing</p>
                        <p className="text-sm">10 min</p>
                    </div>
                </div>
                <div className="flex gap-10 mt-20 mx-10 md:mx-20 lg:mx-32 leading-7">
                    <SidebarInternet/>
                    <SidebarInternetMobile/>
                    <div className="w-full lg:w-3/5 flex flex-col gap-5 py-5">
                        <div>
                            <p className="text-xl font-semibold">Closing</p>
                            <div className="my-5">
                                <p>Congratulations, you've finished learning about the internet. We hope you understand: what the internet is and how it works, HTTP & HTTPS, browser, DNS, domain and hosting</p>
                            </div>
                        </div>
                        <div className="border-left-orange-1 bg-orange-2 text-black px-4 py-4">
                            <p>The next step is that you will learn the website structure, namely HTML</p>
                        </div>
                        <NextPrevBtnTutorial
                            back="/what-is-http"
                            next="/DNS"
                        />
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Browser
