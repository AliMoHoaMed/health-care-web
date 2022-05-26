import React, { Component, useState } from 'react'
import axios from 'axios'
import Test from './test';
import { useEffect } from 'react';

import'./css/signn up.css' ;
const Ssignup = () => {
  

    const [ userfirstname , setuserfirstname]=useState('');
    const [ userlastname , setuserlastname]=useState('');
    const [ userdate , setuserdate]=useState([]);
    const [ userno , setuserno]=useState([]);
    const [ userarea , setuserarea]=useState([]);
    const [ useremail , setuseremail]=useState('');
    const [ userpass , setuserpass]=useState('');
    const [ useravatar , setuseravatar]=useState([]);
    const [ govid , setgovid]=useState('');
    const [loading ,setloading] =useState(false);
    const [ et1 , setet1]=useState([]);
    const [ et2 , setet2]=useState([]);
    const [choosestatespec,setchooosestatespec] =useState('');
    const [choossestatespec,setchooossestatespec] =useState('');
    
    const [insuurancetypeid,setincurancetypeid] =useState([]);
    const [insuurancetype,setincurancetype] =useState([]);
    const [incuranceid,setincuranceid] =useState([]);

    const [chooseinstype,setinstype] =useState('');
    const [chosaa,setchoosa] =useState('');

    const [ areaa , setareaa]=useState([]);

    const [ govv , setgovv]=useState([]);
    const [ base64code , setbasecode65]=useState([]);


   
    

    useEffect((e)=>{
        const loadposts=async() => {
          setloading(true);
          const resarea = await axios.get('https://health-care-app-final.herokuapp.com/Governorate/'+govid)
       setareaa(resarea.data);
       const resgov = await axios.get('https://health-care-app-final.herokuapp.com/Governorate')
       setgovv(resgov.data);
       const resinc = await axios.get('https://health-care-app-final.herokuapp.com/insuranceTypes')
       setincurancetype(resinc.data);
       console.log(base64code)
       setloading(false);
        }
        loadposts();
      },[govid]);


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

      function handlearea(e) {
        setgovid( e.target.value);
      }

      function handleareaid(e) {
        setuserarea( e.target.value);
      }

      function handleincid(e) {
        setincurancetypeid( e.target.value);
      }


    const handleSubmit=(e) => {
        e.preventDefault();
       
        const dataaa = {firstName:userfirstname,LastName:userlastname,birthDate:userdate,phoneNumber:userno,email:useremail,password:userpass ,AreaId :userarea , avatar : base64code } ;
      axios.post('https://health-care-app-final.herokuapp.com/users/signUp',dataaa
      ).then(ress=>{console.log("ress",ress)
      }
      ).catch(error =>{
        console.log('error >>>',error);
        })  
      }

    return (
        <>
<body className='signup'>
    <div class="signupFrm">
        <form onSubmit={handleSubmit} class="form">
<h1 class="title">Sign Up</h1>

<div class="inputContainer">
  <br/>
  <br/>
  <input type='text'
        required
        name='firstname'
        value={userfirstname}
        class="input"
        onChange={(e)=>setuserfirstname(e.target.value)}  />

  <label for="" class="label">First Name</label>
</div>

<div class="inputContainer">
<br/>
  <br/>

  <input type="text"
            required
            name='lastname'
            class="input"
            value={userlastname}
            onChange={(e)=>setuserlastname(e.target.value)} />
  <label for="" class="label">Last Name</label>
</div>

<div class="inputContainer">
<br/>
  <br/>
  <input    type='email'
        required
        name='email'
        class="input"
        value={useremail}
        onChange={(e)=>setuseremail(e.target.value)}/>
  <label for="" class="label">Email</label>
</div>


<div class="inputContainer">
<br/>
  <br/>
  <input    type='password'
        required
        name='password'
        class="input"
        value={userpass}
        onChange={(e)=>setuserpass(e.target.value)}/>
  <label  class="label">Password</label>
</div>


<div class="inputContainer">
<br/>
  <br/>
  <input type="number"
   required
   class="input"
   name='number'
   value={userno}
   onChange={(e)=>setuserno(e.target.value)} />
  <label  class="label">Phone Number</label>
</div>

<div class="inputContainer"> 

<label  class="label">Governorate</label>
<br/>
<br/>
<select value={choossestatespec}
  onChange={handlearea} >
  {
  govv.map(({ id,name,areaAPI})=>(
<option key={id} value={id} >{name}   </option>
 ))}</select>
</div>



<div class="inputContainer"> 
<label  class="label">Area</label>
<br/>
<br/>
<select value={choosestatespec}
  onChange={handleareaid} 
  
  >
  {
  areaa.map(({_id, name})=>(
<option key={_id} value={_id} >{name}   </option>
 ))}</select>

</div>



<div class="inputContainer">

  <label  class="label">Birth Date</label>
 <br/>
 <br/>
  <input type="date"
        required
        name='birthdate'
    
        value={userdate}
        onChange={(e)=>setuserdate(e.target.value)} />
</div>

<div class="inputContainer">
  <label  class="label">Gender</label>
 
  <select required name="gen" id="genders">
    <option value="Male">Male</option>
    <option value="female">Female</option>
  </select>
</div>

<div class="inputContainer">
  <label  class="label">Upload a photo of you
    <input type="file" id="myFile" name="filename" class="fileBtn" onChange={onhaga} />
  </label>
</div>

<img  src={ base64code} width="250" height="250" />


<div class="inputContainer">

  <label  class="label">Insurance </label>
<br/>
  <select value={chosaa}
  onChange={handleincid} >
  {
  insuurancetype.map(({id,name})=>(
<option key={id} value={id} >{name}   </option>
 ))}</select>

<h2> {insuurancetypeid} </h2>

</div>
<div class="inputContainer">
  <label  class="label">Upload a photo of insurance
    <input type="file" id="myFile" name="filename" class="fileBtn" />
  </label>
</div>

<input type="submit" class="submitBtn" value="Sign Up" />



<p class="logginn">Already have an account? 
  <a href="/login" >Login</a>.
</p>


</form>

</div>



</body>



   </>
    )
  }


export default Ssignup 