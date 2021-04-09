import React, { Component } from 'react'

export class TutorialComp extends Component {
    render() {
        return (
            <>
                <div className="tutorial-box flex flex-col rounded-xl shadow-xl transform hover:scale-105">
                    <img src={this.props.image} alt="" className="rounded-tl-xl rounded-tr-xl"/>
                    <div className="flex flex-col justify-between p-5 pb-20">
                        <p className="color-blue-1 font-semibold mb-2">{this.props.title}</p>
                        <p className="text-sm">{this.props.desc}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default TutorialComp
