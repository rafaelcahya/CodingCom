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
        major: '',
        StartYear: '',
        EndYear: '',
        activity: '',
        college2: '',
        major2: '',
        StartYear2: '',
        EndYear2: '',
        activity2: '',
        college3: '',
        major3: '',
        StartYear3: '',
        EndYear3: '',
        activity3: '',
        college4: '',
        major4: '',
        StartYear4: '',
        EndYear4: '',
        activity4: '',
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
                                    <p className="text-xl">Education</p>
                                    <Accordion muitipleOpen={true}>
                                        <AccordionList expanded={false}  id="1" key="1" headTitle="College or university name">
                                            <div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">College or university name</p>
                                                    <input onChange={this.onChange('college1')} name="college1" type="text" placeholder="Input college or university name" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Major</p>
                                                    <input onChange={this.onChange('major1')} name="major1" type="text" placeholder="Input major" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">GPA</p>
                                                    <input onChange={this.onChange('gpa1')} name="gpa1" type="text" placeholder="Input GPA" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Start year</p>
                                                    <input onChange={this.onChange('StartYear1')} name="StartYear1" type="text" placeholder="Input start year" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">End year</p>
                                                    <input onChange={this.onChange('EndYear1')} name="EndYear1" type="text" placeholder="Input end year" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Activity</p>
                                                    <input onChange={this.onChange('activity1')} name="activity1" type="text" placeholder="Input major" className="rounded-lg" />
                                                </div>
                                            </div>
                                        </AccordionList>
                                    </Accordion>
                                    <Accordion muitipleOpen={true}>
                                        <AccordionList expanded={false}  id="1" key="1" headTitle="College or university name">
                                            <div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">College or university name</p>
                                                    <input onChange={this.onChange('college2')} name="college2" type="text" placeholder="Input college or university name" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Major</p>
                                                    <input onChange={this.onChange('major2')} name="major2" type="text" placeholder="Input major" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">GPA</p>
                                                    <input onChange={this.onChange('gpa2')} name="gpa2" type="text" placeholder="Input GPA" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Start year</p>
                                                    <input onChange={this.onChange('StartYear2')} name="StartYear2" type="text" placeholder="Input start year" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">End year</p>
                                                    <input onChange={this.onChange('EndYear2')} name="EndYear2" type="text" placeholder="Input end year" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Activity</p>
                                                    <input onChange={this.onChange('activity2')} name="activity2" type="text" placeholder="Input major" className="rounded-lg" />
                                                </div>
                                            </div>
                                        </AccordionList>
                                    </Accordion>
                                    <Accordion muitipleOpen={true}>
                                        <AccordionList expanded={false}  id="1" key="1" headTitle="College or university name">
                                            <div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">College or university name</p>
                                                    <input onChange={this.onChange('college3')} name="college3" type="text" placeholder="Input college or university name" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Major</p>
                                                    <input onChange={this.onChange('major3')} name="major3" type="text" placeholder="Input major" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">GPA</p>
                                                    <input onChange={this.onChange('gpa3')} name="gpa3" type="text" placeholder="Input GPA" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Start year</p>
                                                    <input onChange={this.onChange('StartYear3')} name="StartYear3" type="text" placeholder="Input start year" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">End year</p>
                                                    <input onChange={this.onChange('EndYear3')} name="EndYear3" type="text" placeholder="Input end year" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Activity</p>
                                                    <input onChange={this.onChange('activity3')} name="activity3" type="text" placeholder="Input major" className="rounded-lg" />
                                                </div>
                                            </div>
                                        </AccordionList>
                                    </Accordion>
                                    <Accordion muitipleOpen={true}>
                                        <AccordionList expanded={false}  id="1" key="1" headTitle="College or university name">
                                            <div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">College or university name</p>
                                                    <input onChange={this.onChange('college4')} name="college4" type="text" placeholder="Input college or university name" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Major</p>
                                                    <input onChange={this.onChange('major4')} name="major4" type="text" placeholder="Input major" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">GPA</p>
                                                    <input onChange={this.onChange('gpa4')} name="gpa4" type="text" placeholder="Input GPA" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Start year</p>
                                                    <input onChange={this.onChange('StartYear4')} name="StartYear4" type="text" placeholder="Input start year" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">End year</p>
                                                    <input onChange={this.onChange('EndYear4')} name="EndYear4" type="text" placeholder="Input end year" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Activity</p>
                                                    <input onChange={this.onChange('activity4')} name="activity4" type="text" placeholder="Input major" className="rounded-lg" />
                                                </div>
                                            </div>
                                        </AccordionList>
                                    </Accordion>

                                    <p className="text-xl">Work Experience</p>
                                    <Accordion muitipleOpen={true}>
                                        <AccordionList expanded={false}  id="1" key="1" headTitle="Work Experience">
                                            <div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Position</p>
                                                    <input onChange={this.onChange('posExp1')} name="posExp1" type="text" placeholder="Input position" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Company name</p>
                                                    <input onChange={this.onChange('company1')} name="company1" type="text" placeholder="Input company name" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">GPA</p>
                                                    <input onChange={this.onChange('gpa1')} name="gpa1" type="text" placeholder="Input GPA" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Start year</p>
                                                    <input onChange={this.onChange('StartYear1')} name="StartYear1" type="text" placeholder="Input start year" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">End year</p>
                                                    <input onChange={this.onChange('EndYear1')} name="EndYear1" type="text" placeholder="Input end year" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Activity</p>
                                                    <input onChange={this.onChange('activity1')} name="activity1" type="text" placeholder="Input major" className="rounded-lg" />
                                                </div>
                                            </div>
                                        </AccordionList>
                                    </Accordion>
                                    <Accordion muitipleOpen={true}>
                                        <AccordionList expanded={false}  id="1" key="1" headTitle="College or university name">
                                            <div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">College or university name</p>
                                                    <input onChange={this.onChange('college2')} name="college2" type="text" placeholder="Input college or university name" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Major</p>
                                                    <input onChange={this.onChange('major2')} name="major2" type="text" placeholder="Input major" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">GPA</p>
                                                    <input onChange={this.onChange('gpa2')} name="gpa2" type="text" placeholder="Input GPA" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Start year</p>
                                                    <input onChange={this.onChange('StartYear2')} name="StartYear2" type="text" placeholder="Input start year" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">End year</p>
                                                    <input onChange={this.onChange('EndYear2')} name="EndYear2" type="text" placeholder="Input end year" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Activity</p>
                                                    <input onChange={this.onChange('activity2')} name="activity2" type="text" placeholder="Input major" className="rounded-lg" />
                                                </div>
                                            </div>
                                        </AccordionList>
                                    </Accordion>
                                    <Accordion muitipleOpen={true}>
                                        <AccordionList expanded={false}  id="1" key="1" headTitle="College or university name">
                                            <div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">College or university name</p>
                                                    <input onChange={this.onChange('college3')} name="college3" type="text" placeholder="Input college or university name" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Major</p>
                                                    <input onChange={this.onChange('major3')} name="major3" type="text" placeholder="Input major" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">GPA</p>
                                                    <input onChange={this.onChange('gpa3')} name="gpa3" type="text" placeholder="Input GPA" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Start year</p>
                                                    <input onChange={this.onChange('StartYear3')} name="StartYear3" type="text" placeholder="Input start year" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">End year</p>
                                                    <input onChange={this.onChange('EndYear3')} name="EndYear3" type="text" placeholder="Input end year" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Activity</p>
                                                    <input onChange={this.onChange('activity3')} name="activity3" type="text" placeholder="Input major" className="rounded-lg" />
                                                </div>
                                            </div>
                                        </AccordionList>
                                    </Accordion>
                                    <Accordion muitipleOpen={true}>
                                        <AccordionList expanded={false}  id="1" key="1" headTitle="College or university name">
                                            <div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">College or university name</p>
                                                    <input onChange={this.onChange('college4')} name="college4" type="text" placeholder="Input college or university name" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Major</p>
                                                    <input onChange={this.onChange('major4')} name="major4" type="text" placeholder="Input major" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">GPA</p>
                                                    <input onChange={this.onChange('gpa4')} name="gpa4" type="text" placeholder="Input GPA" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Start year</p>
                                                    <input onChange={this.onChange('StartYear4')} name="StartYear4" type="text" placeholder="Input start year" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">End year</p>
                                                    <input onChange={this.onChange('EndYear4')} name="EndYear4" type="text" placeholder="Input end year" className="rounded-lg" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-sm font-semibold">Activity</p>
                                                    <input onChange={this.onChange('activity4')} name="activity4" type="text" placeholder="Input major" className="rounded-lg" />
                                                </div>
                                            </div>
                                        </AccordionList>
                                    </Accordion>
        
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

