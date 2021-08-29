import react from 'react';
import './Home.css';
import Search from '../../components/Search/Search';
import Togole from "../../components/Togole/Togole"
import DisplayCart from '../../components/DispalyCart/DisplayCart';
import Trending from '../../components/TrendingProdcasts/Trending';
import TopEpsoides from '../../components/TopEpsoides/TopEpsoides';
const Home= ()=> {
  return (
   <react.Fragment>
     <div className="Home-parent">
      <div className="Home-header">
      <Search />
       <Togole />
      </div>
     <div className="Trending-Prodcasts">
    <Trending />
     </div>
      
   <TopEpsoides />
      

       

       
       
      </div>
   </react.Fragment>
  );
}

export default Home;
