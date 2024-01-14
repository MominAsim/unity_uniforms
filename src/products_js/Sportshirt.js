import React, { useState } from 'react';
import './App.css';
import Header from "../js_files/Header";
import Footer from "../js_files/Footer";

const Sportshirt = () => {

  // javasript
const [selectedOption, setSelectedOption] = useState('default');
const handleSelectChange = (event) => {
  setSelectedOption(event.target.value);
};
const getImageSource = () => {
  switch (selectedOption) {
    case 'Europe':
      return '/images/products/sports_shirt/europe/europe_shirt_pic_front.jpg';
    case 'Africa':
      return '/images/products/sports_shirt/africa/africa_shirt_pic_front.jpg';
    default:
      return '/images/products/sports_shirt/europe/europe_shirt_pic_front.jpg';
  }
};
  return (
 <>
    <Header />
    <body>
      <div className="all_elements_products_show_page">
      <img className="logo_second_page" src="/images/tis.png" alt="Img didnt load :("/><br></br>
      <br></br>
      <img src={getImageSource()} id="image_product_secondpage_id"
      className="image_product_secondpage" alt="Shirt pic" />
      <h1 className="product_name_second_page">Sports shirt</h1>
      <p>Sports Shirt for Sports Wear</p>
      <h2 className="price_product_second_page">RS 1300</h2>
      <select id="size_selection" name="attribute_pa_size"data-attribute_name="attribute_pa_size" data-show_option_none="yes">
      <option value="Small" class="Small">Small</option>
      <option value="Medium" class="Medium">Medium</option>
      <option value="Large" class="Large">Large</option>
      </select>
      <br></br>
      <br></br>
      <br></br>
      <select id="sports_shirt_selector" value={selectedOption} onChange={handleSelectChange} name="attribute_pa_size"data-attribute_name="attribute_pa_size" data-show_option_none="yes">
      <option value="Europe" class="Europe_sports_shirt_selector_option">Europe</option>
      <option value="Africa" class="Africa_sports_shirt_selector_option">Africa</option>
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