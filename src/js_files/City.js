import React from "react";
import './App.css';
import { Link } from 'react-router-dom';

const City = () => {
return (
 <>
     {/*header */}
     <header>
      <h1 id="unityuniformsheaderid" className='unityuniformsheaderclass'>Unity Uniforms</h1> 
      <div id="buttonsheader">
      <Link className="allbuttons" id="aboutus_id_header" to="/Footer">ABOUT US</Link>
      <Link className="allbuttons" id="loginid" to="/Login">LOGIN</Link>
      <Link className="allbuttons" id="registerid" to="/Register">REGISTER</Link>
      </div>
    </header>    

    {/* body */}
      <body>
      <img className="logo_mainpages" src="/images/tcs.png" alt="City School" />
      
      </body>
 </>
  );
};
export default City;