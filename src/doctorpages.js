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
  const [arr,setarr]=useState([]);
const [ ratee,setrate]=useState([]);
const [ ratevalue,setratevalue]=useState([]);
const [doctorid,setdoctorid]=useState([]);

const  doctoridd =props.match.params.id;
const tok = sessionStorage.getItem('token') ; 
const us=getuser('user');
const usid=us;
const [arrr,setarrr]=useState([]);



  let { data: doctors, isloading, errMsg } = useFetch(
    `https://health-care-app-final.herokuapp.com/doctors/${props.match.params.id}`
  );

  useEffect(()=>{
  const loadposts=async() => {
    setloading(true);
    const res = await axios.get('https://health-care-app-final.herokuapp.com/doctors/rate/'+props.match.params.id)
   setrevew(res.data);

   const ress = await axios.get('https://health-care-app-final.herokuapp.com/doctors/AvalibleTime/'+props.match.params.id)
   setarr(ress.data);
   const resss = await axios.get('https://health-care-app-final.herokuapp.com/doctors/AvalibleTime/'+props.match.params.id)
   setarrr(resss.data.branchId);
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
<table className='tablle'>
<tr> <th>time </th> <th>price</th> <th>clinic / hospital  </th>   <th>location </th> </tr>
{arr.map(({_id,date,timeFrom,timeTo,vezeeta,branchId ,areaId})=>(

<tr key={_id}>
             
               <th className="time">{timeFrom}  &nbsp; to  &nbsp; {timeTo}</th>
             
               <th className="day">{vezeeta}</th>
            
   <th> {branchId.name}</th>
   <th> {branchId.areaId.name}</th> 
   <a href={'/booking/'+ _id}> 

             <button className="buttton">Register</button>
         </a>
         </tr>
))}
 </table>
  </div>


      )
      }

<h1> Reviews </h1>

<form className='revvv' onSubmit={handleSubmit} >
<label  > write your opinion on the doctor </label>
<br/>
<textarea 
type='text'
        name='review'
        value={ratee}
        onChange={(e)=>setrate(e.target.value)} 
/> 
<br/>
<label  > choose review  </label>
<br/>
<input type='number' name='rate value' value={ratevalue}  onChange={(e)=>setratevalue(e.target.value)}/> 
<br/>

<div class="row">
<button type="submit"  className="buttton" > post review  </button>
</div>


</form>
<br/>
{revieww.map(({_id,Review,ratingValue ,userId})=>(
<span key={_id} >   <div class="feedback-card">
      <span class="name"> <b> {userId.email} </b></span>
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