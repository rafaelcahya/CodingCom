import React, { Component } from 'react'

export class ChallengeComp extends Component {
    render() {
        return (
            <div className="tutorial-box flex flex-col rounded-xl shadow-xl transform hover:scale-105" style={{width: "300px"}}>
                <img src={this.props.image} alt="" className="rounded-tl-xl rounded-tr-xl"/>
                <div className="flex flex-col justify-between p-5 pb-20">
                    <p className="color-blue-1 font-semibold">{this.props.title}</p>
                    <p className="color-green-1 text-sm font-medium">{this.props.diff}</p>
                    <p className="text-sm my-5">{this.props.desc}</p>
                </div>
            </div>
        )
    }
}

export default ChallengeComp
