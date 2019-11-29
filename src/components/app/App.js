import React from 'react';
import {
  Switch, Route, BrowserRouter,
} from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import routes from '../../router';

// import component
import Loading from '../loading/Loading';
import Header from '../layout/header/Header';
import Footer from '../layout/footer/Footer';

class App extends React.Component {
  componentWillMount = () => {
    //
  }

  showContentMenus = (menus) => {
    let result = null;
    if (menus.length > 0) {
      result = menus.map((route, key) => (
        <Route
          key={key.toString()}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ));
    }
    return <Switch>{result}</Switch>;
  }

  render() {
    return (
      <LazyLoad>
        <BrowserRouter>
          <div className="bg">
            <Loading />
            <Header />
            <div className="body-content">
              {this.showContentMenus(routes)}
            </div>
            <Footer />
            <div className="bottomtotop">
                <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </BrowserRouter>
      </LazyLoad>
    );
  }
}

export default App;