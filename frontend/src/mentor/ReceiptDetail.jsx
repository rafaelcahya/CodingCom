import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import Sidebar from './major/Sidebar';

export default function ListReceipt(props) {
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
        {value.map((val)=>{
            var today = new Date()
            return <div>
                <div>
                    <p>
                        KWITANSI
                    </p>
                </div>
                <div>
                    <p>
                        Invoice No. INV/{today.getFullYear()}/CC00{val.receiptId}
                    </p>
                </div>
                <div>
                <p>Telah Menerima Dari : Coding.com</p>
                </div>
                <div>
                    <p>Banyaknya Uang : {val.jumlah}</p>
                </div>
                <div>
                    <p>Untuk Pembayaran : {val.pembayaran}</p>
                </div>
                <div>
                    <p>Jumlah Rp {val.nominal}</p>
                </div>
                <div>
                    <p>{formatDate(val.createAt)}</p>
                </div>
            </div>
        })}
        </>
    )
}
