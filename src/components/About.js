import React from 'react'

class About extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    fullname: '',
    emailaddress: ''
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleChange2 = this.handleChange2.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event) {    
  this.setState({
  fullname: event.target.value
});  }

handleChange2(event) {    
  this.setState({
  emailaddress: event.target.value
});  }
handleSubmit(event) {
  alert('Thanks '  + this.state.fullname + ' for registering! Soon we will contact you by ' + this.state.emailaddress );
  event.preventDefault();
}

render() {
  return (
    <div className="About" id="about">
        <div className="About_forms">
            <h1 className="About_h1">Get 1 month subscription free NOW</h1>
            <form id="survey-form" className="About_info" name= "details">
                <div className="About_inputs">
                    <label id="name-label" > Full Name </label> 
                    <input type="text" id="name" placeholder="Enter your full name" required value={this.state.value} onChange={this.handleChange}/>
                    <label id="name-label" > Date of Birth  </label> 
                    <input type="date" id="name" placeholder="Enter your date of birth" required />
                    <label id="email-label" > Email </label>
                    <input type="email" id="email" placeholder="Enter your email" required value={this.state.value} onChange={this.handleChange2}/>
                    <label id="email-label"> Phone Number </label>
                    <input type="number" id="phone" placeholder="Enter your phone number" required className="About_input" />
                    <button type="submit" className="About_button" onClick={this.handleSubmit}>Submit <span className="about_btnspan">{">>"}</span></button>
                </div>
            </form>
        </div>
    </div>
  )
}
}

export default About
