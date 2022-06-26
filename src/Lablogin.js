import React from 'react'
import  { useState } from "react";
import'./css/Lablogin.css' ;
import axios from 'axios';
import { setlabsession } from "./utlis/Common3";

const Lablogin = (props) => {

  const [username,Setusername] = useState('')
  const [password,Setpassword] = useState('')
  const [error,Seterror] = useState(null)
  const [loading,Setloading] = useState(false)
   
  const handlelogin = () =>{
  Seterror(null);
  Setloading(true);
  
  axios.post('https://health-care-app-final.herokuapp.com/branchesXL/login'
  , {email : username , password : password }).then(response => {
      Setloading(false);
      setlabsession(response.data.token,response.data.labs);
      console.log(response);
      props.history.push('/labprofile');
  
  }).catch(error =>{
  console.log('error >>>',error);
  })  
  }
  




  return (
    <div>
        <div class="containerf">
      
      <div class="forms-containerf">
        <div class="signin-signupf">
        
          <form action="#" class="sign-in-formf" >
            <img class="health-caref" src="img/Health care.png"/> 
    
            <div class="input-fieldf">
              <i class="fas fa-user"></i>
              <input type="text"   value={username}
          onChange={e => Setusername(e.target.value)}/>
            </div>
            <div class="input-fieldf">
              <i class="fas fa-lockf"></i>


              <input type="password"  value={password} 
onChange={e => Setpassword(e.target.value)}/>
            </div>
            <input type="submit"  class="btn solid"  value={loading ? "loading .." :   'login' } disabled={loading}
onClick={handlelogin} />
          </form>
         </div>
        </div>
          
      <div class="panels-containerf">
        <div class="panel left-panelf">
          <img class="logof" src="img/logo.png"/> 
          <div class="contentf">
          <h1> Laboratory login </h1>

          <img src="img/lab.svg" class="image" alt="" />
        </div>
        
          
          </div>
          
        </div>
     
</div>
    </div>
  )
}

export default Lablogin