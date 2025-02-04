import '../Styles/App.css';
import React from "react";
import 'antd/dist/antd.css';
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage"
import EditProfilePage from "./EditProfilePage/EditProfilePage"
import ProfilePage from "./ProfilePage/ProfilePage"
import FFPage from "./ProfilePage/FFPage";
import Feed from "./Feed";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            path: "feed",
            showFollowing: true,
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

    followingShowStatusSetter = (followingShowStatus) => {
        this.setState({showFollowing: followingShowStatus})
    }

    render() {
        let p;
        if (this.state.path === "profile")
            p = <ProfilePage authorizer={this.authorizer} pathSetter={this.pathSetter} user={this.state.user} followingShowStatusSetter={this.followingShowStatusSetter} />
        else if (this.state.path === "edit-profile")
            p = <EditProfilePage authorizer={this.authorizer} pathSetter={this.pathSetter} user={this.state.user}/>
        else if (this.state.path === "FFPage")
            p = <FFPage authorizer={this.authorizer} pathSetter={this.pathSetter} user={this.state.user}/>
        else if (this.state.path === "feed")
            p = <Feed authorizer={this.authorizer} pathSetter={this.pathSetter} user={this.state.user}/>
        else
            p = <Feed authorizer={this.authorizer} pathSetter={this.pathSetter} user={this.state.user}/>

        return (
            this.state.authorized ? 
                p
                :
                <Router>
                    <Switch>
                        <Route path={"/"} exact>
                            {this.state.authorized ?
                                <Feed authorizer={this.authorizer} pathSetter={this.pathSetter} user={this.state.user}/>
                                :
                                <HomePage />
                            }
                        </Route>
                        <Route path={"/feed"} exact>
                            {this.state.authorized ?
                                <Feed authorizer={this.authorizer} pathSetter={this.pathSetter} user={this.state.user}/>
                                :
                                <HomePage />
                            }
                        </Route>
                        <Route path={"/profile"} exact>
                            {this.state.authorized ?
                                <ProfilePage authorizer={this.authorizer} pathSetter={this.pathSetter} user={this.state.user} followingShowStatusSetter={this.followingShowStatusSetter} />
                                :
                                <HomePage/>
                            }
                        </Route>
                        <Route path={"/profile/FFPage"} exact>
                            {this.state.authorized ?
                                <FFPage authorizer={this.authorizer} pathSetter={this.pathSetter} user={this.state.user} />
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
