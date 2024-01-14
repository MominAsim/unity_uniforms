import React from "react";
import { Link,} from 'react-router-dom';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Image_slider_mainpage from "./Image_slider_mainpage";


const Home = () => {
return (
 <>
     <Header />
  <body>
    <Image_slider_mainpage />
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