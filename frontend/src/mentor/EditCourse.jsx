import React, { useEffect, useRef, useState } from 'react'
import Sidebar from './major/Sidebar'
import Axios from 'axios'
import { Editor } from '@tinymce/tinymce-react';

function AddCourse(props) {
    const editorRef = useRef(null);
    const urlid = props.match.params.id
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [judul, setJudul] = useState("")
    const [des, setDes] = useState("")
    const [time, setTime] = useState("")
    const [updateAt, setUpdateAt] = useState("")
    const [value, setValue] = useState([])
    let x

    window.onload = setTimeout(function () {
        var url1 = window.location.pathname;
        var idurl = url1.substring(url1.lastIndexOf('/') + 1);
        setId(idurl)
        x = localStorage.getItem("name");
        setName(x)
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setUpdateAt(dateTime)
    }, 500)


    useEffect(() => {
        Axios.get("http://localhost:3001/course/courseByIdMentor/" + urlid).then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    });

    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
            Axios.put("http://localhost:3001/course/updateCourse", { id: id, name: name, updateAt: updateAt, judul: judul, des: des, time: time, content: editorRef.current.getContent() }).then((response) => {
                console.log(response)
            })
        }
    };
    return (
        <>
            <div className="flex">
                <Sidebar />
                {
                    value.map(
                        (val) => {
                            return <div className="courseForm ml-72 m-5 p-8 flex flex-col gap-10 bg-white rounded-lg border border-gray-300 w-full" >
                                <p className="text-xl font-semibold">Edit course</p>
                                <div className="flex flex-col gap-2">
                                    <p className="Judul text-sm font-semibold">Judul</p>
                                    <input
                                        type="text"
                                        placeholder="Input judul"
                                        defaultValue = {val.judul}
                                        onChange={(event) => {
                                            setJudul(event.target.value)
                                        }} />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="Description text-sm font-semibold">Descripton</p>
                                    <input
                                        type="text"
                                        defaultValue={val.description}
                                        placeholder="Input description"
                                        onChange={(event) => {
                                            setDes(event.target.value)
                                        }} />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="Time text-sm font-semibold">Estimated Time</p>
                                    <input
                                        type="text"
                                        defaultValue={val.time}
                                        placeholder="Example : 10 min"
                                        onChange={(event) => {
                                            setTime(event.target.value)
                                        }} />
                                </div>
                                <Editor
                                    apiKey="t49ii0efod7e9c06izeuljkk12vhazn02qx773vac1yq51yt"
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    initialValue={val.content}
                                    init={{
                                        height: 500,
                                        menubar: false,
                                        plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace visualblocks code fullscreen',
                                            'insertdatetime media table paste code help wordcount'
                                        ],
                                        toolbar: 'export | undo redo code | fontsizeselect formatselect print preview | link image media full page bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                    }}
                                />
                                <p className="bg-blue-1 py-2 text-center text-white rounded-lg font-medium" onClick={log}>Submit</p>
                            </div>
                        }
                    )
                }

            </div>
        </>
    )
}

export default AddCourse
