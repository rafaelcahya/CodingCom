import React, { useState } from 'react'
import Sidebar from './admin-major/Sidebar'
import Axios from 'axios'
import { Link } from 'react-router-dom'

function EditPayment() {
    const [id, setId] = useState("")
    const [status, setStatus] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    window.onload = setTimeout(function () {
        var url1 = window.location.pathname;
        var idurl = url1.substring(url1.lastIndexOf('/') + 1);
        setId(idurl)
    }, 500)

    const updatePaymentUser = () => {
        Axios.post("http://localhost:3001/user/updatePayment", {id:id, status: status }).then((response) => {
            console.log(response)
            setErrorMessage(response.data.message)

        })
    }

    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <div className="table-request-class overflow-hidden ml-80 m-5 p-8 flex flex-col gap-1 bg-white border border-gray-300 rounded-2xl w-full" >
                    <div className="flex flex-col gap-1 pb-8">
                        <p className="text-lg font-semibold">Payment Edit</p>
                        <p className="text-xs font-medium text-gray-400 w-3/4">This is for payment verification user, Admin can choose what to do here</p>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="align-middle inline-block min-w-full">
                            <div className="request-class-container flex flex-col gap-10">
                                <div className="flex flex-col gap-2 w-56">
                                    <p className="Waktu text-sm font-semibold">Change status*</p>
                                    <select id="dropdown" onChange={(event) => {
                                        setStatus(event.target.value)
                                    }}>
                                        <option value="">Choose Status</option>
                                        <option value="ACTIVED">Approve</option>
                                        <option value="REJECTED">Reject</option>
                                    </select>
                                </div>
                                <p className="color-red-1 text-center font-medium">{errorMessage}</p>
                                <div className="flex gap-10">
                                    <p className="bg-gray-200 hover:bg-gray-300 w-1/5 text-center px-7 py-2 rounded-lg cursor-pointer">
                                        <Link to="/admin/payment-requisition">Back</Link>
                                    </p>
                                    <p onClick={updatePaymentUser} className="bg-blue-1 w-4/5  text-white text-center px-7 py-2 rounded-lg cursor-pointer">Submit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditPayment