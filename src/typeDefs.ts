import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    id: ID!
    email: String
    bio: String
    password: String
    posts: [Post]
    createdAt: String
  }

  type Post {
    id: ID!
    User: User
    title: String
    content: String
    createdAt: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
    posts: [Post]
    post(id: ID!): Post
  }

  type Mutation {
    createUser(email: String, bio: String, password: String): User
    deleteUser(id: ID!): String
    createPost(userId: ID!, title: String, content: String): Post
    deletePost(id: ID!): String
  }
`
