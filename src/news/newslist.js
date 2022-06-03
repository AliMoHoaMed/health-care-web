import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios';
import Nesiteam from './nesiteam';

const Newslist = () => {
    const [articles , setArticles] = useState({});
  
  useEffect(() =>{
      const getArticles = async () => {
          const res = await axios.get('https://newsapi.org/v2/top-headlines?country=eg&category=health&apiKey=3928ce4c1cf64869a9d22cf7795f1d02');
 setArticles(res.data.articles);
 console.log(res);
   };
getArticles();
  
  },[]
  ) ;
  
  let rets = Array.from(articles)
  
  
    return (

<body className='mmm'>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia&effect=neon|outline|emboss|shadow-multiple"/>
<div className='k'>
  
  <div className='bgimg' >
  <h1 className='font-effect-outline'>Welcome to  </h1>
  <img className='fade-in' src='Health Care.png'  />
</div>
    </div>


    <div className='grid-container ' >
       
{rets.map(({id, title , description, url , urlToImage})=>(

<div className='grid-item'>
<Nesiteam title={title} description={description} url={url} urlToImage={urlToImage}/></div>
))}
        
        </div>

</body>

  );
};

export default Newslist