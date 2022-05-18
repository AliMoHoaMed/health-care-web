import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { gettokken, getuser, removeusersession } from './utlis/Common'
const Userbook = () => {

    const [loading ,setloading] =useState(false);
    const tok = sessionStorage.getItem('token') ; 
    const [userdata,setuserdata] = useState([]);
    
const us=getuser('user');
const usid=us;

    const [useriddd,setuseriddd] =useState([]);
    const [userbookin,setuserbooking] = useState([]);
    const authAxios =axios.create({
      headers : {
       'Authorization': `Bearer ${tok}`,
       'Access-Control-Allow-Origin' :'origin-list'
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
      


  return (
    <div>
      <div >
<div >


{userbookin.map(({_id , info,wattingTime,cost,vezeeta ,drAvailTimeId}) => 
(
<div key={_id} div className='editProfile'>
  <div className='dataa'>
  wattingTime  : 
<a> {wattingTime}</a>
<br/>
<br/>
<br/>
<br/>
from  :  
<a> {drAvailTimeId.timeFrom} </a>
<br/>
<br/>
 to :
<a> {drAvailTimeId.timeTo} </a>
<br/>
<br/>
<br/>
<h3> price : {drAvailTimeId.vezeeta}</h3>

<a> {cost}</a>
</div>
  </div>
))}
</div>

</div>



    </div>
  )
}

export default Userbook