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
    <div class="ucard-container">
      <div class="ucard-1">
    <div class="ucard-image-1">
        <img  src={"data:image/jpg;base64," + doctor.avatar} width="250" height="250" />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
     
    
        <br />   
        <br />
        <br />
    
        <div class="ucard-text-1">
            <p><label class="uega">Doctor Email </label> {doctor.email}</p>
            <br/>
            <p><label class="uega">Doctor Name </label> {doctor.firstName} &nbsp;{doctor.LastName}  </p>
            <br/>
            <p> <label class="uega">Doctor avgRating </label> {doctor.avgRating}   </p>
            </div>
          </div>
          </div>
 
            <a href="/Diagnose" class="dia-btn">Diagnose </a>
    
      <br/>
      <br/>
      
<div class="doc-logout">
      <input type="button" value="logout" class="dia-btn log-dia" onClick={handlelogout}/> 
      </div> </div>
 








 
    </div>
  )
}

export default Docprofile