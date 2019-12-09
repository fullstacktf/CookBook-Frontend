import React from "react";
import styles from "./Selectores.module.css"

class UsuarioSelector extends React.Component<{},{}> {
    render() {
    return (
      <div className={styles.userContainer}>
      Nuevos Usuarios
      </div>
    );  
  }
  }
  
  export default UsuarioSelector;