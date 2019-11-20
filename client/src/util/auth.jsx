import React from 'react';
import {
  Redirect
} from 'react-router-dom';

function Auth(Component) {
  return class extends React.Component{
    render() {
      return <Component {...this.props}/>
    }
  }
}

export default Auth;


