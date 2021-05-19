import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NextPrevBtnTutorial extends Component {
    render() {
        return (
            <>
                <div className="flex justify-between items-center mb-10 ">
                    <p>
                        <Link to={this.props.back} className="bg-blue-1 pl-1 pr-2 py-2 text-sm text-white flex items-center gap-1 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            <p>Back</p>
                        </Link>
                    </p>
                    <p>
                        <Link to={this.props.next} className="bg-blue-1 pl-2 pr-1 py-2 text-sm text-white flex items-center gap-1 rounded-md">
                            <p>Next</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </Link>
                    </p>
                </div>
            </>
        )
    }
}

export default NextPrevBtnTutorial
