import React from 'react'

import axios from 'axios';
import { useState , useEffect } from 'react';
import { ggettokken } from './utlis/Common3';

const Labsdiagnose = (props) => {
const useridddd =props.match.params._id
const [ base64code , setbasecode65]=useState([]);
const [loading ,setloading] =useState(false);
const [userdataa ,setuserdataa] =useState([]);
console.log(useridddd);
const [diagnosee ,setdiagnose] =useState('');
const [medicane ,setmedicane] =useState('');

const tok = ggettokken('token');
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
      console.log(res.data);
      console.log(useridddd);
     setloading(false);
      }
      loadposts();
    },[useridddd]);



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
  




    const handleSubmit=(e) => {
        e.preventDefault();
        const dataaa = {result : base64code , userId:useridddd } ;
      authAxios.post('https://health-care-app-final.herokuapp.com/branchesXL/sendresult',dataaa
      ).then(ress=>{console.log("ress",ress)
      }
      ).catch(error =>{
        console.log('error >>>',error);
        })}



  return (


    <div>
<h1 class="mas"> {userdataa.firstName} {userdataa.LastName} </h1>


<form onSubmit={handleSubmit}>  

<div class="diagnosInputCard dia-lablab ">

<br/>
       <br/>
       <div class="daattttaaa">
          
<label  >Upload the result
    <input type="file" id="myFile" name="filename"  onChange={onhaga} />
</label>
<br/>

</div>
<br/><br/><br/>
     
      <a class="boo-btn ddddd-bbbbb" type='submit' > Confirm </a>
</div>
</form>




    </div>
 
 
 
    )
}

export default Labsdiagnose