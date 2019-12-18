import React, {
  FC,
  useState
  //useEffect
} from "react";
import "./RecipeCard.css";
// import {
//   RecipeCardModel,
//   RecipeCardImageModel
// } from "../models/RecipeCardModel";
//import request from "superagent";

interface RecipeModel {
  title: string;
  owner: string;
  description: string;
  ingredients: Array<object>;
  images; //: Array<ImageModel>;
  likes: number;
  comments; // : Array<object>;
  date: Date;
  tags: Array<string>;
}

interface RecipeCardProps {
  recipeList: RecipeModel;
}

export const RecipeCard: FC<RecipeCardProps> = ({ recipeList }) => {
  const [
    data
    //, setData
  ] = useState<RecipeModel>(recipeList);
  //console.log(data.title);
  // const [dataImage, setImageData] = useState<RecipeCardImageModel>({
  //   id: "",
  //   imgTitle: "",
  //   imgDate: "",
  //   imgPath: ""
  // });

  // const [recipe, setRecipe] = useState<RecipeCardProps>({
  //   recipeList: []
  // });

  // // async function requestRecipe(props, setData: React.Dispatch<any>) {
  // //   const myJWTToken =
  // //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwZXBlIiwiaWF0IjoxNTc2NjEwNzAzLCJleHAiOjE1Nzc4MjAzMDN9.MddOp-S-DTwcyvUlnowttyASKlOTSu_dlpwAigzOhDU";
  // //   const domain = "https://chefs4.me";
  // //   const url = `${domain}/api/recipes/${props.recipeId}`;
  // //   console.log("TEST", props.recipeId);
  // //   await request
  // //     .get(url)
  // //     .set("Authorization", `Bearer ${myJWTToken}`)
  // //     .set("Accept", "application/json")
  // //     .then(res => {
  // //       setData(res.body);
  // //     });
  // // }

  // async function requestImageRecipe(props, setImageData: React.Dispatch<any>) {
  //   const myJWTToken =
  //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwZXBlIiwiaWF0IjoxNTc2NjEwNzAzLCJleHAiOjE1Nzc4MjAzMDN9.MddOp-S-DTwcyvUlnowttyASKlOTSu_dlpwAigzOhDU";
  //   const domain = "https://chefs4.me";
  //   const url = `${domain}/api/recipes/${props.recipeId}/images`;
  //   await request
  //     .get(url)
  //     .set("Authorization", `Bearer ${myJWTToken}`)
  //     .set("Accept", "application/json")
  //     .then(res => {
  //       setImageData(res.body);
  //     });
  // }

  // useEffect(() => {
  //   //requestRecipe(props, setData);
  //   requestImageRecipe(props, setImageData);
  // }, []);

  // // console.log(dataImage);

  return (
    <div className="card-container">
      <div className="card-body">
        <span className="card-author subtle">{data.owner}</span>
        <h2 className="card-title">{data.title}</h2>
        <span className="card-description subtle">{data.description}</span>
        <div className="card-read">Read</div>
        <span className="card-tag card-circle subtle">C</span>
      </div>
      <img
        src={"https://chefs4.me/assets/" + data.images[0].imgTitle}
        alt="{data.description}"
        className="card-media"
      />
    </div>
  );
};
