import "../../Styles/ProfilePage/ProfilePresenter.css";

import Tweet from "../Tweet/Tweet";
import {Button} from "antd";
import React from "react";

export default class FeedTweetsContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        // const tweets = this.props.tweetIDs.reverse().map((tweetID)=>{
        //     console.log(tweetID)
        //     return <Tweet key={tweetID} tweetID={tweetID}/>
        // }
        // )
        return (
            <div className="ProfilePresenterContainer">
                <img src={"../../../Images/HomePage/TwitterIconWhite.png"} className={"CoverPicture"}/>
                <ButtonsBar isFollowed={true} profilePicturePath={""}/>
                <UserInformationPanel UsersName={"Shalqam"} Username={"_Sh99"} Bio={"I'm a great dev!"} />
                <TweetsButtonsBar />
                {/*{tweets}*/}
                <Tweet/>
                <Tweet/>
                <Tweet/>
                <Tweet/>
                <Tweet/>
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
                    <Button className={"FollowingFollowersButtons"} shape={"round"}>
                        Followings
                    </Button>
                    <Button className={"FollowingFollowersButtons"} shape={"round"}>
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
                <div className={"Bio"}>
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