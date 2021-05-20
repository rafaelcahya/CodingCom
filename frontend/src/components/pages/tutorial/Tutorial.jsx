
//                                     <TutorialPaidComp 
//                                         title= "DevOps"
//                                         subtitle="Development and Operations"
//                                         desc="DevOps is a set of practices that combines software development and IT operations. It aims to shorten the systems development life cycle and provide continuous delivery with high software quality. DevOps is complementary with Agile software development; several DevOps aspects came from the Agile methodology."
//                                         desc2="In this course, you will learn a complete explanation of DevOps, operating system concepts, networking, security and protocol, web servers and infrastructure such as docker, ansible, kubernetes, terraform, and prometheus. besides that, you will learn about cloud servers such as AWS, google cloud, Heroku, and Amazon Cloud."

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AOS from "aos"
import "../../../../node_modules/aos/dist/aos.css"

import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import Footer from '../../major/Footer'
import items from './Data'

const allCategories = ['All', ...new Set(items.map(item => item.category))];

export default function Tutorial() {
    AOS.init();
    const [menuItem, setMenuItem] = useState(items);
    const [buttons] = useState(allCategories);

  //Filter Function
    const filter = (button) =>{

    if(button === 'All'){
        setMenuItem(items);
        return;
    }

    const filteredData = items.filter(item => item.category ===  button);
    setMenuItem(filteredData)
}


  return (
    <>
        <NavbarLogin/>
        <NavbarMobile/>
        <div className="mx-8 sm:mx-24 mt-32 lg:mt-20">
            <div className="flex flex-col items-center gap-3">
                <p className="text-4xl font-bold">Tutorials</p>
                <p className="text-gray-500 font-medium">Learn web development tutorials anytime and anywhere</p>
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
    return (
        <div className="flex flex-wrap items-center justify-center gap-10">
            {
                menuItem.map((item) =>{
                    return <Link to={item.url}>
                        <div data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="100" id="tutorial-box" className="bg-white" key={item.id}>
                            <div className="flex flex-col gap-2">
                                <img data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="300" data-aos-delay="200" src={item.image} width={40} alt="logo" className="" />
                                <p className="font-semibold">{item.title}</p>
                            </div>
                            <p className="w-10 h-0.5 bg-yellow-500 my-3"></p>
                            <div className="flex flex-col gap-1 text-sm font-medium">
                                <p>{item.category}</p>
                                <p className="text-gray-400 leading-6">{item.desc}</p>
                            </div>
                            <div className="flex justify-between text-sm font-medium mt-6">
                                <p>Rating</p>
                                <p>{item.total}</p>
                                <p>{item.time}</p>
                            </div>
                            <div className="ribbon">
                                <p className="bg-blue-50 text-sm text-center font-semibold text-blue-500 px-10 leading-10">{item.status}</p>
                            </div>
                        </div>
                    </Link>
                })
            }
        </div>
    )
}