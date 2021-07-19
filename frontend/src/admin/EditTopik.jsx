/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import Axios from 'axios'
import Sidebar from './admin-major/Sidebar'
import { Editor } from '@tinymce/tinymce-react';

function AddTopik(props) {
    const urlid = props.match.params.id
    // eslint-disable-next-line no-unused-vars
    const [id, setId] = useState("")
    const [status, setStatus] = useState("")
    const [title, setTitle] = useState("")
    const [info, setInfo] = useState("")
    const editorRef = useRef(null);
    const [updateAt, setUpdateAt] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [valueList, setValueList] = useState([])

    window.onload = setTimeout(function () {
        var url1 = window.location.pathname;
        var idurl = url1.substring(url1.lastIndexOf('/') + 1);
        setId(idurl)
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setUpdateAt(dateTime)
    }, 500)

    useEffect(() => {
        Axios.get("http://localhost:3001/topik/topikById/" + urlid).then((response) => {
            setValueList(response.data)
            console.log(response.data)
        })
    }, []);

    const submit = () => {
        if (editorRef.current) {
            const fd = new FormData();
            fd.append('id', urlid)
            fd.append('title', title)
            fd.append('info', info)
            fd.append('status', status)
            fd.append('about', editorRef.current.getContent())
            fd.append('updateAt', updateAt)
            Axios.post("http://localhost:3001/topik/editTopik", fd).then((response) => {
                console.log(response)
                setErrorMessage(response.data.message)
            })
        }

    }

    return (
        <>
            <div className="bg-white text-black flex">
                <Sidebar />
                <div className="ml-72 m-5 p-8 flex flex-col gap-1 bg-white rounded-lg border border-gray-300 w-full">
                    <section>
                        {
                            valueList.map((val) => {
                                return <div className="job-box flex flex-col gap-10">
                                    <div className="flex flex-col gap-3">
                                        <p className="text-lg font-semibold">Edit sub tutorial</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm font-semibold">Title</p>
                                        <input type="text" defaultValue={val.topikTitle} placeholder="Input Job title" onChange={(event) => {
                                            setTitle(event.target.value)
                                        }} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-1 text-sm font-semibold">
                                            <p>Subtutorial Info</p>
                                        </div>
                                        <textarea name="" id="" defaultValue={val.topikInfo} maxLength="250" cols="30" rows="10" className="resize-none" placeholder="Input overview" onChange={(event) => {
                                            setInfo(event.target.value)
                                        }} ></textarea>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <p className="Time text-sm font-semibold">Subtutorial content</p>
                                        <Editor
                                            apiKey="t49ii0efod7e9c06izeuljkk12vhazn02qx773vac1yq51yt"
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            initialValue={val.about}
                                            init={{
                                                height: 300,
                                                menubar: false,
                                                skin: "fabric",
                                                icons: "thin",
                                                toolbar_sticky: true,
                                                plugins: [
                                                    'advlist autolink lists link image charmap print preview anchor',
                                                    'searchreplace visualblocks code fullscreen',
                                                    'insertdatetime media table paste code help wordcount export'
                                                ],
                                                toolbar: 'export | undo redo code | fontsizeselect formatselect print preview | link image media full page bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                            }}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 w-56">
                                    <p className="Waktu text-sm font-semibold">Change status*</p>
                                    <select id="dropdown" onChange={(event) => {
                                        setStatus(event.target.value)
                                    }}>
                                        <option>Choose status</option>
                                        <option value="Approve">Approve</option>
                                        <option value="Reject">Reject</option>
                                    </select>
                                </div>
                                    {
                                        errorMessage === "Data has been updated successfully" ? <p className="text-green-500 text-center font-medium">{errorMessage}</p> : <p className="color-red-1 text-center font-medium">{errorMessage}</p>
                                    }
                                    
                                    <p className="font-medium text-sm text-yellow-500">*Make sure all content is filled correctly</p>
                                    <p onClick={submit} className="text-white bg-blue-1 text-center px-4 py-2 rounded-lg cursor-pointer">Submit</p>
                                </div>
                            })
                        }

                    </section>
                </div>
            </div>
        </>
    )
}

export default AddTopik