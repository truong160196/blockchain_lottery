import React from 'react';
import QRCode from 'qrcode';

import './account.css';

import * as Types from '../../../constants/ActionTypes';

import { formatCurrency } from '../../../utils/formatNumber';

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
		balance: {
			value: 0.3256482,
			convertRate: 3652,
			symbol: Types.LIST_CURRENCY.BTC,
			address: '0x4a1c38838a3f71dca80001ea26694f005728eaad',
		},
		listLottery: [
			{
				number1: 45,
				number2: 26,
				number3: 15,
				number4: 4,
				number5: 36,
			},
			{
				number1: 24,
				number2: 13,
				number3: 18,
				number4: 41,
				number5: 36,
			}
		],
		listLotteryHistory: [
			{
				number1: 45,
				number2: 26,
				number3: 15,
				number4: 4,
				number5: 36,
				profit: 0,
				status: Types.STATUS_LOTTERY.LOSS
			},
			{
				number1: 24,
				number2: 13,
				number3: 18,
				number4: 41,
				number5: 36,
				profit: 3.5412,
				status: Types.STATUS_LOTTERY.WIN
			},
			{
				number1: 12,
				number2: 13,
				number3: 19,
				number4: 16,
				number5: 24,
				profit: 4.5412,
				status: Types.STATUS_LOTTERY.WIN
			},
			{
				number1: 16,
				number2: 34,
				number3: 31,
				number4: 28,
				number5: 49,
				profit: 0,
				status: Types.STATUS_LOTTERY.LOSS
			},
			{
				number1: 3,
				number2: 17,
				number3: 41,
				number4: 42,
				number5: 43,
				profit: 0,
				status: Types.STATUS_LOTTERY.LOSS
			}
		],
		tabCurrent: Types.TABS.DASHBOARD,
		showQr: false,
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

  handleChangeCurrencyType = (event) => {
	const stringValue = event.target.value;
	this.setState({
		balance: {
			symbol: stringValue,
			value: 150.1547878,
			convertRate: 4510,
			address: '1DjDv9XF7uWDGLKJSPv4Wb2GRt2kK5JNTR'
		}
	})
  }

  copyAddressClipboard = () => {
    const { balance } = this.state;

	if (balance && balance.address) {
		const textField = document.createElement('textarea')
		textField.innerText = balance.address;
		document.body.appendChild(textField)
		textField.select()
		document.execCommand('copy')
		textField.remove();
		console.log('copy');
	}
  }

  closePopup = () => {
    this.setState({
      showQr: false
    })
  }

  showQRCode = () => {
    const {balance} = this.state;

    const canvas = document.getElementById('qrcode')
	
	if (balance && balance.address) {
		QRCode.toCanvas(canvas, balance.address, {width: 250}, function (error) {
			if (error) console.error(error)
		  })
	}

    this.setState({
      showQr: true
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

  renderTableLotteryTicket = () => {
	  const {listLottery} = this.state;

	  const tableHtml = listLottery.map((item, index) => {
		  return (
			<tr key={index.toString()}>
				<td>{index + 1}</td>
				<td>
					<ul class="number-list">
						<li>{item.number1}</li>
						<li>{item.number2}</li>
						<li>{item.number3}</li>
						<li>{item.number4}</li>
						<li>{item.number5}</li>
					</ul>
				</td>
			</tr>
		  )
	  });

	  return tableHtml;
  }

  
  renderTableLotteryHistory = () => {
	const {listLotteryHistory} = this.state;

	const tableHtml = listLotteryHistory.map((item, index) => {
		return (
		  <tr key={index.toString()}>
			  <td>{index + 1}</td>
			  <td>
				  <ul class="number-list">
					  <li>{item.number1}</li>
					  <li>{item.number2}</li>
					  <li>{item.number3}</li>
					  <li>{item.number4}</li>
					  <li>{item.number5}</li>
				  </ul>
			  </td>
			  <td>{formatCurrency(item.profit)} {Types.LIST_CURRENCY.BTC}</td>
			  <td>
				  <span className={item.status === Types.STATUS_LOTTERY.WIN ? 'win' : 'loss'}>
				  	{item.status}
				  </span>
			</td>
		  </tr>
		)
	});

	return tableHtml;
}

  renderTabDashboard = () => {
	  const {
		  balance
	  } = this.state;

	  const balanceType = Types.BALANCE_TYPE.map((item, index) => {
		  return (
			  <option key={index.toString()} value={item.symbol}>{item.symbol}</option>
		  )
	  } );

	  const tableLotteryTicket = this.renderTableLotteryTicket();
	  const tableLotteryHistory = this.renderTableLotteryHistory();

	  return (
		  <div className="dashboard row">
			  <div className="col-sm-12 col-lg-6">
				<div className="card">
					<div className="card-title">
						<label>Account Balance</label>
						<select
							className="form-control balance-type"
							id="balanceType"
							name="balanceType"
							onChange={this.handleChangeCurrencyType}
						>
							{balanceType}
						</select>
					</div>
					<div className="card-body">
						<h3>{formatCurrency(balance.value, 4)}</h3>
						<h4>{balance.symbol}</h4>
					</div>
					<div className="card-title">
						<label>Estimated Value</label>
					</div>
					<div className="card-body">
						<h5>~ {formatCurrency(balance.convertRate)}</h5>
						<h5>{Types.LIST_CURRENCY.USD}</h5>
					</div>
				</div>
			  </div>
			  <div className="col-sm-12 col-lg-6">
				<div className="card">
					<div className="ticket-title">
						<label>Lottery ticket</label>
					</div>
					<div className="ticket">
						<table className="table table-lottery">
							<tbody>
								{tableLotteryTicket}
							</tbody>
						</table>
					</div>
				</div>
			  </div>
			  <div className="col-sm-12">
				<div className="card">
					<div className="ticket-title">
						<label>Lottery History</label>
					</div>
					<div className="ticket">
						<table className="table table-lottery">
							<thead>
								<tr>
									<th>#</th>
									<th>Ticket</th>
									<th>Profit</th>
									<th>Status</th>
								</tr>
							</thead>
							<tbody>
								{tableLotteryHistory}
							</tbody>
						</table>
					</div>
				</div>
			  </div>
		  </div>
	  )
  }

  renderTabDeposit = () => {
	const {
		balance,
		showQr,
	} = this.state;

	const currencyType = Types.BALANCE_TYPE.map((item, index) => {
		return (
			<option key={index.toString()} value={item.symbol}>{item.symbol} - {item.name}</option>
		)
		});

	  return (
			<div className="deposit row">
				<div className="col-sm-12 col-lg-6">
					<div className="card">
						<div className="card-title">
							<label>Token</label>
						</div>
						<div className="card-body">
							<select
								className="form-control"
								id="currencyType"
								name="currencyType"
								onChange={this.handleChangeCurrencyType}
							>
								{currencyType}
							</select>
						</div>
						<div className="card-title">
							<label>Total Balance</label>
						</div>
						<div className="card-body">
							<h3>{formatCurrency(balance.value, 4)}</h3>
							<h4>{balance.symbol}</h4>
						</div>
						<small>Coins will be deposited after 12 network confirmations.</small>
					</div>
			  	</div>
				<div className="col-sm-12 col-lg-6">
					<div className="card">
						<div className="card-title">
							<label>Address</label>
						</div>
						<div className="card-body">
							<input className="form-control input-read-only" id="address" name="address" value={balance.address} />
						</div>
						<div className="card-body">
							<button className="btn btn-deposit" onClick={this.copyAddressClipboard}>Copy Address</button>
							<button className="btn btn-deposit" onClick={this.showQRCode}>Show QR Code</button>
						</div>
						<small><strong>Send only {balance.symbol} to this deposit address.</strong></small>
						<small>Sending coin or {balance.symbol} other than ETH to this address may result in the loss of your deposit.</small>
					</div>
			  	</div>
				<div className="col-sm-12">
					<div className="card">
						<div className="ticket-title">
							<label>Deposit History</label>
						</div>
						<div className="ticket">
							<table className="table table-lottery">
								<thead>
									<tr>
										<th>#</th>
										<th>Status</th>
										<th>Token</th>
										<th>Amount</th>
										<th>Date</th>
										<th>Information</th>
									</tr>
								</thead>
								<tbody>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className="qrCode-over" style={{display: showQr ? 'block' : 'none'}} />
				<div className="qrCode" style={{display: showQr ? 'block' : 'none'}} >
					<button type="button" className="btn btn-default btn-close" onClick={this.closePopup}>x</button>
					<canvas id="qrcode"></canvas>
				</div>
			</div>
	  );
  }

  renderTabWithdraw = () => {
	const {
		balance,
	} = this.state;

	const currencyType = Types.BALANCE_TYPE.map((item, index) => {
		return (
			<option key={index.toString()} value={item.symbol}>{item.symbol} - {item.name}</option>
		)
		});

	  return (
			<div className="deposit row">
				<div className="col-sm-12 col-lg-6">
					<div className="card">
						<div className="card-title">
							<label>Token</label>
						</div>
						<div className="card-body">
							<select
								className="form-control"
								id="currencyType"
								name="currencyType"
								onChange={this.handleChangeCurrencyType}
							>
								{currencyType}
							</select>
						</div>
						<div className="card-title">
							<label>Total Balance</label>
						</div>
						<div className="card-body">
							<h3>{formatCurrency(balance.value, 4)}</h3>
							<h4>{balance.symbol}</h4>
						</div>
						<small>Do not withdraw directly to a crowdfund or ICO address, as your account will not be credited with tokens from such sales.</small>
					</div>
			  	</div>
				<div className="col-sm-12 col-lg-6">
					<div className="card">
						<div className="card-title">
							<label>Recipient's {balance.symbol}  Address </label>
						</div>
						<div className="card-body">
							<input 
								type="text"
								className="form-control"
								id="address_receive"
								name="address_receive"
								placeholder="Enter address receive"
							/>
						</div>
						<div className="card-title">
							<label>Amount</label>
						</div>
						<div className="card-body">
							<input 
								type="number"
								className="form-control"
								id="amount_receive"
								name="amount_receive"
								placeholder="Amount"
							/>
						</div>
						<div className="card-body">
							<button
								className="btn btn-deposit"
								onClick={this.submitWithdraw}
								style={{width: '100%'}}
							>
								Send
							</button>
						</div>
						<p><strong style={{color: '#fffb00'}}>Minimum Withdrawal: 0.001 {balance.symbol}</strong></p>
						<p>Transaction Fee: 0.0005 {balance.symbol}</p>
						<p>You Will Get: 0.00000000 {balance.symbol}</p>
					</div>
			  	</div>
				<div className="col-sm-12">
					<div className="card">
						<div className="ticket-title">
							<label>Withdraw History</label>
						</div>
						<div className="ticket">
							<table className="table table-lottery">
								<thead>
									<tr>
										<th>#</th>
										<th>Status</th>
										<th>Token</th>
										<th>Amount</th>
										<th>Date</th>
										<th>Information</th>
									</tr>
								</thead>
								<tbody>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
	  );
  }

  renderTabSetting = () => {
	  return (
			<div className="deposit row">
				<div className="col-sm-12 col-lg-12">
					<div className="card">
						<div className="card-title">
							<label>Login Password</label>
						</div>
						<div className="card-body">
							<button className="btn btn-deposit">Change Password</button>
						</div>
					</div>
			  	</div>
				<div className="col-sm-12 col-lg-12">
					<div className="card">
						<div className="card-title">
							<label>Google Authentication</label>
						</div>
						<div className="card-body">
							<button className="btn btn-deposit disable">Active</button>
						</div>
						<small>Used for withdrawals and security modifications</small>
					</div>
				</div>
				<div className="col-sm-12 col-lg-12">
					<div className="card">
						<div className="card-title">
							<label>Email Authentication</label>
						</div>
						<div className="card-body">
							<button className="btn btn-deposit">Disable</button>
						</div>
						<small>Used for withdrawals and security modifications</small>
					</div>
				</div>
				<div className="col-sm-12 col-lg-12">
					<div className="card">
						<div className="card-title">
							<label>Identity Verification</label>
						</div>
						<div className="card-body">
							<button className="btn btn-deposit">Change Information</button>
						</div>
					</div>
				</div>
			</div>
	  );
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
		case Types.TABS.DEPOSIT:
			tabContentHtml = this.renderTabDeposit();
			break;
		case Types.TABS.WITHDRAW:
			tabContentHtml = this.renderTabWithdraw();
			break;
		case Types.TABS.SETTING:
			tabContentHtml = this.renderTabSetting();
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