import React, { useState } from 'react';
import './App.css';
import Header from "../js_files/Header";
import Footer from "../js_files/Footer";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Sportshirt = () => {
// javasript
// js for changing image when a africa or europe select are selected
const [selectedOption, setSelectedOption] = useState('default');
const [currentSlide, setCurrentSlide] = useState(0);
const handleSelectChange = (event) => {
  setSelectedOption(event.target.value);
};
const getImageSource = () => {
  switch (selectedOption) {
    case 'Europe':
      return `/images/products/sports_shirt/europe/europe_shirt_pic_front.jpg`;
    case 'Africa':
      return `/images/products/sports_shirt/africa/africa_shirt_pic_front.jpg`;
    default:
      return '/images/products/sports_shirt/europe/europe_shirt_pic_front.jpg';
  }};
//settings for changing pics of product
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  afterChange: (index) => setCurrentSlide(index),
};
  return (
    <>
    <Header />
    <body>
      <div className="all_elements_products_show_page">
      <img className="logo_second_page" src="/images/tis.png" alt="Img didnt load :("/><br></br>
      <br></br>
      <Slider {...settings}>
        {[1, 2, 3].map((slideNumber) => (
          <div className="product_image_div" key={slideNumber}>
            <img className="image_product_secondpage" src={getImageSource()} alt={`Product ${slideNumber}`} />
          </div>
        ))}
      </Slider>
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