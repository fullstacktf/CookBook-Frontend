import React from 'react';
import { Header } from '../components/header/Header';
import { RecipeCardV2 } from '../components/recipeCard/RecipeCard';
import { LandingPage } from '../components/LandingPage/LandingPage';
import './Home.css';
//import RecetasHome from "../components/webContent/WebContent"
//import RecipeCard from '../components/recipeCard/RecipeCard';

class Home extends React.Component<{},{}> {
    render() {
    return (
      <div>
        <Header></Header>
        <LandingPage></LandingPage>
        {/* <Header></Header>
        <div className="Home">
        <RecipeCardV2/>
        <RecipeCardV2/>
        <RecipeCardV2/>
        <RecipeCardV2/>
        <RecipeCardV2/> */}
        {/* <RecetasHome></RecetasHome> */}
        {/* <RecipeCard/> */}
        </div>
      // </div>
    );  
  }
  }
  
  export default Home;