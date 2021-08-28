import react,{useState} from 'react';
import  './SingleEpsoide.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const SingleEpsoide= ()=> {

  return (
   <react.Fragment>
    <div className="parent-continer">
    <div className="cover-img">
        <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>

    </div>
    <div className="epsoide-name">
        <span>Episode 1</span>

        </div>

    </div>
  
  
   </react.Fragment>
  );
}

export default SingleEpsoide;
