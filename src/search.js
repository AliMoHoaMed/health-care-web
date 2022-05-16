import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import Hospitals from './hospitalss';
const Search = () => {
const [areaa,setarea]= useState([]);
  const [loading ,setloading] =useState(false);
  const [hosbitalss,sethospitalss]= useState([]);
  const [areaaid,setareaid]= useState('');
  const [aareaaid,setaareaid]= useState([]);
  const [choossestatespec,setchooossestatespec] =useState('');
  const x = areaaid;
  useEffect((e)=>{
    const loadposts=async() => {
      setloading(true);
   

     const area = await axios.get('https://health-care-app-final.herokuapp.com/Area')
     setarea(area.data);

     setaareaid(choossestatespec)
     const res = await axios.get('https://health-care-app-final.herokuapp.com/branchesHC/search/filter?area='+areaaid)
     console.log(res.data); sethospitalss(res.data);

     setloading(false);
      }
      loadposts();
    },[areaaid]);

    function handleSubmit(e) {
      
      setareaid( e.target.value);
  

    }


  return (

  <div>
           <select value={choossestatespec}
  onChange={handleSubmit} >
  {
  areaa.map(({ _id,name})=>(
<option key={_id} value={_id} >{name}   </option>
 ))}</select>

<a>  {areaaid} </a>


     {hosbitalss.map(({_id,name,areaId}) => (
  <div key={_id} >
<h1>  {name} </h1>
<h2> {areaId.name}  </h2>
</div>
       )  
       
       )
     


} 


        </div>
  )
}

export default Search