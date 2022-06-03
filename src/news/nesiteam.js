import React from 'react'

const Nesiteam = ({id, title,description,url,urlToImage}) => {
  return (


    <div className='newscomp'>
        <img src={urlToImage} className='n' />

 
       <a href={url} className='newslink'>
    <h2> 
       {title} </h2>
      </a>
     



    </div>
  )
}

export default Nesiteam