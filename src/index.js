import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, IndexRoute, browserHistory } from 'react-router'
import Home from './Home';
import Top10 from './Top10';
import ContactUs from './ContactUs';


/**
 * 
 * <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="Top10" component={Top10} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>
 */

ReactDOM.render(
   <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="Top10" component={Top10} />
      <Route path="ContactUs" component={ContactUs} />
    </Route>
  </Router>
  ,
  document.getElementById('root')
);