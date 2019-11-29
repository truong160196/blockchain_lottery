import React from 'react';

import ApiHelper from '../../utils/ApiHelper';

import * as Types from '../../constants/ActionTypes';

import './login.css'

class Login extends React.Component {
  componentWillMount = () => {
    //
  }

  handleSubmitLogin = async() => {
	  const { handleConfirm } = this.props;

	  const emailValue = document.getElementById("email");
	  const passwordValue = document.getElementById("password");

	  if (!emailValue.checkValidity() && !passwordValue.checkValidity()) {
		const request = {
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

  closeModalLogin = () => {
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
			<div className="modal login-modal" id="login" tabIndex="-1" role="dialog" aria-labelledby="login" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<button
							type="button"
							className="btn close"
							onClick={this.closeModalLogin}
						>
							<span aria-hidden="true">&times;</span>
						</button>
						<div className="modal-body">
							<div className="logo-area">
								<img className="logo" src="assets/images/logo.png" alt="" />
							</div>
							<div className="header-area">
								<h4 className="title">Login Page!</h4>
							</div>
							<form className="form-area" data-toggle="validator" id="login-form">
								<div className="form-group">
									<label htmlFor="email">Email <span className="require">*</span></label>
									<input type="email" className="form-control input-field" id="email"  placeholder="Enter your Email" required/>
								</div>
								<div className="form-group">
									<label htmlFor="password">Password <span className="require">*</span></label>
									<input type="password" className="form-control input-field" id="password"  placeholder="Enter your password" required/>
								</div>
								<div className="form-group">
								<div className="box">
									<div className="left">
										<input type="checkbox" className="check-box-field" id="remember" />
										<label htmlFor="remember">Remember Password</label>
									</div>
									<div className="right">
									<a href="/#">
										Forgot Password?
									</a>
									</div>
								</div>
								</div>
								<div className="form-group">
									<button type="submit" className="btn mybtn1" onClick={this.handleSubmitLogin}>Log In</button>
								</div>
							</form>
							<div className="form-footer">
								<p>Not a member? 
									<a href="/#">Create account <i className="fas fa-angle-double-right"></i></a>
								</p>
							</div>
						</div>
					</div>
				</div>
	  		</div>
		</div>
	);
  }
}

export default Login;