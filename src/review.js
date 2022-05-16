import React from 'react'
import './review.css';
const Revieew = ({_id,Review,ratingValue}) => {
  
    return (


        <div class="feedback-card">
      
        <span class="name"> <b> Name Surname </b></span>
        <span class="time">{ratingValue}</span>
        
           <br/>
            <br/>
        {Review}
            </div>
  
  
    )
}

export default Revieew