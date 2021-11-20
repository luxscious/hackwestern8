import logo from './logo.svg';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path = '/' exact component = {HomePage}/>
      </Switch>
      {/* <Switch>
        <Route path = '/companies/:companyName' exact component = {Company}/>
      </Switch> */}
      {/* <Route path="/comparison" exact component = {Comparison} />
      <Route path="/methodology" exact component = {Methodology}/>
      <Route path="/brand-breakdown/:companyName" exact component={BrandBreakdown}/>
      <Route path="/brand-directory" exact render={()=><BrandDirectory/>}/>
      <Route path="/FAQ" exact render={()=><FAQ/>}/> */}
    </Router>
  );
}

export default App;
