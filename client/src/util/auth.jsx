import React from 'react';
import {
  Redirect
} from 'react-router-dom';

// todo
function Auth(Component) {
  return class extends React.Component{
    render() {
      return document.cookie ? <Component {...this.props}/> : <Redirect to="/"/>
    }
  }
}

export default Auth;


