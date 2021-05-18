import React from 'react'
import { Link } from 'react-router-dom'

import AOS from "aos"
import "../../../node_modules/aos/dist/aos.css"

import instagram from '../../asset/icon/instagram.svg'
import twitter from '../../asset/icon/twitter.svg'

export default function ComingSoon() {
    AOS.init();
    return (
        <>
            <div className="flex flex-col gap-20 my-10">
                <div className="flex justify-center">
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
                </div>

                <div className="flex flex-col items-center gap-5">
                    <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="0" className="bg-yellow-100 px-6 py-1 color-orange-1 text-sm font-semibold tracking-wider rounded-full">Our website is under construction</p>
                    <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="200" className="text-2xl lg:text-4xl text-center font-semibold mx-10 mb-14 lg:w-7/12">Something big update working by our team. Please wait we are coming soon with a lot of features.</p>
                    <Link to="/">
                        <p data-aos="zoom-up" data-aos-easing="ease-in-out" data-aos-delay="400" className="bg-blue-1 hover:bg-blue-500 text-white text-sm font-medium px-8 py-2 rounded-lg">Back to home</p>
                    </Link>
                </div>

                <div className="flex justify-center gap-10 mt-20">
                    <div className="bg-white p-3 rounded-full shadow hover:shadow-xl transform hover:scale-110 duration-200">
                        <img src={instagram} alt="" width={20}/>
                    </div>
                    <div className="bg-white p-3 rounded-full shadow hover:shadow-xl transform hover:scale-110 duration-200">
                        <img src={twitter} alt="" width={20}/>
                    </div>
                </div>
            </div>
        </>
    )
}
