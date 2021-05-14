import React, { Component } from 'react'
import AOS from "aos"
import "../../../../node_modules/aos/dist/aos.css"

AOS.init();
export class FeatureComp extends Component {
    render() {
        return (
            <>
                <div className="flex justify-center items-center gap-28 mx-10 lg:mx-32">
                    <div className="flex flex-col gap-3">
                        <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="0" className="font-bold text-lg sm:text-xl">{this.props.title}</p>
                        <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-delay="150" className="text-gray-500 text-base sm:text-lg font-medium">{this.props.desc}</p>
                    </div>
                    <img data-aos="zoom-in" data-aos-easing="ease-in-out" src={this.props.image} alt="" width={400} className="hidden lg:block h-64 rounded-xl"/>
                </div>
            </>
        )
    }
}

export default FeatureComp
