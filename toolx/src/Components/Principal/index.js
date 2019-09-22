import React from 'react';
import "./index.css";
import IndCard from "../card/IndCard";
import logo from "../card/24px.svg";

class Principal extends React.Component {
    render() {
        return (
            <div className="principalMainDiv">
                <IndCard title="Computer Science HOD" image={logo} />
            </div>
        )
    }
}

export default Principal;