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
//js for quantity selector 
const [item_amount,setitem_amount]=useState("")
const[error,setError]=useState(false)
const handleSubmit_product =(e)=>{
  e.preventDefault();
  if(setitem_amount.length<=0){
    setError(true)
  }
  console.log(setitem_amount)
}

  return (
    <>
    <Header />
    <body>
      <form onSubmit={handleSubmit_product}>
      <div className="all_elements_products_show_page">
      <img className="logo_second_page" src="/images/tis.png" alt="Img didnt load :("/><br></br>
      <br></br>
      <img className='image_product_secondpage' src={getImageSource()} alt="Selected Option" />
      <h1 className="product_name_second_page">Sports shirt</h1>
      <p>Sports Shirt for Sports Wear</p>
      <h2 className="price_product_second_page">RS 1300 FOR IN SCHOOL DELIVERY FOR EACH SHIRT<br></br>RS 1400 FOR OUTSIDE SCHOOL DELIVERY FOR EACH SHIRT</h2>
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
      <input className="shirts_amount" type="number" name="shirts_amount" placeholder="INPUT QUANTITY OF SHIRTS" onChange={e=>setitem_amount(e.target.value)} />
      <br></br>
      {error?
      <label className='label_for_itemquantity'>*Quantity box of item cant be empty*</label>:""}
      <br></br>
      <br></br>
      <input className="sports_shirts_name_buyer" type="name" name="shirts_name" placeholder="INPUT YOUR NAME" onChange={e=>setitem_amount(e.target.value)} />
      <br></br>
      <br></br>
      <br></br>
      <input className="sports_shirts_address_buyer" type="name" name="shirts_address" placeholder="INPUT YOUR ADDRESS" onChange={e=>setitem_amount(e.target.value)} />
      <br></br>
      <br></br>
      <br></br>
      <select className="sports_shirt_selector" id="imageSelector" value={selectedOption} onChange={handleSelectChange}>
        <option value="Inschool_delivery">In School Delivery</option>
        <option value="Home_delivery">Home Delivery</option>
      </select>
      <br></br>
      <br></br>
      <br></br>
      <button type="submit" className="addtocartbutton">BUY</button>
      </div>
      </form>
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