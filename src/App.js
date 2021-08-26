import react from 'react';
import { Route, Switch } from 'react-router-dom';

/////continers
import Home  from './containers/Home/Home';

function App() {
  return (
   <react.Fragment>
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
   </react.Fragment>
  );
}

export default App;
