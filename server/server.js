const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schema/schema');
const shopQuery = require('./resolvers/shops');

// const typeDefs = gql`
//   type Query{
//     hello: String!
//   }
// `

const resolvers = {
  Query: {
    shops: shopQuery
  }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.listen().then(({ url }) => {
    console.log('Server running at: ', url);
  })