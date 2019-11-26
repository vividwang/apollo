import gql from 'graphql-tag';

const resolvers = {
  // Query: (_root, variables, { cache, getCacheKey }) => {
  //   console.log('query');
  //   return ['12', '34', '56'];
  // },
  Mutation: (_root, variables, { cache, getCacheKey }) => {
    console.log('mutation');
    const id = getCacheKey({ __typename: 'Tasks', id: variables.id });
    const fragment = gql`
        fragment completeTodo on TodoItem {
            completed
        }
    `;
    const todo = cache.readFragment({ fragment, id });
    const data = { ...todo, complete: !todo.complete };
    cache.writeData({ id, data });
    return null;
  }
};

export default resolvers;
