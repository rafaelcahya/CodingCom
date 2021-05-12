import React from 'react'
import Sidebar from './admin-major/Sidebar'

function InputJobs() {
    return (
        <>
            <div className="flex">
                <Sidebar/>
                <div className="jobform ml-80 m-5 p-8 flex flex-col gap-1 bg-white rounded-2xl border border-gray-300 w-2/5" >
                    <section>
                        <div className="submit-box flex flex-col gap-10">
                            <div className="flex flex-col gap-3">
                                <p className="text-lg font-semibold">Post a job</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Company logo</p>
                                <ImageUpload/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Company name</p>
                                <input type="text" placeholder="Input Job title"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Job title</p>
                                <input type="text" placeholder="Input Job title"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Job location</p>
                                <input type="text" placeholder="Input Job location"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Employment type</p>
                                <select name="" id="">
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
                                <textarea name="" id="" maxLength="250" cols="30" rows="10" className="resize-none"></textarea>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">URL for apply</p>
                                <input type="text" placeholder="Input URL"/>
                            </div>
                            <p className="color-red-1 text-center font-medium">errorMessage</p>
                            <p className="text-white bg-blue-1 text-center px-4 py-2 rounded-lg cursor-pointer">Submit feedback</p>
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
        this.state = {file: '',imagePreviewUrl: ''};
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
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} alt="" className="image-preview transform hover:scale-105 duration-300 rounded-xl"/>);
        } else {
            $imagePreview = (<div className="text-xs color-black-2 font-medium">Please select an Image for Preview</div>);
        }

        return (
            <div className="previewComponent">
                <form onSubmit={(e)=>this._handleSubmit(e)}>
                    <input className="w-full mb-5"
                    type="file" 
                    accept=".svg,.png,.jpg,.jpeg,.psd,.tiff,.bmp,.hdr,.webp"
                    onChange={(e)=>this._handleImageChange(e)} />
                </form>
                <div style={{width: "300px"}}>
                    {$imagePreview}
                </div>
            </div>
        )
    }
}
