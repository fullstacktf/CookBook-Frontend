import React from 'react';
import './App.css';
import { BrowserRouter  as Router, Route, Switch} from "react-router-dom"
import Header from './components/header/Header'; 

//rutas
import Log from './pages/Log';

class App extends React.Component<{},{}> {
  render() {
  return (
    <Router> 
    <Header></Header>
      <Route path="/login" component={Log}/>
    </Router>
   
  );  
}
}

export default App;
