import React from 'react'
import axios from 'axios';
import { useState } from 'react';import { useEffect } from 'react';
import { gettokken, getuser, removeusersession } from './utlis/Common'
const User_patch = () => {
  const [firstttt,setuserfirst] =useState([]);
  const [lasttttt,setuserlasttt] =useState([]);
  const [areaaid,setareaid] =useState([]);const [chosaa,setchoosa] =useState('');
  const [ userarea , setuserarea]=useState([]);
  const [loading ,setloading] =useState(false);
  const [ base64code , setbasecode65]=useState([]); const [ insno , setinsno]=useState([]);
  const [useravatar,setuseravatar] =useState([]);
  const [insuurancetypeid,setincurancetypeid] =useState('62b716f4ddd9d8bf515bdec1');
  const us=getuser('user._id');const [ govid , setgovid]=useState('');const [ expiredate , setexpiredata]=useState([]);
  const tok = sessionStorage.getItem('token') ; 
  const [insuurancetype,setincurancetype] =useState([]);
  const [ govv , setgovv]=useState([]);
  const [ areaa , setareaa]=useState([]);
  const [chooseinstype,setinstype] =useState([]); const [incuranceid,setincuranceid] =useState([]);
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

 

   setloading(false);
    }
    loadposts();
  },[govid , insuurancetypeid]);

  const handleSubmit=(e) => {
    e.preventDefault();
    const dataaa = {   avatar : base64code , firstName :firstttt , LastName : lasttttt ,AreaId :userarea} ;
  authAxios.patch('https://health-care-app-final.herokuapp.com/users/profile',dataaa
  ).then(ress=>{console.log("ress",ress);alert('your data is updated');
  }
  ).catch(error =>{
    console.log('error >>>',error);alert('something wronge check to fill the data');
    })}

    

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
<div class="inputContainer"> 

<label  class="label">Governorate</label>
<br/>
<br/>
<select 
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
<select 
  onChange={handleareaid} 
  
  >
  {
  areaa.map(({_id, name})=>(
<option key={_id} value={_id} >{name}   </option>
 ))}</select>

</div>

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
 
  <input type='number'
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

<br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/>
<input type="submit"  value="edit" />
</form>


    </div>
  )
}

export default User_patch