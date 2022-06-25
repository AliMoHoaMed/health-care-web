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

<div class="CardContentttss">
<div class="CardDaataa">
<div class="CardDaataa-text">
<h3> <label class="uh">DR Name</label> {doctorId.firstName} </h3>
<h3> <label class="uh">Diagnose</label>  {Diagnosis} </h3>
<h3> <label class="uh">Medicine</label>  {medicines} </h3>
</div>
</div>
    </div>


</div>
)  )  }

</div>


<div>

{userresult.map(({_id,branchId,result})=>(
<div key={_id}>

<div class="CardContentssss">
<div class="CardDaataaaa">
<div class="LabNameText">
<div class="CardDaataaaa-text">
<h3> <label class="uh">Lab Name</label>{branchId.name} </h3>
</div>
<br/>
        <br/>
        <br/>
        <div class="diagTex">
    
            </div>
<img class="diagImgg" src={result} alt="image"  />
</div>
</div>
</div>


</div> 

)  )  }

</div>


        
    </div>
  )
}

export default Userhistory