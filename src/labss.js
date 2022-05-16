import React,{useState,useEffect} from 'react';
import './item.css'
import axios from 'axios';
import Doccard from './doccard'
import Hospitalscard from './hospitalscard';
import Labscard from './labscard';
import { gettokken, getuser, removeusersession } from './utlis/Common'
function Labs() {
const [loading ,setloading] =useState(false);
const [areaa,setarea]= useState([]);
const [choossestatespec,setchooossestatespec] =useState('');
const [hospitals,sethospitals] = useState([]);
const [hosbitalss,sethospitalss]= useState([]);
const [searchtitle,setsearchtitle]=useState('');
const us=getuser('user');
const usarea=us.AreaId;
const [areaaid,setareaid]= useState(usarea);
const [aareaaid,setaareaid]= useState([]);


useEffect((e)=>{
  const loadposts=async() => {
    setloading(true);
    const res = await axios.get('https://health-care-app-final.herokuapp.com/hospitals')
 sethospitals(res.data);
console.log(usarea);
 const area = await axios.get('https://health-care-app-final.herokuapp.com/Area')
     setarea(area.data);

     setaareaid(choossestatespec)
     const ress = await axios.get('https://health-care-app-final.herokuapp.com/branchesXL/search/filter?area='+areaaid)
     console.log(ress.data); sethospitalss(ress.data);


 setloading(false);
  }
  loadposts();
},[areaaid]);

function handlearea(e) {
      
  setareaid( e.target.value);


}


  return (
    <div>
      <div className='k'> 
      <div className='bb'>
      <input type='text' placeholder='search..' onChange={(e)=> setsearchtitle(e.target.value)}/>
    <h2>search filter</h2>   
    <select value={choossestatespec}
  onChange={handlearea} >
  {
  areaa.map(({ _id,name})=>(
    
<option key={_id} value={_id} >{name}   </option>
 ))}</select>
 </div>
 </div>

    

    {loading ?( <h4> loaaading .....</h4>):( 
(hosbitalss.filter((value)=>{ 
if(searchtitle ==''){return hosbitalss}
else if(value.name.toLowerCase().includes(searchtitle.toLocaleLowerCase())){
  return value ;}})
  .map(({_id, name, labId , areaId})=>(
    <div className='grid-container'>
    <div className='grid-item'>
   <Labscard _id={_id} name={name} areaId ={areaId} labId={labId}  />
   </div></div>
 )) ))} 
    </div>
  );
}

export default Labs;
