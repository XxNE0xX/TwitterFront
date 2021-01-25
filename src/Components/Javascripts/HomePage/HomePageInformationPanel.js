import '../../Styles/HomePage/HomePageInformationPanel.css';
import GoalsContainer from "./GoalsContainer";
import React from "react";

export default class HomePageInformationPanel extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="InformationBox">
                <GoalsContainer />
            </div>
        );
    }
}
