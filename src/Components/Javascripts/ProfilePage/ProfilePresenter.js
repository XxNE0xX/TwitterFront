import "../../Styles/ProfilePage/ProfilePresenter.css";

import defaultCover from "../../../Images/DefaultCover.jpg";
import defaultProfilePicture from "../../../Images/DefaultProfilePicture.jpg";
import FeedTweetsContainer from "../Tweet/FeedTweetsContainer";

import Tweet from "../Tweet/Tweet";
import {Button} from "antd";
import React from "react";

export default class ProfilePresenter extends React.Component {

    constructor(props) {
        super(props);
    }

    FollowingButtonHandler = () => {
        this.props.pathSetter("FFPage");
        this.props.followingShowStatusSetter(true);
    }

    FollowerButtonHandler = () => {
        this.props.pathSetter("FFPage");
        this.props.followingShowStatusSetter(false);
    }

    render() {
        // const tweets = this.props.tweetIDs.reverse().map((tweetID)=>{
        //     console.log(tweetID)
        //     return <Tweet key={tweetID} tweetID={tweetID}/>
        // }
        // )
        return (
            <div className="ProfilePresenterContainer">
                <img src={defaultCover} className={"CoverPicture"} />
                <ButtonsBar isFollowed={true} profilePicturePath={defaultProfilePicture} FollowingButtonHandler={this.FollowingButtonHandler} FollowerButtonHandler={this.FollowerButtonHandler}/>
                <UserInformationPanel UsersName={this.props.user.name} Username={this.props.user.username} Bio={"I'm a great dev!"} />
                <TweetsButtonsBar />
                <FeedTweetsContainer className={"ProfileTweets"} authorizer={this.props.authorizer} user={this.props.user} tweetIDs={this.props.user.tweets} />
            </div>
        );
    }
}

class ButtonsBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ButtonsBar">
                <img className={"ProfilePicture"} src={this.props.profilePicturePath}/>
                <div className={"ButtonsBarButtonContainer"}>
                    <Button className={"FollowingFollowersButtons"} shape={"round"} onClick={this.props.FollowingButtonHandler}>
                        Followings
                    </Button>
                    <Button className={"FollowingFollowersButtons"} shape={"round"} onClick={this.props.FollowerButtonHandler}>
                        Followers
                    </Button>
                    <Button className={"FollowUnfollowButton"} shape={"round"}>
                        {this.props.isFollowed ?
                            <span>
                            Unfollow
                        </span>
                            :
                            <span>
                            Follow
                        </span>
                        }
                    </Button>
                </div>
            </div>
        );
    }
}

class UserInformationPanel extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="UserInformationPanel">
                <div className={"ProfileNickname"}>
                    {this.props.UsersName}
                </div>
                <div className={"ProfileUsername"}>
                    @{this.props.Username}
                </div>
                <div className={"ProfileBio"}>
                    {this.props.Bio}
                </div>
            </div>
        );
    }
}

class TweetsButtonsBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="TweetsButtonsBar">
                <Button className={"TweetsRetweetsButton"}>
                    Tweets
                </Button>
                <Button className={"TweetsRetweetsButton"}>
                    Retweets
                </Button>
            </div>
        );
    }
}