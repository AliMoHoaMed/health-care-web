import React from 'react'
import { Route } from 'react-router-dom'
import Dashbordbgrb from './dashbordbgrb'
import Test1 from './test1'
import Test2 from './test2'
const Bgrb = ({match}) => {
  return (
    <div>
        <h1> Choosing  </h1>
<Dashbordbgrb/> 
<Route path='/hospitalsD/bgrb/test1' component={Test1} /> 
<Route path='/hospitalsD/bgrb/test2' component={Test2} /> 

    </div>
  )
}

export default Bgrb