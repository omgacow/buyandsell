import React from 'react';
import axios from 'axios';

class Email extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  handleChange (event) {
    this.setState({
      text: event.target.value
    })
  }

  sendEmail () {
    var state = this;
    console.log('owner email', this.props.item.owner_email);
    console.log('user email', this.props.email)
    console.log('send email');
    axios.post("http://localhost:1337/email", {
      owner_email: state.props.item.owner_email,
      user_email: state.props.email,
      text: state.state.text
    }).then(function(response) {
      console.log('sent to database')
    }).catch(function(error) {
      console.error('error');
    })
  }

  render() {
    return(
      <div>
        <div>
          <h4> Send Email to the seller</h4>
          <input type='text' value={this.state.text} onChange={this.handleChange} />
          <button onClick={this.sendEmail}>Send</button>
        </div>
      </div>
    )
  }
}

export default Email;