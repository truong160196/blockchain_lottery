import React from 'react';

import ApiHelper from '../../utils/ApiHelper';

import * as Types from '../../constants/ActionTypes';

class Register extends React.Component {
  componentWillMount = () => {
    //
  }

  handleRegisterAccount = async() => {
	const { handleConfirm } = this.props;

	const nameValue = document.getElementById("name_register");
	const emailValue = document.getElementById("email_register");
	const passwordValue = document.getElementById("password_register");
	const passwordConfirmValue = document.getElementById("password_confirm");

	if (!nameValue.checkValidity()
	&& !nameValue.checkValidity()
	&& !passwordValue.checkValidity()
	&& !passwordConfirmValue.checkValidity()
	) {
	  const request = {
		  name: nameValue[0].val(),
		  email: emailValue[0].val(),
		  password: passwordValue[0].val()
	  }

	  const options = {
		  isConfirm: true,
		  isShow: false,
		};

	  const urlPostLogin = Types.API_LOGIN;

	  const response = await ApiHelper(urlPostLogin, request, Types.POST);

	  if (response.status === 200) {
		  console.log(response.data)
		  handleConfirm(options);
	  } else {
		  console.error(response.data)
	  }
	}
  }

  closeModalRegister = () => {
	const { handleConfirm } = this.props;

    const options = {
      isConfirm: false,
      isShow: false,
    };

    handleConfirm(options);
  }

  render() {
	const { 
		isShow
	} = this.props;

    return (
	<div className={`modal-page ${isShow === true ? 'show' : ''}`}>
		<div className="over-hidden" />
		<div className="modal login-modal sign-in" id="signin" tabIndex="-1" role="dialog" aria-labelledby="signin" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered " role="document">
				<div className="modal-content">
				<button
					type="button"
					className="btn close"
					onClick={this.closeModalRegister}
				>
					<span aria-hidden="true">&times;</span>
				</button>
				<div className="modal-body">
				<div className="logo-area">
					<img className="logo" src="assets/images/logo.png" alt="" />
				</div>
				<div className="header-area">
					<h4 className="title">Register New Account!</h4>
				</div>
				<div className="form-area">
				<form className="form-area" data-toggle="validator" id="register-form" autocomplete="off">
					<div className="form-group">
						<label htmlFor="name_register">Name<span className="require">*</span></label>
						<input
							type="text"
							className="form-control input-field"
							id="name_register"
							placeholder="Enter your Name"
							required
							autocomplete="off"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email_register">Email<span className="require">*</span></label>
						<input
							type="email"
							className="form-control input-field"
							id="email_register"
							placeholder="Enter your Email"
							required
							autocomplete="off"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password_register">Password<span className="require">*</span></label>
						<input
							type="password"
							className="form-control input-field"
							id="password_register"
							placeholder="Enter your password"
							required
							autocomplete="off"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password_confirm">confirm password<span className="require">**</span></label>
						<input
							type="password"
							className="form-control input-field"
							id="password_confirm"
							placeholder="Enter your Confirm Password"
							required
							autocomplete="off"
						/>
					</div>
					<div className="form-group">
						<div className="check-group">
							<input type="checkbox" className="check-box-field" id="input-terms" checked />
							<label htmlFor="input-terms">
								I agree with <a href="/#">terms and Conditions</a> and  <a href="/#">privacy policy</a>
							</label>
						</div>
					</div>
					<div className="form-group">
						<button type="submit" className="btn mybtn1" onClick={this.handleRegisterAccount}>Register</button>
					</div>
				</form>
				</div>
			</div>
				</div>
			</div>
		</div>
	</div> 
    );
  }
}

export default Register;