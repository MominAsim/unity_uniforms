import React from "react";
import { Link,} from 'react-router-dom';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
return (
 <>
     <Header />
  <body>
  <img src="./images/back_to_school.webp" className="swiper_images" alt="HEHEHEHEHEHEHEHEHHEHE"></img> 
    <br></br>
    <br></br>
      <h1 id="school_heading_body"><b><u>Select A School</u></b></h1>
      <div id="schoolselect_home_div" className="schoolselect_home_div">
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
    <div class="custom-shape-divider-bottom-1705253153">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    <Footer />
 </>
  );
};
export default Home;