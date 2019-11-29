import React from 'react';

import './account.css';

import * as Types from '../../../constants/ActionTypes';

// import component

const listTabs = [
	{
		name: 'Dashboard',
		value: Types.TABS.DASHBOARD
	},
	{
		name: 'Deposit',
		value: Types.TABS.DEPOSIT
	},
	{
		name: 'Withdraw',
		value: Types.TABS.WITHDRAW
	},
	{
		name: 'Order',
		value: Types.TABS.ORDER
	},
	{
		name: 'History',
		value: Types.TABS.HISTORY
	},
	{
		name: 'Setting',
		value: Types.TABS.SETTING
	},
];

class Account extends React.Component {
  constructor(props) {
	  super(props);
	  this.state = {
		user : {
			role: Types.ROLE.USER,
			userName: 'truong160196',
			name: 'demo1',
			sessionId: 'demo'
		},
		tabCurrent: Types.TABS.DASHBOARD,
	  }
  }
  componentWillMount = () => {
    //
  }

  changeTabs = (tab) => {
	  this.setState({
		  tabCurrent:  tab
	  })
  }

  renderTabsHtml = () => {
	  const {
		tabCurrent,
	  } = this.state;

	  const tabs = listTabs.map((item, index) => {
			return (
			<button 
				className={`btn btn-tab ${tabCurrent === item.value ? 'active' : ''}`}
				data-index={index}
				onClick={() => this.changeTabs(item.value)}
			>
				{item.name}
			</button>
			)
	  })

	  return tabs;
  }

  renderTabDashboard = () => {
	  return (
		  <div className="dashboard row">
			  <div className="col-sm-12 col-lg-6">
				<div className="card">
					<div className="balance-title">
						<label>Account Balance</label>
					</div>
					<div className="balance">
						<h3>1,54545</h3>
						<h4>BTC</h4>
					</div>
					<div className="balance-title">
						<label>Estimated Value</label>
					</div>
					<div className="balance">
						<h5>~10,2521</h5>
						<h5>USD</h5>
					</div>
				</div>
			  </div>
			  <div className="col-sm-12 col-lg-6">
				<div className="card">
					<div className="balance-title">
						<label>Account Balance</label>
					</div>
					<div className="balance">
						<h3>1,54545</h3>
						<h4>BTC</h4>
					</div>
					<div className="balance-title">
						<label>Estimated Value</label>
					</div>
					<div className="balance">
						<h5>~10,2521</h5>
						<h5>USD</h5>
					</div>
				</div>
			  </div>
		  </div>
	  )
  }

  render() {
	const {
		user,
		tabCurrent,
	} = this.state;

	let tabContentHtml = '';
	
	switch (tabCurrent) {
		case Types.TABS.DASHBOARD:
			tabContentHtml = this.renderTabDashboard();
			break;
	
		default:
			break;
	}

    return (
      <div className="body-account">
		  <div className="container">
			<div className="account-info">
				<div className="avatar">
					<p>T</p>
				</div>
				<div className="user-name">
					<h3>{user.userName}</h3>
					<div className="user-role">
						<p>{user.role === 1 ? 'admin' : 'personal'}</p>
					</div>
				</div>
			</div>
			<div className="tabs">
				{this.renderTabsHtml()}
			</div>
			<div className="tab-content">
				{tabContentHtml}
			</div>
		  </div>
      </div>
    );
  }
}

export default Account;