class Accordion extends React.Component {
    constructor(props){
      super(props)
  
      this.state = {
        activedIndex: this.getID(),
        acdTransition: false
      }
    }
  
    getID(){
      let expandedIndex = [];
      let children = this.props.children;
  
      React.Children.map(children, (items, i) => {
        if(items.props.expanded){
          expandedIndex.push(items.props.id);
        }
      });
  
      return expandedIndex;
    }
  
    addTransition(){
      if(this.state.acdTransition === true){
        return 'acd-transition'
      } else {
        return ""
      }
    }
  
    handleClick(acdID){
      let muitipleOpen = this.props.muitipleOpen;
      let activedList = [...this.state.activedIndex];
      let activedItem = this.state.activedIndex.indexOf(acdID);
  
      if(muitipleOpen){
        if(activedItem !== -1){
          activedList.splice(activedItem, 1);
          this.setState({activedIndex: activedList});
    
        } else {
          this.setState({activedIndex: [...activedList, acdID]});
        }
  
      } else {
        if(activedItem !== -1){
          activedList.splice(activedItem, 1);
          this.setState({activedIndex: activedList});
    
        } else {
          this.setState({activedIndex: [acdID]});
        }
      }
  
      if(this.state.acdTransition === false){
        this.setState({acdTransition: true});
      }
    }
  
    isExpanded(acdID){
      if(this.state.activedIndex.includes(acdID)){
        return 'actived'
      } else {
        return ''
      }
    }
  
    render() {
      let childArr = this.props.children;
  
      if(childArr.length === undefined){
        childArr = [this.props.children];
      }
  
      const items = childArr.map((child, i) => {
        //let newIndex = i + 1;
        return React.cloneElement(child, {
          isExpanded: this.isExpanded.bind(this),
          handleClick: this.handleClick.bind(this),
          addTransition: this.addTransition.bind(this)
        });
      });
  
      return (
        <div className={`accordion-box`}>{items}</div>
      );
    }
  
  }
  
  class AccordionList extends React.Component {
    render() {
      return (
          <div className={`accordion-list ${this.props.isExpanded(this.props.id)} ${this.props.addTransition()}`}>
              <div className={`accordion-label`} 
                onClick={ () => { this.props.handleClick(this.props.id) } }>
                {this.props.headTitle} <span className="acd-arrow"></span>
              </div>
              <div className={`accordion-content`}>
                <div className="accordion-inner">{ this.props.children }</div>
              </div>
          </div>
        );
    }
  }