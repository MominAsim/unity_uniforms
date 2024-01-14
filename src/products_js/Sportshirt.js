import React, { useState } from 'react';
import './App.css';
import Header from "../js_files/Header";
import Footer from "../js_files/Footer";

const Sportshirt = () => {
// javasript
// js for changing image when a africa or europe select are selected
const [selectedOption, setSelectedOption] = useState('default');
const handleSelectChange = (event) => {
  setSelectedOption(event.target.value);
};
const getImageSource = () => {
  switch (selectedOption) {
    case 'Europe':
      return '/images/products/sports_shirt/europe/europe_shirt_pic_front.jpg';
    case 'Africa':
      return 'images/products/sports_shirt/africa/africa_shirt_pic_front.jpg';
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
      <img className='image_product_secondpage' src={getImageSource()} alt="Selected Option" />
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
      <select className="sports_shirt_selector" id="imageSelector" value={selectedOption} onChange={handleSelectChange}>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
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
    <div class="custom-shape-divider-bottom-1705253153">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    <Footer />
    </>
  );
};
export default Sportshirt;