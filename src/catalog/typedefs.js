const { gql } = require('apollo-server-express');

const typedefs = gql`
    type Profile {
        id: String!
        name: String!
        facebook_link: String!
        specialty: String!
        about: String
    }
    
    input PostProfile {
        id: String
        name: String
        facebook_link: String
        specialty: String
        about: String
    }
    
    extend type Query {
        profiles: [Profile!]
    }
    
    extend type Mutation {
        postProfile(input: PostProfile): Profile
        removeProfile(id: String): Boolean
    }
`;

module.exports = typedefs;
