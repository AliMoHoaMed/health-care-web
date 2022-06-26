import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { gettokken, getuser, removeusersession } from './utlis/Common'
const User_patch = () => {
  const [firstttt,setuserfirst] =useState([]);
  const [lasttttt,setuserlasttt] =useState([]);
  const [areaaid,setareaid] =useState([]);
  
  const [ base64code , setbasecode65]=useState([]);
  const [useravatar,setuseravatar] =useState([]);
  
  const us=getuser('user._id');
  const tok = sessionStorage.getItem('token') ; 




  const onhaga =(e) => {
    const files = e.target.files;
    const file =files[0];
    getbase64(file)
  }
  
  const onLoad = (filestring) => {
    console.log(filestring);
    setbasecode65(filestring);
    
   
  }
  
  
  const getbase64 =(file) => {
  let reader =new FileReader()
  reader.readAsDataURL(file)
  reader.onload =() => {
    onLoad(reader.result)
  }
  }


  const authAxios =axios.create({
    headers : {
     'Authorization': `Bearer ${tok}`
      
    }
  })
  console.log(us._id);


  const handleSubmit=(e) => {
    e.preventDefault();
    const dataaa = {   avatar : base64code , firstName :firstttt , LastName : lasttttt  } ;
  authAxios.patch('https://health-care-app-final.herokuapp.com/users/profile',dataaa
  ).then(ress=>{console.log("ress",ress)
  }
  ).catch(error =>{
    console.log('error >>>',error);
    })}

    
    return (
    <div>
<form onSubmit={handleSubmit}>   

<a> firsname</a>
<input type='text'
        required
        name='firstname'
        value={firstttt}
    
        onChange={(e)=>setuserfirst(e.target.value)}  />

<a> lastname</a>
<input type='text'
        required
        name='firstname'
        value={lasttttt}
       
        onChange={(e)=>setuserlasttt(e.target.value)}  />


<label  >Upload a photo of you 
    <input type="file" id="myFile" name="filename"  onChange={onhaga} />
</label>

<a> area</a>

<input type="submit"  value="edit" />
</form>


    </div>
  )
}

export default User_patch