import React, { useEffect, useState } from 'react'
import Footer from '../../../../major/Footer'
import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'
import NextPrevBtnTutorial from '../NextPrevBtnTutorial'
import SidebarInternet from '../SidebarInternet'
import SidebarInternetMobile from '../SidebarInternetMobile'
import Axios from 'axios'

function Whatishttp() {
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
        Axios.get("http://localhost:3001/comment/commentListWhatishttp").then((response) => {
            setCommentList(response.data)
        })
    }, []);

    const commentInternet = () => {
        Axios.post("http://localhost:3001/comment/commentWhatishttp", { name: name, comment: comment, createAt: createAt }).then((response) => {
            setErrorMessage(response.data.message)
         })
    }
    return (
        <>
            <NavbarLogin />
            <NavbarMobile />
            <div className="internet-header w-full py-40 text-white">
                <div className="flex flex-col items-center text-center gap-2">
                    <h1 className="text-4xl font-semibold">Internet</h1>
                    <p className="font-medium">What is HTTP & HTTPS</p>
                    <p className="text-sm">15 min</p>
                </div>
            </div>
            <div className="flex gap-10 mt-20 mx-10 md:mx-20 lg:mx-32 leading-7">
                <SidebarInternet />
                <SidebarInternetMobile />
                <div className="flex flex-col gap-10 w-full lg:w-3/5 py-5">
                    <div>
                        <p className="text-xl font-semibold">What is HTTP?</p>
                        <div className="flex flex-col gap-5 my-5">
                            <p>HTTP(Hypertext Transfer Protocol) is a network application protocol for communication between the server and the client. communication between the server and the client aims to display information on the website. However, if the website uses the http network protocol, the information obtained from the browser to the server is not encrypted, so it is very dangerous if it is misused by users. Moreover, the website contains payment transactions that require information security.</p>
                            <p>To overcome this, you can use a more secure version, namely HTTPS, where S represents the word secure, which means safe.</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-xl font-semibold">What is HTTPS?</p>
                        <div className="flex flex-col gap-5 my-5">
                            <p>HTTPS (Hypertext Transfer Protocol Secure) is the result of the development of the previous HTTP version, HTTPS has a tighter security function so that it makes clients feel safe in accessing various web content. The https protocol was developed directly by the IT-based company Netscape Communication Corp.</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-xl font-semibold">Difference between HTTP and HTTPS</p>
                        <div className="flex flex-col gap-5 my-5">
                            <p>Benefits for clients and explorers of cyberspace are slightly different from HTTP with HTTPS. The difference is only through the development of security in the network protocol system. Here are the differences between the two protocols:</p>
                        </div>
                        <div>
                            <ol className="flex flex-col gap-5 list-decimal mx-10">
                                <div>
                                    <li>Data Security</li>
                                    <p>The HTTP protocol does not guarantee security between the client and the server, so there are many crime issues in the form of data hackers. Meanwhile, HTTPS has a collaborative protocol in the form of security for transmitted data. This facility makes HTTPS widely used by web developers.</p>
                                </div>
                                <div>
                                    <li>SSL (Secure Socket Layers)</li>
                                    <p>If a website wants to use the HTTPS protocol, it requires a certificate in the form of SSL (Secure Socket Layers). Using this will display a padlock on the URL address bar of the website. So that visitors will trust the website is safe to use for providing sensitive information or transactions. SSL is very useful for keeping important information secret such as e-banking passwords, e-money, identity and so on.</p>
                                </div>
                                <div>
                                    <li>Port</li>
                                    <p>The HTTP port used is port type 80. This type of port is useful for general web server connectivity with clients. Meanwhile, to be able to access HTTPS via SSL, port 443 is needed as a network connectivity.</p>
                                </div>
                            </ol>
                        </div>
                    </div>
                    <NextPrevBtnTutorial
                        back="/how-does-internet-work"
                        next="/browser"
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


export default Whatishttp
