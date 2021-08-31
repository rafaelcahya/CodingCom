import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Pdf from "react-to-pdf";
import receipt_logo from "../asset/logo/logo_codingcom.svg"

const ref = React.createRef();

const options = {
    orientation: 'landscape',
    unit: 'px',
    format: [1920,1080]
}

const ListReceipt = (props) => {
    const id = props.match.params.id
    const [value,setValue] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/receipt/receiptDetail/"+ id).then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    }, [id]);

    const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });

    return (
        <>
            <div>
                <Pdf targetRef={ref} options={options} scale={2} filename="salary_receipt.pdf">
                    {({ toPdf }) => 
                        <div className="bg-black flex justify-between items-center px-10 py-2">
                            <p className="text-white">Salary Receipt</p>
                            <div className="bg-blue-1 hover:bg-blue-400 text-white text-sm font-medium px-6 py-2 rounded-lg w-max cursor-pointer" onClick={toPdf}>Download as PDF</div>
                        </div>
                    }
                </Pdf>
                <div ref={ref} style={{width: 1300}}>
                    {value.map((val)=>{
                        var today = new Date()
                        return <div className="px-20 py-10">
                            <div className="flex items-center justify-between pt-2 pb-6 border-b-2 border-gray-200">
                                <p className="text-xl font-semibold">Salary Receipt</p>
                                <div className="text-center">
                                    <p className="font-semibold">Coding.com</p>
                                    <p>No. INV/{today.getFullYear()}/CC00{val.receiptId}</p>
                                </div>
                                <img src={receipt_logo} alt="" width={30}/>
                            </div>
                            <div className="flex flex-col gap-6 py-16">
                                <div className="">
                                    <p className="text-xs text-gray-400">Received from</p>
                                    <p>Coding.com</p>
                                </div>
                                <div className="">
                                    <p className="text-xs text-gray-400">Amount</p>
                                    <p>{val.jumlah}</p>
                                </div>
                                <div className="">
                                    <p className="text-xs text-gray-400">Nominal</p>
                                    <p>{val.nominal}</p>
                                </div>
                                <div className="">
                                    <p className="text-xs text-gray-400">For</p>
                                    <p>{val.pembayaran}</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-2 text-center">
                                    <p className="text-sm text-gray-400">Received by</p>
                                    <p>{val.fullname}</p>
                                </div>
                                <div className="flex flex-col gap-2 text-center">
                                    <p className="text-sm text-gray-400">Date</p>
                                    <p>{formatDate(val.createAt)}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default ListReceipt;
