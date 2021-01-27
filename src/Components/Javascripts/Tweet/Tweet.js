import '../../Styles/Tweet/Tweet.css';

import {Button} from "antd";

import {UserOutlined, MessageOutlined, SyncOutlined, HeartOutlined, UploadOutlined} from "@ant-design/icons";

import React from "react";

export default class Tweet extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="TweetMessage">
                <UsernameSection ProfilePicture={""} UsersName={"Shalqam"} Username={"_Sh99"} Time={"13h"} />
                <div className={"TweetBody"}>
                    this is a test.
                </div>
                <TweetCommandsBar CommentsCount={"1"} RetweetsCount={"20"} LikesCount={"150"} />
            </div>
        );
    }
}

class UsernameSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="UsernameSection">
                <Button className={"ProfilePhoto"} shape={"circle"}>
                    {this.props.ProfilePicture === "" ?
                        <UserOutlined/>
                        :
                        <img src={this.props.ProfilePicture}/>
                    }
                </Button>
                &nbsp;
                <div className={"UsersName"}>
                    {this.props.UsersName}
                </div>
                &nbsp;
                <div className={"Username"}>
                    @{this.props.Username}
                </div>
                &nbsp;
                <div className={"Time"}>
                    {this.props.Time}
                </div>
            </div>
        );
    }
}

class TweetCommandsBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="TweetCommandsBar">
                <Button className={"CommandsButton"} id={"CommentButton"} shape={"circle"}>
                    <MessageOutlined />
                    <span>
                        {this.props.CommentsCount}
                    </span>
                </Button>
                <Button className={"CommandsButton"} id={"RetweetButton"} shape={"circle"}>
                    <SyncOutlined />
                    <span>
                        {this.props.RetweetsCount}
                    </span>
                </Button>
                <Button className={"CommandsButton"} id={"LikeButton"} shape={"circle"}>
                    <HeartOutlined />
                    <span>
                        {this.props.LikesCount}
                    </span>
                </Button>
                <Button className={"CommandsButton"} id={"ShareTweetButton"} shape={"circle"}>
                    <UploadOutlined />
                </Button>
            </div>
        );
    }

}