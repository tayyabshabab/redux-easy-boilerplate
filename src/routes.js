import React from 'react';
import { Route, IndexRoute } from 'react-router';

import requireAuth from './utils/requireAuth';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { List } from 'containers/List';
import { Login } from 'containers/Login';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={requireAuth(Home)} />
    <Route path="home" component={requireAuth(Home)} />
    <Route path="list" component={requireAuth(List)} />
    <Route path="login" component={Login} />
    <Route status={404} path="*" component={Home} />
  </Route>
);
