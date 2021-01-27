import {Button, Input, Space} from 'antd';
import '../Styles/AuthorizedSearchAndNewsPanel.css';
import React from "react";


export default class AuthorizedSearchAndNewsPanel extends React.Component {

    constructor(props) {
        super(props);
    }

    onSearch = value => {
        console.log(value)
    }

    render() {
        const { Search } = Input;
        return (
            <div className="SearchAndNewsContainer">
                <Search className={"SearchBox"} placeholder="Find People!" onSearch={this.onSearch} enterButton />

                <div className={"search-result"} >
                    <div className={"photo-holder"}> </div>
                    <div className={"username-nickname-holder"}>
                        @username <br/>
                        <i>nickname</i>
                    </div>
                    <div className={"follow-button-holder"}>
                        <Button shape={"round"} type={"primary"}>Follow!</Button>
                    </div>
                </div>
            </div>
        );
    }
}
