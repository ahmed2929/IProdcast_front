import react from 'react';
import './Home.css';
import Search from '../../components/Search/Search';
import Togole from "../../components/Togole/Togole"
import Trending from '../../components/TrendingProdcasts/Trending';
import TopEpsoides from '../../components/TopEpsoides/TopEpsoides';
import Navbar from '../../components/navbar/navbar';
import SideBar from '../../components/SideBar/SideBar';
const Home= ()=> {
  return (
   <react.Fragment>
     <div className="Home-parent">
      <SideBar/>
      <div className="Home-header">
      <Search />
       <Togole />
      </div>
     <div className="Trending-Prodcasts">
    <Trending />
     </div>
      
   <TopEpsoides />
      
   < Navbar />
       

       
       
      </div>
   </react.Fragment>
  );
}

export default Home;
