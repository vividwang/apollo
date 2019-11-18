const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schema/schema');

// const typeDefs = gql`
//   type Query{
//     hello: String!
//   }
// `

const resolvers = {
  Query: {
    shops: (root, params, _) => {
      console.log('params', params);
      return {
        cursor: 20,
        hasMore: false,
        id: '123',
        name: 'name',
        price: 12,
        inventory: 3,
        description: '123',
        createTime: new Date()
      }
    }
    // Query: {
    //   hello: () => 'world'
    // }
  }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.listen().then(({ url }) => {
    console.log('Server running at: ', url);
  })