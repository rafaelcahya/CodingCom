import React, { Component } from 'react'

export class TutorialComp extends Component {
    render() {
        return (
            <>
                <div className="tutorial-box flex flex-col rounded-xl shadow transform hover:scale-105 hover:shadow-lg transition duration-200">
                    <img src={this.props.image} alt="" className="rounded-tl-xl rounded-tr-xl"/>
                    <div className="flex flex-col p-5">
                        <p className="color-blue-1 font-semibold mb-2">{this.props.title}</p>
                        <p className="text-sm">{this.props.desc}</p>
                        <p className="text-sm text-gray-600 font-semibold tracking-wider mt-20">{this.props.time}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default TutorialComp
