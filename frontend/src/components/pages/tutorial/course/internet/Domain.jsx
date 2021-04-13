import React, { Component } from 'react'
import Footer from '../../../../major/Footer'
import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'
import NextPrevBtnTutorial from '../NextPrevBtnTutorial'
import SidebarInternet from '../SidebarInternet'

export class Domain extends Component {
    render() {
        return (
            <>
                <NavbarLogin/>
                <NavbarMobile/>
                <div className="internet-header w-full py-40 text-white">
                    <div className="flex flex-col items-center text-center gap-2">
                        <h1 className="text-4xl font-semibold">Internet</h1>
                        <p className="font-medium">Domain</p>
                        <p className="text-sm">15 min</p>
                    </div>
                </div>
                <div className="flex gap-10 mt-20 mx-32 leading-7">
                    <SidebarInternet/>
                    <div className="flex flex-col gap-10 w-3/5 py-5">
                        <div>
                            <p className="text-xl font-semibold">What is Domain?</p>
                            <div className="flex flex-col gap-5 my-5">
                                <p>A domain name is the name that visitors type to open and access your website. This name directs the web browser to the server that stores website resources. Without a domain name, people would have to type in the server IP address to access your site, which would be quite a hassle.</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-xl font-semibold">How Domain works?</p>
                            <div className="flex flex-col gap-5 my-5">
                                <p>For example, Hostinger.com is a domain name. Let's just say our IP address is 100.90.80.70. This IP address points to a server, but cannot be used to access our website if a visitor tries to open it. Because, in order for the IP address to be used to access the website, the remote server must use port 80 with the default page (index.html) stored in the web application directory.</p>
                            </div>
                            <div className="border-left-orange-1 bg-orange-2 px-4 py-4">
                                <p>Domains can also take advantage of redirects or redirects that help you determine whether a visitor to your site will be automatically redirected to another site.</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-xl font-semibold">Domain type</p>
                            <div className="flex flex-col gap-5 my-5">
                                <p>Here are some of the most widely used domain types:</p>
                                <ol className="list-decimal mx-10">
                                    <div>
                                        <li>TLD: Top Level Domain</li>
                                        <p>As the name suggests, this type of domain name is the top level in the domain name system on the Internet. There are thousands of TLDs you can use, and the most widely used include .com, .org, .net, and .edu.</p>
                                    </div>
                                    <div>
                                        <li>ccTLD: Country Code Top Level</li>
                                        <p>Domain ccTLD uses only two letters and is based on international country codes, for example .us for United States and .jp for Japan.</p>
                                    </div>
                                    <div>
                                        <li>gTLD: Generic Top Level Domain</li>
                                        <p>Basically, a gTLD is a non-country code TLD. Most of the gTLDs are intended for specific uses, for example .edu for educational institution websites (education). Other examples of gTLDs are .gov (government), .org (nonprofits and organizations), and .net</p>
                                    </div>
                                </ol>
                            </div>
                            <div className="border-left-orange-1 bg-orange-2 px-4 py-4">
                                <p>An example of a second level domain is .co.uk, which is used by several company websites in the UK. Or, .gov.uk, which is used by British government institutions, and .ac.uk, which is used by academic institutions and universities in the kingdom.</p>
                            </div>
                        </div>
                        <NextPrevBtnTutorial
                            back="/DNS"
                            next="/domain"
                        />
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Domain
