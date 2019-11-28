import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";

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
        const { id, value } = args;
        
        console.log('value', id, value);
        await cache.writeQuery({
          query: GET_TODOS, data: {
            todos: [{
              __typename: 'todo',
              id,
              value,
              complete: false,
            }]
          }
        });
        return null;
      } catch (e) {
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
