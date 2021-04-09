import React, { useState } from "react";
import {motion} from "framer-motion"
import { Link } from "react-router-dom";

export default function NavbarMobile() {
    const [open, setOpen] = useState(false)
    const menuVariants = {
        opened: {
            top: "10vh",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        },
        closed: {
            top: "-200vh"
        }
    }
    return (
        <>
            <nav className=""> 
                <div className="navbar fixed top-0 w-full flex lg:hidden justify-between items-center px-8 md:px-16 py-4 z-20 border-b-2 bg-white">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="40" height="40" viewBox="0 0 44 59"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0,59) scale(0.1,-0.1)"
                        fill="currentColor" stroke="0">
                        <path d="M270 548 c-136 -52 -250 -236 -250 -403 0 -85 7 -101 51 -125 46 -24
                        80 -25 117 -6 44 23 192 181 192 205 0 11 -5 21 -11 21 -6 0 -49 -36 -96 -80
                        -90 -85 -135 -115 -160 -106 -13 5 -15 21 -11 84 5 94 44 175 125 262 60 66
                        153 122 153 94 0 -10 -6 -25 -14 -33 -13 -14 -12 -18 10 -28 22 -10 26 -8 41
                        13 25 39 24 70 -4 99 -32 31 -68 32 -143 3z m-184 -324 c-20 -56 -25 -63 -25
                        -38 -1 49 31 126 46 110 2 -1 -8 -34 -21 -72z"/>
                        </g>
                    </svg>
                    <div className="flex items-center gap-2">
                        <p className="text-xs">Menu</p>
                        <motion.svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu" onClick={() => setOpen(state => !state)} initial={false} animate={open ? "opened" : "closed"}><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></motion.svg>
                    </div>
                </div>
                <motion.div 
                initial= {false}
                variants={menuVariants}
                animate={open ? "opened" : "closed"}
                className="navbar-mobile fixed lg:hidden top-0 w-full flex flex-col gap-4 px-16 py-5 bg-white z-10">
                    <Link to="/">
                        <p>Home</p>
                    </Link>
                    <Link to="/roadmap">
                        <p>Roadmap</p>
                    </Link>
                    <Link to="/tutorial">
                        <p>Tutorial</p>
                    </Link>
                    <p>Deployment</p>
                    <p>Challenge</p>
                    <p>Class session</p>
                    <p>News</p>
                    <p>Career</p>
                    <p>Help</p>
                </motion.div>
            </nav>
        </>
    )
}
