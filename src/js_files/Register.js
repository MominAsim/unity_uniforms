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
     <Footer />
     </>
  );
};
export default Register;