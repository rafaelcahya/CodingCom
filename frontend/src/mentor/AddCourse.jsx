import React, { useEffect, useRef, useState } from 'react'
import Sidebar from './major/Sidebar'
import Axios from 'axios'
import { Editor } from '@tinymce/tinymce-react';

function AddCourse() {
    const editorRef = useRef(null);
    const [name,setName] = useState("")
    const [topik,setTopik] = useState("")
    const [number,setNumber] = useState("")
    const [judul,setJudul] = useState("")
    const [des,setDes] = useState("")
    const [time,setTime] = useState("")
    const [createAt,setCreateAt] = useState("")
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
        Axios.get("http://localhost:3001/topik/ListTopik").then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    }, []);

    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
            Axios.post("http://localhost:3001/course/addCourse", {name:name, topik:topik, number:number, createAt:createAt, judul:judul, des:des, time:time, content: editorRef.current.getContent() }).then((response) => {
                console.log("inserted into database")
                setErrorMessage(response.data.message)
            })
        }
    };

    const resetForm = () => { 
        document.getElementById("reset-form").reset();
    }
    return (
        <>
            <div className="flex text-black bg-white">
                <Sidebar />
                <div className="courseForm ml-72 m-5 p-8 flex flex-col gap-10 bg-white rounded-lg border border-gray-300 w-full" >
                    <p className="text-xl font-semibold">Sub Tutorial form</p>
                    <div className="flex items-center justify-between gap-10 w-full">
                        <div className="flex flex-col gap-2 w-1/2">
                            <p className="Judul text-sm font-semibold">Title</p>
                            <input
                                type="text"
                                placeholder="Input title"
                                onChange={(event) => {
                                    setJudul(event.target.value)
                                }} />
                        </div>
                        <div className="flex flex-col gap-2 w-1/2">
                            <p className="gender text-sm font-semibold">Tutorial</p>
                            <select name="" id=""  onChange={(event) => {
                                setTopik(event.target.value)
                            }} >
                                <option value="">Choose tutorial</option>
                                {
                                    value.map((val)=>{
                                        return <option value={val.topikId}>{val.topikTitle}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="Number text-sm font-semibold">Sub Tutorial number</p>
                        <input
                            type="number" min="0"
                            placeholder="Input Sub Tutorial number"
                            onChange={(event) => {
                                setNumber(event.target.value)
                            }} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="Description text-sm font-semibold">Descripton</p>
                        <input
                            type="text"
                            placeholder="Input description"
                            onChange={(event) => {
                                setDes(event.target.value)
                            }} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="Time text-sm font-semibold">Estimated Time</p>
                        <input
                            type="number"
                            min="0"
                            placeholder="Example : 10 min"
                            onChange={(event) => {
                                setTime(event.target.value)
                            }} />
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
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar: 'export | undo redo code | fontsizeselect formatselect preview | link image media full page bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />
                    </div>
                    {
                        errorMessage === "Data has been added successfully" ? <p className="text-green-500 text-center font-medium">{errorMessage}</p> : <p className="color-red-1 text-center font-medium">{errorMessage}</p>
                    }
                    
                    <p onClick={log} className="bg-blue-1 text-white text-center px-7 py-2 rounded-lg cursor-pointer">Submit</p>
                </div>
            </div>
        </>
    )
}

export default AddCourse
