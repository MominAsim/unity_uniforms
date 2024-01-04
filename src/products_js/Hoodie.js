import React from "react";
import { Link } from 'react-router-dom';
import './App.css';

const Hoodie = () => {
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
    <body>
      <div className="all_elements_products_show_page">
      <img className="logo_second_page" src="/images/tcs.png" alt="Img didnt load :("/><br></br>
      <br></br>
      <img className="image_product_secondpage" src="/images/products/hoodie.jpg" alt="Shirt pic" />
      <h1 className="product_name_second_page">Hoodie</h1>
      <p>Winter collection, Part of winter uniform</p>
      <h2 className="price_product_second_page">RS 500</h2>
      <select id="size_selection" name="attribute_pa_size"data-attribute_name="attribute_pa_size" data-show_option_none="yes">
      <option value="">Size</option>
      <option value="1111" class="Extra Small">Extra Small</option>
      <option value="Small" class="Small">Small</option>
      <option value="Medium" class="Medium">Medium</option>
      <option value="Large" class="Large">Large</option>
      <option value="Xl" class="Xl">Xl</option>
      </select>
      <br></br>
      <br></br>
      <br></br>
      <button className="addtocartbutton">ADD TO CART</button>
      </div>
    </body>

    {/* footer */}
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
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
export default Hoodie;