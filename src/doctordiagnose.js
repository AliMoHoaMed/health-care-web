import React from 'react'
import { gettokkenn } from './utlis/Common2';
import axios from 'axios';
import { useState , useEffect } from 'react';
import './booking.css';
const Doctordiagnose = (props) => {
const useridddd =props.match.params._id
const [loading ,setloading] =useState(false);
const [userdataa ,setuserdataa] =useState([]);

const [diagnosee ,setdiagnose] =useState('');
const [medicane ,setmedicane] =useState('');

const [serach ,setreserach] =useState('');
const tok = sessionStorage.getItem('token') ; 
const authAxios =axios.create({
  headers : {
   'Authorization': `Bearer ${tok}`,    
  }
})


useEffect((e)=>{
    const loadposts=async() => {
      setloading(true);
      const res = await authAxios.get('https://health-care-app-final.herokuapp.com/users/'+useridddd)
      setuserdataa(res.data);
      console.log(res.data)
   
     setloading(false);
      }
      loadposts();
    },[useridddd]);


    const handleSubmit=(e) => {
        e.preventDefault();
        const dataaa = {Diagnosis : diagnosee , medicines :medicane , userId:useridddd ,AnalysisNeeded:serach } ;
      authAxios.post('https://health-care-app-final.herokuapp.com/doctors/diagnosis',dataaa
      ).then(ress=>{console.log("ress",ress);alert('everything is great');
      }
      ).catch(error =>{
        console.log('error >>>',error);alert('something wronge');
        })}



  return (


    <div>
      <br/>
      <br/>
<h1 class="mas">  {userdataa.firstName} {userdataa.LastName} </h1>



<form onSubmit={handleSubmit}>  


<div class="diagnosInputCard ">
      <div class="dattAAA">
      Type Diagnosis & Medicine
       </div>
       <br/>
       <br/>
      <div class="daattttaaa">
          Diagnosis: 
          <br/>
          <textarea id="w3review" 
        class="inputEditDiagnos" name="w3review" rows="1" cols="50"    
        value={diagnosee}
     
        onChange={(e)=>setdiagnose(e.target.value)}    />
        <br/>
        <br/>
          Medicine: 
          <br/>
          <textarea id="w3review" 
        class="inputEditMedicine" name="w3review" rows="1" cols="50"   value={medicane}

        onChange={(e)=>setmedicane(e.target.value)}  />
<br/>
<br/>
AnalysisNeeded: 
          <br/>
          <textarea id="w3review" 
        class="inputEditMedicine" name="w3review" rows="1" cols="50"   value={serach}

        onChange={(e)=>setreserach(e.target.value)}  />

      </div>
     <br/><br/><br/>
   
      <button class=" boo-btn mmmssssaaa" type='submit' > Confirm </button>
     
  </div>

</form>




<div> 


</div>



    </div>
 
 
 
    )
}

export default Doctordiagnose