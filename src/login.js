import React, { useState } from "react";
import'./signincss/login.css' ;
import axios from "axios";
import { setusersession } from "./utlis/Common";

const Login=(props) =>{

  const [uslog,setuselog] = useState(false)

const [username,Setusername] = useState('')
const [password,Setpassword] = useState('')
const [error,Seterror] = useState(null)
const [loading,Setloading] = useState(false)
 
const [usss,setusss] = useState('')

const handlelogin = () =>{
Seterror(null);
Setloading(true);

axios.post('https://health-care-app-final.herokuapp.com/users/login'
, {email : username , password:password }).then(response => {
    Setloading(false);
    setusersession(response.data.token,response.data.user);
  props.history.push('/userr_profile');
 
}).catch(error =>{
console.log('error >>>',error);
})  
}



return (
  <div className="container">
      
  <div className="forms-container">
    <div className="signin-signup">
    
      <form action="#" className="sign-in-form" >
        <img className="health-care" src="img/Health care.png"/> 

        <div className="input-field">
          <i className="fas fa-user">username</i>
          <input type="text"   value={username}
          onChange={e => Setusername(e.target.value)} />
        </div>
        <div className="input-field">
          <i className="fas fa-lock">passsword</i>
          <input type='password'
value={password} 
onChange={e => Setpassword(e.target.value)}/>
        </div>
        <input type="submit" value={loading ? "loading .." :   'login' } disabled={loading}
onClick={handlelogin} className="btn solid" />

        
      </form>
     </div>
    </div>
      
  <div className="panels-container">
    <div className="panel left-panel">
      <img className="logo" src="img/logo.png"/> 
      <div className="content">
        <h3>New here ?</h3>
        <p>
          health care helps you to connect and book with
          the best doctors
        </p>

        
       <button className="color"  >
         <a href='signn_up' > SIGNUP</a> 
        </button> 
      <img src="img/doctor.svg" className="image" alt="" />
    </div>
    
      
      </div>
      
    </div>
 
</div>


  )
}

export default Login