import React, { FC, useState, useEffect } from "react";
import { Header } from "../components/header/Header";
import { RecipeCard } from "../components/recipeCard/RecipeCard";
import "./UserHome.css";
import request from "superagent";

export const UserHome: FC = () => {
  const [recipe, setRecipe] = useState([]);

  async function requestRecipes(setRecipe: React.Dispatch<any>) {
    const user = "pepe";
    const myJWTToken =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwZXBlIiwiaWF0IjoxNTc2NjEwNzAzLCJleHAiOjE1Nzc4MjAzMDN9.MddOp-S-DTwcyvUlnowttyASKlOTSu_dlpwAigzOhDU";
    const domain = "https://chefs4.me";
    const url = `${domain}/api/recipes/user/${user}`;
    await request
      .get(url)
      .set("Authorization", `Bearer ${myJWTToken}`)
      .set("Accept", "application/json")
      .then(res => {
        //console.log("prueba");
        //setRecipe(recipeList);
        //console.log(res.body);
        setRecipe(res.body);
      });
  }

  useEffect(() => {
    requestRecipes(setRecipe);
  }, []);

  return (
    <div>
      <Header />
      <div className="recipe-container">
        {recipe.map(e => (
          <RecipeCard recipeList={e} />
        ))}
      </div>
    </div>
  );
};
