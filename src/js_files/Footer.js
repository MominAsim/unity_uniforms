import React from "react";
import { Link } from 'react-router-dom';
import './App.css';

const Footer = () => {
return (
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
  );
};
export default Footer;