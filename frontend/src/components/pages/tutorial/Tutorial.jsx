
//                                     <TutorialPaidComp 
//                                         title= "DevOps"
//                                         subtitle="Development and Operations"
//                                         desc="DevOps is a set of practices that combines software development and IT operations. It aims to shorten the systems development life cycle and provide continuous delivery with high software quality. DevOps is complementary with Agile software development; several DevOps aspects came from the Agile methodology."
//                                         desc2="In this course, you will learn a complete explanation of DevOps, operating system concepts, networking, security and protocol, web servers and infrastructure such as docker, ansible, kubernetes, terraform, and prometheus. besides that, you will learn about cloud servers such as AWS, google cloud, Heroku, and Amazon Cloud."

import React, { useState } from 'react'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import Footer from '../../major/Footer'
import items from './Data'
import { Link, NavLink } from 'react-router-dom'

const allCategories = ['All', ...new Set(items.map(item => item.category))];
console.log(allCategories);
export default function Tutorial() {
    const [menuItem, setMenuItem] = useState(items);
    const [buttons, setButtons] = useState(allCategories);

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
                        return <button onClick={()=> filter(cat)} className="category-btn">{cat}</button>
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
                        <div className={item.color} id="tutorial-box" key={item.id}>
                            <div className="flex flex-col gap-3">
                                <p className="text-xs tracking-wider uppercase font-medium text-white">Design</p>
                                <div>
                                    <p className="text-xl text-white font-semibold mb-2">{item.title}</p>
                                    <p className="text-sm text-white tracking-wide w-64">{item.total}</p>
                                </div>
                            </div>
                            <p className="text-white text-sm font-semibold tracking-wider">{item.time}</p>
                        </div>
                    </Link>
                })
            }
        </div>
    )
}