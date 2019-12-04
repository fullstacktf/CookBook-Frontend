import React from 'react';
import Login from '../components/login/Login';
import SignUp from '../components/login/SignUp';

class Log extends React.Component<{},{}> {
    render() {
    return (
      <div className="Log">
       <Login></Login>
      </div>
    );  
  }
  }
  
  export default Log;