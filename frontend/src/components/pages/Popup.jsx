import React, { useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

import './Popup.css'

function Popup(props){
    return(props.trigger)?(
        <div className="popup">
            <div className="popup-inner">
            {props.children}
            </div>
        </div>
    ):"";
}
export default Popup