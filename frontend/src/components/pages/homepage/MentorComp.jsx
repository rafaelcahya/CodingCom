import React, { Component, Fragment } from 'react'
import AOS from "aos"
import "../../../../node_modules/aos/dist/aos.css"

AOS.init();

export class MentorComp extends Component {
    render() {
        return (
            <Fragment>
                <div data-aos="fade-up"
                    data-aos-offset="150"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out" className="flex flex-col items-center">
                    <img src={this.props.img} alt="" width={85}/>
                    <div className="flex flex-col items-center mt-1">
                        <p>{this.props.name}</p>
                        <p className="color-blue-1 text-sm">{this.props.subject}</p>
                        <p className="text-sm mt-3 w-56">{this.props.exp}</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default MentorComp
