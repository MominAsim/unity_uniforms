import React from "react";
import './App.css';
import { Link } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
const Tis = () => {
return (
 <>
      <Header />
      <body >
      <img className="logo_mainpages" src="/images/tis.png" alt="City School" />
      <div className="schools_div_mainpage">    

      <Link className="products_box_mainpage" to="/Sportshirt">
      <img className="products_pic_mainpages" src="/images/products/sports_shirt.jpg" alt="Img didnt load :("/>
      <h4 className="titleofitem_mainpage">Sports Shirt</h4>
      <p className="price">RS 500</p>
      </Link>

      <Link className="products_box_mainpage" to="/Shirt">
      <img className="products_pic_mainpages" src="/images/products/shirt.jpg" alt="Img didnt load :("/>
      <h4 className="titleofitem_mainpage">Shirt</h4>
      <h4 className="unavailable">UNAVAILABLE</h4>
      <p className="price">RS 500</p>
      </Link>

      <Link className="products_box_mainpage" to="/Pant">
      <img className="products_pic_mainpages" src="/images/products/pant.jpg" alt="Img didnt load :("/>
      <h4 className="titleofitem_mainpage">Pant</h4>
      <h4 className="unavailable">UNAVAILABLE</h4>
      <p className="price">RS 500</p>
      </Link>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
      </body>
 </>
  );
};
export default Tis;