import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import'./userprofile.css' ;
import { gettokken, getuser, removeusersession } from './utlis/Common'
const Userinfo = () => {

    const [loading ,setloading] =useState(false);
    const tok = sessionStorage.getItem('token') ; 
    const [userdata,setuserdata] = useState([]);
    const [userdiagnose,setuserdiagnose] =useState([]);
    const [ base64code , setbasecode65]=useState([]);
    const [userareaa,setuserarea] =useState([]);
    const [usergov,setusergov] =useState([]);
    const us=getuser('user');
   const userpic=us.avatar ;
  
    const authAxios =axios.create({
      headers : {
       'Authorization': `Bearer ${tok}`,
       "Access-Control-Allow-Origin" : " * "
        
      }
    })

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




    useEffect(()=>{
        const loadposts=async() => {
          setloading(true);
          const ress = await authAxios.get('https://health-care-app-final.herokuapp.com/users/userprofile')
          setuserdata(ress.data);
          setuserarea(ress.data.AreaId);
          setusergov(ress.data.AreaId.governorateId);
          console.log(ress.data);
          const rec = await authAxios.get('https://health-care-app-final.herokuapp.com/users/diagnosis')
          setuserdiagnose(rec.data);
          console.log(rec.data);


          }
          loadposts();
        },[]);
      


        const handleSubmit=(e) => {
          e.preventDefault();
          const dataaa = { avatar : base64code } ;
        authAxios.post('https://health-care-app-final.herokuapp.com/users/avatar',dataaa
        ).then(ress=>{console.log("ress",ress)
        }
        ).catch(error =>{
          console.log('error >>>',error);
          })}



         
    


  return (
    <>
 

    <div>
<div >





 <div class="ucard-container">
 {[userdata].map(({_id,firstName,LastName,email,avatar , AreaId,governorateId,phoneNumber ,diseases}) => 
(



     <div class="ucard-1" key={_id}>
         <div class="ucard-image-1">
             <img  src={avatar} alt="image"  /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
         </div>
         
       <div class="ucard-text-1">
           <h2> {firstName}  &nbsp; {LastName} </h2>
           <p><label class="uega">Email</label> {email}</p>
          
           <p><label class="uega"> Location </label> {userareaa.name}- {usergov.name}  </p>
           <p><label class="uega">phone </label>{phoneNumber}   </p>
           <p><label class="uega">disease </label> {diseases}   </p>
       </div>  
     </div>))}
 </div>   


 





</div>
</div>





  
    </>
  )
}

export default Userinfo