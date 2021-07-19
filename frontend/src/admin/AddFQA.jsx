import React, {useRef, useState } from 'react'
import Sidebar from './admin-major/Sidebar'
import Axios from 'axios'
import { Editor } from '@tinymce/tinymce-react';

function AddFAQ() {
    const editorRef = useRef(null);
    const [question, setQuestion] = useState("")
    const [answer , setAnswer] = useState("")
    const [createAt, setCreateAt] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [category, setCategory] = useState("")

    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        setCreateAt(dateTime)
    }, 500)

    const submit = () => {
        if (editorRef.current) {
        Axios.post("http://localhost:3001/faq/addFaq", { createAt: createAt, question: question, answer:answer, category:category, description:editorRef.current.getContent()}).then((response) => {
            console.log(response)
            setErrorMessage(response.data.message)
        })
    }
    };

    return (
        <>
            <div className="bg-white text-black flex">
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
                        <div className="w-full">
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">FAQ Category</p>
                                <select name="" id=""  onChange={(event) => {
                                        setCategory(event.target.value)
                                    }} >
                                    <option value="" className="p-3">Choose Category</option>
                                    <option value="Pricing">Pricing</option>
                                    <option value="Bootcamp">Bootcamp</option>
                                    <option value="Challange">Challange</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                                <p className="Time text-sm font-semibold">FAQ Description</p>
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
                                        toolbar: 'undo redo code | fontsizeselect formatselect print preview | link image media full page bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                    }}
                                />
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