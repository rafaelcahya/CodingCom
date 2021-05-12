import React from 'react'
import react from "../../../../../../asset/photo/Roadmap/react.png"
import Footer from '../../../../../major/Footer'
import NavbarLogin from '../../../../../major/NavbarLogin'
import NavbarMobile from '../../../../../major/NavbarMobile'

export default function RoadmapReact() {
    return (
        <>
            <NavbarLogin/>
            <NavbarMobile/>
            <div className="bg-blue-1 text-white w-full py-32">
                <div className="flex flex-col items-center text-center gap-2">
                    <h1 className="text-4xl font-semibold">React Developer Roadmap</h1>
                    <p className="text-sm">Supported by</p>
                    <div className="flex items-center gap-10">
                        <a href="https://roadmap.sh/" className="text-sm hover:underline">Roadmap.sh</a>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            <a href="https://github.com/kamranahmedse/developer-roadmap" className="text-sm hover:underline">kamranahmedse</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-youtube"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                            <a href="youtube.com/channel/UCA0H2KIWgWTwpTFjSxp0now" className="text-sm hover:underline">the roadmap</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-8 sm:mx-24 mt-32 lg:mt-20 flex justify-center">
                <img src={react} alt="Roadmap react" width={800}/>
            </div>
            <section className="discord flex flex-col items-center gap-10 text-center text-white mx-10 lg:mx-20 px-10 lg:px-20 py-20 mt-32 lg:mt-48 rounded-xl" >
                <img src="https://cdn.discordapp.com/attachments/414258067870449665/445736475158380544/discord.gif" alt="discord" width={100}/>
                <div className="flex flex-col gap-5">
                    <p className="text-xl font-semibold">Join us in our community.</p>
                    <p>We talk about challenge and project, help each other with code, chat about all things web development.</p>
                </div>
                <a href="https://discord.gg/rvdAvXYt" className="font-medium px-8 py-3 rounded-xl" style={{backgroundColor: "#2c2f33"}}>Join us</a>
            </section>
            <Footer/>
        </>
    )
}
