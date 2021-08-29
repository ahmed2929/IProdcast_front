import react from 'react';
import SingleEpsoide from '../SingleEpsoide/SingleEpsoide';
import  './TopEpsoides.css';

const Trending= ()=> {
const data=[
  {
    id:1,
  
  },
  {
    id:2,
  
  },
  {
    id:3,
  
  },
  {
    id:4,
  
  },
  {
    id:5,
  
  },
]




  return (
   <react.Fragment>
    <div className="container">
        <p className="top-epsodes-header">Top Epsoides</p>    

        {
      data.map(item=>{
          return (
              <SingleEpsoide />
          )
      })
    }
        
    </div>

  
         
         
  
   </react.Fragment>
  );
}

export default Trending;
