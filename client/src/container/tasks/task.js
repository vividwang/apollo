import gql from 'graphql-tag';
import {useQuery} from "@apollo/react-hooks";

const GET_TODOS = gql`
    query GetTodos {
        todos @client {
            id
            value
            complete
        }
    }
`;

const resolvers = {
  Query: {
    todos(_root, args, { cache }) {
      let todos = cache.readQuery({ query: GET_TODOS });

      console.log('todos', todos);
      return todos.todos;
    }
  },
  Mutation: {
    addTodo: async (_root, args, { cache }) => {
      try {
        console.log('mutation', args);
        const { id, value } = args;
        const todos = await cache.readQuery({ query: GET_TODOS });

        console.log('todos', todos);
        let v = Object.assign({}, {
          __typename: 'todo',
          id,
          value,
          complete: false,
        });
        console.log(todos.todos.concat(v));
        cache.writeData(todos.todos.concat(v));
        return null;
      }catch (e) {
        console.error('Error while mutate data: ', e.message);
      }
    }
  }
  // Mutation: (_root, variables, { cache, getCacheKey }) => {
  //   console.log('mutation');
  //   const id = getCacheKey({ __typename: 'Tasks', id: variables.id });
  //   const fragment = gql`
  //       fragment completeTodo on TodoItem {
  //           completed
  //       }
  //   `;
  //   const todo = cache.readFragment({ fragment, id });
  //   const data = { ...todo, complete: !todo.complete };
  //   cache.writeData({ id, data });
  //   return null;
  // }
};

export default resolvers;
