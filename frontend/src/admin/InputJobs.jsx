import React from 'react'
import Sidebar from './admin-major/Sidebar'

function InputJobs() {
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar/>
                <div className="overflow-hidden ml-80 m-5 p-8 flex flex-col gap-1 bg-white rounded-2xl w-full" >
                    <section>
                        <div className="submit-box flex flex-col gap-10">
                            <div className="flex flex-col gap-3">
                                <p className="font-semibold text-3xl">Give us your feedback</p>
                                <p className="font-medium text-sm">Tell us what you love, tell us what you hate, and tell us what you want to see in the next update.</p>
                            </div>
                            <div className="flex gap-10 w-full">
                                <div className="w-1/4 flex flex-col gap-2">
                                    <p className="text-sm font-semibold">Company logo</p>
                                    <ImageUpload/>
                                </div>
                                <div className="w-3/4 flex flex-col gap-2">
                                    <p className="text-sm font-semibold">Company name</p>
                                    <input type="text" placeholder="Input Job title"/>
                                </div>
                            </div>
                            <div className="flex gap-10 w-full">
                                <div className="w-1/2 flex flex-col gap-2">
                                    <p className="text-sm font-semibold">Job title</p>
                                    <input type="text" placeholder="Input Job title"/>
                                </div>
                                
                                <div className="w-1/2 flex flex-col gap-2">
                                    <p className="text-sm font-semibold">Job location</p>
                                    <input type="text" placeholder="Input Job title"/>
                                </div>
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
                <div style={{width: "400px"}}>
                    {$imagePreview}
                </div>
            </div>
        )
    }
}
