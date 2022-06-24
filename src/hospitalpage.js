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


<div class="demo">
{users.name}
</div>

<br/>
<br/>
<br/>

<div class="demoII">
    <img className='c' src="/2017_3_26_23_13_12_367.jpg" alt="" />  
    <br/>
    <br/>
    <p className='k'>Address: 
    
    

    </p>

</div>

<br/>
<h1> Doctors : </h1>

   <div className='grid-container'>
{doctorz.map(({_id, firstName , Title,avatar})=>(
 
    <div className='grid-item'>
   <Doccard _id={_id} name={firstName} username={Title} avatar={avatar} /></div>))}


</div>
</body>


      )
      }
  </>
  
);
  };
export default Hospitalpage ;