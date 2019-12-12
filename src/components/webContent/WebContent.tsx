import React from "react";
import styles from "./WebContent.module.css";
import RecetaSelector from "./webSelectors/RecetaSelectors";
import UsuarioSelector from "./webSelectors/UsuarioSelector";

class RecetasHomes extends React.Component<{}, {}> {
  render() {
    return (
      <div className={styles.cont}>
        <RecetaSelector></RecetaSelector>
        <RecetaSelector></RecetaSelector>
        <RecetaSelector></RecetaSelector>
        <RecetaSelector></RecetaSelector>
        <RecetaSelector></RecetaSelector>
        <RecetaSelector></RecetaSelector>
        <RecetaSelector></RecetaSelector>
        <RecetaSelector></RecetaSelector>
      </div>
    );
  }
}

export default RecetasHomes;
