import React,{useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Redirect, Route, Switch } from "react-router";
import { AuthContext } from "./context/AuthContext";

import Home from "./containers/Home/Home";


import './App.css';

function App() {

  const authContext = useContext(AuthContext);

  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/auth" component={Auth} /> */}
      <Redirect to="/" />
      </Switch>
  );

  if (authContext.isAuth) {
    routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/admin" component={Admin} />
        <Route path="/logout" component={Logout} /> */}
        <Redirect to="/" />
      </Switch>
    );
  }
 
  return <>{routes}</>;
}

export default App;
