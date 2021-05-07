import React, { Component } from 'react'
import Footer from '../../../../../major/Footer';
import NavbarLogin from '../../../../../major/NavbarLogin';
import NavbarMobile from '../../../../../major/NavbarMobile';
import PDFVue from '../CertiVue/PDFVue';

export class CertificateVue extends Component {
    state = {
        title: '',
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
                            <div className="flex flex-col gap-20">
                                <div className="flex flex-col items-center gap-2 mt-32 lg:mt-10">
                                    <p className="text-3xl font-semibold">Congratulations</p>
                                    <p>You have finished the project well. you can download your certificate</p>
                                </div>
                                <form className="certificate-form flex flex-col items-center gap-5" method="post">
                                    <div>
                                        <input onChange={this.onChange('title')} name="title" type="text" placeholder="Input fullname" className="rounded-lg" />
                                    </div>
                                    <div >
                                        <button type="button" onClick={this.submitPost} className="bg-blue-1 text-white">See your certificate</button>
                                    </div>
                                </form>
                            </div>
                            <Footer/>
                        </div>
                        ) : (
                        <PDFVue title={this.state.title} />
                    )
                }
            </>
        )
    }
}

export default CertificateVue
