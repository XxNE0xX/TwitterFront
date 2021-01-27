import '../../Styles/Tweet/Tweet.css';

import {Button} from "antd";

import {UserOutlined} from "@ant-design/icons";

import React from "react";

export default class Tweet extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="TweetMessage">
                <UsernameSection ProfilePicture={""} UsersName={"Shalqam"} Username={"_Sh99"} Time={"13h"} />
                this is a test.
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
                        <UserOutlined />
                        :
                        <img src={this.props.ProfilePicture} />
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