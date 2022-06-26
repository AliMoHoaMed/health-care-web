import React from 'react'
import reactDom from 'react-dom';
import useFetch from './useFetch';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Doccard from './doccard';
import './item.css'
import'./css/hospage.css' ;
 const Hospitalpage = (props) => {
  const [loading ,setloading] =useState(false);
  const [doctorz,setdoctors]= useState([]);


  let { data: users, isloading, errMsg } = useFetch(
    `https://health-care-app-final.herokuapp.com/branchesHC/${props.match.params._id}`
  );

  useEffect(()=>{
    const loadposts=async() => {
      setloading(true);
      const res = await axios.get('https://health-care-app-final.herokuapp.com/branchesHC/doctors/'+props.match.params._id)
   setdoctors(res.data);
  console.log(res.data);
  console.log(users);
   setloading(false);
    }
    loadposts();
  },[]);



  return (
   <>
{isloading && <div>loading ...</div>}
{errMsg && <div>{errMsg}</div>}
      {users && !isloading && !errMsg && (
  
<body>


<br/>


<div class="demoII">
  <div class="demoii-img">
     <img  src={"data:image/jpg;base64," + users.image}  alt="" />  

  </div>
    {/* <img  src={"data:image/jpg;base64," + users.image}  alt="" />   */}
    <div class="demoii-title"><h1>{users.name}</h1></div>   
      <div class="demoii-des"> <h3 >{users.areaId.name}</h3></div>
   

</div>

<br/>
<br/>

   <div className='grid-container da-doc-ba'>
{doctorz.map(({_id, firstName , Title,avatar,LastName,specialtiesId})=>(
 
    <div className='grid-item'>
<div class="doctorsDataCardd" key={_id}>
          <img class="DocPhoto"
          src={"data:image/jpg;base64,"+avatar}
            alt=""/>
        <div class="docDaataaa">
            Name: {firstName}&nbsp;{LastName}
             <br/>   
             <br/>
            <a href={'/doctorpages/'+_id}> info</a>
             <br/>
  <a> {Title} </a>   
        </div>
      
        
    </div>


  </div>))}


</div>
</body>


      )
      }
  </>
  
);
  };
export default Hospitalpage ;