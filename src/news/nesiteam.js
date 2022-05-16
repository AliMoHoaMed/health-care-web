import React from 'react'

const Nesiteam = ({id, title,description,url,urlToImage}) => {
  return (


    <div className='newscomp'>
        <img className='n' src={urlToImage} />

  
       <a href={url}>
    <h2> 
       {title} </h2>
      </a>
<h3><p>{description} </p></h3>



    </div>
  )
}

export default Nesiteam