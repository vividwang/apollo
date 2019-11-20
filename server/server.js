const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema/schema');
const { shopsQuery, createCategory, deleteCategory } = require('./resolvers/shops');

// const typeDefs = gql`
//   type Query{
//     hello: String!
//   }
// `

const resolvers = {
    Query: {
        shops: shopsQuery
    },
    Mutation: {
        createCategory,
        deleteCategory,
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log('Server running at: ', url);
})
