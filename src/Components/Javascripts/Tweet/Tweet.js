import '../../Styles/Tweet/Tweet.css';

import {Button} from "antd";

import {UserOutlined, MessageOutlined, SyncOutlined, HeartOutlined, UploadOutlined} from "@ant-design/icons";

import React from "react";

export default class Tweet extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            body: "",
            time: "",
            uuid: "",
            ownerUsername: "",
            likedBy: [],
            retweetedBy: [],
            hashtags: [],
            mentions: []
        }
    }

    async componentDidMount() {
        const response = await fetch(`http://localhost:8000/tweeter/tweet/${this.props.tweetID}`);
        const data = await response.json();
        this.setState({
            body: data.body,
            time: data.time,
            uuid: data.uuid,
            ownerUsername: data.ownerUsername,
            likedBy: data.likedBy,
            retweetedBy: data.retweetedBy,
            hashtags: data.hashtags,
            mentions: data.mentions
        })

    }

    render() {
        return (
            <div className="TweetMessage">
                <UsernameSection tweetData={this.state} ProfilePicture={""} UsersName={"Shalqam"} Username={"_Sh99"} Time={"13h"} />
                <div className={"TweetBody"}>
                    {this.state.body}
                </div>
                <TweetCommandsBar tweetData={this.state} CommentsCount={"1"} RetweetsCount={"20"} LikesCount={"150"} />
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
                    {this.props.tweetData.ownerUsername}
                </div>
                &nbsp;
                <div className={"Username"}>
                    @{this.props.tweetData.ownerUsername}
                </div>
                &nbsp;
                <div className={"Time"}>
                    {this.props.tweetData.time}
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

                    </span>
                </Button>
                <Button className={"CommandsButton"} id={"RetweetButton"} shape={"circle"}>
                    <SyncOutlined />
                    <span>
                        {this.props.tweetData.retweetedBy.length}
                    </span>
                </Button>
                <Button className={"CommandsButton"} id={"LikeButton"} shape={"circle"}>
                    <HeartOutlined />
                    <span>
                        {this.props.tweetData.likedBy.length}
                    </span>
                </Button>
                <Button className={"CommandsButton"} id={"ShareTweetButton"} shape={"circle"}>
                    <UploadOutlined />
                </Button>
            </div>
        );
    }

}