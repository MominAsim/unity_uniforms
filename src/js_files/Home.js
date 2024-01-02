import React from "react";
import { Link } from 'react-router-dom';
import './App.css';

const Home = () => {
return (
 <>
     {/* start of header */}
     <header>
      <h1 id="unityuniformsheaderid" className='unityuniformsheaderclass'>Unity Uniforms</h1> 
      <div id="buttonsheader">
      <Link className="allbuttons" id="aboutus_id_header" to="/Footer">ABOUT US</Link>
      <Link className="allbuttons" id="loginid" to="/Login">LOGIN</Link>
      <Link className="allbuttons" id="registerid" to="/Register">REGISTER</Link>
      </div>
    </header>    
    <body>
      <h1 id="school_heading_body"><b>Select A School </b></h1>
    </body>
 </>
  );
};
export default Home;