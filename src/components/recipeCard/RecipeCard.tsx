import React, { FC } from 'react';
import './RecipeCard.css';

export const RecipeCardV2: FC = () => {

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