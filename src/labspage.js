import React from 'react'
import reactDom from 'react-dom';
import useFetch from './useFetch';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Doccard from './doccard';
import './item.css'
import'./css/hospage.css' ;
 const Labspage = (props) => {
  const [loading ,setloading] =useState(false);
  const [labss,setlabss]= useState([]);
  const [labstype,setlabstype]= useState([]);
  const [labsarea,setlabsarea]= useState([]);


  useEffect(()=>{
    const loadposts=async() => {
      setloading(true);
      const res = await axios.get('https://health-care-app-final.herokuapp.com/branchesXL/'+props.match.params._id)
      setlabss(res.data);

      console.log(res.data)
      console.log(res.data.labId.typeId)
      console.log(res.data.areaId)
      setlabsarea(res.data.areaId)
      setlabstype(res.data.labId.typeId)
   setloading(false);
    }
    loadposts();
  },[]);



  return (
   <>
<body>

{[labss].map(({id,name,areaId,labId,typeId })=>(

<div key={id}>
<div class="demo" >
<p> 
    <h3>{name}</h3>
    
    </p>
</div>

<br/>
<br/>
<br/>

<div class="demoII">
    <img className='c' src="/2017_3_26_23_13_12_367.jpg" alt="" />  
    <br/>
    <br/>
   
<h2> location : 

{[labsarea].map(({_id,name,governorateId })=>(
<h3 key={_id}> {name}  <br/>


 </h3>


))}


  </h2>
<br/>
</div>
</div>
))}
<div class="demoII">
 <h3>lab type  :  </h3>
{labstype.map(({_id,type })=>(
<div key={_id}>
  <h3>{type} </h3>
  <a href={'/labstypepage/'+_id} >   check info and booking    </a>
  
   </div>


))}


</div>


</body>


  </>
  
);
  };
export default Labspage ;