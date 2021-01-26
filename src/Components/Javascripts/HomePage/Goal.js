import '../../Styles/HomePage/HomePageInformationPanel.css';
import React from "react";
import searchIcon from "../../../Images/HomePage/Search.png";
import twoMenIcon from "../../../Images/HomePage/TwoMen.png";
import speechIcon from "../../../Images/HomePage/SpeechBubble.png";

export default class HomePageInformationPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            url: null,
        };
    }

    render() {

        let image;
        if (this.props.iconType === "Search"){
            image = searchIcon;
        }
        else if (this.props.iconType === "TwoMen"){
            image = twoMenIcon;
        }
        else if (this.props.iconType === "Speech"){
            image = speechIcon;
        }
        return (
            <div className="Goal">
                <div className="GoalImage" style={{backgroundImage: `url(${image})`}} />
                <div className="GoalText">{this.props.text}</div>
            </div>
        );
    }
}
