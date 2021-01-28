import '../../Styles/Tweet/FeedTweetsContainer.css';

import Tweet from "./Tweet";
import React from "react";

export default class FeedTweetsContainer extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        //const reversedTweets = this.props.tweetIDs.reverse();
        const tweets = this.props.tweetIDs.slice().reverse().map((tweetID)=>{
            console.log(tweetID)
            return <Tweet authorizer={this.props.authorizer} user={this.props.user} key={tweetID} tweetID={tweetID}/>
        }
        )
        return (
            <div className="FeedTweetsContainer">
                {tweets}
            </div>
        );
    }
}
