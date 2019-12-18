import React from 'react';
import './App.css';
import { BrowserRouter  as Router, Route} from "react-router-dom"

//rutas
import Log from './pages/Log';
import Home from './pages/Home';

class App extends React.Component<{},{}> {
  render() {
  return (
    <Router> 
      <Route path="/login" component={Log} />
      <Route exact path="/" component={Home} />
    </Router>
  );  
}
}

export default App;
