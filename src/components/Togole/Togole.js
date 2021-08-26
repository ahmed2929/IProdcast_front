import react,{useState} from 'react';
import  './Togole.css';


const Togole= ()=> {
const [currentState,setState]=useState(0);
const handleTogale=()=>{

    let posX = currentState;
    if(posX==0){
        posX=25;
        setState(25)
    }else{
        setState(0)
        posX=0;
    }
  
    document.getElementById(
        "switch"
      ).style.transform = `translateX(${posX}px)`;
}
  return (
   <react.Fragment>
     <div className="Togole" onClick={handleTogale}>
        <div id="switch">

        </div>
     </div>
    
  
   </react.Fragment>
  );
}

export default Togole;
