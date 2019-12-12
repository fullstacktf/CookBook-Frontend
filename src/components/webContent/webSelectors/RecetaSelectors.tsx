import React from "react";
import styles from "./Selectores.module.css";
import axios from "axios";

interface RecipeData {
  recipe: Array<{ name: string; description: string; picture: string }>;
}

class RecetaSelector extends React.Component<{}, RecipeData> {
  constructor(props) {
    super(props);
    this.state = {
      recipe: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/recipes/")
      .then(response => {
        this.setState({
          recipe: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.recipeContainer}>
          {this.state.recipe.map(note => (
            <div className={styles.infomongo} key={note.name}>
              <div className={styles.name}> {note.name}</div>
              <div className={styles.imagenes}>
                <img src={note.picture} alt="sorry" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default RecetaSelector;
