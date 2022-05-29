import axios from 'axios';
import React, { useState } from 'react'
import { getuser } from './utlis/Common';

const Bookingforlabs = (props) => {

const useridd=getuser('user')

    const [userid,setuserid]=useState([]);
    const [paymentid,setpaymentid]=useState([]);
    const [visaanaame,setvisaaname]=useState([]);
    const [visaaid,setvisaaid]=useState([]);
    const [book,setbook]=useState([]);
    const [bookdet,setbookdet]=useState([]);
    const tok = sessionStorage.getItem('token') ; 

    const authAxios =axios.create({
        headers : {
         'Authorization': `Bearer ${tok}`
          
        }
     })

        const handlepayment=(e) => {
          e.preventDefault();
         
          const dataaaa = { VisaName :visaanaame , VisaID : visaaid } ;
      
      
        authAxios.post('https://health-care-app-final.herokuapp.com/payments/addPayment',dataaaa
        ).then(ress=>{console.log("ress",ress); 
        
        setpaymentid(ress.data._id); }
       
        ).catch(error =>{
          console.log('error >>>',error);
          })  
        }

    const handleSubmit=(e) => {
        e.preventDefault();
       
        const dataaa = { xlAvailTimeid : props.match.params._id , userId : userid , paymentId :paymentid} ;
    
    
      authAxios.post('https://health-care-app-final.herokuapp.com/book',dataaa
      ).then(ress=>{console.log("ress",ress); setbook(ress.data) }
     
      ).catch(error =>{
        console.log('error >>>',error);
        })  


setuserid(useridd._id);


      }


  return (


    <div>
    <form onSubmit={handlepayment}>  
    
    <label> visa name  </label> 
    <input type='text'
    
            name='firstname'
            value={visaanaame}
         
            onChange={(e)=>setvisaaname(e.target.value)}/>
    <br/>
    
    <label> visa id  </label> 
    <input type='text'
            name='firstname'
            value={visaaid}
            onChange={(e)=>setvisaaid(e.target.value)}/>
    <br/>
    <input type='submit' />
    
    </form>
    <a> {paymentid}</a>



        <h1> booking</h1>
       <form onSubmit={handleSubmit}> 
           
           <button type="submit" > click here  </button>
            </form>
        
<div>  

{[book].map(({_id,wattingTime})=>(
<div key={_id}>
  <h1> {wattingTime} </h1>
   </div> 

)) }

</div>


        </div>


  )
}
export default Bookingforlabs