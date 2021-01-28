import '../../Styles/Tweet/Tweet.css';

import {Button} from "antd";

import {UserOutlined, MessageOutlined, SyncOutlined, HeartOutlined, UploadOutlined, HeartFilled} from "@ant-design/icons";

import React from "react";

export default class Tweet extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            likedByUser: false,
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

    getTweetData = async () => {
        const response = await fetch(`http://localhost:8000/tweeter/tweet/${this.props.tweetID}`);
        const data = await response.json();
        this.setState({
            likedByUser: data.likedBy.includes(this.props.user.username),
            retweetedByUser: data.retweetedBy.includes(this.props.user.username),
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

    async componentDidMount() {
        await this.getTweetData();
    }

    render() {
        // console.log(this.state.body)
        let cond =  this.props.user.username ===  this.state.ownerUsername
        return (
            cond ?
                    <div className="TweetMessage" style={{borderColor:"#2162B5"}}>
                        <UsernameSection tweetData={this.state}  />
                        <div className={"TweetBody"}>
                            {this.state.body}
                        </div>
                        <TweetCommandsBar updater={this.getTweetData} uuid={this.state.uuid} user={this.props.user} authorizer={this.props.authorizer} retweeted={this.state.retweetedByUser} liked={this.state.likedByUser} tweetData={this.state} />
                    </div>
                    :
                    <div className="TweetMessage" >
                        <UsernameSection tweetData={this.state}  />
                        <div className={"TweetBody"}>
                            {this.state.body}
                        </div>
                        <TweetCommandsBar updater={this.getTweetData} uuid={this.state.uuid} user={this.props.user} authorizer={this.props.authorizer} retweeted={this.state.retweetedByUser} liked={this.state.likedByUser} tweetData={this.state} />
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

    likeButtonHandler = async () => {
        let like_unlike = this.props.liked ? "unlike" : "like";
        const response = await fetch(`http://localhost:8000/tweeter/tweet/${like_unlike}?uuid=${this.props.uuid}&username=${this.props.user.username}`)
        if (!response.ok)
            console.log("like-unlike operation failed")

        this.props.updater();
    }

    retweetButtonHandler = async () => {
        let retweeted = this.props.retweeted ? "unretweet" : "retweet";
        const response = await fetch(`http://localhost:8000/tweeter/tweet/${retweeted}?uuid=${this.props.uuid}&username=${this.props.user.username}`)
        if (!response.ok)
            console.log("retweet-unretweet operatin failed.")

        this.props.updater();
    }

    render() {

        return (
            <div className="TweetCommandsBar">
                <Button className={"CommandsButton"} id={"CommentButton"} shape={"circle"}>
                    <MessageOutlined />
                    <span>

                    </span>
                </Button>
                {this.props.retweeted?
                    <Button onClick={this.retweetButtonHandler} className={"CommandsButton"} id={"RetweetButton-retweeted"} shape={"circle"}>
                        <SyncOutlined />
                        <span>
                        {this.props.tweetData.retweetedBy.length}
                        </span>
                    </Button>
                    :
                    <Button onClick={this.retweetButtonHandler} className={"CommandsButton"} id={"RetweetButton"} shape={"circle"}>
                        <SyncOutlined />
                        <span>
                        {this.props.tweetData.retweetedBy.length}
                        </span>
                    </Button>
                }
                <Button onClick={this.likeButtonHandler} className={"CommandsButton"} id={"LikeButton"} shape={"circle"}>
                    {this.props.liked?
                        <HeartFilled style={{color:"red"}}/>
                        :
                        <HeartOutlined />
                    }
                    {this.props.liked?
                        <span style={{color:"red"}}>{this.props.tweetData.likedBy.length}</span>
                        :
                        <span>{this.props.tweetData.likedBy.length}</span>
                    }
                </Button>
                <Button className={"CommandsButton"} id={"ShareTweetButton"} shape={"circle"}>
                    <UploadOutlined />
                </Button>
            </div>
        );
    }

}