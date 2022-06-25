import React from 'react'
import { useState } from 'react'
import'./userprofile.css' ;
import { getdoctor, removedoctorsession } from './utlis/Common2'
const Docprofile = (props) => {
 
const doctor =getdoctor();





console.log(doctor);
    const handlelogout =() =>{
        removedoctorsession();
        props.history.push('/doclogin');
    }
 
    return (
    <div>  
    <div >
    
     <div class="docprofile-img" >
        <img  src={"data:image/jpg;base64," + doctor.avatar} width="250" height="250" />
        </div>
     
    
        <br />   
        <br />
        <br />
    
        <div class="user-name">
            <h3>Doctor Email: {doctor.email}</h3>
            <br/>
            <h3> Doctor Name: {doctor.firstName}  </h3>
            <br/>
            <h3> Doctor Title  {doctor.Title}   </h3>

          </div>
 
            <a href="/Diagnose" class="dia-btn">Diagnose </a>
    
      <br/>
      <br/>
      
  <div class="log-dia" >
      <input type="button" value="logout" class="dia-btn log-dia" 
onClick={handlelogout}/> </div>
    </div>
 
    </div>
  )
}

export default Docprofile