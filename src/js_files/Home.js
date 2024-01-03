import React from "react";
import { Link } from 'react-router-dom';
import './App.css';

const Home = () => {
return (
 <>
     {/* start of header */}
     <header>
     <Link to="/"><h1 id="unityuniformsheaderid" className='unityuniformsheaderclass' to="/City">Unity Uniforms</h1></Link>
      <div id="buttonsheader">
      <Link className="allbuttons" id="aboutus_id_header" to="/Footer">ABOUT US</Link>
      <Link className="allbuttons" id="loginid" to="/Login">LOGIN</Link>
      <Link className="allbuttons" id="registerid" to="/Register">REGISTER</Link>
      </div>
    </header>    

    {/* body of home page  */}
    <body>
      <h1 id="school_heading_body"><b><u>Select A School</u></b></h1>
      <div className="schoolselect_home_div">
      <Link className="schoolselect_home" id="city_school_select_home" to="/City">
      <img src="/images/tcs.png" alt="City School" />
      </Link>
      <Link className="schoolselect_home" id="frobles_select_home" to="/Frobles">
      <img src="/images/frobles.jpg" alt="Frobles" />
      </Link>
      <Link className="schoolselect_home" id="licium_select_home" to="Licium">
      <img src="/images/lyceum.jpg" alt="Licium" />
      </Link>
      <Link className="schoolselect_home" id="tis_select_home" to="/Tis">
      <img src="/images/tis.png" alt="Tis" />
      </Link>
      </div>
    </body>
 </>
  );
};
export default Home;