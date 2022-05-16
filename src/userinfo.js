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
    const [useriddd,setuseriddd] =useState([]);
    const [useravatar,setuseravatar] =useState([]);

    const us=getuser('user');
    const authAxios =axios.create({
      headers : {
       'Authorization': `Bearer ${tok}`
        
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
<div className='bady'>



{userdata.map(({_id,firstName,email , AreaId,governorateId ,LastName}) => 
(
<div key={_id} >
<h3>name : </h3>
<a> {firstName}</a>
<br/>
<h3>area</h3> 
<a> {AreaId.name} </a>
<h3> gov: </h3>
<a> {AreaId.governorateId.name} </a>
<br/>
  </div>
))}








<br/> 
<div class="user-name"><h1> user info : </h1>
<h1>name :{us.firstName}</h1>
<h1>name :{us.LastName}</h1>
<img  src={"data:image/png;base64," + us.avatar} width="250" height="250" />
<h1>{us.AreaId.name
} </h1>
<h3>number : {us.phoneNumber} </h3>
<h2>email:{us.email } </h2>

<form onSubmit={handleSubmit}> 
<input type="file"  onChange={handlepic}  />

<input type="submit"   />
</form>

</div>
</div>





    </div>
    </>
  )
}

export default Userinfo