import '../../Styles/ProfilePage/FFPage.css';
import AuthorizedNavigationPanel from "../AuthorizedNavigationPanel";
import AuthorizedSearchAndNewsPanel from "../AuthorizedSearchAndNewsPanel";

import React from "react";
import {Button} from "antd";

export default class FFPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showFollowing: true,
        }
    }

    showFollowing = () => {
        this.setState({showFollowing : true})
    }

    showFollowers = () => {
        this.setState({showFollowing : false})
    }

    render() {
        return (
            <div className="FFPage">
                <AuthorizedNavigationPanel authorizer={this.props.authorizer} pathSetter={this.props.pathSetter}
                                           user={this.props.user}/>
                <div className={"FFPageContainer"}>
                    <NicknameUsername Nickname={"Shalqam"} Username={"_sh99"}/>
                    <FollowingFollowersButtonsBar showFollowingFunc={this.showFollowing} showFollowersFunc={this.showFollowers}/>

                    <div className={"FollowingFollowersContainer"}>
                        {/*TODO add corresponding following or followers based on showFollowingState*/}
                    </div>

                </div>
                <AuthorizedSearchAndNewsPanel/>
            </div>
        );
    }
}

class NicknameUsername extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="FFNicknameUsernameBox">
                <div className={"FFPageNickname"}>
                    {this.props.Nickname}
                </div>
                <div className={"FFPageUsername"}>
                    @{this.props.Username}
                </div>
            </div>
        );
    }
}

class FollowingFollowersButtonsBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="FollowingFollowersButtonsBar">
                <Button className={"FollowingFollowersButton"} onClick={this.props.showFollowingFunc}>
                    Followings
                </Button>
                <Button className={"FollowingFollowersButton"} onClick={this.props.showFollowersFunc}>
                    Followers
                </Button>
            </div>
        );
    }
}