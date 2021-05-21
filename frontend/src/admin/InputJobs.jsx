import React, { useState } from 'react'
import Axios from 'axios'
import Sidebar from './admin-major/Sidebar'

function InputJobs() {
    const [job, setJob] = useState("")
    const [file, setFile] = useState([])
    const [companyName, setCompanyName] = useState("")
    const [companyEmail, setCompanyEmail] = useState("")
    const [overview, setOverview] = useState("")
    const [location, setLocation] = useState("")
    const [type, setType] = useState("")
    const [des, setDes] = useState("")
    const [url, setUrl] = useState("")
    const [createAt, setCreateAt] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    window.onload = setTimeout(function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        setCreateAt(date)
    }, 500)

    const submit = () => {
        const fd = new FormData();
        fd.append('fileUpload', file)
        fd.append('job', job)
        fd.append('des', des)
        fd.append('companyName', companyName)
        fd.append('companyEmail', companyEmail)
        fd.append('overview', overview)
        fd.append('location', location)
        fd.append('type', type)
        fd.append('url', url)
        fd.append('createAt', createAt)
        Axios.post("http://localhost:3001/jobs/jobs", fd).then((response) => {
            console.log(response)
            setErrorMessage(response.data.message)

        })
        console.log(file)
    }

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="jobform ml-80 m-5 p-8 flex flex-col gap-1 bg-white rounded-2xl border border-gray-300 w-2/5" >
                    <section>
                        <div className="submit-box flex flex-col gap-10">
                            <div className="flex flex-col gap-3">
                                <p className="text-lg font-semibold">Post a job</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Company logo</p>
                                <input className="w-full mb-5"
                                    type="file"
                                    accept=".svg,.png,.jpg,.jpeg,.psd,.tiff,.bmp,.hdr,.webp"
                                    name="fileUpload"
                                    onChange={(event) => {
                                        setFile(event.target.files[0])
                                    }} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Company name</p>
                                <input type="text" placeholder="Input Job title" onChange={(event) => {
                                            setCompanyName(event.target.value)
                                        }} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Company email</p>
                                <input type="text" placeholder="Input Job title" onChange={(event) => {
                                            setCompanyEmail(event.target.value)
                                        }} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-1 text-sm font-semibold">
                                    <p>Overview</p>
                                </div>
                                <p className="text-xs color-black-2 font-medium">Add overview</p>
                                <textarea name="" id="" maxLength="250" cols="30" rows="10" className="resize-none" onChange={(event) => {
                                            setOverview(event.target.value)
                                        }} ></textarea>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Job title</p>
                                <input type="text" placeholder="Input Job title" onChange={(event) => {
                                            setJob(event.target.value)
                                        }} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Job location</p>
                                <input type="text" placeholder="Input Job location" onChange={(event) => {
                                            setLocation(event.target.value)
                                        }} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Employment type</p>
                                <select name="" id="" onChange={(event) => {
                                            setType(event.target.value)
                                        }} >
                                    <option value="">Select employment type</option>
                                    <option value="Fulltime">Fulltime</option>
                                    <option value="Parttime">Parttime</option>
                                    <option value="Internship">Internship</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-1 text-sm font-semibold">
                                    <p>Job description</p>
                                </div>
                                <p className="text-xs color-black-2 font-medium">Add a job description</p>
                                <textarea name="" id="" maxLength="250" cols="30" rows="10" className="resize-none" onChange={(event) => {
                                            setDes(event.target.value)
                                        }} ></textarea>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">URL for apply</p>
                                <input type="text" placeholder="Input URL" onChange={(event) => {
                                            setUrl(event.target.value)
                                        }} />
                            </div>
                            <p className="color-red-1 text-center font-medium">{errorMessage}</p>
                            <p onClick={submit} className="text-white bg-blue-1 text-center px-4 py-2 rounded-lg cursor-pointer">Submit feedback</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default InputJobs

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: '', imagePreviewUrl: '' };
    }

    _handleSubmit(e) {
        e.preventDefault();
        console.log('handle uploading-', this.state.file);
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} alt="" className="image-preview transform hover:scale-105 duration-300 rounded-xl" />);
        } else {
            $imagePreview = (<div className="text-xs color-black-2 font-medium">Please select an Image for Preview</div>);
        }

        return (
            <div className="previewComponent">
                <form onSubmit={(e) => this._handleSubmit(e)}>
                    <input className="w-full mb-5"
                        type="file"
                        accept=".svg,.png,.jpg,.jpeg,.psd,.tiff,.bmp,.hdr,.webp"
                        onChange={(e) => this._handleImageChange(e)} />
                </form>
                <div style={{ width: "300px" }}>
                    {$imagePreview}
                </div>
            </div>
        )
    }
}
