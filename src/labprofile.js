import React from 'react'
import { ggettokken, removelabsession } from './utlis/Common3'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import'./userprofile.css' ;
const Labprofile = (props) => {
    const [labdata,setlabdata] =useState([]);
    const [loading ,setloading] =useState(false);
    const [labtypes,setlabstypes] =useState([]);
    const [labsarea,setlabsarea] =useState([]);
const tok = ggettokken('token');

    const authAxios =axios.create({
        headers : {
         'Authorization': `Bearer ${tok}`
          
        }
      })


      const handlelogout =() =>{
        removelabsession();
        props.history.push('/Lablogin');
    }


      useEffect(()=>{
        const loadposts=async() => {
          setloading(true);
          const res = await authAxios.get('https://health-care-app-final.herokuapp.com/branchesXL/branchProfile' )
          setlabdata(res.data);
          setlabstypes(res.data.labId.typeId);
          setlabsarea(res.data.areaId);
         console.log(res.data)
         console.log(res.data.labId.typeId)
        
          }
          loadposts();
        },[]);
      




  return (



    <div>  
    <div >
    
     
        
     
    
        <br />   
        <br />
        <br />
    
        <div class="user-name">
         {labdata.name}
         <br/>
{[labsarea].map((areaa)=> (<div key={areaa._id}>
<a>{areaa.name} </a>


</div>))}
<br/>
<h1>types : </h1>
{labtypes.map((types)=> (<div key={types._id}>
<a>{types.type} </a>


</div>))}








          </div>
          <br/>
             <hr/>
             <br/>
      <a href="/Diagnoselabs"><i class="fa fa-fw fa-history"></i> diagnose</a>
      <br/>
      <a href="#editProfile"><i class="fa fa-fw fa-edit"></i> Edit Profile</a>
      <br/>
      <a href="#doctors"><i class="fa fa-fw fa-user"></i> Doctors</a>
      <br/>
      <a href="#chat"><i class="fa fa-fw fa-comments"></i> Chat</a>
      <br/>
      <br />   
       <hr/>
       <br/>
      <input type="button" value="logout"
onClick={handlelogout}/> 
    </div>
 
    </div>


  
    )
}

export default Labprofile