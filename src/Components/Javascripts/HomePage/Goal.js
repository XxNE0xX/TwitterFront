import '../../Styles/HomePage/HomePageInformationPanel.css';
import React from "react";
import icon from "../../../Images/HomePage/Search.png";

export default class HomePageInformationPanel extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Goal">
                <div className="GoalImage" style={{backgroundImage: `url(${this.props.iconPath})`}}/>
                <div className="GoalText">{this.props.text}</div>
            </div>
        );
    }
}
