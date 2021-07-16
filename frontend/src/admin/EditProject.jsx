import React, { useEffect, useRef, useState } from 'react'
import Axios from 'axios'
import Sidebar from './admin-major/Sidebar'
import { Editor } from '@tinymce/tinymce-react';

function EditProject(props) {
    const editorRef = useRef(null);
    const urlid = props.match.params.id
    const [id, setId] = useState("")
    const [file, setFile] = useState([])
    const [projectFile, setProjectFile] = useState([])
    const [title, setTitle] = useState("")
    const [info, setInfo] = useState("")
    const [updateAt, setUpdateAt] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [type, setType] = useState("")
    const [language, setLanguage] = useState("")
    const [valueList, setValueList] = useState([])
    const [value, setValue] = useState([])

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
        Axios.get("http://localhost:3001/project/projectById/" + urlid).then((response) => {
            setValueList(response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        Axios.get("http://localhost:3001/project/projectTypeList").then((response) => {
            setValue(response.data)
            console.log(response.data)
        })
    }, []);

    const submit = () => {

        if (editorRef.current) {
            const fd = new FormData();
            fd.append('fileUpload', file)
            fd.append('id', urlid)
            fd.append('title', title)
            fd.append('info', info)
            fd.append('type', type)
            fd.append('projectFile', projectFile)
            fd.append('brief', editorRef.current.getContent())
            fd.append('updateAt', updateAt)
            fd.append('language', language)
            if(file.length<=0 || file == null||document.getElementById("image")==null){
                setErrorMessage("Project Image can not be empty")
            }else if(projectFile.length<=0 || projectFile == null||document.getElementById("projectFile")==null){
                setErrorMessage("Project File can not be empty")
            }else{
                Axios.post("http://localhost:3001/project/editProject", fd).then((response) => {
                    console.log(response)
                    setErrorMessage(response.data.message)

                })
            }
        }
    }

    return (
        <>
            <div className="flex bg-white text-black">
                <Sidebar />
                <div className="ml-72 m-5 p-8 flex flex-col gap-1 bg-white rounded-lg border border-gray-300 w-full">
                    <section>
                        {
                            valueList.map(
                                (val) => {
                                    return <div className="job-box flex flex-col gap-10">
                                        <div className="flex flex-col gap-3">
                                            <p className="text-xl font-semibold">Edit Project</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <p className="text-sm font-semibold">Project Type</p>
                                            <select name="" id="" onChange={(event) => {
                                                setType(event.target.value)
                                            }} >
                                                <option>Choose Type</option>
                                                {
                                                    value.map(
                                                        (val) => {
                                                            return <option value={val.typeId}>{val.type}</option>
                                                        }
                                                    )
                                                }
                                            </select>
                                        </div>
                                        <div className="flex justify-between items-center gap-10 w-full">
                                            <div className="flex flex-col gap-2 w-1/2">
                                                <p className="text-sm font-semibold">Image Project</p>
                                                <input className="w-full"
                                                    type="file"
                                                    id="image"
                                                    accept=".svg,.png,.jpg,.jpeg,.psd,.tiff,.bmp,.hdr,.webp"
                                                    required
                                                    onChange={(event) => {
                                                        setFile(event.target.files[0])
                                                    }} />
                                            </div>
                                            <div className="flex flex-col gap-2 w-1/2">
                                                <p className="text-sm font-semibold">Title</p>
                                                <input type="text" placeholder="Input Job title" defaultValue={val.projectTitle} onChange={(event) => {
                                                    setTitle(event.target.value)
                                                }} />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-1 text-sm font-semibold">
                                                <p>Project Info</p>
                                            </div>
                                            <textarea defaultValue={val.projectInfo} name="" id="" maxLength="250" cols="30" rows="10" className="resize-none" placeholder="Input overview" onChange={(event) => {
                                                setInfo(event.target.value)
                                            }} ></textarea>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <p className="Time text-sm font-semibold">Project Brief</p>
                                            <Editor
                                                apiKey="t49ii0efod7e9c06izeuljkk12vhazn02qx773vac1yq51yt"
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                initialValue={val.projectBrief}
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

                                        <div className="flex flex-col gap-2 w-1/2">
                                            <p className="text-sm font-semibold">Project File</p>
                                            <input className="w-full"
                                                type="file"
                                                id="ProjectFile"
                                                accept=".zip,.rar"
                                                required
                                                onChange={(event) => {
                                                    setProjectFile(event.target.files[0])
                                                }} />
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <p className="text-sm font-semibold">Programming Language</p>
                                            <input className="w-full"
                                                type="text"
                                                maxLength="50"
                                                defaultValue={val.programmingLanguage}
                                                onChange={(event) => {
                                                    setLanguage(event.target.value)
                                                }} />
                                        </div>

                                        <p className="color-red-1 text-center font-medium">{errorMessage}</p>
                                        <p onClick={submit} className="text-white bg-blue-1 text-center px-4 py-2 rounded-lg cursor-pointer">Update Project</p>
                                    </div>
                                }
                            )
                        }
                    </section>
                </div>
            </div>
        </>
    )
}

export default EditProject