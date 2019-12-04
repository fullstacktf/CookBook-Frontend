import React from "react";
//import styles from "./Login.module.css";
class SignIn extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  submitLogin(e: any) {}
  render() {
    return (
      <div>
        <div className="innercontainer">
          <div className="header">Login</div>
          <div className="box">
            <div className="inputgroup">
              <label className="label" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                name="username"
                className="logininput"
                placeholder="Username"
              />
            </div>
            <div className="inputgroup">
              <label className="label" htmlFor="password">
                Password
              </label>
              <input
                type="text"
                name="password"
                className="logininput"
                placeholder="Password"
              />
            </div>
            <button
              type="button"
              className="loginbtn"
              onClick={this.submitLogin.bind(this)}
            >
              {" "}
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
