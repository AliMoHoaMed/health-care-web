import React,{useState,useEffect} from 'react';
import './item.css'
import axios from 'axios';
import Doccard from './doccard'
function Doctors() {
const [loading ,setloading] =useState(false);
const [doctors,setposts] = useState([]);
const [searchtitle,setsearchtitle]=useState('');

useEffect(()=>{
  const loadposts=async() => {
    setloading(true);
    const res = await axios.get('https://health-care-app-final.herokuapp.com/doctors')
 setposts(res.data);
 setloading(false);
  }
  loadposts();
},[]);




  return (
    <div >
      <div className='k'> 
      <div className='bb'>
      <input type='text' placeholder='search..' onChange={(e)=> setsearchtitle(e.target.value)}/>
    <h3>Search</h3></div></div>
    {loading ?( <h4> loaaading .....</h4>):( 
(doctors.filter((value)=>{ 
if(searchtitle ===''){return doctors}
else if(value.firstName.toLowerCase().includes(searchtitle.toLocaleLowerCase())){
  return value ;}})
  .map(({id, firstName , Title,avatar})=>(
    <div className='grid-container'>
    <div className='grid-item'>
   <Doccard id={id} name={firstName} username={Title} avatar={avatar} /></div></div>
 )) ))} 
    </div>
  );
}

export default Doctors;
