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
    <img  src={"data:image/jpg;base64,"+image} alt="" />  
    </div>
    <br/>
    <br/>
   

    <div class="demoii-des">
<h3>  {[labsarea].map(({_id,name})=>(<div key={_id}> {name}  </div>))} </h3>
</div>
 
<br/>
</div>
</div>
))}




<div class="demoII">
      <div class="demoii-des">
 <h3 ><label class="lt-bk">Lab Types </label> </h3>
</div>
  

{labstype.map(({_id,type })=>(
<div key={_id}>
  <div class="bo-bo-bo"><h3>{type} </h3></div>
 
  <a href={'/labstypepage/'+_id} class="boo-btn btn-boo">Check</a>
  
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