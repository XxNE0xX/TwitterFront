import '../Styles/Feed.css';
import AuthorizedNavigationPanel from "./AuthorizedNavigationPanel";
import FeedTweetsContainer from "./Tweet/FeedTweetsContainer";
import AuthorizedSearchAndNewsPanel from "./AuthorizedSearchAndNewsPanel";

import React from "react";

export default class Feed extends React.Component{

    constructor(props) {
        super(props);
    }

    refreshPage = async () => {
        const response = await fetch(`http://localhost:8000/tweeter/user/authenticate?username=${this.props.user.username}&password=${this.props.user.password}`, {
            method: 'GET',
        });
        if (!response.ok)
            alert("Incorrect username and password.")
        else{
            const json = await response.json();
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

    render() {
        return (
            <div className="FeedContainer">
                <AuthorizedNavigationPanel refreshPage={this.refreshPage} authorizer={this.props.authorizer} pathSetter={this.props.pathSetter} user={this.props.user}/>
                <FeedTweetsContainer authorizer={this.props.authorizer} user={this.props.user} tweetIDs={this.props.user.timeline} />
                <AuthorizedSearchAndNewsPanel authorizer={this.props.authorizer} user={this.props.user} />
            </div>
        );
    }
}