import React from 'react';
import "./index.css";
import IndCard from "../card/IndCard";
import logo from "../card/24px.svg";

class Hod extends React.Component {
    render() {
        return (
            <div className="hodMainDiv">
                <IndCard title="Adhil Juvane" image={logo} />
            </div>
        )
    }
}

export default Hod;