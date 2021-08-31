import React, {useEffect, useState } from 'react'
import Sidebar from './admin-major/Sidebar'
import Axios from 'axios'

function AddReceipt() {
    const [nominal, setNominal] = useState("")
    const [pembayaran, setPembayaran] = useState("")
    const [jumlah, setJumlah] = useState("")
    const [createAt, setCreateAt] = useState("")
    const [mentor, setMentor] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [value,setValue] = useState([])

    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setCreateAt(dateTime)
    }, 500)

    useEffect(() => {
        Axios.get("http://localhost:3001/user/mentorList").then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    }, []);

    const submit = () => {
        Axios.post("http://localhost:3001/receipt/addReceipt", { createAt: createAt, mentor:mentor, nominal: nominal, pembayaran:pembayaran, jumlah:jumlah}).then((response) => {
            console.log(response)
            setErrorMessage(response.data.message)
        })
    };
    return (
        <>
            <div className="text-black bg-white flex h-screen overflow-hidden">
                <Sidebar />
                <div className="batchForm overflow-hidden ml-72 m-5 p-8 flex flex-col gap-1 bg-white rounded-lg border border-gray-300 w-full" >
                    <div className="pb-8">
                        <p className="text-lg font-semibold">Add Receipt</p>
                        <p className="text-sm font-semibold">Receipt for mentor</p>
                    </div>
                    <div className="flex flex-col gap-2">
                                    <p className="text-sm font-semibold">Select Mentor</p>
                                    <select name="" id="" onChange={(event) => {
                                        setMentor(event.target.value)
                                    }} >
                                        <option>Choose Mentor</option>
                                        {
                                            value.map(
                                                (val) => {
                                                    return <option value={val.id}>{val.fullname}</option>
                                                }
                                            )
                                        }
                                    </select>
                                </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <p className="Batch text-sm font-semibold">Ammount:</p>
                            <input
                                type="text"
                                placeholder="example: Dua Juta Tiga Ratus Ribu Rupiah"
                                onChange={(event) => {
                                    setJumlah(event.target.value)
                                }} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="Batch text-sm font-semibold">Payment For:</p>
                            <input
                                type="text"
                                placeholder=""
                                onChange={(event) => {
                                    setPembayaran(event.target.value)
                                }} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="Batch text-sm font-semibold">Nominal:</p>
                            <input
                                type="number"
                                placeholder=""
                                onChange={(event) => {
                                    setNominal(event.target.value)
                                }} />
                        </div>
                    </div>
                    {
                        errorMessage === "Category successfully submited" ? <p className="text-green-500 text-center font-medium my-10">{errorMessage}</p> : <p className="color-red-1 text-center font-medium my-10">{errorMessage}</p>
                    }
                    
                    <button onClick={submit} className="text-white bg-blue-1 text-center px-4 py-2 rounded-lg cursor-pointer">Submit</button>
                </div>
            </div>
        </>
    )
}

export default AddReceipt
