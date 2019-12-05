import React from "react";
import styles from "./Login.module.css";

class SignUp extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  submitLogin(e: any) {}
  render() {
    return (
      <div>
        <div className={styles.innercontainer}>
          <div className={styles.header}>Sign up</div>
          <div className={styles.box}>
            <div className={styles.inputgroup}>
              <label className={styles.label} htmlFor="username">
                Username
              </label>
              <input
                type="text"
                name="username"
                className={styles.logininput}
                placeholder="Username"
              />
            </div>
            <div className={styles.inputgroup}>
              <label className={styles.label} htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                className={styles.logininput}
                placeholder="Name"
              />
            </div>
            <div className={styles.inputgroup}>
              <label className={styles.label} htmlFor="password">
                Password
              </label>
              <input
                type="text"
                name="password"
                className={styles.logininput}
                placeholder="Password"
              />
            </div>
            <button
              type="button"
              className={styles.loginbtn}
              onClick={this.submitLogin.bind(this)}
            >
              {" "}
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
