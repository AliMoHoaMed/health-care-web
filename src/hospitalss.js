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

const [showz ,setshowz] =useState(true);
const [showi ,setshowi] =useState(false);

const [insuhos,setinsuhos]= useState([]);
const [sepcc,setspec]= useState([]);
const [specid,setspecid]=useState('');

const [insu,setinsu]= useState([]);
const [insid,setinsid]=useState('');


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
    const spec = await axios.get('https://health-care-app-final.herokuapp.com/specialties')
     setspec(spec.data);

     const inz = await axios.get('https://health-care-app-final.herokuapp.com/specialties')
     setinsu(inz.data);

     const ins = await axios.get('https://health-care-app-final.herokuapp.com/hcInsValues/search/filter?specialties='+specid+'&insurance='+insid  )
     setinsuhos(ins.data);
     console.log(ins.data);

    

 setloading(false);
  }
  loadposts();
},[areaaid,userareaaid , specid,insid]);

function handlearea(e) {
  setareaid( e.target.value);
}
function handlespecid(e) {
  setspecid( e.target.value);
}
function handleinsid(e) {
  setinsid( e.target.value);
}



function handleuserarea(){
   const us=getuser('user.AreaId');
const usarea=us.AreaId;
setareaid(usarea);
  console.log(userareaaid);
 
}

function handlesearch(){
setshowz(false);
setshowi(true);

}

function handleunssearch(){
  setshowz(true);
  setshowi(false);
  
  }



  return (
    <div>
      <div className='k'> 
      <div className='hello'>
     <br/>
      <label> <p class="hos-ser">Search</p>
      
      <input type='text' className='searchInput' placeholder='search..' onChange={(e)=> setsearchtitle(e.target.value)}/>
      </label>
      <br/>
      <br/>
   <p class="hos-ser"> By Using Filter </p><select class="using-filter" value={choossestatespec}
    
  onChange={handlearea} >
  {
  areaa.map(({ _id,name})=>(
    
<option className='buttton' key={_id} value={_id} >{name}   </option>
 ))}</select>



<br/>


 </div><button onClick={handleuserarea}  className='buttton' > Get My Zone </button> 
 <button onClick={handlesearch} onDoubleClick={handleunssearch} className='buttton' > search by insurance </button> 


 </div>

    {showz?  <>
    {loading ?( <h4> loaaading .....</h4>):( 
(hosbitalss.filter((value)=>{ 
if(searchtitle ==''){return hosbitalss}
else if(value.name.toLowerCase().includes(searchtitle.toLocaleLowerCase())){
  return value ;}})
  .map(({_id, hospitalId, name , areaId,image})=>(
    <div className='grid-containerrrrrr'>
    <div className='grid-itemmmmmmm'>
   <Hospitalscard _id={_id} name={name} image={image} />
  
   
   </div></div>
 )) ))} 
 </>: null}


{showi ?  <>

specialties
 <select value={choossestatespec}
  onChange={handlespecid} >
  {
  sepcc.map(({ id,specialties})=>(
    
<option className='buttton' key={id} value={id} >{specialties}   </option>
 ))}</select>

insurance 
<select value={choossestatespec}
  onChange={handleinsid} >
  {
  insu.map(({ _id,name})=>(
    
<option className='buttton' key={_id} value={_id} >{name}   </option>
 ))}</select>  
 
 
 {
  insuhos.map(({ _id,Discount,hospitalId})=>(
    
<div  key={_id} value={_id} >   

<h2> discount :  {Discount}</h2>
  <h2>hospital name :  {hospitalId} </h2>
  <a href={'/hospitalpage/'+hospitalId._id}> <h3> go to page </h3></a>

 </div>
 ))}
 
 
 
  </>:null }


<div>



</div>


    </div>
  );
}

export default Hospitals;
