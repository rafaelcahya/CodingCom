import React, { Component } from 'react'

export class ChallengeComp extends Component {
    render() {
        return (
            <div className="tutorial-box flex flex-col justify-between rounded-xl shadow transform hover:scale-105 hover:shadow-lg transition duration-200" style={{width: "300px"}}>
                <img src={this.props.image} alt="" className="rounded-tl-xl rounded-tr-xl"/>
                <div className="flex flex-col justify-between p-5 h-64">
                    <div>
                        <p className="color-blue-1 font-semibold">{this.props.title}</p>
                        <p className="color-green-1 text-sm font-medium">{this.props.diff}</p>
                        <p className="text-sm my-5">{this.props.desc}</p>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-sm p-1 color-green-1 font-semibold rounded-md">{this.props.pl1}</p>
                        <p className="text-sm p-1 color-orange-1 font-semibold rounded-md">{this.props.pl2}</p>
                        <p className="text-sm p-1 color-red-1 font-semibold rounded-md">{this.props.pl3}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChallengeComp
