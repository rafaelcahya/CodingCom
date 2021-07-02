
//                                     <TutorialPaidComp 
//                                         title= "DevOps"
//                                         subtitle="Development and Operations"
//                                         desc="DevOps is a set of practices that combines software development and IT operations. It aims to shorten the systems development life cycle and provide continuous delivery with high software quality. DevOps is complementary with Agile software development; several DevOps aspects came from the Agile methodology."
//                                         desc2="In this course, you will learn a complete explanation of DevOps, operating system concepts, networking, security and protocol, web servers and infrastructure such as docker, ansible, kubernetes, terraform, and prometheus. besides that, you will learn about cloud servers such as AWS, google cloud, Heroku, and Amazon Cloud."

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AOS from "aos"
import "../../../../node_modules/aos/dist/aos.css"

import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import Footer from '../../major/Footer'
import items from './Data'
import axios from 'axios'

const GenerateID = (len, k) => {
    const s = (k) => {
        var text = ""
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        for (let i = 0; i < k; i++) {
            text += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return text
    }
    var id = s(k);
    for (let n = 0; n < len; n++) {
        id += '-' + s(k)
    }
    return id
}


export default function Tutorial() {
    AOS.init();
    const [value,setValue] = useState([])
    const [count,setCount] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/topik/TopikList").then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    }, []);

    useEffect(() => {
        axios.get("http://localhost:3001/topik/TopikListCourseCount").then((response) => {
            setCount(response.data)
            console.log(response.data)
        })
    }, []);

    const [menuItem, setMenuItem] = useState(value);
    const allCategories = ['All', ...new Set(value.map(item => item.category))];
    const [buttons] = useState(allCategories);


  //Filter Function
    const filter = (button) =>{

    if(button === 'All'){
        setMenuItem(value);
        return;
    }

    const filteredData = value.filter(item => item.category ===  button);
    setMenuItem(filteredData)
}


  return (
    <>
        <NavbarLogin/>
        <NavbarMobile/>
        <div className="mx-8 sm:mx-24 mt-32 lg:mt-20">
            <div className="flex flex-col items-center gap-3">
                <p className="text-4xl font-bold">Tutorials</p>
                <p className="text-lg text-gray-500 font-medium">Learn web development tutorials anytime and anywhere</p>
            </div>
            <Button button={buttons} filter={filter} />
            <Menu menuItem={menuItem}/>
        </div>
        <Footer/>

    </>
  );
}

function Button({button, filter}) {
    return (
        <div className="flex flex-col items-center gap-3 my-20 mx-6">
            <p>Category :</p>
            <div className="flex flex-wrap gap-6">
                {
                    button.map((cat, i)=>{
                        return <button onClick={()=> filter(cat)} className="category-btn text-sm font-medium">{cat}</button>
                    })
                }
            </div>
        </div>
    )
}

function Menu({menuItem}) {
    const [count,setCount] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/topik/TopikListCourseCount").then((response) => {
            setCount(response.data)
            console.log(response.data)
        })
    }, []);
    return (
        <div className="flex flex-wrap items-center justify-center gap-10">
            {
                menuItem.map((item) =>{
                    return <Link to={"/topic-detail/" + item.topikId + "-" + GenerateID(1, 10)}>
                        <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="100" id="tutorial-box" className="bg-white" key={item.topikId}>
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold">{item.topikTitle}</p>
                            </div>
                            <p className="w-10 h-0.5 bg-yellow-500 my-3"></p>
                            <div className="flex flex-col gap-1 text-sm font-medium">
                                <p>{item.category}</p>
                                <div dangerouslySetInnerHTML={{ __html: item.about }} />
                            </div>
                            <div className="flex justify-between text-sm font-medium mt-6">
                                <p>{item.time}</p>
                            </div>
                            <div className="ribbon">
                                <p className="bg-blue-50 text-sm text-center font-semibold text-blue-500 px-10 leading-10">{item.progress}</p>
                            </div>
                        </div>
                    </Link>
                })
            }
        </div>
    )
}