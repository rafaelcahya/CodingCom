import React, { useRef, useState } from 'react'
import Axios from 'axios'
import Sidebar from './admin-major/Sidebar'
import { Editor } from '@tinymce/tinymce-react';

function InputJobs() {
    const editorRef = useRef(null);
    const editorRef2 = useRef(null);
    const [job, setJob] = useState("")
    const [file, setFile] = useState([])
    const [companyName, setCompanyName] = useState("")
    const [companyEmail, setCompanyEmail] = useState("")
    const [location, setLocation] = useState("")
    const [type, setType] = useState("")
    const [url, setUrl] = useState("")
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
        if (editorRef.current && editorRef2.current) {
            const fd = new FormData();
            fd.append('fileUpload', file)
            fd.append('job', job)
            fd.append('des', editorRef2.current.getContent())
            fd.append('companyName', companyName)
            fd.append('companyEmail', companyEmail)
            fd.append('overview', editorRef.current.getContent())
            fd.append('location', location)
            fd.append('type', type)
            fd.append('url', url)
            fd.append('createAt', createAt)
            Axios.post("http://localhost:3001/jobs/jobs", fd).then((response) => {
                console.log(response)
                setErrorMessage(response.data.message)

            })
            console.log(file)
        }
    }

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="jobform ml-72 m-5 p-8 flex flex-col gap-1 bg-white rounded-lg border border-gray-300 w-full">
                    <section>
                        <div className="job-box flex flex-col gap-10">
                            <div className="flex flex-col gap-3">
                                <p className="text-xl font-semibold">Post a job</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Company logo</p>
                                <input className="w-full"
                                    type="file"
                                    accept=".svg,.png,.jpg,.jpeg,.psd,.tiff,.bmp,.hdr,.webp"
                                    name="fileUpload"
                                    onChange={(event) => {
                                        setFile(event.target.files[0])
                                    }} />
                            </div>
                            <div className="flex justify-between items-center gap-10 w-full">
                                <div className="flex flex-col gap-2 w-1/2">
                                    <p className="text-sm font-semibold">Company name</p>
                                    <input type="text" placeholder="Input Job title" onChange={(event) => {
                                        setCompanyName(event.target.value)
                                    }} />
                                </div>
                                <div className="flex flex-col gap-2 w-1/2">
                                    <p className="text-sm font-semibold">Company email</p>
                                    <input type="text" placeholder="Input Job title" onChange={(event) => {
                                        setCompanyEmail(event.target.value)
                                    }} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="Time text-sm font-semibold">Overview</p>
                                <Editor
                                    apiKey="t49ii0efod7e9c06izeuljkk12vhazn02qx773vac1yq51yt"
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    initialValue="This is initial value"
                                    init={{
                                        height: 300,
                                        menubar: false,
                                        skin: "fabric",
                                        icons: "thin",
                                        toolbar_sticky: true,
                                        plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace visualblocks code fullscreen',
                                            'insertdatetime media table paste code help wordcount'
                                        ],
                                        toolbar: 'export | undo redo code | fontsizeselect formatselect print preview | link image media full page bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                    }}
                                />
                            </div>
                            <div className="flex justify-between items-center gap-10 w-full">
                                <div className="flex flex-col gap-2 w-1/2">
                                    <p className="text-sm font-semibold">Job title</p>
                                    <input type="text" placeholder="Input Job title" onChange={(event) => {
                                        setJob(event.target.value)
                                    }} />
                                </div>
                                <div className="flex flex-col gap-2 w-1/2">
                                    <p className="text-sm font-semibold">Employment type</p>
                                    <select name="" id="" onChange={(event) => {
                                        setType(event.target.value)
                                    }} >
                                        <option value="">Select employment type</option>
                                        <option value="Fulltime">Fulltime</option>
                                        <option value="Parttime">Parttime</option>
                                        <option value="Internship">Internship</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Job location</p>
                                <textarea name="" id="" maxLength="250" cols="30" rows="5" className="resize-none" placeholder="Input Job location" onChange={(event) => {
                                    setLocation(event.target.value)
                                }}></textarea>
                            </div>
                            <div className="flex flex-col gap-2">
                            <p className="Time text-sm font-semibold">Job Description</p>
                                <Editor
                                    apiKey="t49ii0efod7e9c06izeuljkk12vhazn02qx773vac1yq51yt"
                                    onInit={(evt, editor) => editorRef2.current = editor}
                                    initialValue="This is initial value"
                                    init={{
                                        height: 300,
                                        menubar: false,
                                        skin: "fabric",
                                        icons: "thin",
                                        toolbar_sticky: true,
                                        plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace visualblocks code fullscreen',
                                            'insertdatetime media table paste code help wordcount'
                                        ],
                                        toolbar: 'export | undo redo code | fontsizeselect formatselect print preview | link image media full page bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                    }}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">URL for apply</p>
                                <input type="text" placeholder="Input URL" onChange={(event) => {
                                    setUrl(event.target.value)
                                }} />
                            </div>
                            <p className="color-red-1 text-center font-medium">{errorMessage}</p>
                            <p onClick={submit} className="text-white bg-blue-1 text-center px-4 py-2 rounded-lg cursor-pointer">Submit feedback</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default InputJobs