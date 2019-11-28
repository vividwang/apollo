import gql from 'graphql-tag';

const GET_TODOS = gql`
    {
        todos @client {
            id
            value
            complete
        }
    }
`;

const resolvers = {
  Query: {
    allTodos: async (_root, args, { cache }) => {
      let todos = await cache.readQuery({ query: GET_TODOS });

      console.log('all todo: ', todos);
      return todos.todos;
    }
  },
  Mutation: {
    addTodo: async (_root, args, { cache }) => {
      try {
        const { id, value } = args;

        let todos = await cache.readQuery({ query: GET_TODOS });

        todos = todos.todos.concat({
          __typename: 'todo',
          id,
          value,
          complete: false,
        });
        console.log('todos', todos);
        await cache.writeQuery({
          query: GET_TODOS, data: { todos }
        });
        return null;
      } catch (e) {
        console.error('Error while mutate data: ', e.message);
      }
    }
  }
};

export default resolvers;
