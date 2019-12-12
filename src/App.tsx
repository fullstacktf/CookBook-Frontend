import React from 'react';
import './App.css';
import { AddRecipeForm } from './components/AddRecipeForm/AddRecipeForm';
import { Button } from "./components/button/Button";

const App: React.FC = () => {
    return (
        <div className="App">
            <AddRecipeForm/>
            {/*<Test/>*/}
            <Button text="soy normal" type="NORMAL"/>
            <Button text="soy normal BIG" type="NORMAL" size="LARGE"/>
            <Button text="soy warning" type="WARNING"/>
            <Button text="soy warning BIG" type="WARNING" size="LARGE"/>
        </div>
    );
}

export default App;
