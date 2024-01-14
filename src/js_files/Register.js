import React, { useState } from "react";
import { Link, useActionData } from 'react-router-dom';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";

const Register = () => { 
return (
     <>
      <Header />
     <form action="/Register" method="POST">
     <div className="register_page">
     <div className="register_card">
     <b><p id="registerh1id" className="loginorregisterh1">REGISTER</p></b>
     <div className="inputs_parent">
     <input id="username_box" type="text" name="username" placeholder="USERNAME"></input>
     <br></br>
     <input className="email_box" type="email" name="email" placeholder="EMAIL"></input>
     <br></br>
     <input className="password_box" type="password" name="password" placeholder="PASSWORD"></input>
     <br></br>  
     <button type="submit" id="register_button">Register</button>

     <p className="noacc_registerpg">Already have an account?</p>
     <Link className="allbuttons" id="tologin_registerpg" to="/Login">Login</Link>
     <br></br>
     <br></br>
     <Link id="backtohome_login" to="/">Go Back Home</Link>
     </div>
     </div>
     </div>
     </form>
     <div class="custom-shape-divider-bottom-1705253153">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
     <Footer />
     </>
  );
};
export default Register;