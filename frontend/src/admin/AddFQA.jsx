import React, {useState } from 'react'
import Sidebar from './admin-major/Sidebar'
import Axios from 'axios'

function AddFAQ() {
    const [question, setQuestion] = useState("")
    const [answer , setAnswer] = useState("")
    const [createAt, setCreateAt] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setCreateAt(dateTime)
    }, 500)

    const submit = () => {
        Axios.post("http://localhost:3001/faq/addFaq", { createAt: createAt, question: question, answer:answer}).then((response) => {
            console.log(response)
            setErrorMessage(response.data.message)
        })
    };

    return (
        <>
            <div className="bg-white text-black flex h-screen overflow-hidden">
                <Sidebar />
                <div className="overflow-hidden ml-72 m-5 p-8 flex flex-col gap-1 bg-white rounded-lg border border-gray-300 w-full" >
                    <div className="pb-8">
                        <p className="text-lg font-semibold">Add FAQ</p>
                    </div>
                    <div className="faq-form flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <p className="Batch text-sm font-semibold">Question</p>
                            <input
                                type="text"
                                placeholder="Add question"
                                onChange={(event) => {
                                    setQuestion(event.target.value)
                                }} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="Batch text-sm font-semibold">Answer</p>
                            <input
                                type="text"
                                placeholder="Add answer"
                                onChange={(event) => {
                                    setAnswer(event.target.value)
                                }} />
                        </div>
                    </div>
                    {
                        errorMessage === "Data has been added successfully" ? <p className="text-green-500 text-center font-medium my-10">{errorMessage}</p> : <p className="color-red-1 text-center font-medium my-10">{errorMessage}</p>
                    }
                    
                    <button onClick={submit} className="text-white bg-blue-1 text-center px-4 py-2 rounded-lg cursor-pointer">Submit</button>
                </div>
            </div>
        </>
    )
}

export default AddFAQ