import React from 'react'
import useFetch from './useFetch';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';



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
        
        
        typee
        <div>

        {type.map(({id,type})=>(
        <div key={id}>
        <a> {type} </a>
 
        <a  href={'/labstypepage/'+ id}> go to page</a>
    
      </div>

)) }


        </div>
        
        
        </div>
  )
}

export default Typee