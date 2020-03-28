const { gql } = require('apollo-server-express');

const typedefs = gql`
    scalar DateTime
    type Query {
        smoke: Boolean
    }
    type Mutation {
        smoke: Boolean
    }
    type Subscription {
        smoke: Boolean
    }
`;

module.exports = typedefs;
