import React from "react";
import './App.css';
import Header from "../js_files/Header";
import Footer from "../js_files/Footer";

const Sportshirt = () => {
return (
 <>
    <Header />
    <body>
      <div className="all_elements_products_show_page">
      <img className="logo_second_page" src="/images/tis.png" alt="Img didnt load :("/><br></br>
      <br></br>
      <img className="image_product_secondpage" src="/images/products/sports_shirt/europe/europe_shirt_pic_front.jpg" alt="Shirt pic" />
      <h1 className="product_name_second_page">Sports shirt</h1>
      <p>Sports Shirt for Sports Wear</p>
      <h2 className="price_product_second_page">RS 500</h2>
      <select id="size_selection" name="attribute_pa_size"data-attribute_name="attribute_pa_size" data-show_option_none="yes">
      <option value="Small" class="Small">Small</option>
      <option value="Medium" class="Medium">Medium</option>
      <option value="Large" class="Large">Large</option>
      </select>
      <br></br>
      <br></br>
      <br></br>
      <button className="addtocartbutton">ADD TO CART</button>
      </div>
    </body>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Footer />
 </>
  );
};
export default Sportshirt;