import '../../Styles/Tweet/FeedTweetsContainer.css';

import Tweet from "./Tweet";
import React from "react";

export default class FeedTweetsContainer extends React.Component{

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
            <div className="FeedTweetsContainer">
                {/*{tweets}*/}
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
            </div>
        );
    }
}
