import React from 'react';
import styles from "./Header.module.css";
import { Link } from 'react-router-dom';

class Header extends React.Component<{},{}> {
    render() {
    return (
      <header className={styles.header}>
          <Link to="/login"><button className={styles.login}>Login</button></Link>
          <Link to="/login"><button className={styles.signup}>Sign Up</button></Link>
      </header>
    );  
  }
  }
  
  export default Header; 
