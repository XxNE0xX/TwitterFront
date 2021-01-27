import {Button, Input, Space} from 'antd';
import '../Styles/AuthorizedSearchAndNewsPanel.css';
import React from "react";


export default class AuthorizedSearchAndNewsPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible:false,
            username: "",
            nickname: "",
            follow_unfollow: "Follow!"
        }
    }

    followButtonHandler = async () => {
        if (this.props.user.username === this.state.username)
            return;

        let url_ending = (this.state.follow_unfollow === "Follow!") ? "follow" : "unFollow";

        const response = await fetch(`http://localhost:8000/tweeter/user/${url_ending}`,{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({followedUsername: this.state.username, followerUsername: this.props.user.username})
        });
        if (response.ok){
            console.log("follow operation successful.");
            const response2 = await fetch(`http://localhost:8000/tweeter/user/authenticate?username=${this.props.user.username}&password=${this.props.user.password}`, {
                method: 'GET',
            });
            if (!response2.ok)
                alert("Incorrect username and password.")
            else{
                const json = await response2.json();
                console.log(json);
                this.setState({
                    follow_unfollow: (url_ending === "follow"? "Unfollow!":"Follow!")
                })
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
            console.log("follow operation failed.")
    }

    onSearch = async (value) => {
        const response = await fetch(`http://localhost:8000/tweeter/user?username=${value}`);
        const data = await response.json();
        if (response.ok && data.users.length === 1){
            let i, uf=false;
            for (i = 0; i < this.props.user.followingsUsername.length;i= i+1) {
                if (this.props.user.followingsUsername[i] === data.users[0].username){
                    uf = true;
                }
            }
            this.setState({
                visible: true,
                username: data.users[0].username,
                nickname: data.users[0].name,
                follow_unfollow: (uf? "Unfollow!":"Follow!")
            })
        }
        else{
            const response2 = await fetch(`http://localhost:8000/tweeter/user?name=${value}`);
            const data2 = await response2.json();
            if (response2.ok && data2.users.length === 1){
                let i, uf=false;
                console.log(this.props.user)
                for (i = 0; i < this.props.user.followingsUsername.length;i= i+1) {
                    if (this.props.user.followingsUsername[i] === data2.users[0].username){
                        uf = true;
                    }
                }
                this.setState({
                    visible: true,
                    username: data2.users[0].username,
                    nickname: data2.users[0].name,
                    follow_unfollow: (uf? "Unfollow!":"Follow!")
                })
            }
            else
                console.log("no users found.")
        }

        console.log(value)
    }

    render() {
        const { Search } = Input;
        return (
            <div className="SearchAndNewsContainer">
                <Search className={"SearchBox"} placeholder="Find People!" onSearch={this.onSearch} enterButton />
                {this.state.visible?
                    <div className={"search-result"} >
                        <div className={"photo-holder"}> </div>
                        <div className={"username-nickname-holder"}>
                            @{this.state.username}<br/>
                            <i>{this.state.nickname}</i>
                        </div>
                        <div className={"follow-button-holder"}>
                            <Button onClick={this.followButtonHandler} shape={"round"} type={"primary"}>{this.state.follow_unfollow}</Button>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        );
    }
}
