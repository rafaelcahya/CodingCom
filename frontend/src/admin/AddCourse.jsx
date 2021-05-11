import React, { useRef, useState } from 'react'
import Sidebar from './admin-major/Sidebar'
import Axios from 'axios'
import { Editor } from '@tinymce/tinymce-react';

function AddCourse() {
    const editorRef = useRef(null);
    const [judul,setJudul] = useState("")
    const [createAt,setCreateAt] = useState("")

    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = time + ' ' + date;
        setCreateAt(dateTime)
    }, 500)

    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
            Axios.post("http://localhost:3001/user/test", {createAt:createAt, judul:judul, content: editorRef.current.getContent() }).then((response) => {
                console.log(response)
            })
        }
    };
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <div className="overflow-hidden ml-80 m-5 p-8 flex flex-col gap-1 bg-white rounded-2xl border border-gray-300 w-full" >
                    <div className="flex flex-col gap-2">
                        <p className="ClassName text-sm font-semibold">Judul</p>
                        <input
                            type="text"
                            placeholder="Input judul"
                            onChange={(event) => {
                                setJudul(event.target.value)
                            }} />
                    </div>
                    <Editor
                        apiKey="t49ii0efod7e9c06izeuljkk12vhazn02qx773vac1yq51yt"
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue="<p>This is the initial content of the editor.</p>"
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar: 'undo redo | formatselect | link image media full page bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                    <button onClick={log}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default AddCourse
