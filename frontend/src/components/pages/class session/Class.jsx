import React, { Component } from 'react'
import Footer from '../../major/Footer'
import NavbarLogin from '../../major/NavbarLogin'
import NavbarMobile from '../../major/NavbarMobile'
import ClassComp from './ClassComp'

export class Class extends Component {
    copyToClipboard() {
        const str = document.getElementById('item-to-copy').innerText;
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }
    render() {
        return (
            <>
                <NavbarLogin/>
                <NavbarMobile/>
                
                <div className="mx-8 sm:mx-24 md:mx-40 lg:mx-52 xl:mx-72 mt-32 lg:mt-20">
                    <div className="class-header">
                        <p className="color-blue-1 font-semibold text-3xl mb-5">Class Session</p>
                        <p>Here you can learn directly with a mentor via zoom. Just ask your question without hesitation according to the topic you choose. Mentors will be ready to help your learning process anytime and anywhere.</p>
                    </div>
                    <div>
                    <div>
                        <p id="item-to-copy" className="hidden">http://meet.google.com/new</p>
                        <button onClick={this.copyToClipboard}>Copy</button>
                    </div>
                    </div>
                    <div className="flex flex-col gap-10 my-10">
                        <ClassComp
                            class="UI/UX Consultation Class"
                            desc="Ask your questions about UI/UX. Select the class you want below"
                            classname1="Consultation Class 1"
                            zoom1="https://zoom.us/wc/73419167552/start"
                            classname2="Consultation Class 2"
                            classname3="Consultation Class 3"
                        />
                        <ClassComp
                            class="Frontend Consultation Class"
                            desc="Ask your questions about HTML, CSS, and Javascript. Select the class you want below"
                            classname1="Consultation Class 1"
                            classname2="Consultation Class 2"
                            classname3="Consultation Class 3"
                        />
                        <ClassComp
                            class="CSS Framework Consultation Class"
                            desc="Ask your questions about CSS Framework. Select the class you want below"
                            classname1="Consultation Class 1"
                            classname2="Consultation Class 2"
                            classname3="Consultation Class 3"
                        />
                        <ClassComp
                            class="Javascript Library and Framework Consultation Class"
                            desc="Ask your questions about Javascript Library and Framework. Select the class you want below"
                            classname1="Consultation Class 1"
                            classname2="Consultation Class 2"
                            classname3="Consultation Class 3"
                        />
                        <ClassComp
                            class="Backend Consultation Class"
                            desc="Ask your questions about Backend. Select the class you want below"
                            classname1="Consultation Class 1"
                            classname2="Consultation Class 2"
                            classname3="Consultation Class 3"
                        />
                    </div>
                </div>

                <Footer/>
            </>
        )
    }
}

export default Class
