import React from "react";
const Login = () => {
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
     <input id="login_email_box" className="email_box" type="email" name="Email" placeholder="EMAIL"></input>
     <br></br>
     <input className="password_box" type="password" name="PASSWORD" placeholder="PASSWORD"></input>
     <br></br>
     <button type="submit" onClick="login_button_function" id="login_button">Login</button>
     </div>
     </div>
     </div>
     </form>
     </>
</div>
  );
};
export default Login;