import React, { Component } from 'react'
import Footer from '../../../major/Footer'
import NavbarLogin from '../../../major/NavbarLogin'
import NavbarMobile from '../../../major/NavbarMobile'

export class Submit extends Component {
    render() {
        return (
            <>
                <NavbarLogin/>
                <NavbarMobile/>
                <div className="mx-8 sm:mx-24 md:mx-40 lg:mx-72 mt-20">
                    <p className="font-semibold text-2xl text-center my-5">Submit Solution</p>
                    <div className="submit-box flex flex-col gap-10">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Solution title</p>
                            <input type="text"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Repository URL</p>
                            <input type="text"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-1 text-sm font-semibold">
                                <p>Live site URL</p>
                                <p className="text-xs color-black-2 font-medium">(Optional)</p>
                            </div>
                            <p className="text-xs color-black-2 font-medium underline cursor-pointer">Recommended</p>
                            <input type="text"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Description</p>
                            <p className="text-xs color-black-2 font-medium">You can enter any information such as tools, how to open github, feedback and anything</p>
                            <textarea name="" id="" cols="30" rows="10" className="resize-none"></textarea>
                        </div>
                        <p className="text-white bg-blue-1 w-max my-5 px-4 py-2 rounded-lg">Submit solution</p>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Submit
