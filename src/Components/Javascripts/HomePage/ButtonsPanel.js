import {Button} from 'antd';
import '../../Styles/HomePage/ButtonsPanel.css';
import React from "react";
import {Link} from "react-router-dom";
import {TwitterOutlined} from "@ant-design/icons";

export default class ButtonsPanel extends React.Component{

    constructor(props) {
        super(props);
    }

    // signupButtonHandler = () => {
    //     this.props.pathSetter("signup");
    // }
    //
    // loginButtonHandler = () => {
    //     this.props.pathSetter("login");
    // }

    render() {
        return (
            <div className="ButtonsPanel">
                <div className="welcome-box">
                    <TwitterOutlined className="home-twitter-icon"/>
                    <br/>
                    See what’s happening in the world right now
                </div>

                <div className="joinTodayText">
                    Join Twitter today.
                </div>

                <div className="ButtonsBox">
                    <Button className="SignupButton" shape="round" size="large"  type="primary">
                        <Link to="/signup">
                            Sign up
                        </Link>
                    </Button>
                    <Button className="LoginButton" shape="round" size="large">
                        <Link to="/login">
                            Log in
                        </Link>
                    </Button>
                </div>
            </div>
        );
    }
}
