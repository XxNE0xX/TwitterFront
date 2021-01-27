import {Button} from 'antd';
import '../Styles/AuthorizedNavigationPanel.css';
import React from "react";
import { Input } from 'antd';

import {Link, Router} from "react-router-dom";
import {TwitterOutlined, HomeOutlined, UserOutlined} from "@ant-design/icons";

export default class AuthorizedNavigationPanel extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            value:""
        }
    }

    profileButtonHandler = () => {
        this.props.pathSetter("profile");
    }

    editProfilePageHandler = () => {
        this.props.pathSetter("edit-profile")
    }

    onChange = ({ target: { value } }) => {
        this.setState({ value });
    };

    composeTweet = async () => {
        let d = new Date();
        let month = ((d.getMonth()+1) > 9) ? (d.getMonth()+1).toString() : "0" + (d.getMonth()+1).toString()
        let date = (d.getDate() > 9) ? (d.getDate().toString()) : "0" + d.getDate().toString()
        let hours = (d.getHours()>9) ? d.getHours().toString() : "0" + d.getHours().toString()
        let minutes = d.getMinutes()>9 ? d.getMinutes().toString() : "0" + d.getMinutes().toString()
        let seconds = d.getSeconds()>9 ? d.getSeconds().toString() : "0" + d.getSeconds().toString()

        const response = await fetch(`http://localhost:8000/tweeter/tweet`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                body: this.state.value,
                ownerUsername: this.props.user.username,
                hashtags: [],
                time: d.getFullYear().toString() + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds,
                mentions: []
            })
        });
        if (response.ok){
            console.log("ok");
            const json = await response.json();
            console.log(json);
            const response2 = await fetch(`http://localhost:8000/tweeter/user/authenticate?username=${this.props.user.username}&password=${this.props.user.password}`, {
                method: 'GET',
            });
            if (!response.ok)
                alert("Incorrect username and password.")
            else{
                const json = await response2.json();
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
        else
            console.log("tweet not created.")
        this.setState({
            value: ''
        })
    }

    render() {
        const { TextArea } = Input;
        const { value } = this.state;

        return (
            <div className="NavigationContainer">
                <div className={"buttons-container"}>
                    <Button className={"LogoButton"} shape={"circle"}>
                        {/*<Link to={"/feed"}>*/}
                        <Icon text={"TwitterLogo"} />
                        {/*</Link>*/}
                    </Button>
                    <Button size={"large"} className={"NavigationButton"} shape={"round"}>
                        {/*<Link to={"/feed"}>*/}
                        <Icon text={"Home"} />
                        {/*</Link>*/}
                    </Button>
                    <Button size={"large"} onClick={this.profileButtonHandler} className={"NavigationButton"} shape={"round"}>
                        <Icon text={"Profile"} />
                    </Button>
                </div>

                <div className={"tweet-text-area-container"}>
                    <TextArea value={value} onChange={this.onChange} placeholder={"Say what is in your mind!"} autoSize={{ minRows: 5, maxRows: 5 }} showCount maxLength={250} />
                </div>

                <Button onClick={this.composeTweet} className={"TweetButton"} shape={"round"}>
                        <Icon text={"Tweet"} />
                </Button>
                <div className={"Spacing"} />
                <Button onClick={this.editProfilePageHandler} className={"NavigationButton"} shape={"round"} id={"editProfileButton"}>
                        <Icon text={"Edit Profile"} />
                </Button>
            </div>
        );
    }
}

class Icon extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                {this.props.text === "Home" ? <HomeOutlined /> : null}
                {this.props.text === "Profile" ? <UserOutlined /> : null}
                {this.props.text !== "TwitterLogo" ? <span> &nbsp;&nbsp;{this.props.text} </span> : <TwitterOutlined />}

            </div>
        );
    }
}
