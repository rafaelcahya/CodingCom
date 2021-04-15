import React, { Component } from 'react'
import Footer from '../../../../major/Footer'
import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'
import NextPrevBtnTutorial from '../NextPrevBtnTutorial'
import SidebarInternet from '../SidebarInternet'
import SidebarInternetMobile from '../SidebarInternetMobile'

export class DNS extends Component {
    render() {
        return (
            <>
                <NavbarLogin/>
                <NavbarMobile/>
                <div className="internet-header w-full py-40 text-white">
                    <div className="flex flex-col items-center text-center gap-2">
                        <h1 className="text-4xl font-semibold">Internet</h1>
                        <p className="font-medium">DNS Server</p>
                        <p className="text-sm">15 min</p>
                    </div>
                </div>
                <div className="flex gap-10 mt-20 mx-10 md:mx-20 lg:mx-32 leading-7">
                    <SidebarInternet/>
                    <SidebarInternetMobile/>
                    <div className="flex flex-col gap-10 w-full lg:w-3/5 py-5">
                        <div>
                            <p className="text-xl font-semibold">What is DNS Server?</p>
                            <div className="flex flex-col gap-5 my-5">
                                <p>DNS Server is a system that converts website URLs into IP addresses. Without DNS Server, you have to type the complete IP address when you want to visit a website. For example, you want to access Google. Instead of writing 172.217.0.142 into the address bar, all you have to do is enter the Google.com address.</p>
                                <p>Beside that, the DNS Server is also easier to configure. When there are problems with the IP address used, you can easily replace it with a different IP. It is enough to update the DNS and IP Address matching data.</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-xl font-semibold">How DNS Server works?</p>
                            <div className="flex flex-col gap-5 my-5">
                                <p>There are several steps for how the DNS Server works: </p>
                                <ol className="list-decimal mx-10 flex flex-col gap-5">
                                    <li>DNS servers look for IP address information on filehost, which is a plain text file in the operating system that redirects hostnames to IP addresses. If the information you are looking for is not found, the server will look in the cache, which is a hardware or software component that temporarily stores data.</li>
                                    <li><b>If the requested information is not found in the cache, the system can ask another server to fulfill the request on behalf of the client (browser) by looking for information in the ISP cache. This is called a DNS recursor.</b> This server is like an agent whose role is to provide any requested information. In this process, the DNS recursor also asks the Root Nameserver for help.</li>
                                    <li>if the information is still not found in the ISP cache, the DNS recursive resolver will send a request to the <b>Root Nameserver.</b> Then, this server will respond to the request by telling the agent to access a more specific area, namely the <b>top-level-domain name server (TLD nameserver).</b></li>
                                    <li>
                                        <p>When accessing the website, you can see that the domain names of both platforms end in .com. This suffix is called top-level domain. The servers for this type of top-level domain are called TLD nameservers, which are responsible for managing all information related to public domain extensions.</p>
                                        <p>
                                        Like when requesting information about www.google.com, TLD .com as the sole delegate will respond to requests from the DNS recursive resolver by referring to the <b>Authoritative DNS server, or Authoritative Nameserver.</b> This server has the original resources for the domain.
                                        </p>
                                    </li>
                                    <li>When a DNS recursive resolver meets the <b>authoritative nameserver</b>, that's when the answer will be given. The authoritative nameserver has all the information about the domain names it serves. This server provides an iterative resolver to the IP addresses the server finds in the log. After this stage is complete, the web browser finally displays the website page that we requested</li>
                                </ol>
                            </div>
                        </div>
                        <NextPrevBtnTutorial
                            back="/browser"
                            next="/domain"
                        />
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

export default DNS