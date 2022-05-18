import React,{useState,useEffect} from 'react';
import './item.css'
import axios from 'axios';
import Doccard from './doccard'
import Hospitalscard from './hospitalscard';
import { gettokken, getuser, removeusersession } from './utlis/Common'
function Hospitals() {
const [loading ,setloading] =useState(false);
const [areaa,setarea]= useState([]);
const [choossestatespec,setchooossestatespec] =useState('');
const [hospitals,sethospitals] = useState([]);
const [hosbitalss,sethospitalss]= useState([]);
const [searchtitle,setsearchtitle]=useState('');

const [areaaid,setareaid]= useState([]);
const [aareaaid,setaareaid]= useState([]);
const [userareaaid,setuserareaaid]= useState([]);
useEffect((e)=>{
  const loadposts=async() => {
    setloading(true);
    const res = await axios.get('https://health-care-app-final.herokuapp.com/hospitals')
 sethospitals(res.data);

 const area = await axios.get('https://health-care-app-final.herokuapp.com/Area')
     setarea(area.data);

     setaareaid(choossestatespec)
     const ress = await axios.get('https://health-care-app-final.herokuapp.com/branchesHC/search/filter?area='+ areaaid || userareaaid)
     console.log(ress.data); sethospitalss(ress.data);


 setloading(false);
  }
  loadposts();
},[areaaid,userareaaid]);

function handlearea(e) {
      
  setareaid( e.target.value);

}

function handleuserarea(){
   const us=getuser('user.AreaId');
const usarea=us.AreaId;
setareaid(usarea);
  console.log(userareaaid);
 
}


  return (
    <div>
      <div className='k'> 
      <div className='hello'>
     
    <h3 >search  : <input type='text' placeholder='search..' onChange={(e)=> setsearchtitle(e.target.value)}/>  </h3>   
    
    by using filter :<select value={choossestatespec}
  onChange={handlearea} >
  {
  areaa.map(({ _id,name})=>(
    
<option className='buttton' key={_id} value={_id} >{name}   </option>
 ))}</select>


 </div><button onClick={handleuserarea}  className='buttton' > Get My Zone </button> 
 </div>

    

    {loading ?( <h4> loaaading .....</h4>):( 
(hosbitalss.filter((value)=>{ 
if(searchtitle ==''){return hosbitalss}
else if(value.name.toLowerCase().includes(searchtitle.toLocaleLowerCase())){
  return value ;}})
  .map(({_id, hospitalId, name , areaId})=>(
    <div className='grid-container'>
    <div className='grid-item'>
   <Hospitalscard _id={_id} name={name}  />
  
   
   </div></div>
 )) ))} 
    </div>
  );
}

export default Hospitals;
