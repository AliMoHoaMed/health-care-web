import React from 'react'
import { Link } from 'react-router-dom'
import Hospitalpage from './hospitalpage'
import Hospitals from './hospitalss' 
import Hospitalscard from './hospitalscard'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Switch } from 'react-router-dom'
const Usersearch = () => {
  return (
<>
<nav>  <a href='/hospitalss '>hosbitals </a>   </nav>
<div>
<BrowserRouter>
<Switch> 
<Route  path='hospitalss' component={Hospitals} />

</Switch>
</BrowserRouter>
    </div></>
  )
}

export default Usersearch