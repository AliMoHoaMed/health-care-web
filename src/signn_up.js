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

    const [ userdes , setuserdes]=useState([]);
    const [ userarea , setuserarea]=useState([]);
    const [ useremail , setuseremail]=useState('');
    const [ userpass , setuserpass]=useState('');
    const [ usergendre , setusergendre]=useState([]);
    const [ govid , setgovid]=useState('');
    const [loading ,setloading] =useState(false);
    const [ gender , setgender]=useState([]);
    const [ expiredate , setexpiredata]=useState([]);
    const [ insno , setinsno]=useState([]);
    const [choosestatespec,setchooosestatespec] =useState('');
    const [choossestatespec,setchooossestatespec] =useState('');
    
    const [insuurancetypeid,setincurancetypeid] =useState('62b716f4ddd9d8bf515bdec1');
    const [insuurancetype,setincurancetype] =useState([]);
    const [incuranceid,setincuranceid] =useState('');

    const [chooseinstype,setinstype] =useState([]);
    const [chosaa,setchoosa] =useState('');

    const [ areaa , setareaa]=useState([]);

    const [show1 ,setshow1] =useState(true);
    const [show2 ,setshow2] =useState(false);
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
      
       const insid = await axios.get('https://health-care-app-final.herokuapp.com/insuranceType/'+insuurancetypeid)
       setinstype(insid.data);
       console.log(insid.data)

       const gen = await axios.get('https://health-care-app-final.herokuapp.com/users/gender')
       setgender(gen.data);
       console.log(gen.data)

       setloading(false);
        }
        loadposts();
      },[govid , insuurancetypeid]);


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


      function handleinsid(e) {
        setincuranceid( e.target.value);
      }

      function handlegender(e) {
        setusergendre( e.target.value);
      }

      function inssssss(e) {
     setshow1(false);
     setshow2(true);
      }

      function insnooo(e) {
        setshow1(true);
        setshow2(false);
         }



    const handleSubmit=(e) => {
        e.preventDefault();
       
        const dataaa = {firstName:userfirstname,LastName:userlastname,birthDate:userdate,phoneNumber:userno,email:useremail,password:userpass ,AreaId :userarea ,genderId:usergendre,diseases:userdes, avatar : base64code ,InsuranceId: incuranceid ,insuranceExpireDate:expiredate,insuranceNo:insno } ;
      axios.post('https://health-care-app-final.herokuapp.com/users/signUp',dataaa
      ).then(ress=>{console.log("ress",ress); alert('sign up is completed now please go to sign in ');
      }
      ).catch(error =>{
        console.log('error >>>',error);alert('sign up is not completed with insurance .. check the photo size or the data is filled ');
        })  
      }

      const handleSubmit2=(e) => {
        e.preventDefault();
       
        const dataaa = {firstName:userfirstname,LastName:userlastname,birthDate:userdate,phoneNumber:userno,email:useremail,password:userpass ,AreaId :userarea ,genderId:usergendre,diseases:userdes, avatar : base64code  } ;
      axios.post('https://health-care-app-final.herokuapp.com/users/signUp',dataaa
      ).then(ress=>{console.log("ress",ress); alert('sign up is completed now please go to sign in ');
      
      }
      ).catch(error =>{
        console.log('error >>>',error); console.log(error); alert('sign up is not completed .. check the photo size or the data is filled ');
        })  
      }



    return (
        <>
<body className='signup'>
    <div class="signupFrm">
        <form onSubmit={handleSubmit2} class="form">
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
<br/>
  <br/>
  <input type="textarea"
   required
   class="input"
   
   value={userdes}
   onChange={(e)=>setuserdes(e.target.value)} />
  <label  class="label">History disease</label>
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
    className='inputtt'
        value={userdate}
        onChange={(e)=>setuserdate(e.target.value)} />
</div>
<br/>
<br/>
<div class="inputContainer">

 <label  class="label">Gender</label>
 <br/> <br/>
 <select value={chosaa}
  onChange={handlegender} >
  {
  gender.map(({_id,gender})=>(
<option key={_id} value={_id} >{gender}   </option>
 ))}</select>
</div>

<div class="inputContainer">
  <label  class="label">Upload a photo of you
    <input type="file" id="myFile" name="filename" class="fileBtn" onChange={onhaga} />
  </label>
</div>

<img  src={ base64code} width="250" height="250" />

<br/>
<button onClick={inssssss}>  click here to choose sign up with insurance </button>
<button onClick={insnooo}>  click here to choose sign up without insurance </button>
<div class="inputContainer">

  <label  class="label">Insurance type </label>
  <br/><br/>
  <select value={chosaa}
  onChange={handleincid} >
  {
  insuurancetype.map(({_id,name})=>(
<option key={_id} value={_id} >{name}   </option>
 ))}</select>

</div>
<br/>
<div class="inputContainer">
<label  class="label">Insurance name </label>
<br/><br/>
<select value={chosaa}
  onChange={handleinsid} >
  {
  chooseinstype.map(({_id,name})=>(
<option key={_id} value={_id} >{name}   </option>
 ))}</select> 


<br/><br/>
<div class="inputContainer">
 
  <input type='text'
        required
        name='firstname'
        value={insno}
        class="input"
        onChange={(e)=>setinsno(e.target.value)}  />

  <label for="" class="label">Insurance number </label>
</div>

<br/>
<div class="inputContainer">
 
  <input type='date'
        required
        name='firstname'
        value={expiredate}
        class="input"
        onChange={(e)=>setexpiredata(e.target.value)}  />

  <label for="" class="label">Insurance expire date </label>
</div>



</div>

<br/><br/><br/>
<br/><br/><br/>

{show1?<input type="submit" class="submitBtn" value="Sign Up" />:null }


{show2?<input onClick={handleSubmit} class="submitBtn" value="Sign Up with insurance" />:null }


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