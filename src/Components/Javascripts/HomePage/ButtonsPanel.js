import {Button} from 'antd';
import '../../Styles/HomePage/ButtonsPanel.css';
import React from "react";
import {Link} from "react-router-dom";

export default class ButtonsPanel extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ButtonsPanel">
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
