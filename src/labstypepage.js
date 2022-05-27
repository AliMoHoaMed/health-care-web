import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
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
        {aviab.map(({_id , timeFrom , timeTo ,vezeeta }) =>( <div key={_id}> 

<h2> time from :  {timeFrom}</h2>
<h2>time to :  {timeTo } </h2>
<h3>price :  {vezeeta} </h3>

<a href={'/booking_for_labs/'+_id} >  booking    </a>

        </div>) )}
        </div>
  )
}

export default Labstypepage