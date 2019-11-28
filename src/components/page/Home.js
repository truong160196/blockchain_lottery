import React from 'react';
import './home.css';

// import component
import Loading from '../loading/Loading';
import Header from '../layout/header/Header';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import Lottery from '../lottery/Lottery';
import Activity from '../activity/Activity';
import Video from '../video/Video';
import Question from '../question/Question';
import Winner from '../winner/Winner';
import Footer from '../layout/footer/Footer';
import Login from '../login/Login';
import Register from '../register/Register';

class Home extends React.Component {
  componentWillMount = () => {
    //
  }

  render() {
    return (
      <div id="body-home">
        <Loading />
        <Header />
        <Breadcrumb />
        <Lottery />
        <Activity />
        <Video />
        <Question />
        <Winner />
        <Footer />
        <Login />
        <Register />
        <div className="bottomtotop">
            <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    );
  }
}

export default Home;