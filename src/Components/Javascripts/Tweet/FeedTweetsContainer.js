import '../../Styles/Tweet/FeedTweetsContainer.css';

import Tweet from "./Tweet";
import React from "react";

export default class HomePage extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="FeedTweetsContainer">
                <Tweet />
                <Tweet />
                <Tweet />
            </div>
        );
    }
}