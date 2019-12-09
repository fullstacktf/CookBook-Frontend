import React from "react";
import styles from "./Selectores.module.css"

class RecetaSelector extends React.Component<{},{}> {
    render() {
    return (
      <div className={styles.recipeContainer}>
      Nuevas recetas
      </div>
    );  
  }
  }
  
  export default RecetaSelector;