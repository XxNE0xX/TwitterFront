import '../../Styles/ProfilePage/FFPage.css';
import AuthorizedNavigationPanel from "../AuthorizedNavigationPanel";
import AuthorizedSearchAndNewsPanel from "../AuthorizedSearchAndNewsPanel";

import React from "react";
import {Button} from "antd";
import Tweet from "../Tweet/Tweet";

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
        const followersList = this.props.user.followersUsername.slice().reverse().map((fUsername)=>{
            return <FollowerFollowing authorizer={this.props.authorizer} user={this.props.user} follower={true} button={!this.props.user.followingsUsername.includes(fUsername)} name={fUsername} key={fUsername}/>
        })
        const followingList = this.props.user.followingsUsername.slice().reverse().map((fUsername) =>{
            return <FollowerFollowing authorizer={this.props.authorizer} user={this.props.user} follower={false} button={true} name={fUsername} key={fUsername}/>
        })

        return (
            <div className="FFPage">
                <AuthorizedNavigationPanel authorizer={this.props.authorizer} pathSetter={this.props.pathSetter} user={this.props.user}/>
                <div className={"FFPageContainer"}>
                    <NicknameUsername Nickname={this.props.user.name} Username={this.props.user.username}/>
                    <FollowingFollowersButtonsBar showFollowingFunc={this.showFollowing} showFollowersFunc={this.showFollowers}/>

                    <div className={"FollowingFollowersContainer"}>
                        {this.state.showFollowing?
                            followingList
                            :
                            followersList
                        }
                    </div>

                </div>
                <AuthorizedSearchAndNewsPanel user={this.props.user}/>
            </div>
        );
    }
}

class FollowerFollowing extends React.Component {
    followUnfollowHandler = async () => {
        let url_ending = (this.props.follower) ? "follow" : "unFollow";

        const response = await fetch(`http://localhost:8000/tweeter/user/${url_ending}`,{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({followedUsername: this.props.name, followerUsername: this.props.user.username})
        });
        if (response.ok){
            console.log("follow operation successful.");
            const response2 = await fetch(`http://localhost:8000/tweeter/user/authenticate?username=${this.props.user.username}&password=${this.props.user.password}`, {
                method: 'GET',
            });
            if (!response2.ok)
                alert("Incorrect username and password.")
            else{
                const json = await response2.json();
                console.log(json);
                this.props.authorizer({
                    name: json.name,
                    username: json.username,
                    password: this.props.user.password,
                    followersUsername: json.followersUsername,
                    followingsUsername: json.followingsUsername,
                    likedTweets: json.likedTweets,
                    tweets: json.tweets,
                    reTweets: json.reTweets,
                    timeline: json.timeline,
                });
            }
        }
    }

    render() {
        if (this.props.follower)
            return <div className={"ffcontainer"}>
            <label>@{this.props.name}</label>
            {
                this.props.button?
                    <Button onClick={this.followUnfollowHandler} shape={"round"} type={"primary"} >Follow Back!</Button>
                    :
                    null
            }
            </div>
        else
            return <div className={"ffcontainer"}>
                <label>@{this.props.name}</label>
                <Button onClick={this.followUnfollowHandler} shape={"round"} type={"primary"} >Unfollow!</Button>
            </div>
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