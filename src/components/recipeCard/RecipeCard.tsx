import React, { FC, useState, useEffect } from 'react';
import './RecipeCard.css';
import { RecipeCardModel } from '../models/RecipeCardModel';
import { request } from 'superagent';

// interface AddRecipeProps {
//     title: string;
//     description: string;
//     owner: string;
// };

function toRecipeCardModel(cardResponse: any): RecipeCardModel[] {
    return cardResponse.data.map(rawCard => ({
        title: rawCard.title,
        description: rawCard.description
    }));
}

//FC<AddRecipeProps>
export const RecipeCard: FC = (props) => {

    const[isLoading, setIsLoading] = useState(true);
    const[recipeCard, setRecipeCard] = useState<RecipeCardModel[]>();

    // useEffect(() => {
    //     const url = '/api/';
    //     request
    //             .get(url)
    //             .set('Accept', 'application/json')
    //             .then(res => res.json())
    //             .then(cardResponse => {
    //                 setRecipeCard(toRecipeCardModel(cardResponse));
    //                 setIsLoading(false);
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             });

    // }, [props.title, props.description, props.owner]);

    // if (isLoading) {
    // return <div>{props.title} - Loading...</div>;
    // }
    
    // if (!recipeCard) {
    //     return <div>No users found!</div>;
    // }

    return (<div>
        <div className="card-container">
        <div className="card u-clearfix">
        <div className="card-body">
        <span className="card-author subtle">John Smith</span>
        <h2 className="card-title">New Brunch Recipe</h2>
        <span className="card-description subtle">These last few weeks I have been working hard on a new brunch recipe for you all.</span>
        <div className="card-read">Read</div>
        <span className="card-tag card-circle subtle">C</span>
        </div>
        <img src="https://s15.postimg.cc/temvv7u4r/recipe.jpg" alt="" className="card-media" />
        </div>
        <div className="card-shadow"></div>
        </div>
    </div>);
}