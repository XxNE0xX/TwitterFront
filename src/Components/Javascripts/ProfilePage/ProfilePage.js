import '../../Styles/ProfilePage/ProfilePage.css';
import AuthorizedNavigationPanel from "..//AuthorizedNavigationPanel";
import AuthorizedSearchAndNewsPanel from "../AuthorizedSearchAndNewsPanel";
import ProfilePresenter from "./ProfilePresenter";

import React from "react";

export default class ProfilePage extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ProfilePageContainer">
                <AuthorizedNavigationPanel authorizer={this.props.authorizer} pathSetter={this.props.pathSetter} user={this.props.user}/>
                <ProfilePresenter authorizer={this.props.authorizer} pathSetter={this.props.pathSetter} user={this.props.user} followingShowStatusSetter={this.props.followingShowStatusSetter}/>
                <AuthorizedSearchAndNewsPanel />
            </div>
        );
    }
}