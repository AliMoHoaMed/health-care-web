import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import'./userprofile.css' ;
const Labstypepage = (props) => {
  const xtypeid = props.match.params._id;
  const [loading ,setloading] =useState(false);
  const [aviab,setavaib]= useState([]);
 


  useEffect(()=>{
    const loadposts=async() => {
      setloading(true);
      const res = await axios.get('https://health-care-app-final.herokuapp.com/types/AvalibleTime/'+xtypeid)
      setavaib(res.data);

      console.log(res.data)
     
   setloading(false);
    }
    loadposts();
  },[xtypeid]);



    return (
    <div>
       <div class="ucard-container lab-con">
        {aviab.map(({_id , timeFrom , timeTo ,vezeeta ,branchId , day}) =>( <div key={_id}> 
<div class="ucard-1 lab-op-text-1">
<div class="ucard-text-1 ">
<p><label class="uega lab-op">Lab Name</label>{branchId.name}  </p>
<p><label class="uega lab-op">Branch Name</label>{branchId.areaId.name} </p>
<p><label class="uega lab-op">Day</label>{day} </p>
<p><label class="uega lab-op"> Time From  </label>{timeFrom}</p>
<p><label class="uega lab-op">Time To  </label>{timeTo } </p>
<p><label class="uega lab-op">Price  </label>{vezeeta} EGP </p>
<br/>
<a href={'/booking_for_labs/'+_id} class="boo-btn">  Booking    </a>


        </div>
        </div>
        </div>) )}
        </div>
        </div>
  )
}

export default Labstypepage