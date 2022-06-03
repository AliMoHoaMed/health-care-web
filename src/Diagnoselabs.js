import React from 'react'

import axios from 'axios';
import { useState , useEffect } from 'react';
import { ggettokken } from './utlis/Common3';

const Diagnoselabs = () => {
  const [searchtitle,setsearchtitle]=useState('');
  const [loading ,setloading] =useState(false);
  const [userss,setuserss]=useState('');
  const [show ,setshow] =useState(false);

  const [usereemail,setuseremail]=useState('');

 const tok = ggettokken('token');
  const authAxios =axios.create({
    headers : {
     'Authorization': `Bearer ${tok}`,
 
      
    }
  })


  useEffect((e)=>{
    const loadposts=async() => {
      setloading(true);
      const res = await authAxios.get('https://health-care-app-final.herokuapp.com/branchesXL/search/users?userEmail='+searchtitle)
      setuserss(res.data);
      console.log(res.data)
   
     setloading(false);
      }
      loadposts();
    },[searchtitle]);


    function handleuser(e) {
      
      setsearchtitle( usereemail);
    e.preventDefault();
    setshow(true);
    
    }
   


  return (

    
    <div>
   <form onSubmit={handleuser}>
   <input type='text' placeholder='search..' onChange={(e)=> setuseremail(e.target.value)}/>
   <input type="submit" /> 
 
   

</form>
{show?


<div>
{userss.map(({_id,firstName,LastName,email})=>(
<div key={_id}>
<h2> {email} </h2>
<h1> {firstName} </h1>
<a href={'/labsdiagnose/'+_id}> go to page</a>
</div>
))}
</div>
: null}
    </div>
  
  )
}

export default Diagnoselabs