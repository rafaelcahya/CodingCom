import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../../../major/Footer'
import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'

export default function Roadmap() {
    return (
        <>
            <NavbarLogin/>
            <NavbarMobile/>
            <div className="flex flex-col gap-5 items-center mx-10 sm:mx-20 mt-28 lg:mt-20">
                <p className="text-4xl font-bold">Web Developer Roadmap</p>
                <p className="text-gray-500 font-medium">Step by step guides and paths to learn different tools or technologies</p>
            </div>
            <div className="roadmap-box flex flex-wrap justify-center gap-10 py-20">
                <Link to="/roadmap-frontend">
                    <div className="p-5 shadow rounded-lg hover:shadow-xl transform hover:scale-110 duration-200">
                        <p className="text-lg font-semibold">Frontend</p>
                        <p className="text-sm">Step by step to learn Frontend</p>
                    </div>
                </Link>
                <Link to="/roadmap-backend">
                    <div className="p-5 shadow rounded-lg hover:shadow-xl transform hover:scale-110 duration-200">
                        <p className="text-lg font-semibold">Backend</p>
                        <p className="text-sm">Step by step to learn Backend</p>
                    </div>
                </Link>
                <Link to="/roadmap-react">
                    <div className="p-5 shadow rounded-lg hover:shadow-xl transform hover:scale-110 duration-200">
                        <p className="text-lg font-semibold">React</p>
                        <p className="text-sm">Step by step to learn React</p>
                    </div>
                </Link>
                <Link to="/roadmap-devops">
                    <div className="p-5 shadow rounded-lg hover:shadow-xl transform hover:scale-110 duration-200">
                        <p className="text-lg font-semibold">DevOps</p>
                        <p className="text-sm">Step by step to learn DevOps</p>
                    </div>
                </Link>
            </div>
            <Footer/>
        </>
    )
}
