import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import'./css/userbooking.css' ;
import { gettokken, getuser, removeusersession } from './utlis/Common'
const Userbook = () => {

    const [loading ,setloading] =useState(false);
    const tok = sessionStorage.getItem('token') ; 
    const [userdata,setuserdata] = useState([]);
    const [doctorofbooking,setdodctorrr] = useState([]);
    
const us=getuser('user');
const usid=us;
const [userbookinglab,setuserbookinlab] = useState([]);
    const [doctorarrival,setdoctorarrival] =useState([]);
    const [userbookin,setuserbooking] = useState([]);
    const authAxios =axios.create({
      headers : {
       'Authorization': `Bearer ${tok}`,
       'Access-Control-Allow-Origin' :'origin-list'
      }
    })

    useEffect(()=>{
        const loadposts=async() => {
         
          const res = await authAxios.get('https://health-care-app-final.herokuapp.com/bookHC/all' )
          setuserbooking(res.data);
           console.log(res.data);
          const rees = await authAxios.get('https://health-care-app-final.herokuapp.com/bookXL/all' )
          setuserbookinlab(rees.data);
          console.log(rees.data);
         
          
      
       
          }
          loadposts();
        },[]);


  return (
    <div>
      <div className='grid-containerr'>

      {userbookin.map(({_id,wattingTime,info,drAvailTimeId}) => 
(
        <div key={_id} className='grid-itemr'>
 <div class="bcard-container" >
     <div class="bcard-1">

       <div class="bcard-text-1">
       
           <p><label class="ega">Doctor Name</label> {drAvailTimeId.doctorId.firstName}..{drAvailTimeId.doctorId.LastName} </p>
           <p><label class="ega">Waiting Time</label>{wattingTime}</p>

           <div class="tables">
           

    <div ><p class="time"><label class="ega">Time </label> {drAvailTimeId.timeFrom} to {drAvailTimeId.timeTo} &nbsp;&nbsp;   </p></div>
    <div ><p class="time">  <label class="ega">Day </label> {drAvailTimeId.day}  </p></div>
<div ><p class="time">  <label class="ega">Price </label>{drAvailTimeId.vezeeta}   </p></div>

                 </div> 
           
            </div>
        <h1> </h1>

       </div>  
     </div>
 </div>   

))}

<div >


</div>

</div>







    </div>
  )
}

export default Userbook