import React from "react";
import { Link } from 'react-router-dom';
import './App.css';

const Header = () => {
return (
     <header>
     <Link to="/"><img src="/images/unity-uniforms.jpeg" alt="unity uniforms" className="header_logo_unity"/></Link>
      <div id="buttonsheader">
      <a className="allbuttons" id="aboutus_id_header" href="#aboutus_div_id">ABOUT US</a>
      <Link className="allbuttons" id="loginid" to="/Login">LOGIN</Link>
      <Link className="allbuttons" id="registerid" to="/Register">REGISTER</Link>
      </div>
    </header>  
  );
};
export default Header;