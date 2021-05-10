import React, { useState } from 'react'
import Sidebar from './admin-major/Sidebar'
import { Editor } from '@tinymce/tinymce-react';
import Axios from 'axios'
import { Link } from 'react-router-dom'

function EditPayment() {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <div className="table-request-class overflow-hidden ml-80 m-5 p-8 flex flex-col gap-1 bg-white rounded-2xl w-full" >
                    <div className="flex flex-col gap-1 pb-8">
                        <p className="text-lg font-semibold">Add Course</p>
                        <p className="text-xs font-medium text-gray-400 w-3/4">This is for add course.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="align-middle inline-block min-w-full">
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
                                    toolbar: 'undo redo | formatselect | ' +
                                        'bold italic backcolor | alignleft aligncenter ' +
                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                        'removeformat | help',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                }}
                            />
                            <button onClick={log}>Log editor content</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditPayment