import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  render() {
    const username = this.props.authFormdata;
    const user_img = this.props.authFormdata;
    const password = this.props.authFormdata;
    return (
      <div id="register-page">
        <div id="register-form-div">
          <form onSubmit={this.props.handleRegister} id="register-form">
            <h5>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo assumenda vero, cum sequi quam, sint iusto praesentium fugit perferendis amet earum repellendus laudantium numquam fuga rerum quo nihil hic quas?"</h5>
          <input type="text" name="username" placeholder="User name..." value={username} onChange={this.props.handleChange}/>
          <input type="text" name="user_img" placeholder="Profile picture..." value={user_img} onChange={this.props.handleChange}/>
          <input type="password" name="password" placeholder="Password(atleast 6 characters)..." value={password} onChange={this.props.handleChange}/>
            <Link to="/"><button>Register</button></Link>
            <img src="https://i.imgur.com/ChiijlH.png" alt="drawing of books"/>
          </form>
        </div>
      </div>
    )
    } 
}

export default Register;