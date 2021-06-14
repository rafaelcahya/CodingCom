import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../major/Footer'

export default function AddProfile() {
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="profile-form pt-5 w-4/5 md:w-1/2">
                    <div className="-ml-2 mt-5 mb-10 py-5 border-b">
                        <Link to="/" className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            <p>Back</p>
                        </Link>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold">Your profile</p>
                        <p className="font-medium text-sm">This is your profile. Fill your profile wisely, it will affect others.</p>
                    </div>
                    <div className="flex flex-col items-center gap-10">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Image Profile</p>
                            <input className="w-full"
                                type="file"
                                accept=".svg,.png,.jpg,.jpeg,.psd,.tiff,.bmp,.hdr,.webp"
                                name="fileUpload"/>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-5 w-full">
                            <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                <p className="text-sm font-semibold">Fullname</p>
                                <input type="text" placeholder="Fullname"/>
                            </div>
                            <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                <p className="text-sm font-semibold">Username</p>
                                <input type="text" placeholder="Username"/>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-5 w-full">
                            <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                <p className="text-sm font-semibold">Gender</p>
                                <select name="" id="">
                                    <option value="Gender">Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                <p className="text-sm font-semibold">Birth date</p>
                                <input type="date"/>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-5 w-full">
                            <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                <p className="text-sm font-semibold">Phone number</p>
                                <input type="number" placeholder="Phone number" />
                            </div>
                            <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                <p className="text-sm font-semibold">Confirm phone number</p>
                                <input type="number" placeholder="Confirm phone number"/>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-5 w-full">
                            <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                <p className="text-sm font-semibold">Emergency number)</p>
                                <input type="number" placeholder="Phone number"/>
                            </div>
                            <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                <p className="text-sm font-semibold">Confirm emergency</p>
                                <input type="number" placeholder="Confirm phone number"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <p className="text-sm font-semibold">Home address</p>
                            <textarea placeholder="Home address" className="resize-none"/>
                        </div>
                        <div className="w-full flex justify-between gap-10">
                            <div className="w-1/2 flex flex-col gap-2">
                                <p className="text-sm font-semibold">City</p>
                                <input type="text" placeholder="City" />
                            </div>
                            <div className="w-1/2 flex flex-col gap-2">
                                <p className="text-sm font-semibold">Postal Code</p>
                                <input type="number" placeholder="Postal Code"/>
                            </div>
                        </div>
                    </div>
                    <div className="py-10">
                        <p className="bg-blue-1 hover:bg-blue-400 text-white text-sm text-center rounded-md px-8 py-2 cursor-pointer outline-none">Save</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
