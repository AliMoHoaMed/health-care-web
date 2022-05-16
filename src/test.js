import React,{useState,useEffect} from 'react';

import axios from 'axios';
import Testcard from './testcard';
function Test() {
const [loading ,setloading] =useState(false);
const [area,setposts] = useState([]);
const [gover,setgover] = useState([]);

const [firstName,Setfirstname] = useState('')
const [LastName,Setlastname] = useState('')
const [birthDate,setbirthdate] = useState([])
const [phoneNumber,setphone] = useState('')
const [dis,setdis] = useState('')
const [insid,setinsid] = useState('')
const [insno,setinsno] = useState('')
const [insurexp,setinsuexp] = useState('')
const [email,setemail] = useState('')
const [password,setpassword] = useState([])
const [avatar,setavatar] = useState('')
const [insurcard,setinsucard] = useState('')
const [AreaId,Setarea] = useState([])



const [searchtitle,setsearchtitle]=useState('');
const [choosestatearea,setchooosestate] =useState('');
const [choosestatee,setchooosestatee] =useState('');



useEffect(()=>{
  const loadposts=async() => {
    setloading(true);
  

    
    const res = await axios.get('https://health-care-app-final.herokuapp.com/Area')
 setposts(res.data);
 const ress = await axios.get('https://health-care-app-final.herokuapp.com/Governorate')
 setgover(ress.data);
 setloading(false);
  }
  loadposts();
},[]);

const handleSubmit=(e) => {
  e.preventDefault();
 
  const dataa = {firstName,LastName,birthDate,phoneNumber,dis,email,password,avatar,AreaId} ;
axios.post('https://health-care-app-final.herokuapp.com/users/signUp',dataa
).then(ress=>{console.log("ress",ress)


}
).catch(error =>{
  console.log('error >>>',error);
  })  
}



  return (
    <>
    <div>
<form onSubmit={handleSubmit}>
<label> email</label>
<input 
        type='text'
        required
        name='email'
        value={email}
        onChange={(e)=>setemail(e.target.value)}
        />
<br/>
<br/>
<label>passsword </label>
<input 
        type='text'
        required
        name='password'
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
        />
 
<br/>
<br/>
<label>firstname </label>
 <input 
        type='text'
        required
        name='firstName'
        value={firstName}
        onChange={(e)=>Setfirstname(e.target.value)}
        />
<br/>
<br/>

<br/>
<br/>
<label>date </label>
<input 
        type='date'
        required
        name='date'
        value={birthDate}
        onChange={(e)=>setbirthdate(e.target.value)}
        />
<br/>
<br/>
<label>avatar </label>
<input type="file" accept="image/*" name='avatar' value={avatar} onChange={(e)=>setavatar(e.target.value)} />

        <select value={choosestatearea}
  onChange={(e) => {
const selectedstate=e.target.value;
setchooosestate(selectedstate);
Setarea(selectedstate);


}} >
     {
  area.map(({_id, name })=>(
  
<option key={_id} value={_id}>{name}   </option>
 )) 
  }</select>
    <select value={choosestatee}
  onChange={(e) => {
const selectedstatee=e.target.value;
setchooosestatee(selectedstatee);
}} >

   
  {
 gover.map(({_id, name })=>(
  
    <option key={_id} >{_id} </option>
     )) 
 } 
  </select>
  <h1>{choosestatearea} </h1>
  <h2> {choosestatee}  </h2>
  <button type="submit"  className="myButton" > register  </button>
</form >

 </div>
 
 </>
  );
}

export default Test  ;
