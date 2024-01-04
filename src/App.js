import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './js_files/App.css';
import React from "react";
import Login from "./js_files/Login";
import Register from './js_files/Register';
import Home from './js_files/Home';
import City from './js_files/City';
import Frobles from './js_files/Frobles';
import Licium from './js_files/Licium';
import Tis from './js_files/Tis';

import Cap from './products_js/Cap';
import Hoodie from './products_js/Hoodie';
import Pant from './products_js/Pant';
import Shirt from './products_js/Shirt';
import Socks from './products_js/Socks';
import Sportsshirt from './products_js/Sportsshirt';
import Sportstrousers from './products_js/Sportstrousers';
import Tie from './products_js/Tie';

const App = () => {
  return (
    <div className="App">
         <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='Login' element={<Login />} />
           <Route path='Register' element={<Register />} />
           <Route path='City' element={<City />} />
           <Route path='Frobles' element={<Frobles />} />
           <Route path='Licium' element={<Licium />} />
           <Route path='Tis' element={<Tis />} />

          {/* actual products */}
          <Route path='Cap' element={<Cap />} />
          <Route path='Hoodie' element={<Hoodie />} />
          <Route path='Pant' element={<Pant />} />
          <Route path='Shirt' element={<Shirt />} />
          <Route path='Socks' element={<Socks />} />
          <Route path='Sportsshirt' element={<Sportsshirt />} />
          <Route path='Sportstrousers' element={<Sportstrousers />} />
          <Route path='Tie' element={<Tie />} />
        </Routes>
      </BrowserRouter> 
</div>
  );
}
export default App;
