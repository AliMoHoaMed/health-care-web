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
  const [xraytype,setxraytype]= useState([]);

  useEffect(()=>{
    const loadposts=async() => {
      setloading(true);
      const res = await axios.get('https://health-care-app-final.herokuapp.com/branchesXL/'+props.match.params._id)
      setlabss(res.data);
  
       console.log(res.data);
      
     
    
    
      setlabsarea(res.data.areaId);
      setlabstype(res.data.types )
      setxraytype(res.data.xrayId.typeId);
     
      console.log(res.data.types); 
      console.log(res.data.xrayId.typeId)|| console.log(res.data.labId.typeId);
   setloading(false);
    }
    loadposts();
  },[]);



  return (
   <>
<body>

{[labss].map(({id,name,areaId,labId,typeId,image })=>(

<div key={id}>


<br/>
<br/>
<br/>

<div class="demoII">
<div class="demoii-img">
    <img  src="/2017_3_26_23_13_12_367.jpg" alt="" />  
    </div>
    
    <div class="demoii-title"></div><h3>{name}</h3></div>
    <div class="demoii-des"></div>

</div>
))}




<div class="demoII">
<<<<<<< HEAD
 <h3>lab type:  </h3>
=======
 <h3>lab type  :  </h3>

  

>>>>>>> e29d748abb6e8ff82bda2dcd7710fb65f894a83f
{labstype.map(({_id,type })=>(
<div key={_id}>
  <h3>{type} </h3>
  <a href={'/labstypepage/'+_id} >   check info and booking    </a>
  
   </div>
))}
  
   </div>



<br/>



<div>  


</div>



</body>


  </>
  
);
  };
export default Labspage ;