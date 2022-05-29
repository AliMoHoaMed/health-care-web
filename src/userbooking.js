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
      <div className='grid-containerr'>

      {userbookin.map(({_id , info,wattingTime,cost,vezeeta ,drAvailTimeId,doctorId}) => 
(
        <div key={_id} className='grid-itemr'>
 <div class="bcard-container" >
     <div class="bcard-1">

       <div class="bcard-text-1">
       
           <p><label class="ega">Doctor Name</label> mohga </p>
           <p><label class="ega">Waiting Time</label>{wattingTime}</p>

           <div class="tables">
            <div class="table1">

                <div ><p class="time"><label class="ega">Time </label>{drAvailTimeId.timeFrom}   &nbsp; to  &nbsp; {drAvailTimeId.timeTo}</p></div>

                <div ><p class="day"><label class="ega">Price </label>  {drAvailTimeId.vezeeta} </p></div>
            </div>
            </div>
       </div>  
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