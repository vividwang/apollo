const { ApolloServer } = require('apollo-server');
const process = require('process');

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

process.on('uncaughtException', (err, origin) => {
    console.error("Error found by process : ", err);
});

server.listen().then(({ url }) => {
    console.log('Server running at: ', url);
});
