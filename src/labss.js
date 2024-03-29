import React,{useState,useEffect} from 'react';
import './item.css';
import'./userprofile.css' ;
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
const [insu,setinsu]= useState([]);
const [areaaid,setareaid]= useState('');
const [aareaaid,setaareaid]= useState([]);
const [userareaaid,setuserareaaid]= useState([]);
const [insuhos,setinsuhos]= useState([]);
const [insid,setinsid]=useState('');
const [specid,setspecid]=useState('');
const [sepcc,setspec]= useState([]);
useEffect((e)=>{
  const loadposts=async() => {
    setloading(true);
    const res = await axios.get('https://health-care-app-final.herokuapp.com/hospitals')
 sethospitals(res.data);

 const area = await axios.get('https://health-care-app-final.herokuapp.com/Area')
     setarea(area.data);

     setaareaid(choossestatespec)
     const ress = await axios.get('https://health-care-app-final.herokuapp.com/branchesXL/search/filter?area='+areaaid || userareaaid)
     console.log(ress.data); sethospitalss(ress.data);
     const spec = await axios.get('https://health-care-app-final.herokuapp.com/types')
     setspec(spec.data);
     console.log(spec.data);
     const inz = await axios.get('https://health-care-app-final.herokuapp.com/insurances')
     setinsu(inz.data);

     const ins = await axios.get('https://health-care-app-final.herokuapp.com/xlInsValues/search/filter?specialties='+specid+'&insurance='+insid  )
     setinsuhos(ins.data);
     console.log(ins.data);

 setloading(false);
  }
  loadposts();
},[areaaid , userareaaid,specid,insid]);

function handlearea(e) {
  setareaid( e.target.value);
}

function handlespecid(e) {
  setspecid( e.target.value);
}
function handleinsid(e) {
  setinsid( e.target.value);
}


const [showz ,setshowz] =useState(true);
const [showi ,setshowi] =useState(false);


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
      <div className='bb'>
        <br/>
      <label> <h1 class="hos-ser">Search</h1>
      <input type='text' className='searchInput' placeholder='search..' onChange={(e)=> setsearchtitle(e.target.value)}/>
      </label>
      <br/>
      <br/>
      <h1 class="hos-ser"> By Using Filter </h1> 
      <br/>
    Area
    <select class="using-filter"  value={choossestatespec}
  onChange={handlearea} >
  {
  areaa.map(({ _id,name})=>(
    
<option key={_id} value={_id} >{name}   </option>
 ))}</select>


 <br/>
 </div>


 
 <button onClick={handleuserarea}  className='buttton' > Get My Zone </button>
 <button onClick={handlesearch} onDoubleClick={handleunssearch} className='buttton'>  search by insurance </button>
 
 
 </div>

 {showz?  <>

    {loading ?( <h4> loaaading .....</h4>):( 
(hosbitalss.filter((value)=>{ 
if(searchtitle ==''){return hosbitalss}
else if(value.name.toLowerCase().includes(searchtitle.toLocaleLowerCase())){
  return value ;}})
  .map(({_id, name, labId , areaId , image})=>(
    <div className='grid-containerrrrrr'>
    <div className='grid-itemmmmmmm'>
   <Labscard _id={_id} name={name} areaId ={areaId} labId={labId} image={image} />
   </div></div>
 )) ))} 
</>: null}



{showi ?  <>
<div className='k'> 
type required 
 <select value={choossestatespec}
  onChange={handlespecid} >
  {
  sepcc.map(({ id,type})=>(
    
<option className='buttton' key={id} value={id} >{type}   </option>
 ))}</select>
<br/>
insurance 
<select value={choossestatespec}
  onChange={handleinsid} >
  {
  insu.map(({ _id,name})=>(
    
<option className='buttton' key={_id} value={_id} >{name}   </option>
 ))}</select>  
 </div>
 
 {
  insuhos.map(({_id,Discount,labId,typeId})=>(
    
<div  key={_id} >   
<br/>
<div class="CardDaataa">
<div class="CardDaataa-text cacacaca">
<h3> <label class="uh hu">Name</label> {labId.name}</h3>
 <h3> <label class="uh hu">Discount</label> {Discount}</h3>
 <h3> <label class="uh hu">Type</label>{typeId.type} </h3>

 <br/>
 </div>
 </div>
 </div>
 ))}

 
 
  </>:null }











    </div>
  );
}

export default Labs;
