import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'

import exercise1 from "../../../../../asset/challenge/certficate/Profile Card Component.rar"
import exercise2 from "../../../../../asset/challenge/certficate/Preview Card Component.zip"
import exercise3 from "../../../../../asset/challenge/certficate/4 Card Section.zip"
import exercise4 from "../../../../../asset/challenge/certficate/Testimonials.zip"
import exercise5 from "../../../../../asset/challenge/certficate/Accordion.zip"

export class Certificate1 extends Component {
    render() {
        return (
            <>
                <NavbarLogin/>
                <NavbarMobile/>
                <div className="mx-8 sm:mx-24 md:mx-40 lg:mx-52 mt-20">
                    <p className="text-3xl font-semibold text-center">Exercise</p>
                    <p className="text-center my-2">Here are 10 exercises so you can get HTML, CSS, and Javascript certificates. each exercise has a different difficulty level</p>
                    <div className="certificate-box flex flex-wrap justify-center gap-5 my-10">
                        <div>
                            <Link to={exercise1} target="_blank" download>
                                Exercise 1
                            </Link>
                        </div>
                        <div>
                            <Link to={exercise2} target="_blank" download>
                                Exercise 2
                            </Link>
                        </div>
                        <div>
                            <Link to={exercise3} target="_blank" download>
                                Exercise 3
                            </Link>
                        </div>
                        <div>
                            <Link to={exercise4} target="_blank" download>
                                Exercise 4
                            </Link>
                        </div>
                        <div>
                            <Link to={exercise5} target="_blank" download>
                                Exercise 5
                            </Link>
                        </div>
                        <div>
                            <Link to={exercise5} target="_blank" download>
                                Exercise 6
                            </Link>
                        </div>
                        <div>
                            <Link to={exercise5} target="_blank" download>
                                Exercise 7
                            </Link>
                        </div>
                        <div>
                            <Link to={exercise5} target="_blank" download>
                                Exercise 8
                            </Link>
                        </div>
                        <div>
                            <Link to={exercise5} target="_blank" download>
                                Exercise 9
                            </Link>
                        </div>
                        <div>
                            <Link to={exercise5} target="_blank" download>
                                Exercise 10
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Certificate1
