import React from "react";
import Header from "../js_files/Header";
import Footer from "../js_files/Footer";
import './App.css';

const Shirt = () => {
return (
 <>
      <Header />
    <body>
      <div className="all_elements_products_show_page">
      <img className="logo_second_page" src="/images/tis.png" alt="Img didnt load :("/><br></br>
      <br></br>
      <img className="image_product_secondpage" src="/images/products/male_dress_shirt/male_dress_shirt.jpg" alt="Shirt pic" />
      <h1 className="product_name_second_page">Dress Shirt</h1>
      <p>White Formal City School Shirt for Boys</p>
      <h2 className="price_product_second_page">RS 500</h2>
      <select id="size_selection" name="attribute_pa_size"data-attribute_name="attribute_pa_size" data-show_option_none="yes">
      <option value="">Size</option>
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
export default Shirt;