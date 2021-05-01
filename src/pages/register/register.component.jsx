import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './register.styles.scss';

class RegisterPage extends React.Component {

  userData;

  constructor(props) {
    super(props);

    this.onChangeDisplayName = this.onChangeDisplayName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  onChangeDisplayName(e) {
    this.setState({ displayName: e.target.value })
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value })
  }

  onChangeConfirmPassword(e) {
    this.setState({ confirmPassword: e.target.value })
  }

  handleChange = event => {
    const {name, value} = event.target;

    this.setState({[name]: value});
  };

  handleSubmit(e) {
    e.preventDefault();

    const {displayName, email, password, confirmPassword} = this.state;

    if(password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
  } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
     this.userData = JSON.parse(localStorage.getItem('user'));

     if (localStorage.getItem('user')) {
         this.setState({
             displayName: this.userData.displayName,
             email: this.userData.email,
             password: this.userData.password,
             confirmPassword: this.userData.confirmPassword
         })
     } else {
         this.setState({
           displayName: '',
           email: '',
           password: '',
           confirmPassword: ''
         })
     }
   }

   componentWillUpdate(nextProps, nextState) {
       localStorage.setItem('user', JSON.stringify(nextState));
   }




  render() {
    return(
    <div className='sign-up'>
      <h2 className='title'> Sign up with your email and password </h2>
      <form className='sign-up-form' onSubmit={this.handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={this.state.displayName}
          onChange={this.onChangeDisplayName}
          label='Display Name'
          required
        />

        <FormInput
          type='email'
          name='email'
          value={this.state.email}
          onChange={this.onChangeEmail}
          label='email'
          required
        />

        <FormInput
          type='password'
          name='password'
          value={this.state.password}
          onChange={this.onChangePassword}
          label='password'
          required
        />

        <FormInput
          type='password'
          name='confirmPassword'
          value={this.state.confirmPassword}
          onChange={this.onChangeConfirmPassword}
          label='confirm password'
          required
          />

          <CustomButton type='submit'> SIGN UP </CustomButton>
      </form>
    </div>
  )
  }
}

export default RegisterPage;
