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
      <a className="allbuttons" id="aboutus_id_header" href="#aboutus_div_id">ABOUT US</a>
      <Link className="allbuttons" id="loginid" to="/Login">LOGIN</Link>
      <Link className="allbuttons" id="registerid" to="/Register">REGISTER</Link>
      </div>
    </header>    

    {/* body of home page  */}
    <body>
      <img src="/images/back_to_school.webp" alt="Get Back To School" className="get_back_to_school_image"/>
      <br></br>
      <br></br>
      <h1 id="school_heading_body"><b><u>Select A School</u></b></h1>
      <div className="schoolselect_home_div">
      <Link className="schoolselect_home" id="tis_select_home" to="/Tis">
      <img src="/images/tis.png" alt="Tis" />
      </Link>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </body>
    {/* footer */}
    <footer>
    <div className="footer_headings_div">
    <h2 className="contactus_footer">Contact Us</h2>
    <h2 className="aboutus_h1">ABOUT US</h2>  
    </div>
      <div id="aboutus_div_id" className="aboutus_div_class">
       <p className="contactus_para">
        <p className="phone_number">0335 8233366</p>
       </p>
       <p className="aboutus_class_para">Unity Uniforms is a provider of quality uniforms in Pakistan. Our commitment to excellence has made us the go-to choice for leading schools, colleges, and all kinds of uniforms. With years of experience in the industry, we have perfected the art of crafting uniforms that are both comfortable and durable.
       We use the finest materials to ensure our uniforms meet the highest standards. Our team works closely with schools and colleges to create custom uniform solutions that meet their specific needs. From design to delivery, we take great pride in every aspect of our work. Choose Unity Uniforms for a uniform solution that is both reliable and of top-notch quality.</p>
      </div>
      </footer>
 </>
  );
};
export default Home;