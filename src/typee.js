import React from 'react'
import useFetch from './useFetch';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import'./css/userbooking.css' ;


const Typee = () => {
    const [ type,settype]=useState([]);
const [loading ,setloading] =useState(false);
    useEffect(()=>{
        const loadposts=async() => {
          setloading(true);
          const res = await axios.get('https://health-care-app-final.herokuapp.com/types')
         settype(res.data);
          console.log(res.data)
   
         setloading(false);
          }
          loadposts();
        },[]);



  return (
    <div>
        
        
        

        <div className='grid-containerr'>

{type.map(({id,type}) => 
(
  <div key={id} className='grid-itemr'>
<div class="bcard-container" >
<div class="bcard-1">

 <div class="bcard-text-1">
 
     <p>type :  {type}</p>
     <p><a  href={'/labstypepage/'+ id}> go to page</a></p>

     <div class="tables">
     


           </div> 
     
      </div>
  <h1> </h1>

 </div>  
</div>
</div>   

))}

<div >


</div>

</div>






        
        </div>
  )
}

export default Typee