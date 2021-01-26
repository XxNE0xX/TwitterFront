import {Input, Icon} from "semantic-ui-react"
import '../Styles/AuthorizedSearchAndNewsPanel.css';
import React from "react";
import {Link} from "react-router-dom";
import {SearchOutlined} from "@ant-design/icons";

export default class AuthorizedSearchAndNewsPanel extends React.Component {

    constructor(props) {
        super(props);
    }

    onSearch = value => {
        console.log(value)
    }

    render() {
        return (
            <div className="SearchAndNewsContainer">
                <Input icon={<Icon name='search' inverted circular link />} iconPosition='left' placeholder={"Search Twitter"} style={{backgroundColor:"red", marginTop:"10px"}} />
                <div className={"Spacing"} />
            </div>
        );
    }
}
