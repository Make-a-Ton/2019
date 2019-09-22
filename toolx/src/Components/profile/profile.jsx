import React, { Component } from 'react';
import './profile.css';
import {Link} from 'react-router-dom';
import img from "../asset/user.svg" ;
const divStyle = {
    margin: '40px',
  };

export default function Profile ()
{
    return(
         <div>  
              <div className="outer">
                 <header>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon fill="white" points="0,100 100,0 100,100"/>
                     </svg>
                 </header>
        
        <div className="pro-pic">
             <img src={img} style={divStyle}/>
        </div>
      <div className="details">
             <h3>Jessica Jones, 22 </h3>
            <p>SOE, Cusat</p>
            <p>Computer Science - Engineering</p>
            <p>Cochin University Of Science And Technology </p>
      </div>
      </div>
      </div>


    )
    
}