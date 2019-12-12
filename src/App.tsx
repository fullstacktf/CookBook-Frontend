import React from 'react';
import './App.css';
import { AddRecipeForm } from './components/AddRecipeForm/AddRecipeForm';
import { Button } from "./components/button/Button";
import { LoginForm } from "./components/LoginForm";

const App: React.FC = () => {
    return (
        <div className="App">
            {/*<AddRecipeForm/>*/}
            {/*<Test/>*/}
            {/*<Button text="soy normal" type="NORMAL"/>*/}
            {/*<Button text="soy normal BIG" type="NORMAL" size="LARGE"/>*/}
            {/*<Button text="soy warning" type="WARNING"/>*/}
            {/*<Button text="soy warning BIG" type="WARNING" size="LARGE"/>*/}
            <LoginForm/>
        </div>
    );
}

export default App;
