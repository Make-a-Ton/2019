import React from "react";
import "./card.css";
import logo from "./24px.svg" ;

class IndCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title : this.props.title,
            image : this.props.image
        }
    }
    render(){
        return(
            <div className="card">
                    <div style={{width:"270px",height:"60px",display:"flex",alignItems:"center", justifyContent:"space-between",flexDirection:"row",padding:"0px 0px 0px 10px"}}>     
                    {this.state.title}
                    <div><img style={{width:"30px", height:"30px",mozOpacity:".4"}} src={this.state.image}/></div> 
            </div>
            </div>
        )
    }
}

export default IndCard ;