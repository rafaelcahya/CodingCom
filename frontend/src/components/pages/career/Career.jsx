import React, { Component } from 'react'
import Footer from '../../major/Footer'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import CV from './CV,'

export class Career extends Component {
    state = {
        title: '',
        image: '',
        fullname: '',
        position: '',
        phone: '',
        address: '',
        careerObj: '',
        college: '',
        position: '',
        position: '',
        postSubmitted: false
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    submitPost = (e) => {
        if(!this.state.title){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
        }
    }
    render() {
        return (
            <>
                {  !this.state.postSubmitted ? 
                    (
                        <div>
                            <NavbarLogin/>
                            <NavbarMobile/>
                            <div className="">
                                <form className="cv-form flex flex-col items-center gap-5" method="post">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-1 text-sm font-semibold">
                                            <p>Image</p>
                                        </div>
                                        <ImageUpload/>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm font-semibold">Fullname</p>
                                        <input onChange={this.onChange('fullname')} name="fullname" type="text" placeholder="Input fullname" className="rounded-lg" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm font-semibold">Position you want to apply for</p>
                                        <input onChange={this.onChange('position')} name="position" type="text" placeholder="Input position you want to apply for" className="rounded-lg" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm font-semibold">Email</p>
                                        <input onChange={this.onChange('email')} name="email" type="text" placeholder="Input email" className="rounded-lg" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm font-semibold">Phone number</p>
                                        <input onChange={this.onChange('phone')} name="phone" type="text" placeholder="Input phone number" className="rounded-lg" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm font-semibold">Address</p>
                                        <textarea onChange={this.onChange('address')} name="address" id="" cols="30" placeholder="Input address" className="rounded-lg" rows="3"></textarea>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm font-semibold">Career objective</p>
                                        <textarea onChange={this.onChange('careerObj')} name="careerObj" id="" cols="30" placeholder="Input career objective" className="rounded-lg" rows="3"></textarea>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm font-semibold">College or university name</p>
                                        <input onChange={this.onChange('college')} name="college" type="text" placeholder="Input college or university name" className="rounded-lg" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-sm font-semibold">Major</p>
                                        <input onChange={this.onChange('major')} name="major" type="text" placeholder="Input major" className="rounded-lg" />
                                    </div>
                                    <div className="flex gap-10">
                                        <div className="flex flex-col gap-2">
                                            <p className="text-sm font-semibold">Start year</p>
                                            <input onChange={this.onChange('major')} name="major" type="text" placeholder="Input major" className="rounded-lg" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <p className="text-sm font-semibold">End year</p>
                                            <input onChange={this.onChange('major')} name="major" type="text" placeholder="Input major" className="rounded-lg" />
                                        </div>
                                    </div>
                                    <div>
                                        <button type="button" onClick={this.submitPost} className="bg-blue-1 text-white">See your certificate</button>
                                    </div>
                                </form>
                            </div>
                            <Footer/>
                        </div>
                    ) : (
                        <CV title={this.state.title} />
                )   
            }
            </>
        )
    }
}

export default Career

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
            $imagePreview = (<img src={imagePreviewUrl} alt="" className="image-preview transform hover:scale-125 duration-300 rounded-xl"/>);
        } else {
            $imagePreview = (<div className="text-xs color-black-2 font-medium">Please select an Image for Preview</div>);
        }

        return (
            <div className="previewComponent">
                <form onSubmit={(e)=>this._handleSubmit(e)}>
                    <input className="w-full mb-5"
                    type="file" 
                    accept=".jpg,.jpeg,.png"
                    onChange={(e)=>this._handleImageChange(e)} />
                </form>
                <div style={{width: "250px"}}>
                    {$imagePreview}
                </div>
            </div>
        )
    }
}

