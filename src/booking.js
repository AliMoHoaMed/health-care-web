import axios from 'axios';
import React, { useState } from 'react'
import { getuser } from './utlis/Common';
import './booking.css';
const Booking = (props) => {

const useridd=getuser('user')

    const [userid,setuserid]=useState([]);
    const [arrivid,setarrivid]=useState([]);
    const [paymentid,setpaymentid]=useState([]);
    const [visaanaame,setvisaaname]=useState([]);
    const [visaaid,setvisaaid]=useState([]);
    const [book,setbook]=useState([]);
    const [showw,setshoww]=useState(false);
    const [showww,setshowww]=useState(false);
    const [showwbutton,setshowbutton]=useState(true);
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
    
function handleshow (){
  setshowbutton(false);
  setshoww(true);
  
}
function handleshowoffline (){

 setshowww(true);setshowbutton(false);
}





    const handleSubmit=(e) => {
        e.preventDefault();
       
        const dataaa = { drAvailTimeId : props.match.params._id , userId : userid ,paymentId :paymentid } ;
    
    
      authAxios.post('https://health-care-app-final.herokuapp.com/book',dataaa
      ).then(ress=>{console.log("ress",ress); setbook(ress.data);
      }
      ).catch(error =>{
        console.log('error >>>',error);
        })  


        setuserid(useridd._id);
        }


        const handleoffline=(e) => {
          e.preventDefault();
         
          const dataaaa = { drAvailTimeId : props.match.params._id , userId : userid  } ;
      
      
        authAxios.post('https://health-care-app-final.herokuapp.com/book',dataaaa
        ).then(ress=>{console.log("ress",ress); setbook(ress.data);
        }
        ).catch(error =>{
          console.log('error >>>',error);
          })  
  
  
          setuserid(useridd._id);
          }








  return (


    <div>


      {showwbutton?
      <>

<div class="btext1">      Choose Your Appropriate Payment Way
 </div>
     
     
      
        


   

        <div class="bcards">
            
          <a> 
           
        </a>
               <button onClick={handleshow}> online  </button> 
           <button onClick={handleshowoffline}> offline</button>
            
          
               
      
           
         
        </div>


      
      
      
      
      
      </>
      
      :null }



{showw?
<>
 <form onSubmit={handlepayment}>  
    

 <div class="containerr">
        <h1>Confirm Your Payment</h1>
        <div class="first-rowr">
            <div class="ownerr">
                <h3>Full Name</h3>
                <div class="input-fieldr">
                    <input type="text"/>
                </div>
            </div>
            <div class="cvv">
                <h3>CVV</h3>
                <div class="input-fieldr">
                <input type='text'
    
    name='firstname'
    value={visaanaame}
 
    onChange={(e)=>setvisaaname(e.target.value)}/>
                </div>
            </div>
        </div>
        <div class="second-rowr">
            <div class="card-numberr">
                <h3>Card Number</h3>
                <div class="input-fieldr">
                <input type='text'
            name='firstnamer'
            value={visaaid}
            onChange={(e)=>setvisaaid(e.target.value)}/>
                </div>
            </div>
        </div>
        <div class="third-rowr">
         
          
            <div class="selectionr">
              
                <div class="cardsr">
                     <img src="vi.png" alt=""/>
                
                  
                </div>
            </div>    
        </div>     <a className='ar' href=" ">Proceed and Confirm</a>
          <input type='submit' />
   
    </div>

 </form>

   
    <a> {paymentid}</a>


        <h1> booking</h1>
       <form onSubmit={handleSubmit}> 
           <button type="submit" > FINISH   </button>


    
            </form>
  </>    :null    }








   
 
    
 



{showww ?  <div> <form onSubmit={handleoffline}> 
           <button type="submit" > click to finish </button>
            </form></div> : null
 }
   





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

export default Booking