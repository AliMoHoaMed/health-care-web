import React, { Component, useState } from 'react'
import axios from 'axios'
import Test from './test';
import { useEffect } from 'react';
import'./css/signup.css' ;
const Signup = () => {
  

    const [ userfirstname , setuserfirstname]=useState('');
    const [ userlastname , setuserlastname]=useState('');
    const [ userdate , setuserdate]=useState([]);
    const [ userno , setuserno]=useState([]);
    const [ userarea , setuserarea]=useState([]);
    const [ useremail , setuseremail]=useState('');
    const [ userpass , setuserpass]=useState('');
    const [ useravatar , setuseravatar]=useState([]);
    const [ govid , setgovid]=useState('/Governorate/6228071827b740240b9eabe3');
    const [loading ,setloading] =useState(false);
    const [choosestatespec,setchooosestatespec] =useState('');
    const [choossestatespec,setchooossestatespec] =useState('');
    const [ areaa , setareaa]=useState([]);

    const [ govv , setgovv]=useState([]);

    useEffect(()=>{
        const loadposts=async() => {
          setloading(true);
          const resarea = await axios.get('https://health-care-app-final.herokuapp.com'+govid)
       setareaa(resarea.data);
       const resgov = await axios.get('https://health-care-app-final.herokuapp.com/Governorate')
       setgovv(resgov.data);
       setloading(false);
        }
        loadposts();
      },[]);
    



    const handleSubmit=(e) => {
        e.preventDefault();
       
        const dataaa = {firstName:userfirstname,LastName:userlastname,birthDate:userdate,phoneNumber:userno,email:useremail,password:userpass,avatar:useravatar ,AreaId :userarea } ;
      axios.post('https://health-care-app-final.herokuapp.com/users/signUp',dataaa
      ).then(ress=>{console.log("ress",ress)
      }
      ).catch(error =>{
        console.log('error >>>',error);
        })  
      }

    return (
        
        
        <>
      <div>
   <body className="u">  
   
   <form className="h" onSubmit={handleSubmit}>
       
   <h1>  Sign UP  </h1>
   
   <h2> please fill the data </h2>
          <table>
         <tr>
         <td> 
   <div className="b">
   <label>First Name </label>
   <br/>
   <input  type='text'
        required
        name='firstname'
        value={userfirstname}
        onChange={(e)=>setuserfirstname(e.target.value)}  />
   </div>
   </td>
   <td>     
   <div className="b">
   <label className="ex1"> Phone </label>
   <br/>
   <input type="number"
   required
   name='number'
   value={userno}
   onChange={(e)=>setuserno(e.target.value)}
   /> 
   </div>
   </td>
   </tr>
   <tr>
   <td> 
       <div className="b">
           <label>Last Name </label>
           <br/>
           <input type="text"
            required
            name='lastname'
            value={userlastname}
            onChange={(e)=>setuserlastname(e.target.value)}
           />
           </div>
   
   </td>
   <td>
     <br/>



     
     <br/>
       <div className="b">
           <label>Area  </label>






 <select value={choossestatespec}
  onChange={(e) => {
const selecttedstate=e.target.value;
setchooossestatespec(selecttedstate);
setgovid(choossestatespec);
}} >
     {
  govv.map(({_id,name,areas ,areaAPI})=>(

<option key={_id} value={areaAPI}> {name}  </option>

 ) 
 )}</select>



           <br/>


   <select value={choossestatespec}
  onChange={(e) => {
const selecteddstate=e.target.value;
setchooossestatespec(selecteddstate);
setuserarea(choossestatespec);
}} >
     {
  areaa.map(({ _id,name})=>(
<option key={_id} value={_id} >{name}   </option>
 ))}</select>


   <br/>
  
    <br/>
           </div>
   </td>
   </tr>
<tr>
<td><div className='b'>
<input type="file" accept="image/*" name='avatar' value={useravatar} onChange={(e)=>setuseravatar(e.target.value)} />

</div>
</td>

</tr>

   <tr>
       <td>
   <div className="b">
   <label> Gender</label> 
   <br/>
   <input type="radio" id="male" name="fav_language" value="MALE"/>
   <label >Male</label>
   <br/>
   <input type="radio" id="Female" name="fav_language" value="FEMALE"/>
   <label >Female</label>
   <br/>
   </div>
   </td>
   <td>
    <div className="b">
           <label>Birth Date </label>
           <br/>
           <input type="date"
        
            required
            name='birthdate'
            value={userdate}
            onChange={(e)=>setuserdate(e.target.value)}
           />
           </div>
   </td>
   </tr>
   
   <tr> 
       <td>
           <div className="b">
               <label>Email </label>
               <br/>
               <input 
        type='email'
        required
        name='email'
        value={useremail}
        onChange={(e)=>setuseremail(e.target.value)}
        />
               </div>
       </td>
   
   
     
      
           <td>
               <div className="b">
                   <label>password </label>
                   <br/>
                   <input 
       
        type='password'
        required
        name='password'
        value={userpass}
        onChange={(e)=>setuserpass(e.target.value)}
        />
                   </div>
           </td>
           </tr>
       
    
   
   </table>
   
   <div className="e">
       <div className="b">
                       <h2 > insurance</h2> 
                        <label >optional</label>
                       <input type="radio" id="insurance" name="fav_language" value="insurancee"/>
                       </div>
       
       <div className="b">
           <label>governant  </label>
           <br/>
           <input list="browsers" name="browser"/>
     <datalist id="browsers">
       <option value="handsa 7aga"/>
       <option value="handsaa 7agat"/>
       
     </datalist>
           </div>
   
           <div className="b">
               <label className="ex1"> insurance no. </label>
               <br/>
               <input type="number"/> 
               </div>
        </div>
       <div >
        <button type="submit"  className="myButton" > register  </button>
        </div>
   </form>
   
   
   </body>
   
   </div>
   </>
    )
  }


export default Signup 