import React from 'react'
import './item.css'
import'./css/hoscard.css' ;
const Labscard = ({_id,name,areaId,labId}) => {
  return (
    
   
<body>
 <div class="card-container">
     <div class="card-1">
         <div class="card-image-1">
             <img src="1.jpg" alt="image" />
         </div>
       <div class="card-text-1">
           <h2>  {name}</h2>
           <a href={'/labspage/'+_id}> <h3> go to page </h3></a>
           <p> <i class="fas fa-map-marker-alt"> </i> </p>
           <p> <i class="fas fa-map-marker-alt"> </i> </p>
       </div>  
     </div>
 </div>   
</body>
  
  )
}

export default Labscard