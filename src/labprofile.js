import React from 'react'
import { ggettokken } from './utlis/Common3'

const labprofile = () => {

const tok = ggettokken

    const authAxios =axios.create({
        headers : {
         'Authorization': `Bearer ${tok}`
          
        }
      })



  return (




    <div>labprofile</div>
  
  
    )
}

export default labprofile