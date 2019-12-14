import React, { FC } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export const Header: FC = () => {

  return (
    <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <Link to="/login">
          <button className={styles.login}>Sign In/Up</button>
        </Link>
      </header>
  );
};





// class Header extends React.Component<{}, {}> {
//   render() {
//     return (
//       <header className={styles.header}>
//         <div className={styles.logo}>
//           <img src={logo} alt="Logo" />
//         </div>
//         <Link to="/login">
//           <button className={styles.login}>Sign In</button>
//         </Link>
//       </header>
//     );
//   }
// }

// export default Header;
