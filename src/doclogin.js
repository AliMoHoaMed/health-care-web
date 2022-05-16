import React, { useState } from "react";
import'./signincss/login.css' ;
import axios from "axios";
import { setdoctorsession } from "./utlis/Common2";

const DocLogin=(props) =>{



const [username,Setusername] = useState('')
const [password,Setpassword] = useState('')
const [error,Seterror] = useState(null)
const [loading,Setloading] = useState(false)
 
const handlelogin = () =>{
Seterror(null);
Setloading(true);

axios.post('https://health-care-app-final.herokuapp.com/doctors/login'
, {email : username , password:password }).then(response => {
    Setloading(false);
    setdoctorsession(response.data.token,response.data.doctor)
  props.history.push('/docprofile')

}).catch(error =>{
console.log('error >>>',error);
})  
}



return (
  <div className="container">
      
  <div className="forms-container">    
    <div className="signin-signup">

      <form action="#" className="sign-in-form" ><h1> Doctor Login   </h1>
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
        <p className="social-text">Or Sign in with social platforms</p>
      
      </form>
     </div>
    </div>
      
  <div className="panels-container">
    <div className="panel left-panel">
      <img className="logo" src="img/logo.png"/> 
      <div className="content">
     

        
     
      <img src="img/doctor.svg" className="image" alt="" />
    </div>
    
      
      </div>
      
    </div>
 
</div>


  )
}

export default DocLogin