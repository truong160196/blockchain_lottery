import React from 'react';

import './video.css';

class Video extends React.Component {
  componentWillMount = () => {
    //
  }

  render() {
    return (
		<div className="lottery-video">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10">
					<div className="video-box">
						<a href="/#" className="video-play-btn video-icon mfp-iframe">
							<img src="assets/images/play-icon-red.png" alt="" />
						</a>
					</div>
					</div>
				</div>
			</div>
      </div>
    );
  }
}

export default Video;