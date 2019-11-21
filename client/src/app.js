import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Index from './container/index.jsx';
import Display from "./container/display.jsx";

const client = new ApolloClient({
  uri: '/'
});

class App extends React.Component{
  render() {
    return <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Display}/>
          <Route path="/index" component={Index}/>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
