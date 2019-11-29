import React from 'react';
import './lottery.css';

// import component
import LotteryChild from '../../lottery/Lottery';
import Activity from '../../activity/Activity';
import Video from '../../video/Video';
import Question from '../../question/Question';
import Winner from '../../winner/Winner'
import Breadcrumb from '../../breadcrumb/Breadcrumb';

class Lottery extends React.Component {
  componentWillMount = () => {
    //
  }

  render() {
    return (
      <div id="body-lottery">
        <Breadcrumb />
        <LotteryChild />
        <Activity />
        <Video />
        <Question />
        <Winner />
      </div>
    );
  }
}

export default Lottery;