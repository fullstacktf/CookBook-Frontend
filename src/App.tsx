import React from 'react';
import './App.css';
import { AddRecipeForm } from './components/AddRecipeForm/AddRecipeForm';

const App: React.FC = () => {
    return (
        <div className="App">
            <AddRecipeForm/>
        </div>
    );
}

export default App;
