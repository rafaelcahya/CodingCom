import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function FeedbackBtn() {
    const [name,setName] = useState("")
    let x
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    window.onload = setTimeout(function () {
        x = localStorage.getItem("name");
        setName(x)
    }, 500)
    return (
        <div onClick={scrollToTop}>
            <Link to={"/feedback/" + name}>
                <div className="feedback bg-orange-1 p-3 rounded-tl-full rounded-tr-full rounded-br-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
            </Link>
        </div>
    )
}

export default FeedbackBtn
