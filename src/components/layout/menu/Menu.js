import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import * as Types from '../../../constants/ActionTypes';

import './menu.css';

// Menu component
const menus = [
	{
	  id: 1,
	  name: 'Home',
	  to: Types.ROUTER_HOME,
	},
	{
		id: 2,
		name: 'Lottery',
		to: Types.ROUTER_LOTTERY,
	},
	{
		id: 3,
		name: 'Affiliate',
		to: Types.ROUTER_AFFILIATE,
	},
	{
		id: 4,
		name: 'Cart',
		to: Types.ROUTER_CART,
	},
  ];

class Menu extends React.Component {
  constructor(props) {
	  super(props)
	  this.state = {
		  user: {
			role: Types.ROLE.USER,
			userName: 'truong160196',
			name: 'demo1',
			sessionId: 'demo'
		  }
	  }
  };

  componentWillMount = () => {
    //
  }

  openPageAccount = () => {
    const {
		history,
	  } = this.props;

	  history.push(Types.ROUTER_ACCOUNT);
  }

  showMenus = (menuItem) => {
    let result = null;

    if (menuItem.length > 0) {
      result = menuItem.map((menu) => {
        result = (
          <Route key={menu.id}>
			<li className="nav-item">
				<NavLink className="nav-link" to={menu.to}>
					{menu.name}
					<div className="mr-hover-effect"></div>
              </NavLink>
			</li>
          </Route>
        );

        return result;
      });
    }

    return result;
  };

  render() {
	const { openShowRegister, openShowLogin} = this.props;
	const { user } = this.state;

	let menuAccount = '';

	if (user && user.userName) {
		menuAccount = (<button className="btn mybtn1" onClick={this.openPageAccount}>{user.userName}</button>)
	} else {
		menuAccount = (
		<div className="nav-item">
			<button className="btn btn-login" onClick={openShowLogin}>Login</button>
			<button className="btn btn-register" onClick={openShowRegister}>Register</button>
		</div>
		)
	}

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
							{this.showMenus(menus)}
						</ul>
						{menuAccount}
					</div>
					</nav>
				</div>
				</div>
			</div>
		</div>
    );
  }
}

export default withRouter(Menu);