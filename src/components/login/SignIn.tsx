import React, { FC, useState } from 'react';
import styles from "./Login.module.css";
import request from 'superagent';



export const SignIn: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormDisabled, setIsFormDisabled] = useState(true);

  const validateForm = () => {
    const isValid = username.length > 3 && password.length > 3;
    setIsFormDisabled(!isValid);
  };

  const handleOnChange = ({ currentTarget: { name, value } }) => {
    if (name === 'username') {
      setUsername(value);
    } else {
      setPassword(value);
    }
    validateForm();
  };

  const doLogin = (event) => {
    event.preventDefault();
    console.log('Envio al backend', username, password);
    const url = '/api/signin';
        request
            .post(url)
            .send({ username, password })
            //.set('Authorization', `Bearer ${myJWTToken}`)
            .set('Accept', 'application/json')
            .then(res => {
                    console.log(res.token);
                    localStorage.setItem('MY_TOKEN', res.token);
            });
        //TODO llamo al backend
  };

  return <form onSubmit={doLogin}>
          <div className={styles.innercontainer}>
            <div className={styles.header}>Sign In</div>
            <div className={styles.box}>
              
              <div className={styles.box}>
                <div className={styles.inputgroup}>
                  <label className={styles.label} htmlFor="username">
                    Username
                  </label>
                  <input
                    value={username}
                    type="text"
                    name="username"
                    className={styles.logininput}
                    placeholder="Username"
                    onChange={handleOnChange}
                  />
                </div>
                <div className={styles.inputgroup}>
                  <label className={styles.label} htmlFor="password">
                    Password
                  </label>
                  <input
                    value={password}
                    type="text"
                    name="password"
                    className={styles.logininput}
                    placeholder="Password"
                    onChange={handleOnChange}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isFormDisabled}
                  className={styles.loginbtn}
                >
                  {" "}
                  Sign In
                </button>
              </div>
            </div>
          </div>
      </form>
};

// class SignIn extends React.Component {
//   constructor(props: any) {
//     super(props);
//     this.state = {};
//   }
//   submitLogin(e: any) {}

//   render() {
//     return (
//       <form onSubmit={doLogin}>
//         <div className={styles.innercontainer}>
//           <div className={styles.header}>Sign In</div>
//           <div className={styles.box}>
            
//             <div className={styles.box}>
//               <div className={styles.inputgroup}>
//                 <label className={styles.label} htmlFor="username">
//                   Username
//                 </label>
//                 <input
//                   value="username"
//                   type="text"
//                   name="username"
//                   className={styles.logininput}
//                   placeholder="Username"
//                 />
//               </div>
//               <div className={styles.inputgroup}>
//                 <label className={styles.label} htmlFor="password">
//                   Password
//                 </label>
//                 <input
//                   value="password"
//                   type="text"
//                   name="password"
//                   className={styles.logininput}
//                   placeholder="Password"
//                 />
//               </div>
//               <button
//                 type="button"
//                 className={styles.loginbtn}
//                 onClick={this.submitLogin.bind(this)}
//               >
//                 {" "}
//                 Sign In
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     );
//   }
// }

// export default SignIn;
