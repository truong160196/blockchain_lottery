import React from 'react';

import './breadcrumb.css';

import lotteryImg from '../../assets/images/lottery.png';

class Breadcrumb extends React.Component {
  componentWillMount = () => {
    //
  }

  render() {
    return (
		<div class="breadcrumb-area bc-lottery">
			<img class="bc-img" src={lotteryImg} alt="" />
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<h4 class="title">
							Lottery
						</h4>
						<ul class="breadcrumb-list">
							<li>
								<a href="index.html">
										<i class="fas fa-home"></i>
										Home
								</a>
							</li>
							<li>
								<span><i class="fas fa-chevron-right"></i> </span>
							</li>
							<li>
								<a href="lottery.html">Lottery</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
	</div>
    );
  }
}

export default Breadcrumb;