import '../Styles/App.css';
import React from "react";
import 'antd/dist/antd.css';
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage"
import Feed from "./Feed";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            authorized: false,
            user: null,
        }
    }

    authorizer = (user) => {
        this.setState({
            authorized: true,
            user: user
        })
    }

    render() {
        return (
            this.state.authorized ?
                <Feed />
                :
                <Router>
                    <Switch>
                        <Route path={"/"} exact component={HomePage}/>
                        <Route path={"/feed"} exact>
                            {this.state.authorized ?
                                <Feed authorized={this.state.authorized} />
                                :
                                <HomePage/>
                            }
                        </Route>
                        <Route path={"/login"} exact>
                            <LoginPage authorizer={this.authorizer}/>
                        </Route>
                        <Route path="/signup" exact>
                            <SignupPage authorizer={this.authorizer}/>
                        </Route>
                    </Switch>
                </Router>
        );
    }
}

export default App;
