import React, { Component } from 'react'

export class TutorialPaidComp extends Component {
    render() {
        return (
            <>
                <div className="tutorial-paid-box rounded-xl shadow-xl transform hover:scale-105">
                    <p className="text-center color-blue-1 text-xl font-semibold py-5">{this.props.title}</p>
                    <div className="flex flex-col justify-between p-5">
                        <p className="color-blue-1 font-semibold mb-2">{this.props.subtitle}</p>
                        <p className="text-sm my-2 leading-6">{this.props.desc}</p>
                        <p className="text-sm leading-6">{this.props.desc2}</p>
                    </div>
                    <p className="bg-red-1 text-white text-center py-2 text-sm rounded-bl-lg rounded-br-lg">Buy premium plan to learn it</p>
                </div>
            </>
        )
    }
}

export default TutorialPaidComp
