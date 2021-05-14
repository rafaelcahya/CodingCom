import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import Axios from 'axios'

function FeedbackForm(props) {
    const urlname = props.match.params.name
    const [name,setName] = useState("")
    const [fullname,setFullname] = useState("")
    const [email,setEmail] = useState("")
    const [about,setAbout] = useState("")
    const [des,setDes] = useState("")
    const [createAt,setCreateAt] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    let x
    const [valueList, setValueList] = useState([])
    const [file, setFile] = useState([])

    window.onload = setTimeout(function () {
        x = localStorage.getItem("name");
        setName(x)
        var today = new Date();
        if(today.getMonth()+1<=10){
        var date = today.getFullYear() + '-' + "0" +(today.getMonth() + 1) + '-' +today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        }else {
        var date = today.getFullYear() + '-' +(today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        }
        var dateTime = time + ' ' + date;
        setCreateAt(dateTime)
    }, 500)

    useEffect(() => {
        Axios.get("http://localhost:3001/user/userById/" + urlname).then((response) => {
            setValueList(response.data)
        })
    }, []);

    const submit = () => {
        const fd = new FormData();
        fd.append('fileUpload', file)
        fd.append('fullname',fullname)
        fd.append('email',email)
        fd.append('about',about)
        fd.append('des',des)
        fd.append('name',name)
        fd.append('createAt',createAt)
        Axios.post("http://localhost:3001/feedback/feedback", fd).then((response) => {
            console.log(response)
            setErrorMessage(response.data.message)

        })
        console.log(file)
    }

    // {
    //     valueList.map(
    //         (val) => {
    //             return 
    //         }
    //     )
    // }

    return (
        <>
            <nav className="flex justify-between items-center px-16 xl:px-32 py-5">
                <Link to="/">
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        <p>Back to home</p>
                    </div>
                </Link>
            </nav>
            <section className="flex flex-col items-center">
                {
                    valueList.map(
                        (val) => {
                            return <form action="" className="submit-box flex flex-col gap-10 w-3/4 md:w-1/2 lg:w-2/5 mt-20">
                                <div className="flex flex-col gap-3">
                                    <p className="font-semibold text-3xl">Give us your feedback</p>
                                    <p className="font-medium text-sm">Tell us what you love, tell us what you hate, and tell us what you want to see in the next update.</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm font-semibold">Fullname</p>
                                    <input type="text" defaultValue={val.fullname} placeholder="Input fullname" onChange={(event) => {
                            setFullname(event.target.value)
                        }}/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm font-semibold">Email</p>
                                    <input type="text" defaultValue={val.email} placeholder="Input email" onChange={(event) => {
                            setEmail(event.target.value)
                        }}/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm font-semibold">About</p>
                                    <select name="" id="" onChange={(event) => {
                            setAbout(event.target.value)
                        }}>
                                        <option>Select a part</option>
                                        <option value="Homepage">Homepage</option>
                                        <option value="Pricing">Pricing</option>
                                        <option value="Tutorial">Tutorial</option>
                                        <option value="Challenges">Challenges</option>
                                        <option value="Consultation">Class Consultation</option>
                                        <option value="Session">Class Session</option>
                                        <option value="News">News</option>
                                        <option value="Career">Career</option>
                                        <option value="Bootcamp">Bootcamp</option>
                                        <option value="Community">Community</option>
                                        <option value="Subscribe">Subscribe</option>
                                        <option value="Theme">Theme</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-1 text-sm font-semibold">
                                        <p>Image</p>
                                        <p className="text-xs color-black-2 font-medium">(Optional)</p>
                                    </div>
                                    <input className="w-full mb-5"
                                        type="file"
                                        name="fileUpload"
                                        onChange={(event) => {
                                            setFile(event.target.files[0])
                                        }} />
                                    {/* <ImageUpload /> */}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="flex items-center gap-1 text-sm font-semibold">Description</p>
                                    <p className="text-xs color-black-2 font-medium">Describe any suggestions such as design, user experience, system errors, etc.</p>
                                    <textarea name="" id="" maxLength="250" cols="30" rows="10" className="resize-none" onChange={(event) => {
                            setDes(event.target.value)
                        }}></textarea>
                                </div>
                                <p className="color-red-1 text-center font-medium">{errorMessage}</p>
                                <p onClick={submit} className="text-white bg-blue-1 text-center px-4 py-2 rounded-lg cursor-pointer">Submit feedback</p>
                            </form>
                        }
                    )
                }

            </section>
            <Footer />
        </>
    )
}

export default FeedbackForm

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

        // const fd = new FormData();
        // fd.append('fileUpload', file, file.name)
        // Axios.post("http://localhost:3001/feedback/feedback", fd).then((response) => {
        //     console.log(response)
        //     // setErrorMessage(response.data.message)

        // })
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} alt="" className="image-preview transform hover:scale-150 duration-300 rounded-xl" />);
        } else {
            $imagePreview = (<div className="text-xs color-black-2 font-medium">Please select an Image for Preview</div>);
        }

        return (
            <div className="previewComponent">
                <form onSubmit={(e) => this._handleSubmit(e)}>
                    <input className="w-full mb-5"
                        type="file"
                        name="fileUpload"
                        onChange={(e) => this._handleImageChange(e)} />
                </form>
                <div style={{ width: "400px" }}>
                    {$imagePreview}
                </div>
            </div>
        )
    }
}
