import React from 'react'

function PopUp(props){
    return(props.trigger)?(
        <div className="register-popup-container overflow-hidden">
            <div className="register-popup-box px-10 py-5 rounded-lg ">
                {props.children}
            </div>
        </div>
    ):"";
}

export default PopUp