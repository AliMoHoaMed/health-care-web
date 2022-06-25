import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import'./userprofile.css' ;
import axios from 'axios';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { gettokken, getuser, removeusersession } from './utlis/Common'
import Userinfo from './userinfo';
import Userbook from './userbooking';

import User_patch from './user_patch';
import Userhistory from './userhistory';
const User_profile = (props) => {
  const tok = sessionStorage.getItem('token') ; 


const us=getuser('user');
const usid=us;
const usarea=us.AreaId._id;
const [userdata,setuserdata] = useState([]);
const [userbookin,setuserbooking] = useState([]);
const [useriddd,setuseriddd] =useState([]);
const [loading ,setloading] =useState(false);


const authAxios =axios.create({
  headers : {
   'Authorization': `Bearer ${tok}`
    
  }
})

useEffect(()=>{
  const loadposts=async() => {
    setloading(true);
    const res = await authAxios.get('https://health-care-app-final.herokuapp.com/book/all' )
   setuserbooking(res.data);
   console.log(res.data)
 
  
    }
    loadposts();
  },[]);






console.log();
    const handlelogout =() =>{
        removeusersession();
        props.history.push('/login');
    }
 
    return (
  <div>
<nav class="topnav">    <br/>   
  <img src={ us.avatar} alt="Avatar" class="avatar"/> <h1>{us.firstName}</h1> 
   

        <Link to="/userr_profile/userhistory" >History </Link>
        
        <Link to="/userr_profile/user_patch" >Edit Profile  </Link>
        <Link to="/userr_profile/userinfo" >Userinfo  </Link>

        <Link to="/userr_profile/userbooking" >Booking  </Link>
        <a href="#logout" onClick={handlelogout}>Logout</a>
      <div class="vl"></div>
    </nav>

<div >
 
</div>

<div>  


<Route path='/userr_profile/userhistory' component={Userhistory} /> 
<Route path='/userr_profile/userinfo' component={Userinfo} /> 
<Route path='/userr_profile/userbooking' component={Userbook} /> 
<Route path='/userr_profile/user_patch' component={User_patch} /> 
</div>


  </div>
    )
}

export default User_profile