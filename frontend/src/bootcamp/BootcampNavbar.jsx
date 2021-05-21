import React, { useState } from 'react'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'

function BootcampNavbar() {
    window.onload = setTimeout( function () {
        var x = localStorage.getItem("name");
        document.getElementById("demo").innerHTML = x;
    }, 10)
    const [open, setOpen] = useState(false)
    const menuVariants = {
        opened: {
            top: "8vh",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        },
        closed: {
            top: "-200vh"
        }
    }
    return (
        <>
            <nav className="bootcamp-navbar hidden fixed w-full bg-white lg:flex justify-between items-center px-16 xl:px-32 py-5">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="30" height="45" viewBox="0 0 44 59"
                preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0,59) scale(0.1,-0.1)"
                fill="currentColor" stroke="none">
                <path d="M270 548 c-136 -52 -250 -236 -250 -403 0 -85 7 -101 51 -125 46 -24
                80 -25 117 -6 44 23 192 181 192 205 0 11 -5 21 -11 21 -6 0 -49 -36 -96 -80
                -90 -85 -135 -115 -160 -106 -13 5 -15 21 -11 84 5 94 44 175 125 262 60 66
                153 122 153 94 0 -10 -6 -25 -14 -33 -13 -14 -12 -18 10 -28 22 -10 26 -8 41
                13 25 39 24 70 -4 99 -32 31 -68 32 -143 3z m-184 -324 c-20 -56 -25 -63 -25
                -38 -1 49 31 126 46 110 2 -1 -8 -34 -21 -72z"/>
                </g>
                </svg>
                <div className="flex gap-14">
                    <Link to="/schedule">
                        <p className="hover:text-yellow-500">Schedule</p>
                    </Link>
                    <a href="#about" className="hover:text-yellow-500">About</a>
                    <a href="#benefit" className="hover:text-yellow-500">Benefit</a>
                    <a href="#syllabus" className="hover:text-yellow-500">Syllabus</a>
                    <a href="#program" className="hover:text-yellow-500">Program</a>
                    <a href="#pricing" className="hover:text-yellow-500">Pricing</a>
                    <a href="#faq" className="hover:text-yellow-500">FAQ</a>
                    <div className="flex items-center gap-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(90)" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        <p id="demo"></p>
                    </div>
                </div>
            </nav>
            <nav className="bootcamp-navbar fixed bg-white w-full flex lg:hidden justify-between items-center px-10 py-3 z-10">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="30" height="45" viewBox="0 0 44 59"
                preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0,59) scale(0.1,-0.1)"
                fill="currentColor" stroke="none">
                <path d="M270 548 c-136 -52 -250 -236 -250 -403 0 -85 7 -101 51 -125 46 -24
                80 -25 117 -6 44 23 192 181 192 205 0 11 -5 21 -11 21 -6 0 -49 -36 -96 -80
                -90 -85 -135 -115 -160 -106 -13 5 -15 21 -11 84 5 94 44 175 125 262 60 66
                153 122 153 94 0 -10 -6 -25 -14 -33 -13 -14 -12 -18 10 -28 22 -10 26 -8 41
                13 25 39 24 70 -4 99 -32 31 -68 32 -143 3z m-184 -324 c-20 -56 -25 -63 -25
                -38 -1 49 31 126 46 110 2 -1 -8 -34 -21 -72z"/>
                </g>
                </svg>
                <motion.svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu" onClick={() => setOpen(state => !state)} initial={false} animate={open ? "opened" : "closed"}><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></motion.svg>
            </nav>
            <motion.div
            initial= {false}
            variants={menuVariants}
            animate={open ? "opened" : "closed"} className="bootcamp-navbar fixed top-0 left-0 w-full lg:hidden flex flex-col">
                <a className="px-10 py-4 hover:bg-yellow-500 hover:text-white" href="#benefit">Benefit</a>
                <a className="px-10 py-4 hover:bg-yellow-500 hover:text-white" href="#syllabus">Syllabus</a>
                <a className="px-10 py-4 hover:bg-yellow-500 hover:text-white" href="#program">Program</a>
                <a className="px-10 py-4 hover:bg-yellow-500 hover:text-white" href="#pricing">Pricing</a>
                <a className="px-10 py-4 hover:bg-yellow-500 hover:text-white" href="#faq">FAQ</a>
            </motion.div>
        </>
    )
}

export default BootcampNavbar
