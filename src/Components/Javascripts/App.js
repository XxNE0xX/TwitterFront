import '../Styles/App.css';
import React from "react";
import 'antd/dist/antd.css';
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage"
import ProfilePage from "./ProfilePage/ProfilePage"
import Feed from "./Feed";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            path: "feed",
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

    pathSetter = (path) => {
        this.setState({
            path: path
        })
    }

    render() {
        let p = this.state.path === "profile" ? <ProfilePage pathSetter={this.pathSetter}/> : <Feed pathSetter={this.pathSetter}/>
        return (
            this.state.authorized ?
                p
                :
                <Router>
                    <Switch>
                        <Route path={"/"} exact component={HomePage}/>
                        <Route path={"/feed"} exact>
                            {this.state.authorized ?
                                <Feed pathSetter={this.pathSetter}/>
                                :
                                <HomePage/>
                            }
                        </Route>
                        <Route path={"/profile"} exact>
                            {this.state.authorized ?
                                <ProfilePage />
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
