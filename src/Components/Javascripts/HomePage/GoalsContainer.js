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
                <Goal iconType={"Search"} text={"Follow your interests."} />
                <Goal iconType={"TwoMen"} text={"Hear what people are talking about."} />
                <Goal iconType={"Speech"} text={"Join the conversation."} />
            </div>
        );
    }
}
