import {Button} from 'antd';
import '../Styles/AuthorizedNavigationPanel.css';
import React from "react";
import {Link} from "react-router-dom";
import {TwitterOutlined, HomeOutlined, UserOutlined} from "@ant-design/icons";

export default class AuthorizedNavigationPanel extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="NavigationContainer">
                <Button className={"TwitterLogo"} shape={"circle"}>
                    <Link to={"/"}>
                        <TwitterOutlined />
                    </Link>
                </Button>
                <Button shape={"round"}>
                    <Link to={"/"}>
                        <Icon text={"Home"} />
                    </Link>
                </Button>
                <Button shape={"round"}>
                    <Link to={"/profile"}>
                        <Icon text={"Profile"} />
                    </Link>
                </Button>
                <Button shape={"round"} style={{backgroundColor:"#5299d2", width:"100%"}}>
                    <Link to={"/compose/tweet"}>
                        <Icon text={"Tweet"} />
                    </Link>
                </Button>
                <div className={"Spacing"} />
                <Button shape={"round"} style={{marginLeft:"20px", width:"100%"}}>
                    <Link to={"/profile"}>
                        <Icon text={"Profile"} />
                    </Link>
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
                {this.props.text === "Home" ? <HomeOutlined className={"ButtonImage"}/> : null}
                {this.props.text === "Profile" ? <UserOutlined className={"ButtonImage"}/> : null}
                &nbsp;&nbsp;
                    {this.props.text}
            </div>
        );
    }
}
