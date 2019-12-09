import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import styles from "./Login.module.css";

export interface TrueFalse {
  isLoginOpen: boolean;
  isRegisterOpen: boolean;
}
export class Login extends React.Component<{}, TrueFalse> {
  constructor(props: any) {
    super(props);
    this.state = { isLoginOpen: true, isRegisterOpen: false };
    this.showLoginBOX = this.showLoginBOX.bind(this);
    this.showRegisterBOX = this.showRegisterBOX.bind(this);
  }
  showLoginBOX() {
    this.setState({ isRegisterOpen: false, isLoginOpen: true });
  }
  showRegisterBOX() {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  }
  render() {
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.boxcontroller}>
            <div className={styles.controller} onClick={this.showLoginBOX}>
              Sign In
            </div>
            <div className={styles.controller} onClick={this.showRegisterBOX}>
              Sign Up
            </div>
          </div>
          <div className={styles.boxcontainer}>
            {this.state.isLoginOpen && <SignIn />}
            {this.state.isRegisterOpen && <SignUp />}
          </div>
        </div>
      </div>
    );
  }
}
//
//
export default Login;
