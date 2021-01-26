import '../Styles/Feed.css';
import AuthorizedNavigationPanel from "./AuthorizedNavigationPanel";
import Tweet from "./Tweet/Tweet";

import React from "react";

export default class HomePage extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="MainContainer">
                <AuthorizedNavigationPanel />
                <Tweet />
            </div>
        );
    }
}