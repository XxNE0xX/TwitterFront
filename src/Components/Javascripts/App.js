import '../Styles/App.css';
import React from "react";
import 'antd/dist/antd.css';
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage";
import Feed from "./Feed";
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
            <Route path={"/login"} exact component={LoginPage} />
            <Route path={"/signup"} exact component={SignupPage} />
            <Route path={"/feed"} component={Feed} />
          </Switch>
        </Router>
    );
  }
}

export default App;
