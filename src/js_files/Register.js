import React from "react";

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
     </div>
     </div>
     </div>
     </form>
     </>
  );
};
export default Register;