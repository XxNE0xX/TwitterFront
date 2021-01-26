import {Button} from 'antd';
import '../../Styles/HomePage/ButtonsPanel.css';
import React from "react";

export default class ButtonsPanel extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ButtonsPanel">
                <div className="ButtonsBox">
                    <Button className="SignupButton" shape="round" size="large"  type="primary">
                        Sign up
                    </Button>
                    <Button className="LoginButton" shape="round" size="large">Log in</Button>
                </div>
            </div>
        );
    }
}
