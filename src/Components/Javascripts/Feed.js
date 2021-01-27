import '../Styles/Feed.css';
import AuthorizedNavigationPanel from "./AuthorizedNavigationPanel";
import Tweet from "./Tweet/Tweet";
import AuthorizedSearchAndNewsPanel from "./AuthorizedSearchAndNewsPanel";

import React from "react";

export default class Feed extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="MainContainer">
                <AuthorizedNavigationPanel pathSetter={this.props.pathSetter}/>
                <Tweet />
                <AuthorizedSearchAndNewsPanel />
            </div>
        );
    }
}