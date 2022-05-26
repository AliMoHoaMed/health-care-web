import React,{useState,useEffect} from 'react';
import './item.css'
import axios from 'axios';
import Doccard from './doccard'
function Doctors() {
const [loading ,setloading] =useState(false);
const [doctors,setposts] = useState([]);
const [searchtitle,setsearchtitle]=useState('');
const [doctorspec,setdoctorspec] = useState([]);
const [specc,setspec] = useState([]);
const [choossestatespec,setchooossestatespec] =useState('');
const [choose,setchoose] =useState('');
const [doctitle,setdoctortitle] = useState([]);
useEffect(()=>{
  const loadposts=async() => {
    setloading(true);
    const spe = await axios.get('https://health-care-app-final.herokuapp.com/specialties')
 setspec(spe.data);
console.log(spe.data);
    const res = await axios.get('https://health-care-app-final.herokuapp.com/doctors/search/filter?specialties='+doctorspec +'& drTitle=' + doctitle)
 setposts(res.data);
 console.log(res.data);

 
 setloading(false);
  }
  loadposts();
},[doctorspec,doctitle]);

function handlespec(e) {
      
  setdoctorspec(e.target.value);


}

function handletitle(e) {
  setdoctortitle(e.target.value);
  
}




  return (
    <div >
      <div className='k'> 
      <div className='bb'>
      <input type='text' placeholder='search..' onChange={(e)=> setsearchtitle(e.target.value)}/>
    <h3>Search</h3></div>
    
    
    <select value={choossestatespec}
  onChange={handlespec} >
  {
  specc.map(({ id,specialties})=>(
<option  key={id} value={id} >{specialties}   </option>
 ))}</select>

<select value={choose}
 onChange={(e) => handletitle(e)} >
 
<option value={'Advisor'} >  Advisor </option>
<option value={'front'}>  front </option>
<option value={'Advisor'} >  Advisor </option>
 </select>
<h2>
    <a>{choose} </a>
<a> {doctitle} </a>
</h2>

    </div>

<div className='grid-container'>

    {loading ?( <h4> loaaading .....</h4>):( 
(doctors.filter((value)=>{ 
if(searchtitle ===''){return doctors}
else if(value.firstName.toLowerCase().includes(searchtitle.toLocaleLowerCase())){
  return value ;}})
  .map(({_id,firstName, Title,avatar,specialtiesId})=>(
    <div className='grid-item' key={_id}>
    <div >
   
    <div>

<div className="card">

<div className="cardp" >


<img  src={"data:image/jpg;base64,"+avatar} width="250" height="250" />
</div>    
<div className="cardinf">
  <h3 > Dr/name :{firstName} </h3>
  <a href={'/doctorpages/'+_id}> info</a>
  <a> 
    {Title}
  </a>
  <a> 
    
  </a>

<br/>




 <div >
<table>
  <tr>
    <td className="h"> monday 12 pm </td>
    <br/>
    <td className="h"> sunday 12 pm </td>
  
   
  </tr>
</table></div>
</div>
</div>

    </div></div></div>
 )) ))} </div>
    </div>
  );
}

export default Doctors;
