import React from "react";
import { Link } from 'react-router-dom';
import './App.css';

const Register = () => {
return (
     <>
     <form method="post">
     <div className="register_page">
     <div className="register_card">
     <b><p id="registerh1id" className="loginorregisterh1">REGISTER</p></b>
     <div className="inputs_parent">
     <input id="username_box" type="text" name="USERNAME" placeholder="USERNAME"></input>
     <br></br>
     <input className="email_box" type="email" name="Email" placeholder="EMAIL"></input>
     <br></br>
     <input className="password_box" type="password" name="PASSWORD" placeholder="PASSWORD"></input>
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
     </>
  );
};
export default Register;