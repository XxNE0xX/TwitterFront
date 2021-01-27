import '../../Styles/HomePage/HomePage.css';
import HomePageInformationPanel from "./HomePageInformationPanel";
import ButtonsPanel from "./ButtonsPanel";

import React from "react";

export default class HomePage extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        let d = new Date();
        return (
            <div className="MainContainer">
                <div>
                    {d.getFullYear() + "-" + (d.getMonth()+1).toString() + "-" + d.getDate().toString() + " " + d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString()}

                </div>
                <HomePageInformationPanel />
                <ButtonsPanel />
            </div>
        );
    }
}