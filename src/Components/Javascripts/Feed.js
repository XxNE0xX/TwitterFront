import '../Styles/Feed.css';
import AuthorizedNavigationPanel from "./AuthorizedNavigationPanel";
import FeedTweetsContainer from "./Tweet/FeedTweetsContainer";
import AuthorizedSearchAndNewsPanel from "./AuthorizedSearchAndNewsPanel";

import React from "react";

export default class Feed extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="FeedContainer">
                <AuthorizedNavigationPanel pathSetter={this.props.pathSetter} user={this.props.user}/>
                <FeedTweetsContainer />
                <AuthorizedSearchAndNewsPanel />
            </div>
        );
    }
}