const { ApolloServer } = require('apollo-server');

const shopResolvers = require('./resolvers/shops');
const typeDefs = require('./schema/schema');

const resolvers = {
    Query: {
        shops: shopResolvers
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log('Server running at: ', url);
})