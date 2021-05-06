import React, { Component } from 'react'

export class TutorialComp extends Component {
    render() {
        return (
            <>
                <div className="tutorial-box rounded-xl shadow transform hover:scale-105 hover:shadow-lg transition duration-200">
                    <p className="absolute top-0 w-full bg-orange-1 text-center text-white py-2 font-medium rounded-tl-xl rounded-tr-xl">Upcoming</p>
                    <img src={this.props.image} alt="" className="rounded-tl-xl rounded-tr-xl"/>
                    <div className="flex flex-col justify-between p-5">
                        <p className="color-blue-1 font-semibold mb-2">{this.props.title}</p>
                        <p className="text-sm">{this.props.desc}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default TutorialComp
