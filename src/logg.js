import React from 'react'
import './loggcss.css';
const Logg = () => {


  return (
    <div>
        <div class="bg"></div>
    <div class="containner-main">
      <div class="img1">
        <figure class="containner">
         <img src="img(1).jpg"  height = "400" width = "500"/> 
          <figcaption>
            <h3>Doctor Login</h3>
          </figcaption>
          <a href="doclogin"></a>
        </figure>
      </div>
      <div class="img2">
        <figure class="containner">
        <img src="img(2).jpg" height = "400" width = "500" />
        <figcaption>
          <h3>User Login</h3>
        </figcaption>
        <a href="/login"></a>
      </figure>
    </div>
    </div>
    </div> 
  
    )
}

export default Logg