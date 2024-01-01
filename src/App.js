import './js_files/App.css';
import React from "react";
import Login from "./js_files/Login";
import Register from './js_files/Register';
import Home from './js_files/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
         <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='Login' element={<Login />} />
           <Route path='Register' element={<Register />} />
        </Routes>
      </BrowserRouter> 
</div>
  );
}
export default App;
