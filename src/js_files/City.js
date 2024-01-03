import React from "react";
import './App.css';
import { Link } from 'react-router-dom';

const City = () => {
return (
 <>
     {/*header */}
     <header>
     <Link to="/"><h1 id="unityuniformsheaderid" className='unityuniformsheaderclass' to="/City">Unity Uniforms</h1></Link>
      <div id="buttonsheader">
      <Link className="allbuttons" id="aboutus_id_header" to="/Footer">ABOUT US</Link>
      <Link className="allbuttons" id="loginid" to="/Login">LOGIN</Link>
      <Link className="allbuttons" id="registerid" to="/Register">REGISTER</Link>
      </div>
    </header>    

    {/* body */}
      <body >
      <img className="logo_mainpages" src="/images/tcs.png" alt="City School" />
      <div className="schools_div_mainpage">
      <div className="products_box_mainpage">
      <img className="products_pic_mainpages" src="/images/products/shirt.jpg" alt="Img didnt load :("/>
      <h4 className="titleofitem_mainpage">Shirt</h4>
      <p className="price">RS 500</p>
      </div>
      <div className="products_box_mainpage">
      <img className="products_pic_mainpages" src="/images/products/pant.jpg" alt="Img didnt load :("/>
      <h4 className="titleofitem_mainpage">Pant</h4>
      <p className="price">RS 500</p>
      </div>
      <div className="products_box_mainpage">
      <img className="products_pic_mainpages" src="/images/products/hoodie.jpg" alt="Img didnt load :("/>
      <h4 className="titleofitem_mainpage">Hoodie</h4>
      <p className="price">RS 500</p>
      </div>
      <div className="products_box_mainpage">
      <img className="products_pic_mainpages" src="/images/products/cap.jpg" alt="Img didnt load :("/>
      <h4 className="titleofitem_mainpage">Cap</h4>
      <p className="price">RS 500</p>
      </div>
      <div className="products_box_mainpage">
      <img className="products_pic_mainpages" src="/images/products/socks.jpg" alt="Img didnt load :("/>
      <h4 className="titleofitem_mainpage">Socks</h4>
      <p className="price">RS 500</p>
      </div>
      <div className="products_box_mainpage">
      <img className="products_pic_mainpages" src="/images/products/sports_pant.jpg" alt="Img didnt load :("/>
      <h4 className="titleofitem_mainpage">Sports Pant</h4>
      <p className="price">RS 500</p>
      </div>
      <div className="products_box_mainpage">
      <img className="products_pic_mainpages" src="/images/products/sports_shirt.jpg" alt="Img didnt load :("/>
      <h4 className="titleofitem_mainpage">Sports Shirt</h4>
      <p className="price">RS 500</p>
      </div>
      <div className="products_box_mainpage">
      <img className="products_pic_mainpages" src="/images/products/tie.jpg" alt="Img didnt load :("/>
      <h4 className="titleofitem_mainpage">Tie</h4>
      <p className="price">RS 500</p>
      </div>
      </div>
      </body>
 </>
  );
};
export default City;