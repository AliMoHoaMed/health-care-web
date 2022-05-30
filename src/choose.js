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
     <a href='/hospitalss'>
     <figure class="containerd">
    <img class="hospital" src="istockphoto-1131216472-612x612.jpg" alt=""/>
    <figcaption>
    <h3>Hospitals</h3>
    </figcaption>
    </figure>
    </a>
    </div>

    
    <div class="clinics">
        <a href="">
        <figure class="containerd">
            <img class="clinic" src="lab types img.jpg" alt=""/>
            <figcaption>
                <h3>Types</h3>  
            </figcaption>
            </figure>
    </a>
    </div>

    <div class="labs">
        <a href="/labss">
        <figure class="containerd">
            <img class="lab" src="istock-949947192_1-1100x520.jpg" alt=""/>
            <figcaption>
                <h3>Labs</h3>  
            </figcaption>
            </figure>
        </a>
    </div>

    <div class="doctors">
    <a href='/doctors' > 
    <figure class="containerd">
    <img class="doctor" src="Doctors_For_Men-732x549-thumbnail.jpg" alt=""  /> 
    <figcaption>
                <h3>Doctors</h3>  
            </figcaption>
            </figure>
    </a>  
    </div>
<div>  
</div>
        </body>
  </>
  
    )
}

export default Choose