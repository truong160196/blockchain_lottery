import React from 'react';
import './menu.css';

class Menu extends React.Component {
  componentWillMount = () => {
    //
  }

  render() {
    return (
		<div className="mainmenu-area">
			<div className="container">
				<div className="row">
				<div className="col-lg-12">                 
					<nav className="navbar navbar-expand-lg navbar-light">
					<a className="navbar-brand" href="index.html">
						<img src="assets/images/logo.png" alt="" />
					</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/#main_menu" aria-controls="main_menu"
						aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse fixed-height" id="main_menu">
						<ul className="navbar-nav ml-auto">
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="//#"  role="button" data-toggle="dropdown" aria-haspopup="true"
							aria-expanded="false">
							Home
							<div className="mr-hover-effect"></div>
							</a>
							<ul className="dropdown-menu" >
							<li><a className="dropdown-item" href="index.html"> <i className="fa fa-angle-double-right"></i>Home 1</a></li>
							<li><a className="dropdown-item" href="index2.html"> <i className="fa fa-angle-double-right"></i> Home 2</a></li>
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="play.html">Play
								<div className="mr-hover-effect"></div></a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" href="lottery.html">lottery
								<div className="mr-hover-effect"></div></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="tournaments.html">tournaments
								<div className="mr-hover-effect"></div></a>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="/#"  role="button" data-toggle="dropdown" aria-haspopup="true"
							aria-expanded="false">
							Pages
							<div className="mr-hover-effect"></div>
							</a>
							<ul className="dropdown-menu" >
							<li><a className="dropdown-item" href="about.html"> <i className="fa fa-angle-double-right"></i>About</a></li>
							<li><a className="dropdown-item" href="affiliate.html"> <i className="fa fa-angle-double-right"></i>Affiliate</a></li>
							<li><a className="dropdown-item" href="awards.html"> <i className="fa fa-angle-double-right"></i>Awards</a></li>
							<li><a className="dropdown-item" href="bonus.html"> <i className="fa fa-angle-double-right"></i>Bonus</a></li>
							<li><a className="dropdown-item" href="cart.html"> <i className="fa fa-angle-double-right"></i>Cart</a></li>
							<li><a className="dropdown-item" href="faq.html"> <i className="fa fa-angle-double-right"></i>Faq</a></li>
							<li><a className="dropdown-item" href="how-it-work.html"> <i className="fa fa-angle-double-right"></i>How It Work</a></li>
							<li><a className="dropdown-item" href="terms-conditions.html"> <i className="fa fa-angle-double-right"></i>Terms & Condition</a></li>
							<li><a className="dropdown-item" href="terms-conditions-details.html"> <i className="fa fa-angle-double-right"></i>Condition Details</a></li>
							<li><a className="dropdown-item" href="404.html"> <i className="fa fa-angle-double-right"></i>404</a></li>
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="contact.html">Contact
								<div className="mr-hover-effect"></div></a>
							</li>
						</ul>
						<a href="/#" className="mybtn1"  data-toggle="modal" data-target="/#signin"> Join us</a>
					</div>
					</nav>
				</div>
				</div>
			</div>
		</div>
    );
  }
}

export default Menu;