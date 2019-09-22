import React from 'react';
import "./Request.css";
import certificate from "./file.png";
import { Link } from 'react-router-dom';
import { message } from "antd";


class Request extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    onCancel = () => {
        message.error("Request Cancelled");
    }

    onConfirm = () => {
        message.success("Request Sent successfully");
    }

    render() {
        return (
            <div>
                <div className="requestMaindiv">
                    <div className="headerDiv">
                        <div>Bonafide Certificate</div>
                        <img src={certificate} alt="certificate" />
                    </div>
                    <div className="bodyDiv">
                        This is to certify that Mr/Ms. Adhil Juvane is a Bonafide student of CUSAT studying in department of Computer science S7 during the duration 2016-2020.
                            <Link to="/Home"><div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: "10px" }}>
                            <div className="buttonRed" onClick={this.onCancel}>Cancel</div>
                            <div className="buttonGreen" onClick={this.onConfirm}>Confirm</div>
                        </div></Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default Request;