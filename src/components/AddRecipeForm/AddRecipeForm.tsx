import React, { FC, useState /*, useEffect */ } from "react";
import request from "superagent";

interface FormValues {
  title: string;
  description: string;
  //ingredients: Array<object>;
  //tags: Array<string>;
}

export const AddRecipeForm: FC<{}> = () => {
  const [title, setTitle] = useState<string>("");
  const [
    description
    //, setDescription
  ] = useState<string>("");
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  //const [isFormDisabled, setIsFormDisabled] = useState(true);

  //const myToken = localStorage.getItem("myToken");

  localStorage.setItem("myToken", "123");

  // const validateForm = () => {
  //   const isValid = title.length > 3 && description.length > 3;
  //   setIsFormDisabled(!isValid);
  // };

  const handleOnChange = event => {
    const newTitle = event.currentTarget.value;
    setTitle(newTitle);
    if (newTitle.length > 3) {
      setIsDescriptionVisible(true);
    } else {
      setIsDescriptionVisible(false);
    }
  };

  // const initialValues: FormValues = {
  //   title: "",
  //   description: ""
  //   //ingredients: [],
  //   //tags: []
  // };

  const addRecipe = event => {
    event.preventDefault();
    console.log("Envío al back la receta", title);
    const url = "/api/";
    request
      .post(url)
      .send({ title, description })
      //.set('Authorization', `Bearer ${myJWTToken}`)
      .set("Accept", "application/json")
      .then(res => {
        console.log(res.token);
        localStorage.setItem("MY_TOKEN", res.token);
      });
  };

  return (
    <div>
      <form onSubmit={addRecipe}>
        Nombre de la receta:
        <input
          type="text"
          onChange={handleOnChange}
          value={title}
          placeholder="Título de la receta"
        />
        {isDescriptionVisible && (
          <div>
            <label>Descripción de la receta</label>
            <input
              name="description"
              type="text"
              placeholder="Descripción de la receta"
            />
          </div>
        )}
        <br></br>
        <br></br>
        <input type="submit"></input>
      </form>
    </div>
  );
};
