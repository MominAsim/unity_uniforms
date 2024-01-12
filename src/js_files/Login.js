import React, { useState } from "react";
import { Link, useActionData } from 'react-router-dom';
import './App.css';
import axios from "axios"

const Login = () => {
 const [email,setEmail]=useState("")
 const [password,setPassword]=useState("")

 async function submit(e){
  e.preventDefault();

  try{
   await axios.post("https//localhost:")
  }
  catch{

}
}
return (
<div>
     <>
     <form method="post">
     <div className="register_page">
     <div className="register_card">
     <div className="loginorregisterh1_parent">
     <b><p id="loginh1id" className="loginorregisterh1">LOGIN</p></b>
     </div>
     <div className="inputs_parent">

     <input onChange={(e)=>{setEmail(e.target.value)}} id="login_email_box" className="email_box" type="email" name="email" placeholder="EMAIL"></input>
     <br></br>
     <input onChange={(e)=>{setPassword(e.target.value)}} className="password_box" type="password" name="password" placeholder="PASSWORD"></input>
     <br></br>
     <button onClick={submit} type="submit" id="login_button">Login</button>

     <p className="noacc_registerpg">Dont have an account?</p>
     <Link className="allbuttons" id="toregister_loginpg" to="/Register">Register</Link>
     <br></br>
     <br></br>
     <Link id="backtohome_login" to="/">Go Back Home</Link>
     </div>
     </div>
     </div>
     </form>
     </>
</div>
  );
};
export default Login;