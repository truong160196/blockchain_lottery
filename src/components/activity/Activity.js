import React from 'react';

import './activity.css';

class Activity extends React.Component {
  componentWillMount = () => {
    //
  }

  render() {
    return (
		<div className="activities">
			<img className="shape shape1" src="assets/images/people/shape1.png" alt="" />
			<img className="shape shape2" src="assets/images/people/shape2.png" alt="" />
			<img className="shape shape3" src="assets/images/people/shape3.png" alt="" />
			<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8 col-md-10">
				<div className="section-heading">
					<h5 className="subtitle">
					Daily Lottery
					</h5>
					<h2 className="title">
					Latest Activites
					</h2>
					<p className="text">
					The world’s first truly fair and global lottery. Each player has 
					the highest chances to win the JACKPOT
					</p>
				</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
				<div className="tab-menu-area">
					<ul className="nav nav-lend mb-3" id="pills-tab" role="tablist">
					<li className="nav-item">
						<a className="nav-link active" id="pills-all-bets-tab" data-toggle="pill" href="/#pills-all-bets" role="tab" aria-controls="pills-all-bets" aria-selected="true">Purchased Tickets</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" id="pills-my-bets-tab" data-toggle="pill" href="/#pills-my-bets" role="tab" aria-controls="pills-my-bets" aria-selected="false">My tickets</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" id="pills-history-tab" data-toggle="pill" href="/#pills-history" role="tab" aria-controls="pills-history" aria-selected="false">History</a>
					</li>
					</ul>
				</div>
				<div className="tab-content" id="pills-tabContent">
					<div className="tab-pane fade show active" id="pills-all-bets" role="tabpanel" aria-labelledby="pills-all-bets-tab">
					<div className="responsive-table">
						<table className="table">
						<thead>
						<tr>
						<th scope="col">USER</th>
						<th scope="col">Ticket numbers</th>
						<th scope="col">Tickets</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>
							<img src="assets/images/people/p1.png" alt="" />
							Tom Bass
							</td>
							<td>
							<ul className="number-list">
								<li>24</li>
								<li>25</li>
								<li>26</li>
								<li>27</li>
								<li>28</li>
								</ul>
							</td>
							<td>
							01
							</td>
						</tr>
						<tr>
							<td>
							<img src="assets/images/people/p2.png" alt="" />
							Tom Bass
							</td>
							<td>
							<ul className="number-list">
								<li>24</li>
								<li>25</li>
								<li>26</li>
								<li>27</li>
								<li>28</li>
								</ul>
							</td>
							<td>
							01
							</td>
						</tr>
						<tr>
							<td>
							<img src="assets/images/people/p3.png" alt="" />
							Tom Bass
							</td>
							<td>
							<ul className="number-list">
								<li>24</li>
								<li>25</li>
								<li>26</li>
								<li>27</li>
								<li>28</li>
								</ul>
							</td>
							<td>
							01
							</td>
						</tr>
						<tr>
							<td>
							<img src="assets/images/people/p4.png" alt="" />
							Tom Bass
							</td>
							<td>
							<ul className="number-list">
								<li>24</li>
								<li>25</li>
								<li>26</li>
								<li>27</li>
								<li>28</li>
								</ul>
							</td>
							<td>
							01
							</td>
						</tr>
						<tr>
							<td>
							<img src="assets/images/people/p5.png" alt="" />
							Tom Bass
							</td>
							<td>
							<ul className="number-list">
								<li>24</li>
								<li>25</li>
								<li>26</li>
								<li>27</li>
								<li>28</li>
								</ul>
							</td>
							<td>
							01
							</td>
						</tr>
						<tr>
							<td>
							<img src="assets/images/people/p1.png" alt="" />
							Tom Bass
							</td>
							<td>
							<ul className="number-list">
								<li>24</li>
								<li>25</li>
								<li>26</li>
								<li>27</li>
								<li>28</li>
								</ul>
							</td>
							<td>
							01
							</td>
						</tr>
						<tr>
							<td>
							<img src="assets/images/people/p2.png" alt="" />
							Tom Bass
							</td>
							<td>
							<ul className="number-list">
								<li>24</li>
								<li>25</li>
								<li>26</li>
								<li>27</li>
								<li>28</li>
								</ul>
							</td>
							<td>
							01
							</td>
						</tr>
						<tr>
							<td>
							<img src="assets/images/people/p3.png" alt="" />
							Tom Bass
							</td>
							<td>
							<ul className="number-list">
								<li>24</li>
								<li>25</li>
								<li>26</li>
								<li>27</li>
								<li>28</li>
								</ul>
							</td>
							<td>
							01
							</td>
						</tr>
						<tr>
							<td>
							<img src="assets/images/people/p4.png" alt="" />
							Tom Bass
							</td>
							<td>
							<ul className="number-list">
								<li>24</li>
								<li>25</li>
								<li>26</li>
								<li>27</li>
								<li>28</li>
								</ul>
							</td>
							<td>
							01
							</td>
						</tr>
						<tr>
							<td>
							<img src="assets/images/people/p5.png" alt="" />
							Tom Bass
							</td>
							<td>
							<ul className="number-list">
								<li>24</li>
								<li>25</li>
								<li>26</li>
								<li>27</li>
								<li>28</li>
								</ul>
							</td>
							<td>
							01
							</td>
						</tr>
						</tbody>
						</table>
					</div>
					</div>
					<div className="tab-pane fade" id="pills-my-bets" role="tabpanel" aria-labelledby="pills-my-bets-tab">
					<div className="responsive-table">
						<table className="table">
						<thead>
							<tr>
							<th scope="col">USER</th>
							<th scope="col">Ticket numbers</th>
							<th scope="col">Tickets</th>
							</tr>
						</thead>
						<tbody>
							<tr>
							<td>
								<img src="assets/images/people/p1.png" alt="" />
								Tom Bass
							</td>
							<td>
								<ul className="number-list">
									<li>24</li>
									<li>25</li>
									<li>26</li>
									<li>27</li>
									<li>28</li>
									</ul>
							</td>
							<td>
								01
							</td>
							</tr>
							<tr>
							<td>
								<img src="assets/images/people/p2.png" alt="" />
								Tom Bass
							</td>
							<td>
								<ul className="number-list">
									<li>24</li>
									<li>25</li>
									<li>26</li>
									<li>27</li>
									<li>28</li>
									</ul>
							</td>
							<td>
								01
							</td>
							</tr>
							<tr>
							<td>
								<img src="assets/images/people/p3.png" alt="" />
								Tom Bass
							</td>
							<td>
								<ul className="number-list">
									<li>24</li>
									<li>25</li>
									<li>26</li>
									<li>27</li>
									<li>28</li>
									</ul>
							</td>
							<td>
								01
							</td>
							</tr>
							<tr>
							<td>
								<img src="assets/images/people/p4.png" alt="" />
								Tom Bass
							</td>
							<td>
								<ul className="number-list">
									<li>24</li>
									<li>25</li>
									<li>26</li>
									<li>27</li>
									<li>28</li>
									</ul>
							</td>
							<td>
								01
							</td>
							</tr>
							<tr>
							<td>
								<img src="assets/images/people/p5.png" alt="" />
								Tom Bass
							</td>
							<td>
								<ul className="number-list">
									<li>24</li>
									<li>25</li>
									<li>26</li>
									<li>27</li>
									<li>28</li>
									</ul>
							</td>
							<td>
								01
							</td>
							</tr>
							<tr>
							<td>
								<img src="assets/images/people/p1.png" alt="" />
								Tom Bass
							</td>
							<td>
								<ul className="number-list">
									<li>24</li>
									<li>25</li>
									<li>26</li>
									<li>27</li>
									<li>28</li>
									</ul>
							</td>
							<td>
								01
							</td>
							</tr>
							<tr>
							<td>
								<img src="assets/images/people/p2.png" alt="" />
								Tom Bass
							</td>
							<td>
								<ul className="number-list">
									<li>24</li>
									<li>25</li>
									<li>26</li>
									<li>27</li>
									<li>28</li>
									</ul>
							</td>
							<td>
								01
							</td>
							</tr>
							<tr>
							<td>
								<img src="assets/images/people/p3.png" alt="" />
								Tom Bass
							</td>
							<td>
								<ul className="number-list">
									<li>24</li>
									<li>25</li>
									<li>26</li>
									<li>27</li>
									<li>28</li>
									</ul>
							</td>
							<td>
								01
							</td>
							</tr>
							<tr>
							<td>
								<img src="assets/images/people/p4.png" alt="" />
								Tom Bass
							</td>
							<td>
								<ul className="number-list">
									<li>24</li>
									<li>25</li>
									<li>26</li>
									<li>27</li>
									<li>28</li>
									</ul>
							</td>
							<td>
								01
							</td>
							</tr>
							<tr>
							<td>
								<img src="assets/images/people/p5.png" alt="" />
								Tom Bass
							</td>
							<td>
								<ul className="number-list">
									<li>24</li>
									<li>25</li>
									<li>26</li>
									<li>27</li>
									<li>28</li>
									</ul>
							</td>
							<td>
								01
							</td>
							</tr>
						</tbody>
						</table>
						</div>
					</div>
					<div className="tab-pane fade" id="pills-history" role="tabpanel" aria-labelledby="pills-history-tab">
					<div className="responsive-table">
						<table className="table">
						<thead>
							<tr>
							<th scope="col">USER</th>
							<th scope="col">Ticket numbers</th>
							<th scope="col">Tickets</th>
							</tr>
						</thead>
						<tbody>
							<tr>
							<td>
								<img src="assets/images/people/p1.png" alt="" />
								Tom Bass
							</td>
							<td>
								<ul className="number-list">
									<li>24</li>
									<li>25</li>
									<li>26</li>
									<li>27</li>
									<li>28</li>
									</ul>
							</td>
							<td>
								01
							</td>
							</tr>
							<tr>
							<td>
								<img src="assets/images/people/p2.png" alt="" />
								Tom Bass
							</td>
							<td>
								<ul className="number-list">
									<li>24</li>
									<li>25</li>
									<li>26</li>
									<li>27</li>
									<li>28</li>
									</ul>
							</td>
							<td>
								01
							</td>
							</tr>
							<tr>
							<td>
								<img src="assets/images/people/p3.png" alt="" />
								Tom Bass
							</td>
							<td>
								<ul className="number-list">
									<li>24</li>
									<li>25</li>
									<li>26</li>
									<li>27</li>
									<li>28</li>
									</ul>
							</td>
							<td>
								01
							</td>
							</tr>
							<tr>
							<td>
								<img src="assets/images/people/p4.png" alt="" />
								Tom Bass
							</td>
							<td>
								<ul className="number-list">
									<li>24</li>
									<li>25</li>
									<li>26</li>
									<li>27</li>
									<li>28</li>
									</ul>
							</td>
							<td>
								01
							</td>
							</tr>
							<tr>
							<td>
								<img src="assets/images/people/p5.png" alt="" />
								Tom Bass
							</td>
							<td>
								<ul className="number-list">
									<li>24</li>
									<li>25</li>
									<li>26</li>
									<li>27</li>
									<li>28</li>
									</ul>
							</td>
							<td>
								01
							</td>
							</tr>
							<tr>
							<td>
								<img src="assets/images/people/p1.png" alt="" />
								Tom Bass
							</td>
							<td>
								<ul className="number-list">
									<li>24</li>
									<li>25</li>
									<li>26</li>
									<li>27</li>
									<li>28</li>
									</ul>
							</td>
							<td>
								01
							</td>
							</tr>
							<tr>
							<td>
								<img src="assets/images/people/p2.png" alt="" />
								Tom Bass
							</td>
							<td>
								<ul className="number-list">
									<li>24</li>
									<li>25</li>
									<li>26</li>
									<li>27</li>
									<li>28</li>
									</ul>
							</td>
							<td>
								01
							</td>
							</tr>
							<tr>
							<td>
								<img src="assets/images/people/p3.png" alt="" />
								Tom Bass
							</td>
							<td>
								<ul className="number-list">
									<li>24</li>
									<li>25</li>
									<li>26</li>
									<li>27</li>
									<li>28</li>
									</ul>
							</td>
							<td>
								01
							</td>
							</tr>
							<tr>
							<td>
								<img src="assets/images/people/p4.png" alt="" />
								Tom Bass
							</td>
							<td>
								<ul className="number-list">
									<li>24</li>
									<li>25</li>
									<li>26</li>
									<li>27</li>
									<li>28</li>
									</ul>
							</td>
							<td>
								01
							</td>
							</tr>
							<tr>
							<td>
								<img src="assets/images/people/p5.png" alt="" />
								Tom Bass
							</td>
							<td>
								<ul className="number-list">
									<li>24</li>
									<li>25</li>
									<li>26</li>
									<li>27</li>
									<li>28</li>
									</ul>
							</td>
							<td>
								01
							</td>
							</tr>
						</tbody>
						</table>
						</div>
					</div>
				</div>
				</div>
			</div>
			</div>

			<div className="how-it-work">
          <img className="bg-shape" src="assets/images/howitwork/bg-shape.png" alt="" />
          <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="section-heading">
                  <h5 className="subtitle">
                      Want to see how 
                  </h5>
                  <h2 className="title">
                      How it works? 
                  </h2>
                  <p className="text">
                    We update our site regularly; more and more winners are added every day! To locate the most recent winner's information
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="single-work">
                  <img src="assets/images/howitwork/ic1.png" alt="" />
                  <h4 className="title">
                    Choose
                  </h4>
                  <p>
                    Lorem ipsum dolor, sit amet 
                    consectetur adipisicing elit. Aliqui eum atque.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-work">
                  <img src="assets/images/howitwork/ic2.png" alt="" />
                  <h4 className="title">
                    BUY
                  </h4>
                  <p>
                    Lorem ipsum dolor, sit amet 
                    consectetur adipisicing elit. Aliqui eum atque.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-work">
                  <img src="assets/images/howitwork/ic3.png" alt="" />
                  <h4 className="title">
                    WIN
                  </h4>
                  <p>
                    Lorem ipsum dolor, sit amet 
                    consectetur adipisicing elit. Aliqui eum atque.
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

export default Activity;