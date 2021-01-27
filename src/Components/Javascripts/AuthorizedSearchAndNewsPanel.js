import {Button, Input, Space} from 'antd';
import '../Styles/AuthorizedSearchAndNewsPanel.css';
import React from "react";


export default class AuthorizedSearchAndNewsPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible:false,
            username: "",
            nickname: ""
        }
    }

    onSearch = async (value) => {
        const response = await fetch(`http://localhost:8000/tweeter/user?username=${value}`);
        const data = await response.json();
        if (response.ok && data.users.length === 1){
            this.setState({
                visible: true,
                username: data.users[0].username,
                nickname: data.users[0].name
            })
        }
        else{
            const response2 = await fetch(`http://localhost:8000/tweeter/user?name=${value}`);
            const data2 = await response2.json();
            if (response2.ok && data2.users.length === 1){
                this.setState({
                    visible: true,
                    username: data2.users[0].username,
                    nickname: data2.users[0].name
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
                            <Button shape={"round"} type={"primary"}>Follow!</Button>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        );
    }
}
