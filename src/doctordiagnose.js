import React from 'react'
import { gettokkenn } from './utlis/Common2';
import axios from 'axios';
import { useState , useEffect } from 'react';

const Doctordiagnose = (props) => {
const useridddd =props.match.params._id
const [loading ,setloading] =useState(false);
const [userdataa ,setuserdataa] =useState([]);

const [diagnosee ,setdiagnose] =useState('');
const [medicane ,setmedicane] =useState('');

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
        const dataaa = {Diagnosis : diagnosee , medicines :medicane , userId:useridddd } ;
      authAxios.post('https://health-care-app-final.herokuapp.com/doctors/diagnosis',dataaa
      ).then(ress=>{console.log("ress",ress)
      }
      ).catch(error =>{
        console.log('error >>>',error);
        })}



  return (


    <div>
<h1> name:  {userdataa.firstName} __ {userdataa.LastName} </h1>


<form onSubmit={handleSubmit}>  

<label> diagnose  </label> 
<input type='text'

        name='firstname'
        value={diagnosee}
     
        onChange={(e)=>setdiagnose(e.target.value)}/>
<br/>

<label> mediacene  </label> 
<input type='text'
        
        name='firstname'
        value={medicane}

        onChange={(e)=>setmedicane(e.target.value)}/>
<br/>
<input type='submit' />

</form>




    </div>
 
 
 
    )
}

export default Doctordiagnose