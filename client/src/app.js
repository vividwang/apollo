import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import resolvers from "./container/tasks/task";
// import resolvers from "./container/cart/resolver";

import Index from './container/index.jsx';
import Display from "./container/display.jsx";
import Chart from "./component/chart.jsx";
import TasksList from "./container/tasks/task_list.jsx";
import Cart from "./container/cart/cart.jsx";

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: new HttpLink({ uri: '/' }),
  cache,
  resolvers,
});

const data = {
  todos: []
};

cache.writeData({ data });
// client.onResetStore(() => cache.writeData({ data }));

class App extends React.Component{
  render() {
    return <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          {/*<Route path="/" exact component={Cart}/>*/}
          <Route path="/" exact component={TasksList}/>
          <Route path="/chart">
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
