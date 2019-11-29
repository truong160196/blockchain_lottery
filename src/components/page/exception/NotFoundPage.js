import React from 'react';

import './exception.css';

import notFoundBackground from '../../../assets/images/404-bg.png';
import notFoundImage from '../../../assets/images/404.png';

class NotFoundPage extends React.Component {
  componentWillMount = () => {
    //
  }

  render() {
    return (
	<div class="four-zero-four">
		<img class="bg-img" src={notFoundBackground} alt="" />
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="content">
						<img src={notFoundImage} alt="" />
						<div class="inner-content">
							<h4 class="title">
									Oops,
									Something went wrong !
							</h4>
							<a href="/" class="mybtn1"><i class="fas fa-angle-double-left"></i> BACK TO HOME</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
  }
}

export default NotFoundPage;