import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Login from "./Login";
import Home from "./Home";
import Form4 from "./Form4";
import Form9 from "./Form9";
import "./styles.css";
import Registration1 from "./Registration1";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/Login" exact component={Login} />
          <Route path="/Form9" exact component={Form9} />
          <Route path="/Form4" exact component={Form4} />
          <Route path="/Registration1" exact component={Registration1} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}
