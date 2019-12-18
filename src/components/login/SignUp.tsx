import React, { FC, useState } from 'react';
import styles from "./Login.module.css";
import request from 'superagent';
import { Link } from 'react-router-dom';



export const SignUp: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isFormDisabled, setIsFormDisabled] = useState(true);

  const validateForm = () => {
    const isValid = username.length > 3 && email.length > 3 && password.length > 3;
    setIsFormDisabled(!isValid);
  };

  const handleOnChange = ({ currentTarget: { name, value } }) => {
    if (name === 'username') {
      value = value.toLowerCase();
      setUsername(value);
    }
    else if(name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
    validateForm();
  };

  const doLogin = (event) => {
    event.preventDefault();
    console.log('Envio al backend', username, email, password);
    const url = '/api/signup';
        request
            .post(url)
            .send({ username, email, password })
            //.set('Authorization', `Bearer ${myJWTToken}`)
            .set('Accept', 'application/json')
            .then(res => {
                    console.log(res.token);
                    localStorage.setItem('MY_TOKEN', res.token);
            });
        //TODO llamo al backend
  };

  return <form onSubmit={doLogin}>
            <div>
              <div className={styles.innercontainer}>
                <div className={styles.header}>Sign up</div>
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
                    <label className={styles.label} htmlFor="name">
                      Email
                    </label>
                    <input
                      value={email}
                      type="text"
                      name="email"
                      className={styles.logininput}
                      placeholder="email"
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className={styles.inputgroup}>
                    <label className={styles.label} htmlFor="password">
                      Password
                    </label>
                    <input
                      value={password}
                      type="password"
                      name="password"
                      className={styles.logininput}
                      placeholder="Password"
                      onChange={handleOnChange}
                    />
                  </div>
                  <Link to="/userhome">
                  <button
                    type="submit"
                    className={styles.loginbtn}
                    disabled={isFormDisabled}
                  >
                    {" "}
                    Sign Up
                  </button>
                  </Link>
                </div>
              </div>
            </div>
        </form>
};

// class SignUp extends React.Component {
//   constructor(props: any) {
//     super(props);
//     this.state = {};
//   }
//   submitLogin(e: any) {}
//   render() {
//     return (
//       <form>
//         <div>
//           <div className={styles.innercontainer}>
//             <div className={styles.header}>Sign up</div>
//             <div className={styles.box}>
//               <div className={styles.inputgroup}>
//                 <label className={styles.label} htmlFor="username">
//                   Username
//                 </label>
//                 <input
//                   type="text"
//                   name="username"
//                   className={styles.logininput}
//                   placeholder="Username"
//                 />
//               </div>
//               <div className={styles.inputgroup}>
//                 <label className={styles.label} htmlFor="name">
//                   Name
//                 </label>
//                 <input
//                   value="username"
//                   type="text"
//                   name="name"
//                   className={styles.logininput}
//                   placeholder="Name"
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
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     );
//   }
// }
// export default SignUp;
