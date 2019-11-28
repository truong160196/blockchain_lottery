import React from 'react';

// import component
import Menu from '../menu/Menu';

import './header.css';

class Header extends React.Component {
  componentWillMount = () => {
    //
  }

  render() {
    return (
		<div className="header">
			<div className="top-header">
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
								<div className="cart-icon tm-dropdown">
									<i className="fas fa-cart-arrow-down"></i>
									<span className="cart-count">10</span>
									<div className="tm-dropdown-menu">
										<ul className="list">
											<li className="list-item">
												<div className="close">
													<i className="fas fa-times"></i>
												</div>
												<ul className="number-list">
													<li>24</li>
													<li>25</li>
													<li>26</li>
													<li>27</li>
													<li>28</li>
												</ul>
											</li>
										</ul>
										<a href="cart.html" className="link-btn">Cart Page</a>
									</div>
								</div>
							</li>
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
								<a href="/#" className="sign-in" data-toggle="modal" data-target="/#login">
									<i className="fas fa-user"></i> Sign In
								</a>
							</li>
						</ul>
					</div>
					</div>
				</div>
				</div>
			</div>
			</div>
			<Menu />
	  </div>
    );
  }
}

export default Header;