import React, { Component } from "react";
import "./card.css";
import  logo  from "./24px.svg";
import back from"../asset/batthern.png"
import svg from "../asset/Rainbow-Vortex.svg"
import IndCard from "./IndCard";


var styleb={
    backgroundImage:`url(${svg})`
}
class Carder extends Component{
    render(){
        return(
            <div className="screen">

                <div className="mainCard" style={styleb}>
                <div style={{display:"flex",flexDirection:"column",height:"75%",justifyContent:"space-around"}}>
                    <IndCard title="Bonafaide Certificate" image={logo}/>
                    <IndCard title="Provisional Certificate (Form G)" image={logo}/>
                    <IndCard title="Matriculation Fee Receipt" image={logo}/>
                    <IndCard title="Application for condonation of shortage of attendance" image={logo}/>
                    <IndCard title="Duplicate Marklist (Form B)" image={logo}/>
                    <IndCard title="Ph.D Related Certificates (From E)" image={logo}/>

                </div>
            
                </div>


            </div>
        )
    
    }

}
export default Carder;

