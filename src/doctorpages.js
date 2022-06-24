import React from 'react'
import reactDom from 'react-dom';
import useFetch from './useFetch';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { gettokken, getuser } from './utlis/Common';
import './docpage.css'
import Revieew from './review';
const user =getuser();
  const Doctorpages = (props) => {
  const [loading ,setloading] =useState(false);
  const [revieww,setrevew]=useState([]);
  const [userrev,setuserrev]=useState([]);
  const [arr,setarr]=useState([]);
const [ ratee,setrate]=useState([]);
const [ ratevalue,setratevalue]=useState([]);
const [doctorid,setdoctorid]=useState([]);

const  doctoridd =props.match.params.id;
const tok = sessionStorage.getItem('token') ; 
const us=getuser('user');
const usid=us;




  let { data: doctors, isloading, errMsg } = useFetch(
    `https://health-care-app-final.herokuapp.com/doctors/${props.match.params.id}`
  );

  useEffect(()=>{
  const loadposts=async() => {
    setloading(true);
    const res = await axios.get('https://health-care-app-final.herokuapp.com/doctors/rate/'+props.match.params.id)
   setrevew(res.data);
    console.log(res.data)
   const ress = await axios.get('https://health-care-app-final.herokuapp.com/doctors/AvalibleTime/'+props.match.params.id)
   setarr(ress.data);
   console.log(ress.data);
   const resss = await axios.get('https://health-care-app-final.herokuapp.com/doctors/AvalibleTime/'+props.match.params.id)
   
   setloading(false);
    }
    loadposts();
  },[]);

  const authAxios =axios.create({
   headers : {
    'Authorization': `Bearer ${tok}`
     
   }
})
  const handleSubmit=(e) => {
    e.preventDefault();
    const dataaa = {Review : ratee , ratingValue :ratevalue , doctorId: doctoridd ,userId:usid } ;
  authAxios.post('https://health-care-app-final.herokuapp.com/users/rating',dataaa
  ).then(ress=>{console.log("ress",ress)
  }
  ).catch(error =>{
    console.log('error >>>',error);
    })}

  return (
   <>
{isloading && <div className='doc_centre'>loading ...</div>}
{errMsg && <div className='doc_centre'>{errMsg}</div>}
      {doctors && !isloading && !errMsg && (
  
  
  
  <div className='doc_centre'>

<div className='carddd' >

<img  src={"data:image/jpg;base64," + doctors.avatar} width="250" height="250" />


 <br/>
 <h2 className='info'> doctor name : {doctors.firstName}</h2> 
 <br/>
 <h2 className ='info' >specialest : {doctors.Title}</h2>
 <br/>

 </div>
<br/>
<br/>
<div class="abooking-card-container">
    <h1>information</h1>
     <div class="abooking-card-1">
       <div class="abooking-card-text-1">
{arr.map(({_id,date,timeFrom,timeTo,vezeeta,branchId ,areaId})=>(

         
         
  <div class="atables" key={_id}>
 <div class="atable1">
     <div class="ahos-name"><h3 class="ahospital-name">{branchId.name}</h3> {branchId.areaId.name}</div>
     <div class="atim"><h3 class="atime">{timeFrom}  &nbsp; to  &nbsp; {timeTo}</h3></div>
     <div class="ada"><h3 class="aday">{vezeeta}</h3></div>
     <a class="abtn" href={'/booking/'+ _id}> Register</a>
 </div>
 </div>
        
 





))}</div>
 </div></div>
  </div>


      )
      }

<h1> Reviews </h1>

<form class="revRateCard" action=" "  onSubmit={handleSubmit}>
        <textarea id="w3review" 
        class="inputReview" name="w3review" rows="15" cols="65"  value={ratee}
        onChange={(e)=>setrate(e.target.value)}  />
        <input class="submittingg" type="submit" value="Submit" />  
        
            <select class="rateSelect" value={ratevalue}  onChange={(e)=>setratevalue(e.target.value)} >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            





</form>
<br/>
{revieww.map(({_id,Review,ratingValue ,userId})=>(
<span key={_id} >   <div class="feedback-card">
      <span class="name">  </span>
      <br/>
      <span class="time">Rating :  {ratingValue} star</span>
         <br/>
          <br/>
      {Review}
          </div></span>)) }

      



<br/> 

<br/> 



  </>
  
);
  };
export default Doctorpages ;