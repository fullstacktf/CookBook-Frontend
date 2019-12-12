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

    const myToken = localStorage.getItem('myToken');

    localStorage.setItem('myToken', '123');

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

    const doPost = () => {
        // const url = 'htt...';
        // request
        //     .post(url)
        //     .send({ title, description })
        //     .set('Authorization', `Bearer ${myJWTToken}`)
        //     .set('Accept', 'application/json')
        //     .then(res => {
        //         console.log('aa');
        //     });
    };

    return (<div>
        <form onSubmit={doPost}>
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
