import React from "react";
import { Link, useLocation } from 'react-router-dom';
import './App.css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
return (
 <>
     <Header />
  <body>
<div class="swiper">
  <div class="swiper-wrapper">
    <img src="/images/back_to_school.webp" alt="Get Back To School" className="swiper-slide"/>
    <img src="/images/unity-uniforms.jpeg" alt="unity uniforms" className="swiper-slide"/>
  </div>
  <div class="swiper-pagination"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
  </div>
      <h1 id="school_heading_body"><b><u>Select A School</u></b></h1>
      <div className="schoolselect_home_div">
      <Link className="schoolselect_home" id="tis_select_home" to="/Tis">
      <img src="/images/tis.png" alt="Tis" />
      </Link>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <h4 className="more_schools_h4">More Schools Coming Soon....</h4>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </body>
    <Footer />
 </>
  );
};
export default Home;