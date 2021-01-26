import '../../Styles/HomePage/HomePageInformationPanel.css';
import Goal from "./Goal";
import React from "react";

export default class HomePageInformationPanel extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="GoalsContainer">
                <Goal iconPath={"../../../Images/HomePage/Search.png"} text={"Follow your interests."} />
                <Goal iconPath={"../../../Images/HomePage/TwoMen.png"} text={"Hear what people are talking about."} />
                <Goal iconPath={"../../../Images/HomePage/SpeechBubble.png"} text={"Join the conversation."} />
            </div>
        );
    }
}
