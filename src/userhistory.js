import React from 'react'

import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import'./userprofile.css' ;
import { gettokken, getuser, removeusersession } from './utlis/Common'
const Userhistory = () => {

    const [loading ,setloading] =useState(false);
    const tok = sessionStorage.getItem('token') ; 
    const [userdata,setuserdata] = useState([]);
    const [userdignose,setuserdiagnose] = useState([]);
    const [userresult,setuserresult] = useState([]);


    const authAxios =axios.create({
        headers : {
         'Authorization': `Bearer ${tok}`,
         "Access-Control-Allow-Origin" : " * "
          
        }
      })

      
    useEffect(()=>{
        const loadposts=async() => {
          setloading(true);
       
          const rec = await authAxios.get('https://health-care-app-final.herokuapp.com/users/diagnosis')
          setuserdiagnose(rec.data);
          console.log(rec.data);

          const recc = await authAxios.get('https://health-care-app-final.herokuapp.com/users/AnalysisResults')
          setuserresult(recc.data);
          console.log(recc.data);


          }
          loadposts();
        },[]);




  return (
    <div>


<div>

{userdignose.map(({_id,Diagnosis,medicines,doctorId})=>(
<div key={_id}>
<h1>doctor name {doctorId.firstName} </h1>
<h2> diagnose : {Diagnosis} </h2>
<h3> {medicines} </h3>

</div> 

)  )  }

</div>



<div>

{userresult.map(({_id,branchId,result})=>(
<div key={_id}>
<h1>labname: {branchId.name} </h1>
<img  src={result} alt="image"  />


</div> 

)  )  }

</div>


        
    </div>
  )
}

export default Userhistory