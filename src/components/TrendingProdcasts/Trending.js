import react,{useState} from 'react';
import  './Trinding.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import DisplayCart from '../DispalyCart/DisplayCart';

const Trending= ()=> {
const [index,setIndex]=useState(0);
const albums=[
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

const handleRight=(total)=>{
 
  let limit = Math.round(total / 2) + 5;
  console.log(limit);
  console.log(index);
  if (index < limit) {
    let n = index + 1;
    setIndex(n);
    document.getElementById(
      "carousel-albums"
    ).style.transform = `translateX(-${n * (170 + 40)}px)`;
  }
}

const handleLeft=(total)=>{
  if (index > 0) {
    let n = index - 1;
    setIndex(n);
    document.getElementById(
      "carousel-albums"
    ).style.transform = `translateX(-${n * (170 + 40)}px)`;
  }
}

  return (
   <react.Fragment>
    <div className="trending-container">
     <p className="Trending-paragraph">Trending Prodcasts</p>
     <div className="header-carrousel">
          <div>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="arrow"
              onClick={()=>handleLeft(5)}
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              className="arrow"
              onClick={()=>handleRight(5)} //lenth of array
            />
          </div>
        </div>
        </div>
        <section>
          <div className="slider">
            <div className="items-slider" id="carousel-albums">
              {albums.map((album) => (
                <DisplayCart key={album.id} album={album} />
              ))}
            </div>
          </div>
        </section>
  
   </react.Fragment>
  );
}

export default Trending;
