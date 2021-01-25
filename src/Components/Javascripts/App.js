import logo from '../../Images/logo.svg';
import '../Styles/App.css';
import React from "react";
import HomePage from "./HomePage/HomePage";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Router>
          <Switch>
            <Route path={"/"} exact component={HomePage} />
          </Switch>
        </Router>
    );
  }
}

export default App;
