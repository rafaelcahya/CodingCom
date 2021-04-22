import React, { useEffect, useState } from 'react'
import Footer from '../../../../major/Footer'
import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'
import NextPrevBtnTutorial from '../NextPrevBtnTutorial'
import SidebarInternet from '../SidebarInternet'

import internetschema1 from '../../../../../asset/photo/Tutorial/internet/internetschema1.png'
import internetschema2 from '../../../../../asset/photo/Tutorial/internet/internetschema2.png'
import internetschema3 from '../../../../../asset/photo/Tutorial/internet/internetschema3.png'
import internetschema4 from '../../../../../asset/photo/Tutorial/internet/internetschema4.png'
import internetschema5 from '../../../../../asset/photo/Tutorial/internet/internetschema5.png'
import SidebarInternetMobile from '../SidebarInternetMobile'
import Axios from 'axios'

function InternetWork() {
    let x
    const [comment, setComment] = useState("")
    const [name, setName] = useState("")
    const [createAt, setCreateAt] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [commentlist, setCommentList] = useState([])

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

    useEffect(() => {
        Axios.get("http://localhost:3001/comment/commentListInternetWork").then((response) => {
            setCommentList(response.data)
        })
    }, []);

    const commentInternet = () => {
        Axios.post("http://localhost:3001/comment/commentInternetWork", { name: name, comment: comment, createAt: createAt }).then((response) => { 
            setErrorMessage(response.data.message)
        })
    }
    return (
        <>
            <NavbarLogin />
            <NavbarMobile />
            <div id="tutorial" className="internet-header w-full py-40 text-white">
                <div className="flex flex-col items-center text-center gap-2">
                    <h1 className="text-4xl font-semibold">Internet</h1>
                    <p className="font-medium">How does internet work</p>
                    <p className="text-sm">25 min</p>
                </div>
            </div>
            <div className="flex gap-10 mt-20 mx-10 md:mx-20 lg:mx-32 leading-7">
                <SidebarInternet />
                <SidebarInternetMobile />
                <div className="w-full lg:w-3/5 py-5">
                    <p className="text-xl font-semibold">How does Internet Work</p>
                    <div className="flex flex-col gap-20 my-5">
                        <div className="flex flex-col gap-5">
                            <iframe src="https://www.youtube-nocookie.com/embed/7_LPdttKXPc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <p>When two computers want to communicate, we have to connect them, either physically (usually using an Ethernet cable) or wireless (such as a WiFi or Bluetooth system). All modern computers can allow this connection.</p>
                            <img src={internetschema1} alt="" width="400" className="mx-auto" />
                            <p>The network is not only on two computers but can connect as many computers as you wish.</p>
                            <img src={internetschema2} alt="" width="400" className="mx-auto" />
                            <p>See the picture above, computers are interconnected in complex ways. To fix this, every computer on the network must be connected to a router. A router is a device for connecting multiple networks. After adding a router, the previously complex wiring has become tidier.</p>
                            <img src={internetschema3} alt="" width="400" className="mx-auto" />
                            <p>If you want to connect hundreds, thousands, billions of computers, you can connect a router to another router.</p>
                            <img src={internetschema4} alt="" width="400" className="mx-auto" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <p>In the previous explanation is a network that is only for 1 room only. what if we are connected to a network that is outside such as a neighbor's house, a friend's house or other things in accordance with the basic functions of the internet?</p>
                            <p>To connect, we need a special device called a modem .This modem converts information from our network into information that can be managed by the telephone infrastructure. Telephone infrastructure means cables that connect from your home to anyone.</p>
                            <p>After that, if we want to connect and communicate, we need an ISP (Internet service provider). An ISP is a company that manages several special routers that all connect together and can also access other ISP routers. There is a message from our network that is carried through the ISP network to the destination network. The Internet consists of the entire infrastructure of this network.</p>
                            <img src={internetschema5} alt="" width="400" className="mx-auto" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <p>If you want to send a message to a computer, you must specify which computer it is. So every computer connected to the network has a unique address to identify it, which is called an "IP address" (where IP stands for Internet Protocol). It is an address made up of a series of four numbers separated by dots, for example: 192.168.2.10.</p>
                            <p>That's fine for computers, but we humans have a hard time remembering those kinds of addresses. To make things easier, we can change the IP address to a human readable name called a domain name. For example, google.com is the domain name used over the IP address 173.194.121.32. So using a domain name is the easiest way for us to reach computers via the Internet.</p>
                        </div>
                    </div>
                    <NextPrevBtnTutorial
                        back="/internet"
                        next="/what-is-http"
                    />
                    <div className="mt-32">
                        <p className="font-semibold text-2xl my-10 text">Discussion Section</p>
                        <span className="flex gap-2 my-2">Discussion as <p id="name" className="color-blue-1"></p></span>
                        <textarea placeholder="add your discussion here(255 char)" className="textarea resize-none cursor-text" onChange={(event) => {
                            setComment(event.target.value)
                        }} ></textarea>
                        <p className="text-sm color-red-1 text-center mt-8 font-medium">{errorMessage}</p>
                        <div className="flex justify-end items-center gap-10 my-5">
                            <p className="bg-gray-200 px-4 py-1 rounded-lg cursor-pointer">Cancel</p>
                            <p onClick={commentInternet} className="bg-blue-1 text-white px-4 py-1 rounded-lg cursor-pointer">Discussion</p>

                        </div>
                        {
                            commentlist.map(
                                (val) => {
                                    return <h1>Comment: {val.comment} | Date : {val.createAt}</h1>
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


export default InternetWork
