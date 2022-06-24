import { BrowserRouter,Switch,NavLink,Route } from 'react-router-dom';
import Home from './Home';
import Login from './login';
import Userprofile from './userprofile';
import Signup from './signup';
import Choose from './choose';
import Doctorpages from './doctorpages';
import Doctors from './doctors';
import Doccard from './doccard';
import Hospitalpage from './hospitalpage';
import Hospitalscard from './hospitalscard';
import Hospitals from './hospitalss';
import Search from './search';
import Test from './test';
import Newslist from './news/newslist';
import './App.css';
import './navapp.css';
import Usersearch from './usersearch';
import Bgrb from './hospitalsD/bgrb';

import DocLogin from './doclogin';
import Docprofile from './docprofile';
import Booking from './booking';
import Ssignup from './signn_up';
import User_profile from './userr_profile';
import Logg from './logg';
import Hoome from './hoome';
import Labs from './labss';
import Labspage from './labspage';
import Diagnose from './Diagnose';
import Doctordiagnose from './doctordiagnose';
import Labstypepage from './labstypepage';
import Bookingforlabs from './booking_for_labs';
import Lablogin from './Lablogin';
import { useEffect } from 'react';
import { useState } from 'react';

import Labprofile from './labprofile';
import Diagnoselabs from './Diagnoselabs';
import Labsdiagnose from './labsdiagnose';
import { gettokken , getuser } from './utlis/Common';
import { gettokkenn , getdoctor } from './utlis/Common2';
import { ggettokken , getlab } from './utlis/Common3';

import Typee from './typee';
function App() {
const [loading ,setloading] =useState(false);
  const [show ,setshow] =useState(false);
  const [showw ,setshoww] =useState(false);
  const [showww ,setshowww] =useState(false);
 const usertok = gettokken('token');
 const doctortok = gettokkenn('token');
 const labtok=ggettokken('token');
 
const ussss = getuser('user') ; 
const docuss = getdoctor('doctor') ;
const labuss = getlab('lab') ;


  useEffect((e)=>{
    const loadposts=async() => {
      setloading(true);
  
  if (ussss !== null) {
   setshow(true);
   console.log(ussss);
  }

  if (docuss !== null) {
    setshoww(true);
    console.log(docuss);
   }

   if (labuss !== null) {
    setshowww(true);
    console.log(labuss);
   }



   setloading(false);
    }
    loadposts();
  },[]);






  

  return (
    <div >
    <BrowserRouter>
    <div>
      <nav className="nnavbar">
      <div class="AppLoggoo">
        HEALTHCARE
    </div>
      <input type="checkbox" id="click" />
         <label for="click" class="menu-btn">
         <i class="fas fa-bars"></i>
         </label>
      <ul>
   <li><NavLink activeClassName='active' to="/"> Home <small> </small></NavLink></li>
  <li><NavLink activeClassName='active' to={'/logg'}>Login <small></small></NavLink></li>
{show?
<li><NavLink activeClassName='active'to={'/userr_profile'}> User profile<small>  </small> </NavLink></li>
    :null}
{showw?
<li><NavLink activeClassName='active'to={'/docprofile'}> Doctor profile<small>  </small> </NavLink></li>
    :null}
    {showww?
<li><NavLink activeClassName='active'to={'/labprofile'}> Labs profile<small>  </small> </NavLink></li>
    :null}



 <li><NavLink activeClassName='active'to={'/choose'}> Choose<small>  </small> </NavLink></li>
   </ul></nav>
    </div>
  <Switch>

<Route exact path={'/'} component={Newslist}  /> 
 <Route  path={'/hoome'} component={Hoome}  />
<Route  path={'/login'} component={Login}  />
<Route  path={'/doclogin'} component={DocLogin}  />
<Route  path={'/docprofile'} component={Docprofile}  />
<Route  path={'/userprofile'} component={Userprofile}  />
<Route  path={'/signup'} component={Signup}  />
<Route  path={'/signn_up'} component={Ssignup}  />
<Route  path={'/logg'} component={Logg}  />
<Route  path={'/search'} component={Search} />
<Route  path={'/hospitalsD/bgrb'} component={Bgrb} />
<Route  path={'/userr_profile'} component={User_profile} />
<Route  path={'/labss'} component={Labs} />
<Route  path={'/choose'} component={Choose} />

<Route  path='/doctors' component={Doctors} />
<Route  path={'/doctorpages/:id'} component={Doctorpages}  />

<Route  path={'/booking/:_id'} component={Booking}  />
<Route  path={'/booking_for_labs/:_id'} component={Bookingforlabs}  />
<Route  path={'/doccard'} component={Doccard}  />
<Route  path={'/Lablogin'} component={Lablogin}  />
<Route  path='/hospitalss' component={Hospitals} />
<Route  path={'/labspage/:_id'} component={Labspage}  />
<Route  path={'/hospitalpage/:_id'} component={Hospitalpage}  />
<Route  path={'/hospitalscard'} component={Hospitalscard}  />
<Route  path={'/Diagnose'} component={Diagnose}  />
<Route  path={'/labstypepage/:_id'} component={Labstypepage}  />
<Route  path={'/doctordiagnose/:_id'} component={Doctordiagnose}  />
<Route  path={'/labprofile'} component={Labprofile}  />
<Route  path={'/labsdiagnose/:_id'} component={Labsdiagnose}  />
<Route  path={'/Diagnoselabs'} component={Diagnoselabs}  />

<Route  path={'/typee'} component={Typee}  />
  </Switch>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
