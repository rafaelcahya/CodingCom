import React, { useEffect, useState } from 'react'
import Footer from '../../../../major/Footer'
import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'
import NextPrevBtnTutorial from '../NextPrevBtnTutorial'
import SidebarInternet from '../SidebarInternet'
import SidebarInternetMobile from '../SidebarInternetMobile'
import Axios from 'axios'

function DNS() {
    let x
    const [comment, setComment] = useState("")
    const [name,setName] = useState("")
    const [createAt,setCreateAt] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [commentlist,setCommentList] = useState([])

    window.onload = setTimeout(function () {
        x = localStorage.getItem("name");
        document.getElementById("name").innerHTML = x;
        setName(x)
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = time + ' ' + date;
        setCreateAt(dateTime)
    }, 500)

    useEffect(()=>{
        Axios.get("http://localhost:3001/comment/commentListDNS").then((response)=>{
            setCommentList(response.data)
        })
    },[]);

    const commentInternet = () => {
        Axios.post("http://localhost:3001/comment/commentDNS", {name: name, comment: comment, createAt:createAt}).then((response) => {
            setErrorMessage(response.data.message)
            window.location.reload()
        })
    }
    return (
        <>
            <NavbarLogin />
            <NavbarMobile />
            <div className="flex gap-10 mt-32 lg:mt-16 mx-10 md:mx-20 lg:mx-32 leading-7">
                <SidebarInternet />
                <SidebarInternetMobile />
                <div className="w-4/5 pl-20 pr-0 pt-5 lg:pr-32 border-l border-gray-300">
                    <div className="flex justify-between border-b border-gray-300 pb-10">
                        <div>
                            <p className="text-2xl lg:text-5xl font-semibold">DNS</p>
                            <p className="text-gray-400 text-sm mt-2">This page discusses what DNS is and how it works.</p>
                        </div>
                        <p className="text-gray-400 text-sm">10 min</p>
                    </div>
                    <div className="flex flex-col gap-10 pt-10 pb-20">
                        <div className="flex flex-col gap-5">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/JkEYOt08-rU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div className="flex flex-col gap-5">
                                <p className="text-xl font-semibold">What is DNS Server?</p>
                                <div className="flex flex-col gap-5">
                                    <p>DNS Server is a system that converts website URLs into IP addresses. Without DNS Server, you have to type the complete IP address when you want to visit a website. For example, you want to access Google. Instead of writing 172.217.0.142 into the address bar, all you have to do is enter the Google.com address.</p>
                                    <p>Beside that, the DNS Server is also easier to configure. When there are problems with the IP address used, you can easily replace it with a different IP. It is enough to update the DNS and IP Address matching data.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="text-xl font-semibold">How DNS Server works?</p>
                            <div className="flex flex-col gap-5">
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
                    </div>
                    
                    <NextPrevBtnTutorial
                        back="/browser"
                        next="/domain"
                    />

                    <div className="mt-32">
                        <p className="font-semibold text-2xl my-5">Discussion</p>
                        <span className="flex gap-2 my-2">Discussion as <p id="name" className="color-blue-1"></p></span>
                        <form className="mb-16 pb-10 border-b-2 border-gray-300">
                            <textarea placeholder="add your discussion here(255 char)" className="textarea resize-none cursor-text" onChange={(event) => {
                                setComment(event.target.value)
                            }} ></textarea>
                            <p className="text-sm color-red-1 text-center mt-8 font-medium">{errorMessage}</p>
                            <div className="flex justify-end items-center gap-10 my-5">
                                <input type="reset" defaultValue="Reset" className="bg-gray-200 text-black px-4 py-1 rounded-lg cursor-pointer" />  
                                <p onClick={commentInternet} id="submitComment" className="bg-blue-1 text-white px-4 py-1 rounded-lg cursor-pointer">Post discussion</p>
                            </div> 
                        </form>
                        {
                            commentlist.map(
                                (val)=> {
                                    return <div className="bg-white p-4 my-5 rounded-xl">
                                                <div className="flex justify-between mb-1">
                                                    <p className="color-blue-1 font-semibold text-sm">{val.name}</p>
                                                    <p className="text-gray-400 text-sm">{val.createAt}</p>
                                                </div>
                                                <p className="text-sm">{val.comment}</p>
                                            </div>
                                }
                            )
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DNS
