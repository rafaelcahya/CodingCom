import React, { useRef, useState } from 'react'
import Axios from 'axios'
import Sidebar from './major/Sidebar'
import { Editor } from '@tinymce/tinymce-react';

function AddTopik() {
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [info, setInfo] = useState("")
    const editorRef = useRef(null);
    const [createAt, setCreateAt] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
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


   

    const submit = () => {
        if (editorRef.current) {
            const fd = new FormData();
            fd.append('name', name)
            fd.append('title', title)
            fd.append('info', info)
            fd.append('about', editorRef.current.getContent())
            fd.append('createAt', createAt)
            console.log(name)
            console.log(title)
            console.log(info)
            console.log(createAt)
            console.log(editorRef.current.getContent())
            Axios.post("http://localhost:3001/topik/addTopik", fd).then((response) => {
                console.log(response)
                setErrorMessage(response.data.message)
    
            })
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
                                <p className="text-xl font-semibold">Post a Topik</p>
                            </div>
                            <div className="flex justify-between items-center gap-10 w-full">
                                <div className="flex flex-col gap-2 w-1/2">
                                    <p className="text-sm font-semibold">Title</p>
                                    <input type="text" placeholder="Input Job title" onChange={(event) => {
                                                setTitle(event.target.value)
                                            }} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-1 text-sm font-semibold">
                                    <p>Project Info</p>
                                </div>
                                <textarea name="" id="" maxLength="250" cols="30" rows="10" className="resize-none" placeholder="Input overview" onChange={(event) => {
                                            setInfo(event.target.value)
                                        }} ></textarea>
                            </div>

                            <div className="flex flex-col gap-2">
                        <p className="Time text-sm font-semibold">Tutorial content</p>
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
                            <p className="color-red-1 text-center font-medium">{errorMessage}</p>
                            <p onClick={submit} className="text-white bg-blue-1 text-center px-4 py-2 rounded-lg cursor-pointer">Submit</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default AddTopik