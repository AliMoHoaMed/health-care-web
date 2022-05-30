import React from 'react'
import'./css/Lablogin.css' ;

const Lablogin = () => {
  return (
    <div>
        <div class="containerf">
      
      <div class="forms-containerf">
        <div class="signin-signupf">
        
          <form action="#" class="sign-in-formf" >
            <img class="health-caref" src="img/Health care.png"/> 
    
            <div class="input-fieldf">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-fieldf">
              <i class="fas fa-lockf"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" class="btn solid" />
          </form>
         </div>
        </div>
          
      <div class="panels-containerf">
        <div class="panel left-panelf">
          <img class="logof" src="img/logo.png"/> 
          <div class="contentf">
          <h1> Laboratory login </h1>

          <img src="img/lab.svg" class="image" alt="" />
        </div>
        
          
          </div>
          
        </div>
     
</div>
    </div>
  )
}

export default Lablogin