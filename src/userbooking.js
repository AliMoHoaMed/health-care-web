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
         const ress = await authAxios.get('https://health-care-app-final.herokuapp.com/users/userprofile')
         setuserdata(ress.data);
         setuseriddd( ress.data._id)
         console.log(ress.data)
       
          }
          loadposts();
        },[]);
      


  return (
    <div>userinfo
<div className='book'>


{userbookin.map(({_id , info,wattingTime,cost,vezeeta ,drAvailTimeId}) => 
(
<div key={_id} >
<h3>wattingTime </h3>
<a> {wattingTime}</a>
<br/>
<h3>from</h3> 
<a> {drAvailTimeId.timeFrom} </a>
<h3> to </h3>
<a> {drAvailTimeId.timeTo} </a>
<br/>
<data> price : {drAvailTimeId.vezeeta}</data>
<br/>
<a> {cost}</a>

  </div>
))}
</div>





    </div>
  )
}

export default Userbook