import React, { Component } from 'react'

export class FeatureComp extends Component {
    render() {
        return (
            <>
                <div className="flex justify-center items-center gap-28 mx-8 md:mx-16 lg:mx-64">
                    <div className="flex flex-col gap-3">
                        <p className="font-semibold text-lg">{this.props.title}</p>
                        <p className="">{this.props.desc}</p>
                    </div>
                    <img src={this.props.image} alt="" width={400} className="hidden md:block h-64 rounded-xl"/>
                </div>
            </>
        )
    }
}

export default FeatureComp
