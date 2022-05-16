import React from 'react'
import './item.css'
import'./css/hoscard.css' ;
const Testcard = ({name,areas}) => {
  return (
    
   
<body>
 <div class="card-container">
     <div class="card-1">
         <div class="card-image-1">
             <img src="1.jpg" alt="image" />
         </div>
       <div class="card-text-1">
           <h2> hospital name: {name}</h2>
           <p> <i class="fas fa-map-marker-alt"></i> {areas} </p>
           
       </div>  
     </div>
 </div>   
</body>
  
  )
}

export default Testcard