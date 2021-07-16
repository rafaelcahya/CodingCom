import React, { useState } from 'react'
import Axios from 'axios'
import Sidebar from './admin-major/Sidebar'

function EditProjectSubmission(props) {
    const urlid = props.match.params.id
    const [score, setScore] = useState("")
    const [revisi, setRevisi] = useState("")
    const [updateAt, setUpdateAt] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    console.log("test")

    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setUpdateAt(dateTime)
        console.log(urlid)
    }, 500)

    const submit = () => {
            Axios.post("http://localhost:3001/submit/score",{urlid:urlid, score:score, revisi:revisi, updateAt:updateAt}).then((response) => {
                console.log(response)
                setErrorMessage(response.data.message)
            })
    }

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="jobform ml-72 m-5 p-8 flex flex-col gap-1 bg-white rounded-lg border border-gray-300 w-full">
                    <section>
                        <div className="job-box flex flex-col gap-10">
                            <div className="flex flex-col gap-3">
                                <p className="text-xl font-semibold">Post Score For The Project</p>
                            </div>
                            <div className="flex justify-between items-center gap-10 w-full">
                                <div className="flex flex-col gap-2 w-1/2">
                                    <p className="text-sm font-semibold">Score for the project</p>
                                    <input type="text" placeholder="Input Score" onChange={(event) => {
                                                setScore(event.target.value)
                                            }} />
                                </div>
                                <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-1 text-sm font-semibold">
                                            <p>Cooment for User</p>
                                        </div>
                                        <textarea name="" id="" maxLength="500" cols="30" rows="10" className="resize-none" placeholder="Input Revisi or Comment" onChange={(event) => {
                                            setRevisi(event.target.value)
                                        }} ></textarea>
                                    </div>
                            </div>
                            <p className="color-red-1 text-center font-medium">{errorMessage}</p>
                            <p onClick={submit} className="text-white bg-blue-1 text-center px-4 py-2 rounded-lg cursor-pointer">Submit</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default EditProjectSubmission