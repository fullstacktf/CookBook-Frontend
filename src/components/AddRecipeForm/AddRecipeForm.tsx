import React, { FC, useState, useEffect } from 'react';

interface FormValues {
    title: string;
    description: string;
    //ingredients: Array<object>;
    //tags: Array<string>;
}

export const AddRecipeForm: FC<{}> = () => {
    const [title, setTitle] = useState<string>('');
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

    const handleOnChange = (event) => {
        const newTitle = event.currentTarget.value;
        setTitle(newTitle);
        if (newTitle.length > 3) {
            setIsDescriptionVisible(true);
        } else {
            setIsDescriptionVisible(false);
        }
    };

    const initialValues: FormValues = {
        title: '',
        description: ''
        //ingredients: [],
        //tags: []
    };
    return (<div>
        <form>
            Nombre de la receta:
            <input type="text" onChange={handleOnChange} value={title} placeholder="Título de la receta"/>
            {isDescriptionVisible && <div>
                <label>Descripción de la receta</label>
                <input name="description" type="text" placeholder="Descripción de la receta"/>
            </div>}

            <br></br>
            <br></br>
            <input type="submit"></input>
        </form>

    </div>);
};
