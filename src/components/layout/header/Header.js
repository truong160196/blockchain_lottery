import React from 'react';

// import component
import Menu from '../menu/Menu';

import './header.css';

import Login from '../../login/Login';
import Register from '../../register/Register';
class Header extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
		isShowLogin: false,
		isShowRegister: false,
	}
  }

  componentWillMount = () => {
    //
  }

  openShowLogin = () => {
	this.setState({
		isShowLogin: true,
	})
  }

  handleConfirmLogin = () => {
	this.setState({
		isShowLogin: false,
	})
  }

  openShowRegister = () => {
	this.setState({
		isShowRegister: true,
	})
  }

  handleConfirmRegister = () => {
	this.setState({
		isShowRegister: false,
	})
  }

  render() {
	const {
		isShowLogin,
		isShowRegister
	} = this.state;

    return (
		<div className="header">
			<div className="top-header" style={{display: 'none'}}>
				<div className="container">
					<div className="row">
					<div className="col-lg-12">
					<div className="content">
					<div className="left-content">
						<ul className="left-list">
						<li>
							<p>
								<i className="fas fa-headset"></i>	Support
							</p>
						</li>
						<li>
							<p>
							<i className="fas fa-envelope"></i>	info@Dooplo.com
							</p>
						</li>
						<li>
							<div className="language-selector">
							<select name="language" className="language">
								<option value="1">English</option>
								<option value="2">France</option>
								<option value="3">Japan</option>
							</select>
							</div>
						</li>
						</ul>
					</div>
					<div className="right-content">		
						<ul className="right-list">
							<li>
								<div className="notofication tm-dropdown">
								<i className="fas fa-bell"></i>
								<span className="count">11</span>
									<div className="tm-dropdown-menu">
										<ul className="list">
											<li>
												<a href="/#">
													<i className="fas fa-bell"></i>
													Invest Exchange
												</a>
											</li>
										</ul>
									</div>
								</div>
							</li>
							<li>
								<button className="btn sign-in" data-toggle="modal" data-target="#login" onClick={this.openShowLogin}>
									<i className="fas fa-user"></i> Sign In
								</button>
							</li>
						</ul>
					</div>
					</div>
				</div>
				</div>
			</div>
			</div>
			<Menu
				openShowRegister={this.openShowRegister}
				openShowLogin={this.openShowLogin}
			/>
			<Login
				isShow={isShowLogin}
				handleConfirm={this.handleConfirmLogin}
			/>
            <Register
				isShow={isShowRegister}
				handleConfirm={this.handleConfirmRegister}
			/>
	  </div>
    );
  }
}

export default Header;