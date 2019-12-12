import React, { FC, useState, useEffect } from 'react';

interface FormValues {
    title: string;
    description: string;
    //ingredients: Array<object>;
    //tags: Array<string>;
}

export const AddRecipeForm: FC<{}> = () => {
    const initialValues: FormValues = { 
        title: '',
        description: ''
        //ingredients: [],
        //tags: []
    };
    
    return(<div>
        
        <form>
            Nombre de la receta: 
            <input type="text" placeholder="Titulo de la receta"/>
            Descripción de la receta
            <input type="text" placeholder="Descripción de la receta"/>
            <br></br>
            <br></br>
            <input type="submit"></input>
        </form>
    
    </div>);


}; 