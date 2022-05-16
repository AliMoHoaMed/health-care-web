import axios from 'axios';
import React, { useState } from 'react'
import { getuser } from './utlis/Common';

const Booking = (props) => {

const useridd=getuser('user')

    const [userid,setuserid]=useState([]);
    const [arrivid,setarrivid]=useState([]);

    const tok = sessionStorage.getItem('token') ; 

    const authAxios =axios.create({
        headers : {
         'Authorization': `Bearer ${tok}`
          
        }
     })

    const handleSubmit=(e) => {
        e.preventDefault();
       
        const dataaa = { drAvailTimeId : props.match.params._id , userId : userid } ;
    
    
      authAxios.post('https://health-care-app-final.herokuapp.com/book',dataaa
      ).then(ress=>{console.log("ress",ress)
      }
     
      ).catch(error =>{
        console.log('error >>>',error);
        })  


setuserid(useridd._id);


      }


  return (


    <div>
        <h1> booking</h1>
       <form onSubmit={handleSubmit}> 
           
           <button type="submit" > click here  </button>
            </form>
        
        </div>


  )
}

export default Booking