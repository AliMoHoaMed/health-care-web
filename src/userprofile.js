import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import'./userprofile.css' ;
import axios from 'axios';
import { gettokken, getuser, removeusersession } from './utlis/Common'
const Userprofile = (props) => {
  const tok = sessionStorage.getItem('token') ; 


const us=getuser('user');
const usid=us;
const iddd=usid._id;
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
  
   const ress = await authAxios.get('https://health-care-app-final.herokuapp.com/users/userprofile')
   setuserdata(ress.data);
   setuseriddd( ress.data._id)
   console.log(ress.data)
 
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


    <div class="sidebar">
    
        <br/>
        <br/>
        <br/>
        <br/>
     
        
        <img src={us.avatar} alt="Avatar" class="avatar"/>
    
     <br/>
    
        <div class="user-name">
{[userdata].map(({ email ,_id,__v  })  => 
(
<div key={_id} >
  <a> {email} </a>
<a> {__v}</a>
</div>

)
)}
<a> {iddd}</a>

          </div>
          <br/>
             <hr/>
             <br/>
           
      <a href="#history"><i class="fa fa-fw fa-history"></i> History</a>  
      <br/> {userbookin.map(({_id , info,wattingTime,cost }) => 
(
<div key={_id} > 
<a> {wattingTime}</a>
<data> {info}</data>
<a> {cost}</a>

  </div>
))}
<br/> 

      <a href="#editProfile"><i class="fa fa-fw fa-edit"></i> Edit Profile</a>
      <br/>
      <a href="#doctors"><i class="fa fa-fw fa-user"></i> Doctors</a>
      <br/>    <input type="button" value="logout"
onClick={handlelogout}/> 
      <a href="#chat"><i class="fa fa-fw fa-comments"></i> Chat</a> 
      
        
      <br/>
      <br />   
       <hr/>
       <br/>

    </div>


    </div>
  )
}

export default Userprofile