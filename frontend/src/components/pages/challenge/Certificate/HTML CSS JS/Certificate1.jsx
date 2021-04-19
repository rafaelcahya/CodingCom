import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavbarLogin from '../../../../major/NavbarLogin'
import NavbarMobile from '../../../../major/NavbarMobile'

export class Certificate1 extends Component {
    render() {
        return (
            <>
                <NavbarLogin/>
                <NavbarMobile/>
                <div className="mx-8 sm:mx-24 md:mx-40 lg:mx-52 mt-20">
                    <p className="text-3xl font-semibold text-center">Challenge</p>
                    <p className="text-center my-2"></p>
                    
                </div>
            </>
        )
    }
}

export default Certificate1