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
    <div class="ucard-container">
      <div class="ucard-1">
    <div class="ucard-image-1">
    <img  src={"data:image/jpg;base64," + labdata.image} width="250" height="250" />
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
        <br />   
        <br />
        <br />
        <div class="ucard-text-1">
        <p><label class="uega">Lab Name</label>{labdata.name} </p>
        </div>
          </div>
          </div>

<br/>

{[labtypes].map((types)=> (<div key={types._id}>
<a><h3> {types.type} </h3> </a>


</div>))}
          </div>
         
      <a href="/Diagnoselabs" class="dia-btn lab-dia-bt"> Diagnose</a>
      <br/>
      <br/>
      <div class="log-dia" >
      <div class="lab-log-bt-bt"><input type="button" value="logout" class="dia-btn log-dia "
onClick={handlelogout}/> </div></div> 
    </div>
  


  
    )
}

export default Labprofile