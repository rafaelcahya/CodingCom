import React from 'react'

function RegisterPopup(props){
    return(props.trigger)?(
        <div className="register-popup-container overflow-hidden">
            <div className="register-popup-box px-10 py-5 rounded-3xl ">
                {props.children}
            </div>
        </div>
    ):"";
}
export default RegisterPopup