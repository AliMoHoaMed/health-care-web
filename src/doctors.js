import React,{useState,useEffect} from 'react';
import './item.css'
import axios from 'axios';
import Doccard from './doccard'
import'./css/hospage.css' ;
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
      <div className='bb'> <label><h1>Search</h1>
      <input type='text' className='searchInput' placeholder='search..' onChange={(e)=> setsearchtitle(e.target.value)}/>
      </label>
    </div>
    
    
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
  .map(({_id,firstName, Title,avatar,specialtiesId , LastName})=>(
  
    <div class="doctorsDataCardd" key={_id}>
          <img class="DocPhoto"
          src={"data:image/jpg;base64,"+avatar}
            alt=""/>
        <div class="docDaataaa">
            Name: {firstName}&nbsp;{LastName}
             <br/>   
             <br/>
             Major: {specialtiesId.specialties} <a href={'/doctorpages/'+_id}> info</a>
             <br/>
  <a> {Title} </a>   
        </div>
      
        
    </div>









 



  
 )) ))} </div>
    </div>
  );
}

export default Doctors;
