import './js_files/App.css';
import React from "react";
import Login from "./js_files/Login";
import Register from './js_files/Register';
import Home from './js_files/Home';
import City from './js_files/City';
import Frobles from './js_files/Frobles';
import Licium from './js_files/Licium';
import Tis from './js_files/Tis';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
        </Routes>
      </BrowserRouter> 
</div>
  );
}
export default App;
