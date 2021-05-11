import React, { Component } from 'react'
import Footer from '../../major/Footer'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import CV from './CV,'

export class Career extends Component {
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
                            <div>
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
                        <CV title={this.state.title} />
                )   
            }
            </>
        )
    }
}

export default Career
