import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, Route, Switch } from 'react-router';
import Home from './containers/Home/Home';

import './App.css';

function App() {
  const routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/auth" component={Auth} /> */}
      <Redirect to="/" />
    </Switch>
  );
  return <>{routes}</>;
}

export default App;
