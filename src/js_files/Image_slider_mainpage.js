import React from "react";
import './App.css';

const image_slider_mainpage = () => {
    return (
     <>
     <head>
     <link rel="stylesheet"href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
     </head>
     <body>
<div class="container_of_all_elements_swiper">
<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide"><img src="/images/back_to_school.webp" className="swiper_images" alt="HEHEHEHEHEHEHEHEHHEHE"></img> </div>
    <div class="swiper-slide"><img src="Unity_uniforms_logo_swiper.jpeg" className="swiper_images" alt="HEHEHEHEHEHEHEHEHHEHE"></img></div>
   </div>
  <div class="swiper-pagination"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</div>
 </div>
 <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  </body>
     </>
)
};
export default image_slider_mainpage;