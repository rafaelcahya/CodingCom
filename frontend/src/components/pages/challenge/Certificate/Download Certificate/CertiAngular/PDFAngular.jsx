import React, { useEffect, useState } from 'react';
import Pdf from "react-to-pdf";
import axios from 'axios';

const ref = React.createRef();

const options = {
    orientation: 'landscape',
    unit: 'px',
    format: [1920,1080]
}

const PDFAngular = (props) => {
    const [value, setValue] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/project/GetprojectById/" + props.projectId).then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <div>
                <Pdf targetRef={ref} options={options} scale={2} filename="certificate.pdf">
                    {({ toPdf }) => 
                        <div className="bg-black flex justify-between items-center px-10">
                            {
                                value.map((val) => {
                                    return <p className="text-white py-5">{val.projectTitle}</p>
                                })
                            }
                            <div className="bg-blue-1 hover:bg-blue-400 text-white text-sm font-medium px-6 py-2 rounded-lg w-max cursor-pointer" onClick={toPdf}>Download as PDF</div>
                        </div>
                    }
                </Pdf>
            </div>
            <div className="py-0 px-32">
                <div ref={ref} style={{width: 1300}}>
                    {
                        value.map((val) => {
                            return <div className="certificate flex flex-col items-center pt-20 pb-64">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="30" height="45" viewBox="0 0 44 59"
                            preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0,59) scale(0.1,-0.1)"
                            fill="#fff" stroke="none">
                            <path d="M270 548 c-136 -52 -250 -236 -250 -403 0 -85 7 -101 51 -125 46 -24
                            80 -25 117 -6 44 23 192 181 192 205 0 11 -5 21 -11 21 -6 0 -49 -36 -96 -80
                            -90 -85 -135 -115 -160 -106 -13 5 -15 21 -11 84 5 94 44 175 125 262 60 66
                            153 122 153 94 0 -10 -6 -25 -14 -33 -13 -14 -12 -18 10 -28 22 -10 26 -8 41
                            13 25 39 24 70 -4 99 -32 31 -68 32 -143 3z m-184 -324 c-20 -56 -25 -63 -25
                            -38 -1 49 31 126 46 110 2 -1 -8 -34 -21 -72z"/>
                            </g>
                            </svg>
                            <p className="text-white text-3xl text-center font-bold py-5 border-b border-gray-300 w-1/2">{val.projectTitle}</p>
                            <p className="text-2xl text-gray-300 font-medium my-5">{props.title}</p>
                            <p className="text-gray-400 text-center font-medium w-2/4 tracking-wide">This certification holder has passed the {val.projectTitle}. You are hereby deemed fully capable and experienced.</p>
                            <span className="text-gray-400 text-sm font-medium mt-10">{new Date().toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric' }) + ''}</span>
                            <div className="flex gap-10">
                                <div className="text-center text-gray-400 font-semibold mt-10">
                                    <p>William Kosasie</p>
                                    <p className="text-sm">CEO of Coding.com</p>
                                </div>
                                <div className="text-center text-gray-400 font-semibold mt-10">
                                    <p>William Kosasie</p>
                                    <p className="text-sm">CEO of Coding.com</p>
                                </div>
                            </div>
                        </div>
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default PDFAngular;