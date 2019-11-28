import React from 'react';
import './loading.css'

class Loading extends React.Component {
  componentWillMount = () => {
    //
  }

  render() {
    return (
		<div className="preloader" id="preloader">
			<div className="loader loader-1">
				<div className="loader-outter"></div>
				<div className="loader-inner"></div>
			</div>
    </div>
    );
  }
}

export default Loading;