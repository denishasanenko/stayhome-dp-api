const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { createServer } = require('http');
require('dotenv').config();

let typeDefs = [
    require('./base/typedefs'),
    require('./catalog/typedefs')
];
let resolvers = [
    require('./base/resolvers'),
    require('./catalog/resolvers')
];

const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers
});

const httpServer = createServer(app);
server.applyMiddleware({ app });

app.get('/', (req, res) => res.end('Welcome'));

httpServer.listen({port: process.env.PORT || 4000}, () => {
    console.log(`App listen on port ${process.env.PORT || 4000}} by ${server.graphqlPath}`)
});
