import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'apollo-boost';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

class App extends React.Component{
  render() {
    return <ApolloProvider>
      <BrowserRouter>
        <Switch/>
      </BrowserRouter>
    </ApolloProvider>
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
