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
    const [userarea,setuserarea] =useState([]);
  
    const [useravatar,setuseravatar] =useState([]);

    const us=getuser('user');
    const authAxios =axios.create({
      headers : {
       'Authorization': `Bearer ${tok}`,
       "Access-Control-Allow-Origin" : " * "
        
      }
    })


    useEffect(()=>{
        const loadposts=async() => {
          setloading(true);
        
          const ress = await authAxios.get('https://health-care-app-final.herokuapp.com/users/userprofile')
          setuserdata(ress.data);
      
          }
          loadposts();
        },[]);
      


        const handleSubmit=(e) => {
          e.preventDefault();
          const dataaa = { avatar :useravatar } ;
        authAxios.post('https://health-care-app-final.herokuapp.com/users/avatar',dataaa
        ).then(ress=>{console.log("ress",ress)
        }
        ).catch(error =>{
          console.log('error >>>',error);
          })}



          function handlepic(e) {
            setuseravatar( e.target.value);
          }
    


  return (
    <>
 

    <div>
<div >



{userdata.map(({_id,firstName,LastName,email,avatar , AreaId,governorateId,phoneNumber }) => 
(
<div key={_id} className='editProfile' >
  <div className='dataa'>
  <br/>
<h1 > User Name :  {firstName}  &nbsp; {LastName} 
<br/> 
 </h1>

<br/>

<h2>Area : {AreaId.name} 
<br/>
 gov:{AreaId.governorateId.name} </h2> 
<br/>
<h3>  email :{email} </h3>
<a>  </a>
<img  src={"data:image/png;base64," + avatar} width="250" height="250" />
<h3> profile pic </h3>
<br/>
<form onSubmit={handleSubmit}> 
<input type="file"  onChange={handlepic}  />

<input type="submit"   />
</form>
</div>
  </div>
))}





</div>
</div>





  
    </>
  )
}

export default Userinfo