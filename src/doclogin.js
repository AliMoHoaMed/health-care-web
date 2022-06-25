import React, { useState } from "react";
import'./signincss/login.css' ;
import axios from "axios";
import { setdoctorsession } from "./utlis/Common2";
import { FaEnvelope } from "react-icons/fa";
import { MdPassword} from "react-icons/md";

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

      <form action="#" className="sign-in-form" >
        <img className="health-care" src="img/Health care.png"/> 

        <div className="input-field">
          <i className="fas fa-user"><FaEnvelope/></i>
          <input type="text"   value={username}
          onChange={e => Setusername(e.target.value)} />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"><MdPassword /></i>
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
      <h1> Doctor Login   </h1>

        
     
      <img src="img/medical.svg" className="image" alt="" />
    </div>
    
      
      </div>
      
    </div>
 
</div>


  )
}

export default DocLogin