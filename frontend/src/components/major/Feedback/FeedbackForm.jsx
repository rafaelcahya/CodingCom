import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'

function FeedbackForm() {
    return (
        <>
            <nav className="flex justify-between items-center px-16 xl:px-32 py-5">
                <Link to="/bootcamp">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        <p>Back</p>
                    </div>
                </Link>
            </nav>
            <form action="" className="submit-box flex flex-col gap-10 mx-8 sm:mx-24 md:mx-40 lg:mx-72 mt-20">
                <p className="font-semibold text-2xl text-center my-5">Feedback form</p>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="w-full md:w-1/2 flex flex-col gap-2">
                        <p className="text-sm font-semibold">Fullname</p>
                        <input type="text" placeholder="Input fullname"/>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-2">
                        <p className="text-sm font-semibold">Email</p>
                        <input type="text" placeholder="Input email"/>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold">About</p>
                    <select name="" id="">
                        <option value="">Select a part</option>
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
                    <ImageUpload/>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="flex items-center gap-1 text-sm font-semibold">Description</p>
                    <p className="text-xs color-black-2 font-medium">Describe any suggestions such as design, user experience, system errors, etc.</p>
                    <textarea name="" id="" maxLength="250" cols="30" rows="10" className="resize-none"></textarea>
                </div>
                <p className="color-red-1 text-center font-medium">errorMessage</p>
                <p className="text-white bg-blue-1 text-center px-4 py-2 rounded-lg cursor-pointer">Submit feedback</p>
            </form>
            <Footer/>
        </>
    )
}

export default FeedbackForm

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
            $imagePreview = (<img src={imagePreviewUrl} alt="" className="image-preview transform hover:scale-150 duration-300 rounded-xl"/>);
        } else {
            $imagePreview = (<div className="text-xs color-black-2 font-medium">Please select an Image for Preview</div>);
        }

        return (
            <div className="previewComponent">
                <form onSubmit={(e)=>this._handleSubmit(e)}>
                    <input className="w-full mb-5" 
                    type="file" 
                    onChange={(e)=>this._handleImageChange(e)} />
                </form>
                <div style={{width: "400px"}}>
                    {$imagePreview}
                </div>
            </div>
        )
    }
}
