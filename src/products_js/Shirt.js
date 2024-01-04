import React from "react";
import { Link } from 'react-router-dom';
import './App.css';

const Shirt = () => {
return (
 <>
      {/*header */}
      <header>
     <Link to="/"><h1 id="unityuniformsheaderid" className='unityuniformsheaderclass' to="/City">Unity Uniforms</h1></Link>
      <div id="buttonsheader">
      <a className="allbuttons" id="aboutus_id_header" href="#aboutus_div_id">ABOUT US</a>
      <Link className="allbuttons" id="loginid" to="/Login">LOGIN</Link>
      <Link className="allbuttons" id="registerid" to="/Register">REGISTER</Link>
      </div>
    </header>

    {/* body    */}
    <body>
      <img className="logo_second_page" src="/images/tcs.png" alt="Img didnt load :("/>
      <div className="all_elements_products_show_page">
      <img className="image_product_secondpage" src="/images/products/shirt.jpg" alt="Shirt pic" />
      <h1 className="product_name_second_page">City School Shirt Boys</h1>
      </div>
    </body>
 </>
  );
};
export default Shirt;