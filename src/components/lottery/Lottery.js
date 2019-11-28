import React from 'react';

import './lottery.css';

import st1 from '../../assets/images/lottery/st1.png';
import st2 from '../../assets/images/lottery/st2.png';
import ticketIcon from '../../assets/images/tikit-icon.png';
import IconBitcoin from '../../assets/images/icon1.png';


class Lottery extends React.Component {
  componentWillMount = () => {
    //
  }

  render() {
    return (
		<div className="lottery-area">
			<div className="lottery-staticstics">
			<div className="container">
				<div className="row">
				<div className="col-lg-4">
					<div className="single-staticstics">
					<div className="left">
						<div className="icon">
						<img src={st1} alt="" />
						</div>
					</div>
					<div className="right">
						<h4 className="title">Lottery Jackpot</h4>
						<div className="count">
						<img src={IconBitcoin} alt="" />
						<span>0.416250</span>
						</div>
					</div>
					</div>
				</div>
				<div className="col-lg-4">
					<div className="single-staticstics">
					<div className="left">
						<div className="icon">
						<img src={st2} alt="" />
						</div>
					</div>
					<div className="right">
						<h4 className="title">Purchased Tickets</h4>
						<div className="count">
						<img src={ticketIcon} alt="" />
						<span>120</span>
						</div>
					</div>
					</div>
				</div>
				<div className="col-lg-4">
					<div className="single-staticstics">
					<div className="left">
						<div className="icon">
						<img src={st2} alt="" />
						</div>
					</div>
					<div className="right">
						<h4 className="title">My Tickets</h4>
						<div className="count">
						<img src={ticketIcon} alt="" />
						<span>02</span>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
			</div>
			<div className="daily-lottery">
			<div className="container">
				<div className="row justify-content-center">
				<div className="col-lg-8 col-md-10">
					<div className="section-heading">
					<h5 className="subtitle">
						Try to check out our
					</h5>
					<h2 className="title">
						Daily Lottery
					</h2>
					<p className="text">
						We update our site regularly; more and more winners are added every day! To locate the most recent winner's information
					</p>
					</div>
				</div>
				</div>
				<div className="row">
				<div className="col-lg-12">
					<div className="draw-time">
					<h5 className="subtitle">
						Lottery Draw Starts In:
					</h5>
					<div className="draw-counter">
						<div data-countdown="2021/12/15"></div>
					</div>
					<p className="text">
						To meet Today's challenges
					</p>
					</div>
				</div>
				</div>
				
			</div>
			</div>
			<div className="buy-tickets">
			<div className="container">
				<div className="row">
				<div className="col-lg-12">
					<div className="buy-tickets-box">
					<div className="heading">
						<h4 className="title">
						Buy Lottery Tickets
						</h4>
						<div className="right-area">
						<select>
							<option value="1">BTC</option>
							<option value="1">ETH</option>
							<option value="1">QTN</option>
						</select>
						</div>
					</div>
					<div className="content">
						<div className="top-area">
						<div className="row">
							<div className="col-lg-3">
							<div className="info-box">
								<h4 className="title">
								BALANCE
								</h4>
								<div className="number">
									<i className="fab fa-bitcoin"></i>
									0.0000
								</div>
							</div>
							</div>
							<div className="col-lg-3">
							<div className="info-box">
								<h4 className="title">
									1 TICKET COSTS
								</h4>
								<div className="number">
									<i className="fab fa-bitcoin"></i>
									0.03
								</div>
							</div>
							</div>
							<div className="col-lg-3">
							<div className="info-box">
								<h4 className="title">
									QUANTITY 
								</h4>
								<div className="number">
									<input type="number" min="0" max="10000"/>
								</div>
							</div>
							</div>
							<div className="col-lg-3">
							<div className="info-box">
								<h4 className="title">
									TOTAL COST
								</h4>
								<div className="number">
									<i className="fab fa-bitcoin"></i>
									0.0000
								</div>
							</div>
							</div>
						</div>
						</div>
						<div className="game-numbers">
						<h4 className="title">
							GAME NUMBERS
						</h4>
						<div className="number-box">
							<div className="auto-number">
							<div className="top-content">
								<input type="radio" id="auto-num" name="auto-num" />
								<label htmlFor="auto-num">
									Auto Generated
									<span>
										Random numbers will be generated automatically
									</span>
								</label>
							</div>
							</div>
							<div className="manual-number">
							<div className="top-content">
								<input type="radio" id="manual-num" name="auto-num" />
								<label htmlFor="manual-num">
									Manual Select
									<span>Pick 5 numbers manually</span>
								</label>
							</div>
							<div className="main-content">
								<ul className="number-list">
								<li>1</li>
								<li>2</li>
								<li>3</li>
								<li>4</li>
								<li>5</li>
								<li>6</li>
								<li>7</li>
								<li>8</li>
								<li className="active">9</li>
								<li>10</li>
								<li>11</li>
								<li>12</li>
								<li className="active">13</li>
								<li>14</li>
								<li>15</li>
								<li>16</li>
								<li>17</li>
								<li>18</li>
								<li>19</li>
								<li className="active">20</li>
								<li>21</li>
								<li className="active">22</li>
								<li>23</li>
								<li>24</li>
								<li>25</li>
								<li>26</li>
								<li>27</li>
								<li>28</li>
								<li className="active">29</li>
								<li>30</li>
								<li>31</li>
								<li>32</li>
								<li>33</li>
								<li>34</li>
								<li>35</li>
								<li>36</li>
								<li>37</li>
								<li>38</li>
								<li>39</li>
								<li>40</li>
								<li>41</li>
								<li>42</li>
								<li>43</li>
								<li>44</li>
								<li>45</li>
								<li>46</li>
								<li>47</li>
								<li>48</li>
								<li>49</li>
								<li>50</li>
								</ul>
							</div>
							</div>
						</div>
						</div>
						<div className="row">
						<div className="col-lg-12 text-center">
							<a href="/#" className="mybtn1">Buy ticket</a>
						</div>
						</div>
					</div>
					
			
					</div>
				</div>
				</div>
			</div>
			</div>
	</div>
    );
  }
}

export default Lottery;