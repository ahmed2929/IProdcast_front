import react from 'react';
import  './Search.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search= ()=> {
  return (
   <react.Fragment>
     <div className="Search">
     <FontAwesomeIcon className="icon-search" icon={faSearch} />
 
 <input type="text" placeholder="Search.." name="search" className="Search-input"/>
    </div>  
    
  
   </react.Fragment>
  );
}

export default Search;
