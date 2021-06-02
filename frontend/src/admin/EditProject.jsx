import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Sidebar from './admin-major/Sidebar'

function EditProject(props) {
    const urlid = props.match.params.id
    const [id, setId] = useState("")
    const [file, setFile] = useState([])
    const [title, setTitle] = useState("")
    const [info, setInfo] = useState("")
    const [brief, setBrief] = useState("")
    const [updateAt, setUpdateAt] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [valueList,setValueList] = useState([])

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
        Axios.get("http://localhost:3001/project/projectById/"+urlid).then((response) => {
            setValueList(response.data)
        })
    },[]);

    const submit = () => {
        const fd = new FormData();
        fd.append('fileUpload', file)
        fd.append('id', id)
        fd.append('title', title)
        fd.append('info', info)
        fd.append('brief', brief)
        fd.append('updateAt', updateAt)
        Axios.post("http://localhost:3001/project/editProject", fd).then((response) => {
            console.log(response)
            setErrorMessage(response.data.message)

        })
        console.log(file)
    }

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="jobform ml-72 m-5 p-8 flex flex-col gap-1 bg-white rounded-lg border border-gray-300 w-full">
                    <section>
                    {
                valueList.map(
                    (val) => {
                        return <div className="job-box flex flex-col gap-10">
                            <div className="flex flex-col gap-3">
                                <p className="text-xl font-semibold">Post a Project</p>
                            </div>
                            <div className="flex justify-between items-center gap-10 w-full">
                                <div className="flex flex-col gap-2 w-1/2">
                                    <p className="text-sm font-semibold">Title</p>
                                    <input type="text" placeholder="Input Job title" defaultValue={val.projectTitle} onChange={(event) => {
                                                setTitle(event.target.value)
                                            }} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Image Project</p>
                                <input className="w-full"
                                    type="file"
                                    accept=".svg,.png,.jpg,.jpeg,.psd,.tiff,.bmp,.hdr,.webp"
                                    name="fileUpload"
                                    defaultValue = {val.image}
                                    onChange={(event) => {
                                        setFile(event.target.files[0])
                                    }} />
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
                                <div className="flex items-center gap-1 text-sm font-semibold">
                                    <p>Project Brief</p>
                                </div>
                                <textarea defaultValue={val.projectBrief} name="" id="" maxLength="250" cols="30" rows="10" className="resize-none" placeholder="Input overview" onChange={(event) => {
                                            setBrief(event.target.value)
                                        }} ></textarea>
                            </div>
                            
                            <p className="color-red-1 text-center font-medium">{errorMessage}</p>
                            <p onClick={submit} className="text-white bg-blue-1 text-center px-4 py-2 rounded-lg cursor-pointer">Submit Project</p>
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