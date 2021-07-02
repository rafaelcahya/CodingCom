import React, { useEffect, useRef, useState } from 'react'
import Axios from 'axios'
import Sidebar from './major/Sidebar'
import { Editor } from '@tinymce/tinymce-react';

function AddTopik() {
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [info, setInfo] = useState("")
    const [time, setTime] = useState("")
    const [progress, setProgress] = useState("")
    const editorRef = useRef(null);
    const [createAt, setCreateAt] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [value,setValue] = useState([])
    let x

    window.onload = setTimeout(function () {
        x = localStorage.getItem("name");
        setName(x)
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setCreateAt(dateTime)
    }, 500)

    useEffect(() => {
        Axios.get("http://localhost:3001/category/listCategory").then((response) => {
            setValue(response.data)
        })
    }, []);

    const submit = () => {
        if (editorRef.current) {
            const fd = new FormData();
            fd.append('name', name)
            fd.append('title', title)
            fd.append('info', info)
            fd.append('about', editorRef.current.getContent())
            fd.append('createAt', createAt)
            fd.append('category', category)
            fd.append('time', time)
            fd.append('progress', progress)
            Axios.post("http://localhost:3001/topik/addTopik", fd).then((response) => {
                console.log(response)
                setErrorMessage(response.data.message)
    
            })
        }
    }

    const resetForm = () => { 
        document.getElementById("reset-form").reset();
    }

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="topik-form ml-72 m-5 p-8 flex flex-col gap-1 bg-white rounded-lg border border-gray-300 w-full">
                    <section>
                        <div className="job-box flex flex-col gap-10">
                            <div className="flex flex-col gap-3">
                                <p className="text-xl font-semibold">Add Sub Tutorial for getting started</p>
                            </div>
                            <div className="flex justify-between gap-10 w-full">
                                <div className="flex flex-col gap-2 w-1/2">
                                    <p className="text-sm font-semibold">Choose tutorial</p>
                                    <select name="" id="" onChange={(event) => {
                                        setCategory(event.target.value)
                                    }} >
                                        <option>Choose tutorial</option>
                                        {
                                            value.map(
                                                (val) => {
                                                return <option value={val.categoryId}>{val.category}</option>
                                                }
                                            )
                                        }
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2 w-1/2">
                                    <p className="text-sm font-semibold">Sub Tutorial title</p>
                                    <input type="text" placeholder="Input Sub Tutorial title" onChange={(event) => {
                                                setTitle(event.target.value)
                                            }} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-1 text-sm font-semibold">
                                    <p>Sub Tutorial info</p>
                                </div>
                                <textarea name="" id="" rows="5" className="resize-none" placeholder="Input overview" onChange={(event) => {
                                    setInfo(event.target.value)
                                }} ></textarea>
                            </div>

                            <div className="w-full">
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm font-semibold">Progress: Complete/Coming Soon</p>
                                    <select name="" id=""  onChange={(event) => {
                                            setProgress(event.target.value)
                                        }} >
                                        <option value="">Complete</option>
                                        <option value="Coming Soon">Coming Soon</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="Time text-sm font-semibold">Sub Tutorial description</p>
                                <Editor
                                    apiKey="t49ii0efod7e9c06izeuljkk12vhazn02qx773vac1yq51yt"
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    initialValue="<p>This is the initial content of the editor.</p>"
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
                            <div className="flex flex-col gap-2 w-1/2">
                                    <p className="text-sm font-semibold">Time</p>
                                    <input type="number" min="0" placeholder="Input Time" onChange={(event) => {
                                                setTime(event.target.value)
                                            }} />
                                </div>
                            <p className="color-red-1 text-center font-medium">{errorMessage}</p>
                            <div className="flex justify-between gap-10 w-full">
                                <p onClick={resetForm} className="bg-gray-100 hover:bg-gray-200 px-7 py-2 text-center rounded-lg cursor-pointer w-1/2">Clear</p>
                                <p onClick={submit} className="bg-blue-1 text-white text-center px-7 py-2 rounded-lg cursor-pointer w-1/2">Submit</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default AddTopik