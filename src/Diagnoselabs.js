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
   <div class="dia-search">
   <input type='text' className='searchInput' placeholder='search..' onChange={(e)=> setuseremail(e.target.value)}/>
   </div>
   <br/>
   <div class="dia-submit-button"> 
   <input type="submit" className='buttton' /> 
 
   </div>

</form>
{show?


<div>
{userss.map(({_id,firstName,LastName,email})=>(
<div class="CardContentttss" key={_id}>
<div class="CardDaataa">
<div class="dia-em"> email:{email} 
<br/>
<br/>
{firstName} </div>
<div class="goto-dia">  
<a href={'/labsdiagnose/'+_id}> go to page</a>
</div>
</div>
</div>
))}
</div>
: null}
    </div>
  
  )
}

export default Diagnoselabs