import React from "react";
import { MDBInput, MDBBtn, MDBCol } from "mdbreact";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './sign-in.styles.scss';

const usersJson = {
  description: "Login and passwords of users",
  users: {
    guest: {
      email: "guest",
      password: "guest",
      type: "user"
    },
    admin: {
      email: "admin@admin",
      password: "adminpassword",
      type: "admin"
    }
  }
};

class SignInPage extends React.Component {
  state = {
    email: "",
    password: "",
    usersJson: {}
  };
  componentDidMount() {
    this.setState({ usersJson });
  }

  getLoginData = (value, type) =>
    this.setState({
      [type]: value
    });

  onFormSubmit = e => {
    e.preventDefault();
    const { usersJson, email, password } = this.state;
    const filteremail = Object.keys(usersJson.users).filter(
      e => e === email
    );
    if (
      filteremail.length > 0 &&
      usersJson.users[email].password === password
    ) {
      this.props.history.push("user/loggedin");
      window.localStorage.setItem(
        "user",
        JSON.stringify(usersJson.users[email])
      );
    } else {
      alert("Wrong login or password");
    }
  };
  render() {
    return (
      <Router>
        <div className="center">
          <MDBCol size="3">
            <form onSubmit={this.onFormSubmit}>
              <h2 className="h5 text-center mb-4">Sign in</h2>
              <div className="grey-text">
                <MDBInput
                  label="Type your email"
                  icon="envelope"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  getValue={value => this.getLoginData(value, "email")}
                />
                <MDBInput
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                  getValue={value => this.getLoginData(value, "password")}
                />
              </div>
              <div className="text-center">
                <MDBBtn type="submit" onClick={this.onFormSubmit}>
                  Login
                </MDBBtn>
              </div>

              <p>Don't have an account? <Link className='register' to='/register'> Register here </Link></p>
            </form>
          </MDBCol>
        </div>
      </Router>
    );
  }
}

export default withRouter(SignInPage);
