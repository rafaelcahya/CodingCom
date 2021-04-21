import React, { Component } from 'react'

export class ClassComp extends Component {
    render() {
        return (
            <>
                <div>
                    <p className="text-lg font-semibold">{this.props.class}</p>
                    <p className="color-black-2 text-sm font-medium">{this.props.desc}</p>
                    <div className="flex gap-10 my-5">
                        <a href={this.props.zoom} className="bg-blue-1 text-white px-4 py-2 text-sm rounded-lg">{this.props.classname1}</a>
                        <a href={this.props.zoom} className="bg-blue-1 text-white px-4 py-2 text-sm rounded-lg">{this.props.classname2}</a>
                        <a href={this.props.zoom} className="bg-blue-1 text-white px-4 py-2 text-sm rounded-lg">{this.props.classname3}</a>
                    </div>
                </div>
            </>
        )
    }
}

export default ClassComp
