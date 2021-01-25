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
                <Goal />
                <Goal />
                <Goal />
            </div>
        );
    }
}
