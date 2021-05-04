import React from 'react'
import { Link } from 'react-router-dom'

function RegisterBootcamp() {
    return (
        <>
            <nav className="flex justify-between items-center px-16 xl:px-32 py-5 border-b-2 border-yellow-400">
                <Link to="/bootcamp">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        <p>Back</p>
                    </div>
                </Link>
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
            </nav>
            <section className="py-20 md:py-28">
                <p className="text-2xl font-semibold text-center">Registration Form</p>
                <div className="flex flex-col items-center">
                    <form className="reg-bootcamp-box w-3/4 md:w-1/2 lg:w-2/5 py-10 flex flex-col gap-10">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Fullname</p>
                            <input type="text" placeholder="Fullname"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Email</p>
                            <input type="text" placeholder="Email"/>
                        </div>
                        <div className="w-full flex justify-between gap-10">
                            <div className="w-1/2 flex flex-col gap-2">
                                <p className="text-sm font-semibold">Gender</p>
                                <select name="" id="">
                                    <option value="Gender">Choose gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="w-1/2 flex flex-col gap-2">
                                <p className="text-sm font-semibold">Birth date</p>
                                <input type="date"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Home address</p>
                            <textarea placeholder="Home address"/>
                        </div>
                        <div className="w-full flex justify-between gap-10">
                            <div className="w-1/2 flex flex-col gap-2">
                                <p className="text-sm font-semibold">City</p>
                                <input type="text" placeholder="City"/>
                            </div>
                            <div className="w-1/2 flex flex-col gap-2">
                                <p className="text-sm font-semibold">Postal Code</p>
                                <input type="text" placeholder="Postal Code"/>
                            </div>
                        </div>
                        <div className="w-full flex justify-between gap-10">
                            <div className="w-1/2 flex flex-col gap-2">
                                <p className="text-sm font-semibold">Phone number</p>
                                <input type="text" placeholder="Phone number"/>
                            </div>
                            <div className="w-1/2 flex flex-col gap-2">
                                <p className="text-sm font-semibold">Confirm phone number</p>
                                <input type="text" placeholder="Confirm phone number"/>
                            </div>
                        </div>
                        <div className="w-full flex justify-between gap-10">
                            <div className="w-1/2 flex flex-col gap-2">
                                <p className="text-sm font-semibold">Emergency phone number</p>
                                <input type="text" placeholder="Emergency phone number"/>
                            </div>
                            <div className="w-1/2 flex flex-col gap-2">
                                <p className="text-sm font-semibold">Confirm emergency phone number</p>
                                <input type="text" placeholder="Confirm emergency phone number"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Last education</p>
                            <select name="" id="">
                                <option value="Gender">Choose education level</option>
                                <option value="Male">Elementary school</option>
                                <option value="Junior">Junior high school</option>
                                <option value="Senior">Senior high school</option>
                                <option value="Associate">Associate Degrees</option>
                                <option value="Bachelor’s">Bachelor’s Degrees</option>
                                <option value="Master’s">Master’s Degrees</option>
                                <option value="Doctoral">Doctoral Degrees</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">How did you know this program?</p>
                            <select name="" id="">
                                <option>Select source</option>
                                <option value="Facebook">Facebook</option>
                                <option value="Google">Google</option>
                                <option value="Twitter">Twitter</option>
                                <option value="LinkedIn">LinkedIn</option>
                                <option value="Email">Email</option>
                                <option value="Wesbite">Wesbite</option>
                                <option value="Friends">Friends</option>
                                <option value="Family">Family</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Select the Batch You Want to Join</p>
                            <select name="" id="">
                                <option>Choose program</option>
                                <option value="Facebook">Batch 1 : 30 August 2021 - 12 November 2021</option>
                                <option value="Facebook">Batch 2 : 29 November 2021 - 25 February 2022</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Motivation for joining Fulltime Coding Bootcamp</p>
                            <textarea placeholder="Write your motivation to join Fulltime Coding Bootcamp"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Are you currently busy?</p>
                            <select name="" id="">
                                <option>Select one</option>
                                <option value="Student">Student</option>
                                <option value="Work">Work</option>
                                <option value="Graduate">Fresh graduate</option>
                            </select>
                        </div>
                        <p className="color-red-1 text-center font-medium">errorMessage</p>
                        <p className="text-white bg-blue-1 text-center px-4 py-2 rounded-lg cursor-pointer">Submit</p>
                    </form>
                </div>
            </section>
            
            <footer className="bg-black text-white flex flex-col items-center mt-10 py-20 md:py-28">
                <div>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="30" height="45" viewBox="0 0 44 59"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0,59) scale(0.1,-0.1)"
                        fill="white" stroke="none">
                        <path d="M270 548 c-136 -52 -250 -236 -250 -403 0 -85 7 -101 51 -125 46 -24
                        80 -25 117 -6 44 23 192 181 192 205 0 11 -5 21 -11 21 -6 0 -49 -36 -96 -80
                        -90 -85 -135 -115 -160 -106 -13 5 -15 21 -11 84 5 94 44 175 125 262 60 66
                        153 122 153 94 0 -10 -6 -25 -14 -33 -13 -14 -12 -18 10 -28 22 -10 26 -8 41
                        13 25 39 24 70 -4 99 -32 31 -68 32 -143 3z m-184 -324 c-20 -56 -25 -63 -25
                        -38 -1 49 31 126 46 110 2 -1 -8 -34 -21 -72z"/>
                        </g>
                    </svg>
                </div>
                <div className="flex flex-col lg:flex-row gap-32 text-sm text-center lg:text-left mt-10">
                    <div className="flex flex-col gap-3">
                        <p className="font-semibold my-2">Navigation</p>
                        <p>Benefit</p>
                        <p>Program</p>
                        <p>Pricing</p>
                        <p>FAQ</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="font-semibold my-2">Location</p>
                        <p>Jakarta, Indonesia</p>
                        <p>codingcom@code.com</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="font-semibold my-2">Social Media</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                    </div>
                </div>
                <p className="text-xs text-white mt-10">Copyright 2021 all right reserved</p>
            </footer>
        </>
    )
}

export default RegisterBootcamp
