import React from "react";
import $ from "jquery"

import { Link } from "react-router-dom";

$(document).ready(function() {
    $('#sidebarbtn').on('click', function() {
      $('#sidebarmobile').toggleClass('visible');
    });
  });
export default function SidebarInternetMobile() {
    return (
        <>
            <nav id="sidebarmobile" className="block lg:hidden">
                <div className="flex flex-col px-6">
                    <div className="py-6">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="40" height="40" viewBox="0 0 44 59"
                            preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0,59) scale(0.1,-0.1)"
                            fill="#3b72ff" stroke="0">
                            <path d="M270 548 c-136 -52 -250 -236 -250 -403 0 -85 7 -101 51 -125 46 -24
                            80 -25 117 -6 44 23 192 181 192 205 0 11 -5 21 -11 21 -6 0 -49 -36 -96 -80
                            -90 -85 -135 -115 -160 -106 -13 5 -15 21 -11 84 5 94 44 175 125 262 60 66
                            153 122 153 94 0 -10 -6 -25 -14 -33 -13 -14 -12 -18 10 -28 22 -10 26 -8 41
                            13 25 39 24 70 -4 99 -32 31 -68 32 -143 3z m-184 -324 c-20 -56 -25 -63 -25
                            -38 -1 49 31 126 46 110 2 -1 -8 -34 -21 -72z"/>
                            </g>
                        </svg>
                    </div>
                    <Link to="/internet"><p>Introduction</p></Link>
                    <Link to="/what-is-internet"><p>What is internet</p></Link>
                    <Link to="/how-does-internet-work"><p>How does internet work</p></Link>
                    <Link to="/what-is-http"><p>What is HTTP & HTTPS</p></Link>
                    <Link to="/browser"><p>Browser</p></Link>
                    <Link to="/DNS"><p>DNS Server</p></Link>
                    <Link to="/domain"><p>Domain</p></Link>
                    <Link to="/hosting"><p>Hosting</p></Link>
                    <Link to="/closing"><p>Closing</p></Link>
                </div>
                <div id="sidebarbtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
            </nav>
        </>
    )
}
