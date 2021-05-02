import React, { Component } from 'react'

export class ClassComp extends Component {
    render() {
        return (
            <>
                <div className="consultation-box flex justify-between items-center px-8 py-4 rounded-xl hover:bg-blue-100">
                    <p className="my-1 font-semibold">{this.props.name}</p>
                    <p className="font-medium text-gray-400 text-sm">{this.props.time}</p>
                    <a href={this.props.link} className="bg-blue-50 hover:bg-blue-600 text-sm text-blue-700 hover:text-blue-50 font-medium py-2 px-8 rounded-xl">{this.props.button}</a>
                </div>
            </>
        )
    }
}

export default ClassComp
