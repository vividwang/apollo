import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import resolvers from "./container/tasks/task";

import Index from './container/index.jsx';
import Display from "./container/display.jsx";
import Chart from "./component/chart.jsx";
import TasksList from "./container/tasks/task_list.jsx";

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: '/',
  cache,
  resolvers,
});

const data = {
  todos: {
    __typename: 'todos',
    data: [{
      id: '123',
      value: '12345678'
    }]
  },
  visibilityFilter: 'SHOW_ALL',
  networkStatus: {
    __typename: 'NetworkStatus',
    isConnected: false,
  }
};

cache.writeData({ data });
client.onResetStore(() => cache.writeData({ data }));

class App extends React.Component{
  render() {
    return <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={TasksList}/>
          <Route path="/chart" exact>
            <div style={{ width: '500px', height: '500px' }}>
              <Chart />
            </div>
          </Route>
          <Route path="/display" component={Display}/>
          <Route path="/index" component={Index}/>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
