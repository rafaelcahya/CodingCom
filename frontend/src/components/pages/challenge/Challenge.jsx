import React, { Component } from 'react'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'

import challenge1 from "../../../asset/photo/challenge/mandiri/mandiri1.png"
import ChallengeComp from './ChallengeComp'

export class Challenge extends Component {
    render() {
        return (
            <>
                <NavbarLogin/>
                <NavbarMobile/>
                <div className="flex flex-col gap-20 mx-8 sm:mx-24 md:mx-40 lg:mx-52 mt-20">
                    <div>
                        <p className="text-3xl font-semibold text-center">For Certificate</p>
                        <div className="flex justify-center gap-10 my-10">
                            <p>HTML & CSS</p>
                            <p>Javascript</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-10 my-10">
                            <ChallengeComp
                                image={challenge1}
                                title="Simple Login Page"
                                diff="Easy"
                                desc="This HTML and CSS challenge is perfect for those of you who want to learn about display and postition. The responsive layout shifts will also be a great test!"
                            />
                            <ChallengeComp
                                image={challenge1}
                                title="Simple Login Page"
                                diff="Easy"
                                desc="This HTML and CSS challenge is perfect for those of you who want to learn about display and postition. The responsive layout shifts will also be a great test!"
                            />
                        </div>
                    </div>
                    <div>
                        <p className="text-3xl font-semibold text-center">Challenge</p>
                        <div className="flex justify-center gap-10 my-10">
                            <p>HTML & CSS</p>
                            <p>Javascript</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-10 my-10">
                            <ChallengeComp
                                image={challenge1}
                                title="Simple Login Page"
                                diff="Easy"
                                desc="This HTML and CSS challenge is perfect for those of you who want to learn about display and postition. The responsive layout shifts will also be a great test!"
                            />
                            <ChallengeComp
                                image={challenge1}
                                title="Simple Login Page"
                                diff="Easy"
                                desc="This HTML and CSS challenge is perfect for those of you who want to learn about display and postition. The responsive layout shifts will also be a great test!"
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Challenge
