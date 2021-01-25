import '../../Styles/HomePage/HomePage.css';
import HomePageInformationPanel from "./HomePageInformationPanel";
import ButtonsPanel from "./ButtonsPanel";

import React from "react";

export default class HomePage extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="MainContainer">
                <HomePageInformationPanel />
                <ButtonsPanel />
            </div>
        );
    }
}