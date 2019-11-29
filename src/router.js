import React from 'react';

import * as Types from './constants/ActionTypes';

// import page
import HomePage from './components/page/home/Home';
import Affiliate from './components/page/affiliate/Affiliate';
import Cart from './components/page/cart/Cart';
import Lottery from './components/page/lottery/Lottery';
import Account from './components/page/account/Account';
import NotFoundPage from './components/page/exception/NotFoundPage';

const routes = [
  {
    path: Types.ROUTER_DEFAULT,
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: Types.ROUTER_HOME,
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: Types.ROUTER_LOTTERY,
    exact: true,
    main: () => <Lottery />,
  },
  {
    path: Types.ROUTER_CART,
    exact: true,
    main: () => <Cart />,
  },
  {
    path: Types.ROUTER_AFFILIATE,
    exact: true,
    main: () => <Affiliate />,
  },
  {
    path: Types.ROUTER_ACCOUNT,
    exact: true,
    main: () => <Account />,
  },
  {
    path: '',
    exact: false,
    main: () => <NotFoundPage />,
  },
];

export default routes;
