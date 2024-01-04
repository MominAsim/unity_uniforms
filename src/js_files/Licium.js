import React from "react";
import './App.css';
import { Link } from 'react-router-dom';

const Licium = () => {
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

    {/* body */}
      <body >
      <img className="logo_mainpages" src="/images/frobles.jpg" alt="City School" />
      <div className="schools_div_mainpage">    
      <Link className="products_box_mainpage" to="/Shirt">
      <img className="products_pic_mainpages" src="/images/products/shirt.jpg" alt="Img didnt load :("/>
      <h4 className="titleofitem_mainpage">Shirt</h4>
      <p className="price">RS 500</p>
      </Link>

      <Link className="products_box_mainpage" to="/Pant">
      <img className="products_pic_mainpages" src="/images/products/pant.jpg" alt="Img didnt load :("/>
      <h4 className="titleofitem_mainpage">Pant</h4>
      <p className="price">RS 500</p>
      </Link>

      <Link className="products_box_mainpage" to="/Hoodie">
      <img className="products_pic_mainpages" src="/images/products/hoodie.jpg" alt="Img didnt load :("/>
      <h4 className="titleofitem_mainpage">Hoodie</h4>
      <p className="price">RS 500</p>
      </Link>

      <Link className="products_box_mainpage" to="/Cap">
      <img className="products_pic_mainpages" src="/images/products/cap.jpg" alt="Img didnt load :("/>
      <h4 className="titleofitem_mainpage">Cap</h4>
      <p className="price">RS 500</p>
      </Link>

      <Link className="products_box_mainpage" to="/Socks">
      <img className="products_pic_mainpages" src="/images/products/socks.jpg" alt="Img didnt load :("/>
      <h4 className="titleofitem_mainpage">Socks</h4>
      <p className="price">RS 500</p>
      </Link>

      <Link className="products_box_mainpage" to="/Sportstrousers">
      <img className="products_pic_mainpages" src="/images/products/sports_pant.jpg" alt="Img didnt load :("/>
      <h4 className="titleofitem_mainpage">Sports Trousers</h4>
      <p className="price">RS 500</p>
      </Link>

      <Link className="products_box_mainpage" to="/Sportshirt">
      <img className="products_pic_mainpages" src="/images/products/sports_shirt.jpg" alt="Img didnt load :("/>
      <h4 className="titleofitem_mainpage">Sports Shirt</h4>
      <p className="price">RS 500</p>
      </Link>

      <Link className="products_box_mainpage" to="/Tie">
      <img className="products_pic_mainpages" src="/images/products/tie.jpg" alt="Img didnt load :("/>
      <h4 className="titleofitem_mainpage">Tie</h4>
      <p className="price">RS 500</p>
      </Link>

      </div>
      </body>
      <footer className="school_products_footer">
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
      <img id="smiley" className="products_pic_mainpages" src="/images/products/smiley.png" alt="Img didnt load :("/>
      </footer>
 </>
  );
};
export default Licium;