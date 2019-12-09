import React from 'react';
import Header from '../components/header/Header';
import RecetasHome from "../components/webContent/WebContent"
class Home extends React.Component<{},{}> {
    render() {
    return (
      <div className="Home">
       <Header></Header>
       <RecetasHome></RecetasHome>
      </div>
    );  
  }
  }
  
  export default Home;