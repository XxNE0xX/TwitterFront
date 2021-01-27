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
                <Button className={"LogoButton"} shape={"circle"}>
                    {/*<Link to={"/feed"}>*/}
                        <Icon text={"TwitterLogo"} />
                    {/*</Link>*/}
                </Button>
                <Button className={"NavigationButton"} shape={"round"}>
                    {/*<Link to={"/feed"}>*/}
                        <Icon text={"Home"} />
                    {/*</Link>*/}
                </Button>
                <Button className={"NavigationButton"} shape={"round"}>
                    {/*<Link to={"/profile"}>*/}
                        <Icon text={"Profile"} />
                    {/*</Link>*/}
                </Button>
                <Button className={"TweetButton"} shape={"round"}>
                    {/*<Link to={"/compose/tweet"}>*/}
                        <Icon text={"Tweet"} />
                    {/*</Link>*/}
                </Button>
                <div className={"Spacing"} />
                <Button className={"NavigationButton"} shape={"round"} style={{marginLeft:"20px", width:"100%"}}>
                    {/*<Link to={"/profile"}>*/}
                        <Icon text={"Profile"} />
                    {/*</Link>*/}
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
