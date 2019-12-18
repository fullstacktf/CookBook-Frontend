import React from "react";
import { Header } from "../components/header/Header";
//import { RecipeCard } from '../components/recipeCard/RecipeCard';
import { LandingPage } from "../components/LandingPage/LandingPage";
import "./Home.css";
//import RecetasHome from "../components/webContent/WebContent"
//import RecipeCard from '../components/recipeCard/RecipeCard';

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Header></Header>
        <LandingPage></LandingPage>
        {/* <Header></Header>
        <div className="Home">
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/> */}
        {/* <RecetasHome></RecetasHome> */}
        {/* <RecipeCard/> */}
      </div>
      // </div>
    );
  }
}

export default Home;
