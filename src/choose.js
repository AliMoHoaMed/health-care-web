import React from 'react'
import'./choose.css' ;
import { Link , Route } from 'react-router-dom';
import Hospitals from './hospitalss';
import Doctors from './doctors';
import Doctorpages from './doctorpages';
import Doccard from './doccard';
import Hospitalpage from './hospitalpage';
import Hospitalscard from './hospitalscard';
const Choose = () => {
  return (
<>
    <body className='m'>
        
        
       <div class="hospitals">
   
    
     <a href='/hospitalss'><img class="hospital" src="istockphoto-1131216472-612x612.jpg" alt=""/></a>
 
    
    </div>



    
    <div class="clinics">
        <a href="">
            <img class="clinic" src="istockphoto-1225898954-612x612.jpg" alt=""/>
        </a>
    </div>

    <div class="txt">
        Choose Your Area
    </div>

    <div class="labs">
        <a href="/labss">
            <img class="lab" src="istock-949947192_1-1100x520.jpg" alt=""/>
        </a>
    </div>

    <div class="doctors">
    <a href='/doctors' > <img class="doctor" src="Doctors_For_Men-732x549-thumbnail.jpg" alt=""  /> </a>
           
     
    </div>
<div>

    
</div>
        </body>
  </>
  
    )
}

export default Choose