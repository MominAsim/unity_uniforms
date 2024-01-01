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
      <Link className="allbuttons" id="instagram" to="https://www.instagram.com/" target="_blank">INSTAGRAM</Link>
      <Link className="allbuttons" id="loginid" to="/Login">LOGIN</Link>
      <Link className="allbuttons" id="registerid" to="/Register">REGISTER</Link>
      </div>
    </header>    
    <body>
      <h1 id="school_heading_body"><u><b>Select A School :</b></u></h1>
    </body>
 </>
  );
};
export default Home;