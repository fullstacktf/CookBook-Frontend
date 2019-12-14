import React from 'react';
import { Header } from '../components/header/Header';
import RecetasHome from "../components/webContent/WebContent"
//import RecipeCard from '../components/recipeCard/RecipeCard';

class Home extends React.Component<{},{}> {
    render() {
    return (
      <div className="Home">
        <Header></Header>
        <RecetasHome></RecetasHome>
        {/* <RecipeCard/> */}
      </div>
    );  
  }
  }
  
  export default Home;