import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Countries from './Components/Countries/Countries';
import NoMatch from './Components/NoMatch/NoMatch';
import Home from './Components/Home/Home';
import CountryDetails from './Components/CountryDetails/CountryDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>

        </Route>
        <Route path="/country/:countryId">
          <CountryDetails></CountryDetails>
          
        </Route>
        <Route exact path="/">
          <Home></Home>


        </Route>
        <Route path="*">
          <NoMatch></NoMatch>

        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
