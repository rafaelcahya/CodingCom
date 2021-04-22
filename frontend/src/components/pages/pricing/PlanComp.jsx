import React, { Component, Fragment } from 'react'

export class PlanComp extends Component {
    render() {
        return (
            <Fragment>
                
                <article>
                    <div>
                        <p className="font-semibold">{this.props.planName}</p>
                        <p className="text-xs my-5">{this.props.currency} <span className="text-3xl font-semibold color-blue-1">{this.props.price}</span>{this.props.access}</p>
                    </div>
                    <div className="text-sm">
                        <div className="flex flex-col gap-5 mt-5">
                            <p>{this.props.get1}</p>
                            <p>{this.props.get2}</p>
                            <p>{this.props.get3}</p>
                            <p>{this.props.get4}</p>
                            <p>{this.props.get5}</p>
                            <p>{this.props.get6}</p>
                        </div>
                        <div className="color-blue-1 font-medium flex flex-col gap-5 mt-5">
                            <p>{this.props.get7}</p>
                            <p>{this.props.get8}</p>
                            <p>{this.props.get9}</p>
                            <p>{this.props.get10}</p>
                            <p>{this.props.get11}</p>
                        </div>
                    </div>
                </article>
            </Fragment>
        )
    }
}

export default PlanComp
