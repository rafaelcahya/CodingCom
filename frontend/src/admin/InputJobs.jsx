import React from 'react'
import Sidebar from './admin-major/Sidebar'

function InputJobs() {
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar/>
                <div className="overflow-hidden ml-80 m-5 p-8 flex flex-col gap-1 bg-white rounded-2xl w-full" >
                    <section>
                        <form className="submit-box flex flex-col gap-10">
                            <div className="flex flex-col gap-3">
                                <p className="font-semibold text-3xl">Give us your feedback</p>
                                <p className="font-medium text-sm">Tell us what you love, tell us what you hate, and tell us what you want to see in the next update.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Fullname</p>
                                <input type="text" placeholder="Input fullname"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Email</p>
                                <input type="text" placeholder="Input email"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">About</p>
                                <select name="" id="">
                                    <option value="">Select a part</option>
                                    <option value="Homepage">Homepage</option>
                                    <option value="Pricing">Pricing</option>
                                    <option value="Tutorial">Tutorial</option>
                                    <option value="Challenges">Challenges</option>
                                    <option value="Consultation">Class Consultation</option>
                                    <option value="Session">Class Session</option>
                                    <option value="News">News</option>
                                    <option value="Career">Career</option>
                                    <option value="Bootcamp">Bootcamp</option>
                                    <option value="Community">Community</option>
                                    <option value="Subscribe">Subscribe</option>
                                    <option value="Theme">Theme</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="flex items-center gap-1 text-sm font-semibold">Description</p>
                                <p className="text-xs color-black-2 font-medium">Describe any suggestions such as design, user experience, system errors, etc.</p>
                                <textarea name="" id="" maxLength="250" cols="30" rows="10" className="resize-none"></textarea>
                            </div>
                            <p className="color-red-1 text-center font-medium">errorMessage</p>
                            <p className="text-white bg-blue-1 text-center px-4 py-2 rounded-lg cursor-pointer">Submit feedback</p>
                        </form>
                    </section>
                </div>
            </div>
        </>
    )
}

export default InputJobs
