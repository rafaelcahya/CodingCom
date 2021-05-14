import React, { useEffect, useState } from 'react'
import Footer from '../../../../major/Footer'
import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'
import NextPrevBtnTutorial from '../NextPrevBtnTutorial'
import SidebarInternet from '../SidebarInternet'
import SidebarInternetMobile from '../SidebarInternetMobile'
import Axios from 'axios'
import { Link } from 'react-router-dom'

function Domain() {
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
        Axios.get("http://localhost:3001/comment/commentListDomain").then((response)=>{
            setCommentList(response.data)
        })
    },[]);

    const commentInternet = () => {
        Axios.post("http://localhost:3001/comment/commentDomain", {name: name, comment: comment, createAt:createAt}).then((response) => {
            setErrorMessage(response.data.message)
            window.location.reload()
        })
    }
    return (
        <>
            <NavbarLogin />
            <NavbarMobile />
            <div className="flex gap-10 mt-32 lg:mt-16 mx-10 md:mx-20 lg:mx-32 leading-7">
                <div className="hidden lg:block lg:w-1/5">
                    <SidebarInternet />
                </div>
                <SidebarInternetMobile />
                <div className="w-full lg:w-7/12 pl-0 lg:pl-10 pr-0 pt-5 border-0 lg:border-l border-gray-300">
                    <div className="block sm:flex justify-between border-b border-gray-300 pb-10">
                        <div>
                            <p className="text-2xl lg:text-5xl font-semibold">Domain</p>
                            <p className="text-gray-400 text-sm mt-2">This page discusses what a domain is, how it works and its types.</p>
                        </div>
                        <p className="text-gray-400 text-sm mt-5 sm:mt-0">5 min</p>
                    </div>
                    <div className="flex flex-col gap-10 pt-10 pb-20">
                        <div className="flex flex-col gap-5">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/njf9qrSv3N4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <p className="text-xl font-semibold">What is Domain?</p>
                            <p>A domain name is the name that visitors type to open and access your website. This name directs the web browser to the server that stores website resources. Without a domain name, people would have to type in the server IP address to access your site, which would be quite a hassle.</p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold">How Domain works?</p>
                            <div className="flex flex-col gap-5 my-5">
                                <p>For example, Hostinger.com is a domain name. Let's just say our IP address is 100.90.80.70. This IP address points to a server, but cannot be used to access our website if a visitor tries to open it. Because, in order for the IP address to be used to access the website, the remote server must use port 80 with the default page (index.html) stored in the web application directory.</p>
                            </div>
                            <div className="border-left-orange-1 bg-orange-2 text-black px-4 py-4">
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
                            <div className="border-left-orange-1 bg-orange-2 text-black px-4 py-4">
                                <p>An example of a second level domain is .co.uk, which is used by several company websites in the UK. Or, .gov.uk, which is used by British government institutions, and .ac.uk, which is used by academic institutions and universities in the kingdom.</p>
                            </div>
                        </div>
                    </div>
                    <NextPrevBtnTutorial
                        back="/DNS"
                        next="/hosting"
                    />
                    <div className="mt-32">
                        <p className="font-semibold text-2xl my-5">Discussion</p>
                        <span className="flex gap-2 my-2">Discussion as <p id="name" className="color-blue-1"></p></span>
                        <form className="mb-16 pb-10 border-b-2 border-gray-300">
                            <textarea placeholder="add your discussion here(255 char)" className="textarea resize-none cursor-text" onChange={(event) => {
                                setComment(event.target.value)
                            }} ></textarea>
                            <p className="text-sm color-red-1 text-center mt-8 font-medium">{errorMessage}</p>
                            <div className="flex justify-end items-center gap-10 my-5 mb-20">
                                <input type="reset" defaultValue="Reset" className="bg-gray-200 text-black px-4 py-1 rounded-lg cursor-pointer" />  
                                <p onClick={commentInternet} id="submitComment" className="bg-blue-1 text-white px-4 py-1 rounded-lg cursor-pointer">Post discussion</p>
                            </div>
                        </form>
                        {
                            commentlist.map(
                                (val)=> {
                                    return <div className="comment-box p-4 my-5 rounded-xl">
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
                <div className="hidden lg:block sticky self-start top-6 p-6 mt-6 bg-white rounded-lg shadow" style={{width: "18%"}}>
                    <p className="text-lg font-semibold">Consultation class</p>
                    <p className="text-sm pt-2">Consult with a professional mentor.</p>
                    <Link to="/consultation-class">
                        <p className="bg-blue-1 text-white text-sm px-6 py-2 mt-4 w-max rounded-lg">Consult</p>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Domain
