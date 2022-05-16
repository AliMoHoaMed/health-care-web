import React from 'react'
import { useState } from 'react'
import'./userprofile.css' ;
import { getdoctor, removedoctorsession } from './utlis/Common2'
const Docprofile = (props) => {
 
const doctor =getdoctor();


    const handlelogout =() =>{
        removedoctorsession();
        props.history.push('/doclogin');
    }
 
    return (
    <div>
    <div class="sidebar">
    
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <img src={doctor.avatar} alt="Avatar" class="avatar"/>
    
        <br />   
        <br />
        <br />
    
        <div class="user-name">
            <b>{doctor.email}</b>
            <b> {doctor.firstName}  </b>
            <b>  {doctor.Title}   </b>

          </div>
          <br/>
             <hr/>
             <br/>
           
      <a href="#history"><i class="fa fa-fw fa-history"></i> History</a>
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