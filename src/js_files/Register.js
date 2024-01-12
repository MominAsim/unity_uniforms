import React, { useState } from "react";
import { Link, useActionData } from 'react-router-dom';
import './App.css';
import axios from "axios"

const Register = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [username,setUsername]=useState("")

  async function submit(e){
   e.preventDefault();
   try{
    await axios.post("https//localhost:3001/Register",{
    username,email,password
    })
    .then(res=>{
      if(res.data=="exist"){
        alert("user already exist")
    }
    else if(res.data=="notexist"){
      history("/Home",{state:{id:username}})
    }})
    .catch(e=>{
      alert("wrong details")
      console.log(e);
  })
   }
   catch(e){
    console.log(e)
 }}
return (
     <>
     <form action="/Register" method="POST">
     <div className="register_page">
     <div className="register_card">
     <b><p id="registerh1id" className="loginorregisterh1">REGISTER</p></b>
     <div className="inputs_parent">
     <input onChange={(e)=>{setUsername(e.target.value)}} id="username_box" type="text" name="username" placeholder="USERNAME"></input>
     <br></br>
     <input onChange={(e)=>{setEmail(e.target.value)}} className="email_box" type="email" name="email" placeholder="EMAIL"></input>
     <br></br>
     <input onChange={(e)=>{setPassword(e.target.value)}} className="password_box" type="password" name="password" placeholder="PASSWORD"></input>
     <br></br>  
     <button onClick={submit} type="submit" id="register_button">Register</button>

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