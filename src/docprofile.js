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
    
     
        <img  src={"data:image/jpg;base64," + doctor.avatar} width="250" height="250" />
     
    
        <br />   
        <br />
        <br />
    
        <div class="user-name">
            <b>{doctor.email}</b>
            <br/>
            <b> {doctor.firstName}  </b><br/>
            <b>  {doctor.Title}   </b>

          </div>
          <br/>
             <hr/>
             <br/>
      <a href="/Diagnose"><i class="fa fa-fw fa-history"></i> diagnose</a>
      <br/>
      <a href="#editProfile"><i class="fa fa-fw fa-edit"></i> Edit Profile</a>
      <br/>
      <a href="#doctors"><i class="fa fa-fw fa-user"></i> Doctors</a>
      <br/>
      <a href="#chat"><i class="fa fa-fw fa-comments"></i> Chat</a>
      <br/>
      <br />   
       <hr/>
       <br/>
      <input type="button" value="logout"
onClick={handlelogout}/> 
    </div>
 
    </div>
  )
}

export default Docprofile