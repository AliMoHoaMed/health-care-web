import React from 'react'
import './item.css'
const Doccard = ({_id,firstName,Title,avatar,specialtiesId}) => {
  return (
    
    <div>

<div className="card">

<div className="cardp" >


<img  src={"data:image/jpg;base64,"+avatar} width="250" height="250" />
</div>    
<div className="cardinf">
  <h3 > Dr/name :{firstName} </h3>
  <a href={'/doctorpages/'+_id}> info</a>
  <a> 
    {Title}
  </a>
  <a> 
    {specialtiesId}
  </a>

<br/>




 <div >
<table>
  <tr>
    <td className="h"> monday 12 pm </td>
    <br/>
    <td className="h"> sunday 12 pm </td>
  
   
  </tr>
</table></div>
</div>
</div>

    </div>
  
  )
}

export default Doccard