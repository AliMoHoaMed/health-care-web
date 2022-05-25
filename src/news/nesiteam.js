import React from 'react'

const Nesiteam = ({id, title,description,url,urlToImage}) => {
  return (


    <div className='newscomp'>
        <img className='n' src={urlToImage} />

  
       <a href={url}>
    <h2> 
       {title} </h2>
      </a>




    </div>
  )
}

export default Nesiteam