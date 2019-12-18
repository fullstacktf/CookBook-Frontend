import React from 'react';
import './App.css';
import { BrowserRouter  as Router, Route} from "react-router-dom"
import Log from './pages/Log';
import Home from './pages/Home';
import { UserHome } from './pages/UserHome';
import { AddRecipeForm } from './components/AddRecipeForm/AddRecipeForm';

class App extends React.Component<{},{}> {
  render() {
  return (
    <Router> 
      <Route path="/login" component={Log}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/userhome" component={UserHome}/>
      <Route exact path="/addrecipe" component={AddRecipeForm}></Route>
    </Router>
  );  
}
}

export default App;
