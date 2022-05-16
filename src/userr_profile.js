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


<nav class="topnav">    <br/> <br/>  <br/> <br/>  <h2>{usarea}</h2>    <h1>{us.firstName}</h1> 


  <img src={"data:image/jpg;base64," + us.avatar} alt="Avatar" class="avatar"/>
    <div class="user-name">
       
      </div>





        <a href="#history"><i class="fa fa-fw fa-history"></i>History</a>
        <a href="#editProfile">Edit Profile</a>
        <Link to="/userr_profile/userinfo" >userinfo  </Link>
        <Link to="/userr_profile/userbooking" >booking  </Link>
        <a href="#logout" onClick={handlelogout}>Logout</a>
      <div class="vl"></div>
    </nav>

<div >
 
</div>

<div>  


<Route path='/userr_profile/userinfo' component={Userinfo} /> 
<Route path='/userr_profile/userbooking' component={Userbook} /> 
</div>


  </div>
    )
}

export default User_profile