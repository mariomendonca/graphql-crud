import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    id: ID!
    email: String
    bio: String
    password: String
    createdAt: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    create(email: String, bio: String, password: String): User
    delete(id: ID!): String
  }
`
