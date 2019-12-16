import React, { FC } from 'react';
import { Header } from '../components/header/Header';
import { RecipeCard } from '../components/recipeCard/RecipeCard';
import './UserHome.css';


export const UserHome: FC = () => {
    return (<div>
        <Header/>
        <div className="foo">
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
        </div>
    </div>);
};