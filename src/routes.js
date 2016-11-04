import React from 'react';
import {Router, Route} from 'react-router';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';
import Item from './components/Item';

const Routes = (props) => (
  <Router {...props}>
    <Route path='/' component={App} />
      <Route path='/about' component={About} />
      <Route path='/item/:itemId' component={Item} />
      {/* <Route path='*' component={NotFound} /> */}
  </Router>
)

export default Routes;
