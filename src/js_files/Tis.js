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
      <img className="products_pic_mainpages" src="/images/products/sports_shirt/europe/europe_shirt_pic_front.jpg" alt="Img didnt load :("/>
      <h4 className="titleofitem_mainpage">Sports Shirt (Unisex)</h4>
      <p className="price">RS 1350</p>
      </Link>

      <Link className="products_box_mainpage" to="/Shirt">
      <img className="products_pic_mainpages" src="/images/products/male_dress_shirt/male_dress_shirt.jpg" alt="Img didnt load :("/>
      <h4 className="titleofitem_mainpage">Dress Shirt (Men)</h4>
      <h4 className="unavailable">UNAVAILABLE</h4>
      <p className="price">RS 500</p>
      </Link>

      <Link className="products_box_mainpage" to="/Pant">
      <img className="products_pic_mainpages" src="/images/products/male_dress_pant/male_dress_pant.jpg" alt="Img didnt load :("/>
      <h4 className="titleofitem_mainpage">Dress Pant (Men)</h4>
      <h4 className="unavailable">UNAVAILABLE</h4>
      <p className="price">RS 500</p>
      </Link>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div class="custom-shape-divider-bottom-1705253153">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
      <Footer />
      </body>
 </>
  );
};
export default Tis;