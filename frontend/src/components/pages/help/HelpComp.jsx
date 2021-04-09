import React, { Component, Fragment } from 'react'

export class HelpComp extends Component {
    render() {
        return (
            <Fragment>
                <div className="flex flex-col gap-5 mx-10">
                    <p className="font-semibold">{this.props.subtitle}</p>
                    <p>{this.props.desc}</p>
                </div>
            </Fragment>
        )
    }
}

export default HelpComp
