import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './js_files/App.css';
import React from "react";
import Login from "./js_files/Login";
import Register from './js_files/Register';
import Header from './js_files/Header';
import Footer from './js_files/Footer';
import Home from './js_files/Home';
import Tis from './js_files/Tis';

// products
import Pant from './products_js/Pant';
import Shirt from './products_js/Shirt';
import Sportsshirt from './products_js/Sportshirt';

const App = () => {
  return (
    <div className="App">
         <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='Header' element={<Header />} />
           <Route path='Footer' element={<Footer />} />
           <Route path='Login' element={<Login />} />
           <Route path='Register' element={<Register />} />
           <Route path='Tis' element={<Tis />} />

          {/* actual products */}
          <Route path='Pant' element={<Pant />} />
          <Route path='Shirt' element={<Shirt />} />
          <Route path='Sportshirt' element={<Sportsshirt />} />
        </Routes>
      </BrowserRouter> 
</div>
  );
}
export default App;
